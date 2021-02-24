import React from 'react';
import BasicLayout from "../layouts/BasicLayout";
import CardComponent from "../components/CardComponent";
import {connect} from 'react-redux';
import PostsCardComponent from '../components/PostCardComponent'

const mapStateToProps = ({data})=>({
    posts: data.pages.posts
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
            <BasicLayout title={"Posts"} css_class={"posts"}>
                <React.Fragment>
                    <div className={"posts__content"}>
                        <div className={"posts__categories center"}>
                            {
                                this.state.categories.map(v=>{
                                    return (
                                        <div className={"posts__category"} key={Math.random()}>
                                            <CardComponent padding={false}>
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
                    </div>
                </React.Fragment>
            </BasicLayout>
        );
    }
}

export default connect(mapStateToProps)(PostsPage)