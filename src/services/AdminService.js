import axios from "axios";

const API_URL = 'http://localhost:8089/api2/manager'; // Change this to your API URL

class AdminService{

    createProj(name,desc,date){
        console.log(name);
        return axios.post(API_URL+"/projects", {"name":name, "description":desc, "deadLine":date}, {
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }
    sayHello(){
        return axios.get(API_URL+"/hello")
    }
    getProjects(){
        return axios.get(API_URL+"/projects", {
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }
    deleteProjects(projectID){
        return axios.delete(API_URL+`/projects/${projectID}`, {
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }
    updateProjects(projectID,name,desc,date){
        return axios.put(API_URL+`/projects/${projectID}`, {"name":name, "description":desc, "deadLine":date},{
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }

    getTasks(projectID){
        return axios.get(API_URL+`/projects/${projectID}/tasks`,{
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }

    createTasks(projectID,name,desc ,date){
        return axios.post(API_URL+`/${projectID}/tasks`,{"name":name, "description":desc, "deadLine":date},{
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }
    
    getMembers(){
        return axios.get(API_URL+`/members`,{
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }
    
    assignMember_task(projectID,taskID,userID){
        return axios.post(API_URL+`/projects/${projectID}/tasks/${taskID}/${userID}`,{
            headers: {
               Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
            }
         })
    }
    removemember_task(taskID,userID){
    return axios.delete(API_URL+`/tasks/${taskID}/${userID}`,{
        headers: {
           Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
        }
     })

    }






    // getTasks(projectID,userID , taskID){
    //     return axios.get(API_URL+`/projects/${projectID}/tasks/${taskID}/${userID}`, {
    //         headers: {
    //            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
    //         }
    //      })
    // }
    
}

export default new AdminService();
