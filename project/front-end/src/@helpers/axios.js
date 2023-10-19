import axios from "axios";
import { getToken } from "./token";

axios.interceptors.request.use((request)=>{
    const token = getToken();
    if(token) {
        request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
});

axios.interceptors.response.use((response)=>{
    return response.data;
});

export default axios