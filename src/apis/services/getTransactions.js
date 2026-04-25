import api from "./api";

export const getTransactions = async(accountId)=>{
    try{
        const res = await api.get(`/api/transactions/${accountId}`);
        return res.data;
    }catch(error){
        console.error("Error fetching transactions:", error);
        throw error;
    }
}