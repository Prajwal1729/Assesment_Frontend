import DataTable from "react-data-table-component";

export default function TransactionsTable({ transactions }) {
  const columns = [
    {
      name: "Amount (₹)",
      selector: row => row.amount,
      sortable: true,
    },
    {
      name: "Transaction Code",
      selector: row => row.transaction_code,
      sortable: true,
    },
    {
      name: "Symbol",
      selector: row => row.symbol,
    },
    {
      name: "Price",
      selector: row => row.price,
    },
    {
      name: "Total",
      selector: row => row.total,
    },
    {
      name: "Date",
      selector: row =>
        new Date(row.date).toLocaleDateString(),
      sortable: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={transactions}
      pagination
      striped
      highlightOnHover
      responsive
    />
  );
}