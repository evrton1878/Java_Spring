import React from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import CardComponent from "../../components/CardComponent";
import {connect} from 'react-redux';
import PostsCardComponent from '../../components/PostCardComponent'
import SearchBarComponent from "../../components/SearchBarComponent";
import SidebarComponent from "../../components/SidebarComponent";
import {Pagination} from "@material-ui/lab";
import './PostsPage.scss'
import {changePostPage} from "../../store";

const mapStateToProps = ({data})=>({
    posts: data.pages.postsPage.filteredPosts,
    page: data.pages.postsPage.page,
    per_page: data.pages.postsPage.per_page,
    get num_pages(){
        return _.chunk(this.posts,this.per_page).length
    },
    get active_posts(){
        return _.chunk(this.posts, this.per_page)[this.page-1]||[]
    }
});

const mapDispatchToProps = (dispatch)=>({
    changePage: num => dispatch(changePostPage(num))
})

class PostsPage extends React.PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            categories: ["JS","Java","Php","Python"],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(num){
        this.props.changePage(num);
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
                                   this.props.active_posts.map(v=>{
                                       return (
                                           <div className={"posts__item"} key={Math.random()}>
                                               <PostsCardComponent {...v} href={"/post/"+v.id}/>
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
                               <Pagination count={this.props.num_pages} size="large" onChange={(_event,page)=>this.handleClick(page)}/>
                           </div>
                       </div>
                   </React.Fragment>
               </BasicLayout>
           </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage)