import api from "./api";

export const getActiveCustomers = async()=>{
    try{
        const response = await api.get("/api/customers");
        //console.log("Active customers fetched successfully:", response.data);
        return response.data;
    }catch(error){
        console.error("Error fetching active customers:", error);
        throw error;
    }
}