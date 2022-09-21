import axios from "axios";
export default axios.create({
    baseURL:"http://keshav01.herokuapp.com/api",
    headers:{
        "Content-type":"application/json"
    }
})