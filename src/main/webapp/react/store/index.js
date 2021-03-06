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
                {link:"https://github.com/ValValeria/React_NodeJs_GraphQL",title:"React App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:1, lang:0, description:"The app is developed by me",languages:["JavaScript","Php","React","Redux","Material ui"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
                {link:"https://github.com/ValValeria/React_NodeJs_GraphQL",title:"Angular App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:2, lang:0, description:"The app is developed by me",languages:["Java","Php"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
                {link:"https://github.com/ValValeria/React_NodeJs_GraphQL",title:"Laravel App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:3, lang:0 , description:"The app is developed by me",languages:["Python","Php"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
                {link:"https://github.com/ValValeria/React_NodeJs_GraphQL",title:"Python App",image:"https://github.com/ValValeria/React_NodeJs_GraphQL/blob/master/screen.png?raw=true",id:4, lang:1 , description:"The app is developed by me",languages:["JavaScript","Java"],long_description:"The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS"},
            ],
        },
        postsPage:{
            filteredPosts:[
                {title:"Async/Await",category:"js",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg",date:"2020-09-10"},
                {title:"Static methods ",category:"java",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg",date:"2020-09-09"},
                {title:"Async/Await",category:"php",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg",date:"2020-09-08"},
                {title:"Traits",category:"php",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg",date:"2020-09-08"},
                {title:"Numpy",category:"python",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg",date:"2020-09-08"},
            ],
            mostPopular:[
                {title:"xmlhttprequest",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
                {title:"java spring",category:"php",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"},
                {title:"wordpress",category:"JS",id:1,description:"Async is used in javascript",image:"/public/images/js.jpg"}
            ],
            activeCategory:"",
            sortByAsc: false,
            page:1,
            per_page:3,
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
        },
        sortPostsByAsc(state){
            const postsPage = state.pages.postsPage;
            postsPage.sortByAsc = true;

            postsPage.filteredPosts.sort((a,b)=>{
                const date = new Date(a.date)
                const date2 = new Date(b.date);

                if(date>date2){
                   return 1;
                }
                if(date<date2){
                   return -1;
                }
                return 0;
            });
        },
        sortPostsByDesc(state){
            const postsPage = state.pages.postsPage;
            postsPage.sortByAsc = false;
            postsPage.page = 1;

            postsPage.filteredPosts.sort((a,b)=>{
                const date = new Date(a.date)
                const date2 = new Date(b.date);

                if(date<date2){
                    return 1;
                }
                if(date>date2){
                    return -1;
                }
                return 0;
            });
        },
        sortPostsByCategory(state,action){
            const category = action.payload;
            const postsPage = state.pages.postsPage;
            postsPage.activeCategory = category;
            postsPage.page = 1;

            _.remove(postsPage.filteredPosts,(v)=>{
                 return category !== v.category;
            })
        },
        undoPostFilters(state){
            const postsPage = state.pages.postsPage;
            postsPage.page = 1;
        },
        changePostPage(state,action){
            const postsPage = state.pages.postsPage;
            postsPage.page = action.payload;
        }
    },
});

const authReducer = slice.reducer;

export const {updatePage, changePostPage, updateLang, updateProjectsPage, sortPostsByAsc, sortPostsByDesc, sortPostsByCategory, undoPostFilters} = slice.actions;

export const store = configureStore({
    reducer: {
        data: authReducer,
    },
    middleware,
});