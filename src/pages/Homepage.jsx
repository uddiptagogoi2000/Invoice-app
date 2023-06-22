import InvoiceList from "../components/InvoiceList";

import { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import { InvoicesContext } from "../contexts/InvoicesContext";

function Homepage() {
  const invoices = useContext(InvoicesContext);
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [isOpen, setIsOpen] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFilteredInvoices(
      invoices.filter((invoice) => {
        const { status } = invoice;

        if (
          (isDraft && status === "draft") ||
          (isPending && status === "pending") ||
          (isPaid && status === "paid") ||
          (!isDraft && !isPending && !isPaid)
        ) {
          return true;
        }

        return false;
      })
    );
  }, [isDraft, isPending, isPaid, invoices]);

  function handleIsOpen(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  console.log({ isDraft });

  return (
    <main className="container">
      {showModal && <Modal />}
      <header className="header">
        <div>
          <h1>Invoices</h1>
          <p>There are {invoices.length} total Invoices</p>
        </div>
        <div className="header-action">
          <div className="menu-container">
            <button id="filter" onClick={(e) => handleIsOpen(e)}>
              Filter by status
            </button>
            {isOpen && (
              <div className="menu">
                <label>
                  <input
                    type="checkbox"
                    name="draft"
                    checked={isDraft}
                    onChange={() => {
                      setIsDraft((isDraft) => !isDraft);
                    }}
                  />
                  Draft
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="pending"
                    checked={isPending}
                    onChange={() => {
                      setIsPending(!isPending);
                    }}
                  />
                  Pending
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="paid"
                    checked={isPaid}
                    onChange={() => {
                      setIsPaid(!isPaid);
                    }}
                  />
                  Paid
                </label>
              </div>
            )}
          </div>
          <button className="btn" onClick={() => setShowModal(!showModal)}>
            <span>+</span>New Invoice
          </button>
        </div>
      </header>
      <InvoiceList items={filteredInvoices} />
    </main>
  );
}

export default Homepage;
