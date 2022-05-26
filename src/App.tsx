import "./styles.css";

interface Invoiceprop {
  invoicedata: Invoicedatatype;
  logo?: string;
}

type Invoicedatatype = {
  customername: string;
  invoices: Invoicetype[];
};

type paymentStatusType = "paid" | "pending" | "late";

type Invoicetype = {
  id: number;
  name: string;
  total: string;
  paymentStatus: paymentStatusType;
};

function Invoicelist(props: Invoiceprop) {
  const { customername, invoices } = props.invoicedata;

  const objectcontainer = { display: "flex", justifyContent: "space-between" }; // for in-line style

  return (
    <div>
      <h1>{customername}</h1>
      <hr />
      <div>
        {invoices.map((invoice) => (
          <div key={invoice.id} style={objectcontainer}>
            <div> {invoice.name} </div>
            <div>
              {" "}
              {invoice.total} - {invoice.paymentStatus}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  const data: Invoicedatatype = {
    customername: "Erin",
    invoices: [
      { id: 123, name: "Amazon", total: "3,000", paymentStatus: "paid" },
      { id: 456, name: "Meta", total: "4,000", paymentStatus: "late" },
      { id: 789, name: "C3", total: "6,000", paymentStatus: "pending" }
    ]
    //logo:"meta",
  };
  return (
    <div className="App">
      <Invoicelist invoicedata={data} />
    </div>
  );
};

export default App;
