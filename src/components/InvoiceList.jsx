import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function InvoiceList({ items }) {
  return (
    <ul id="list">
      {items.map((item) => (
        <Link key={item.id} to={`/invoice/${item.id}`}>
          <li className="list-item">
            <div>{item.id}</div>
            <div>{item.createdAt}</div>
            <div>{item.clientName}</div>
            <div>{item.total}</div>
            <div className="status">{item.status}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default InvoiceList;
