import {configureStore,
    getDefaultMiddleware,
    createSlice
} from "@reduxjs/toolkit";
import _ from 'lodash';


const middleware = [
    ...getDefaultMiddleware(),
];

const state = {
    posts: [],
    comments: [],
    projects: [],
    pages:{
        homePage:{
            skills:{
                skillsDescription: `The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS`,
                skillsList: [
                    {title:"NodeJs", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Java", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Angular", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"React", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"VueJs", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Python", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Php", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Webpack", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                    {title:"Laravel", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg"},
                ],
                per_page:3,
                page:1,
                get num_pages(){
                    return Math.ceil(this.skillsList.length/this.per_page)
                }
            },
            projects:{
                languages:["JavaScript","PHP","Java","Python","Web design"],
                activeLanguage:"JavaScript",
                page:1,
                projectsList:[
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0, description:"The app is developed by me"},
                    {title:"Angular App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:2, lang:0, description:"The app is developed by me"},
                    {title:"Laravel App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:3, lang:0 , description:"The app is developed by me"},
                    {title:"Python App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:4, lang:1 , description:"The app is developed by me"},
                ],
                per_page:3,
                get num_pages(){
                    const list = _.chunk(this.projectsList.filter(v=>this.languages[Number(v.lang)]===this.activeLanguage),this.per_page)
                    return Math.ceil(list.length/this.per_page)
                }
            },
            questions:{
                questionsList:[
                    {question:"What technologies do you use for frontend development",answer:"Angular"},
                    {question:"What technologies do you use for frontend development",answer:"Angular"},
                    {question:"What technologies do you use for frontend development",answer:"Angular"},
                ]
            }
        },
        projectsPage:{
            projectsList:[
                {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0, description:"The app is developed by me",languages:["JavaScript","Php","React","Redux","Material ui"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
                {title:"Angular App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:2, lang:0, description:"The app is developed by me",languages:["Java","Php"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
                {title:"Laravel App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:3, lang:0 , description:"The app is developed by me",languages:["Python","Php"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
                {title:"Python App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:4, lang:1 , description:"The app is developed by me",languages:["JavaScript","Java"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
            ],
        },
        postsPage:{
            posts:[
                {title:"Async/Await",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
                {title:"Async/Await",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
                {title:"Async/Await",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
            ],
            mostPopular:[
                {title:"xmlhttprequest",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
                {title:"java spring",category:"php",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
                {title:"wordpress",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"}
            ]
        }
    }
}

const slice = createSlice({
    name: "data",
    initialState: state,
    reducers: {
        updatePage(state,action){
            const page = action.payload;
            const skills = state.pages.homePage.skills;

            if(skills.num_pages<page){
                skills.page = 1;
            } else if(page<=0){
                skills.page = skills.num_pages;
            } else{
                skills.page = action.payload;
            }
        },
        updateLang(state,action){
            const lang = action.payload;
            const projects = state.pages.homePage.projects;
            const languages = projects.languages;

            if(languages.includes(lang)){
                projects.activeLanguage = lang;
            }
        },
        updateProjectsPage(state,action){
            const page = action.payload;
            const projects = state.pages.homePage.projects;

            if(projects.num_pages<page){
                projects.page = 1;
            } else if(page<=0){
                projects.page = projects.num_pages;
            } else{
                projects.page = action.payload;
            }
        }
    },
});

const authReducer = slice.reducer;

export const {updatePage, updateLang, updateProjectsPage} = slice.actions;

export const store = configureStore({
    reducer: {
        data: authReducer,
    },
    middleware,
});