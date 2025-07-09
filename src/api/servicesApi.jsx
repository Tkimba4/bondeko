import axios from "axios";

const BASE_URL = "http://localhost:4000/bondeko/services";


export const getServices = async() =>{
    const res = await axios.get(BASE_URL)
    return res.data;
}