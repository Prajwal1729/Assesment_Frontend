import React from 'react'
import { getActiveCustomers } from '../apis/services/activeCustomers.js';
import { useNavigate } from 'react-router-dom';
import CustomerTable from '../components/CustomerTable.js';

export default function CustomerDetails() {
const [customers,setCustomers] = React.useState([]);
const navigate = useNavigate();
const[search,setSearch] = React.useState("");
const handleAccountClick = (accountId)=>{
    const encodedAccountId = btoa(accountId.toString());
    navigate(`/transactions/${encodedAccountId}`);
}

React.useEffect(()=>{
    const fetchCustomers = async()=>{
      try{
        const data = await getActiveCustomers();
        setCustomers(data);
      }catch(error){
        console.error("Error fetching customers:", error);
      }
    }
    fetchCustomers();
},[]);

const normalize = (text) => {
  return String(text)
    .toLowerCase()
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const filteredCustomers = customers.filter((c) => {
  if (!c) return false;

  const name = normalize(c.name);
  const address = normalize(c.address);
  const searchText = normalize(search);

  if (!searchText) return true;

  return name.includes(searchText) || address.includes(searchText);
});


  return (
      <div style={{ padding: "20px" }}>
      <h1>Customer Details</h1>

      <input
        type="text"
        placeholder="Search by name or address..."
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

      <CustomerTable
        customers={filteredCustomers}
        onAccountClick={handleAccountClick}
      />
    </div>
    
  );
}
