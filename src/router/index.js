import { createRouter, createWebHistory } from 'vue-router'
import RegistrationForm from '../components/RegistrationForm'
import HomePage from '../components/HomePage'
import LoginForm from '../components/LoginForm'
import ProjectPage from '../components/ProjectPage'
import TaskPage from '../components/TaskPage'
import MembersPage from '../components/MembersPage'
import ProfilePage from '../components/ProfilePage'
import CommentsPageVue from '@/components/CommentsPage.vue'
//import TaskContentVue from '@/components/TaskContent.vue'

// Anytime a url is found in this router,
// the corresponding component will be displayed in app.vue router view on app.vue
// In turn, App.vue is displayed on index.html app div
//Different components will be displayed when accessing different urls
const routes = [
    {
        path:"/",
        name: "HomePage",
        component:HomePage
    },
    {
        path: "/register",
        alias: "/register",
        name: "RegistrationForm",
        component: RegistrationForm
    },
    {
        path: "/auth/authenticate",
        alias: "/login",
        name: "LoginForm",
        component: LoginForm
    },
    {
        path: "/projects",
        alias: "/projects",
        name: "ProjectPage",
        component: ProjectPage
    },
    {
        path: "/tasks",
        alias: "/tasks",
        name: "TaskPage",
        component: TaskPage
    },
    {
        path: "/tasks/:id",
        alias: "/tasks",
        name: "TaskPage",
        component: TaskPage
    },
    {
        path: "/members",
        alias: "/members",
        name: "Members",
        component: MembersPage
    }
    ,
    {
        path: "/profile",
        alias: "/profile",
        name: "profile",
        component: ProfilePage
    },
    {
        path: "/comments",
        alias: "/comments",
        name: "comments",
        component: CommentsPageVue
    }


    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
