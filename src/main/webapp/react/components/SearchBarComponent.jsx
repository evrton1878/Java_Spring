import React from 'react';
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@material-ui/core";

export default function(){
    const [sortByAsc,updateSortByAsc] = React.useState(true);
    const [category,updateCategory] = React.useState("js");

    return (
      <CardComponent padding={true} class={"posts__search-content"}>
        <div className={"text-center h3"}>Search</div>
        <div className={"posts__search-filter"}>
            <FormControl className={"w-100"}>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                    className={"text-left"}
                    value={category}
                    onChange={(e)=>updateCategory(e.target.value)}
                >
                    <MenuItem value={"js"}>js</MenuItem>
                    <MenuItem value={"java"}>java</MenuItem>
                    <MenuItem value={"php"}>php</MenuItem>
                    <MenuItem value={"python"}>python</MenuItem>
                    <MenuItem value={"ui"}>ui</MenuItem>
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
                        onChange={()=>updateSortByAsc(true)}
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
                          onChange={()=>updateSortByAsc(false)}
                      />
                  }
                  label="Sort posts by date (descending)"
              />
        </div>

        <div className={"posts__search-btn"}>
             <ButtonComponent title={"Apply filters"}/>
        </div>
      </CardComponent>
    )
}