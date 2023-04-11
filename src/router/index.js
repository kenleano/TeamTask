import { createRouter, createWebHistory } from 'vue-router'
import RegistrationForm from '../components/RegistrationForm'
import HomePage from '../components/HomePage'
import LoginForm from '../components/LoginForm'
import ProjectPage from '../components/ProjectPage'
import TaskPage from '../components/TaskPage'
import MembersPage from '../components/MembersPage'
import ProfilePage from '../components/ProfilePage'
import AdminPage from '@/components/AdminComponents/AdminPage'
import CommentsPageVue from '@/components/CommentsPage.vue'
import AdminAddprojects from '@/components/AdminComponents/AdminAddprojects'
import AdminShowprojects from '@/components/AdminComponents/AdminShowprojects'
import MemberProjectPage from '@/components/MemberComponents/MemberProjectPage.vue'
import MemberProfilePage from '@/components/MemberComponents/MemberProfilePage.vue'
import LoginMember from '@/components/LoginMember.vue'
import MemberTaskPageVue from '@/components/MemberComponents/MemberTaskPage.vue'
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
        path: "/admin",
        alias: "/admin",
        name: "AdminPage",
        component: AdminPage
    },
    {
       
        path: "/m/projects",
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
    },
    {
        path: "/api2/m/projects",
        alias: "/projects",
        name: "MemberProjectPage",
        component: MemberProjectPage
    },
    {
        path: "/api2/m/profile",
        alias: "/projects",
        name: "ProjectPage",
        component: MemberProfilePage
    },
    {
        path: "/loginMember",
        alias: "/projects",
        name: "LoginMember",
        component: LoginMember
    },
    {
        path: "/profile",
        alias: "/profile",
        name: "profile",
        component: ProfilePage
    },
    {
        path: "/api2/m/tasks",
        alias: "/comments",
        name: "MemberTaskPageVue",
        component: MemberTaskPageVue
    },
    {
        path: "/api2/m/projects1",
        alias: "/comments",
        name: "CommentsPageVue",
        component: CommentsPageVue
    }, 
    {
        path: "/adminAddprojects",
        alias: "/adminAddprojects",
        name: "adminAddprojects",
        component: AdminAddprojects
    }, 
    {
        path: "/adminShowprojects",
        alias: "/adminShowprojects",
        name: "adminShowprojects",
        component: AdminShowprojects
    }




    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
