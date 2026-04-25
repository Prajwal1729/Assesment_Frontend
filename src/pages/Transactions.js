import React from 'react'
import { useParams } from 'react-router-dom';
import { getTransactions } from '../apis/services/getTransactions.js';
import TransactionsTable from '../components/TransactionTable.js';

export default function Transactions(){
    const { accountId } = useParams();
    const [transactions,setTransactions] = React.useState([]);
    const [search,setSearch] = React.useState("");
    const decodedAccountId = atob(accountId);
    React.useEffect(()=>{
        const fetchTransactions = async()=>{
            try{
                const data = await getTransactions(decodedAccountId);
                setTransactions(data);
            }catch(error){
                console.error("Error fetching transactions:", error);
            }
        }
        fetchTransactions();
    },[accountId]);

    const normalize = (str) =>
      str.replace(/\s+/g, " ").toLowerCase().trim();
    const filteredTransactions = transactions.filter(t=>{
        const code = normalize(t.transaction_code || "");
        const symbol = normalize(t.symbol || "");
        const searchText = normalize(search);
        return code.includes(searchText) || symbol.includes(searchText);
    });

    return(
        <div style={{ padding: "20px" }}>
            <h1>Transactions for Account: {decodedAccountId}</h1>
            <input
            type="text"
            placeholder="Search by symbol or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
            marginBottom: "15px",
            padding: "10px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            }}
        />
    
         <TransactionsTable transactions={filteredTransactions} />
       </div>
    )
}