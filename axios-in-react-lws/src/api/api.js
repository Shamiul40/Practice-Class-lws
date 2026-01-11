import axios from "axios"

export const api =axios.create({
    baseURL : "http://localhost:8000",
    
    
})


api.interceptors.request.use((config)=>{
    config.headers["Authorization"] = "Bearer aaaaaaaaaaaaaaaaaaa"
    console.log(config)
    return config
}, (error)=>{
    return Promise.reject(error)
})



api.interceptors.response.use((response)=>{
    console.log(response)
    return response
}, (error)=>{
    Promise.reject(error)
}
)