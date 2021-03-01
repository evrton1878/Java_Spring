import React from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import CardComponent from "../../components/CardComponent";
import {connect} from 'react-redux';
import PostsCardComponent from '../../components/PostCardComponent'
import SearchBarComponent from "../../components/SearchBarComponent";
import SidebarComponent from "../../components/SidebarComponent";
import {Pagination} from "@material-ui/lab";
import './PostsPage.scss'

const mapStateToProps = ({data})=>({
    posts: data.pages.postsPage.posts
});

class PostsPage extends React.PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            categories: ["JS","Java","Php","Python"]
        }
    }

    render(){
        return (
           <div className={"w-100 posts__page"}>
               <BasicLayout title={"Posts"} css_class={"posts"}>
                   <React.Fragment>
                       <div className={"posts__content"}>
                           <div className={"posts__categories center"}>
                               {
                                   this.state.categories.map(v=>{
                                       return (
                                           <div className={"posts__category"} key={Math.random()}>
                                               <CardComponent padding={`0`}>
                                                   <div className={"posts__category-wrap"}>
                                                       <h4>{v}</h4>
                                                   </div>
                                               </CardComponent>
                                           </div>
                                       )
                                   })
                               }
                           </div>
                           <div className={"posts__list"}>
                               {
                                   this.props.posts.map(v=>{
                                       return (
                                           <div className={"posts__item"} key={Math.random()}>
                                               <PostsCardComponent {...v}/>
                                           </div>
                                       )
                                   })
                               }
                           </div>
                           <div className={"posts__search"}>
                               <SearchBarComponent/>
                               <SidebarComponent/>
                           </div>
                           <div className={"posts__pagination center"}>
                               <Pagination count={10} size="large" />
                           </div>
                       </div>
                   </React.Fragment>
               </BasicLayout>
           </div>
        );
    }
}

export default connect(mapStateToProps)(PostsPage)