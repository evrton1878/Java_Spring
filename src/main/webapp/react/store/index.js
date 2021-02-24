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
                    {title:"Angular App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0, description:"The app is developed by me"},
                    {title:"Laravel App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0 , description:"The app is developed by me"},
                    {title:"Python App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:1 , description:"The app is developed by me"},
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:1 , description:"The app is developed by me"},
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0 , description:"The app is developed by me"},
                    {title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0, description:"The app is developed by me"},
                    {title:"Webpack", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg", lang:1},
                    {title:"Laravel", description:"As a multi-paradigm language, JavaScript supports event-driven, fun.", image: "/public/images/nodejs_logo.svg",lang:1},
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
        posts:[
            {title:"Async/Await",category:"JS",id:1,description:"Async is used in javascript",image:"data:image/jpeg;base64,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"}
        ]
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