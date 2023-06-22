/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InvoicesContext } from "../contexts/InvoicesContext";

function InvoicePage() {
  const invoices = useContext(InvoicesContext);
  const { id } = useParams();

  const invoice = invoices.find((invoice) => invoice.id === id);

  return (
    <main className="container">
      <header className="invoice-header">
        <div>
          Status
          <span className="status">{invoice.status}</span>
        </div>
        <div className="btn-group">
          <button className="btn btn-rounded">Edit</button>
          <button className="btn btn-rounded">Delete</button>
        </div>
      </header>
    </main>
  );
}

export default InvoicePage;
