import DataTable from "react-data-table-component";

export default function CustomerTable({ customers, onAccountClick }) {
  const columns = [
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Address",
      selector: row => row.address,
      wrap: true,
    },
    {
      name: "Accounts",
      cell: row => (
        <div>
          {row.accounts.map(acc => (
            <button
              key={acc}
              onClick={() => onAccountClick(acc)}
              style={{
                margin: "4px",
                padding: "5px 10px",
                borderRadius: "6px",
                border: "none",
                background: "#4facfe",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {acc}
            </button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={customers}
      pagination
      highlightOnHover
      striped
      responsive
    />
  );
}