import React from 'react';
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {sortPostsByAsc, sortPostsByCategory, sortPostsByDesc} from "../store";
import {$media} from "../App";
import {audit, auditTime} from "rxjs/operators";
import ExpensionComponent from "./ExpensionComponent/ExpensionComponent";

const SearchBarContentComponent = (props)=> {
    const [sortByAsc,updateSortByAsc] = React.useState(true);
    const [category,updateCategory] = React.useState("js");
    const dispatch = useDispatch();

    const submit = ()=>{
        if(sortByAsc){
            dispatch(sortPostsByAsc());
        } else{
            dispatch(sortPostsByDesc())
        }
        dispatch(sortPostsByCategory(category));
    }
    return (
        <div className={"posts__search-filters"}>
        <div className={"posts__search-filter"}>
            <FormControl className={"w-100"}>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                    className={"text-left"}
                    value={category}
                    onChange={(e) => updateCategory(e.target.value)}
                >
                    <MenuItem value={"js"}>js</MenuItem>
                    <MenuItem value={"java"}>java</MenuItem>
                    <MenuItem value={"php"}>php</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className={"posts__search-filter text-left"}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={sortByAsc}
                        name="checkedB"
                        color="primary"
                        onChange={() => updateSortByAsc(true)}
                    />
                }
                label="Sort posts by date (ascending)"
            />
        </div>
        <div className={"posts__search-filter text-left"}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={!sortByAsc}
                        name="checkedB"
                        color="primary"
                        onChange={() => updateSortByAsc(false)}
                    />
                }
                label="Sort posts by date (descending)"
            />
        </div>

        <div className={"posts__search-btn"} onClick={submit}>
            <ButtonComponent title={"Apply filters"}/>
        </div>
    </div>
    )
}

export default function(){
    const [isMedia, updateMedia] = React.useState(false);

    $media.pipe(auditTime(300)).subscribe(v=>{
          updateMedia(v);
    })

    const NotMediaSearch = ()=>(
        <CardComponent padding={true} class={"posts__search-content w-100"}>
            <div className={"text-center h3"}>Search</div>
            <SearchBarContentComponent/>
        </CardComponent>
    );

    const MediaSearch = ()=>(
        <div className={"w-100  posts__search-content"}>
            <ExpensionComponent title={"Search"}>
                <SearchBarContentComponent/>
            </ExpensionComponent>
        </div>
    )

    return (
      <React.Fragment>
          {isMedia ?
               <MediaSearch/>:
               <NotMediaSearch/>}
      </React.Fragment>

    )
}