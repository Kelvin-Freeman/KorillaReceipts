import "./styles.css";
import { receipt1, receipt2, receipt3 } from "./data";
import Receipt from "./components/Receipt";

export default function App() {
  return (
    <div className="App">
      <h1>Korrila React Receipts</h1>

      {receipt1.paid ? null : <Receipt receipt={receipt1} />}
      {receipt2.paid ? null : <Receipt receipt={receipt2} />}
      {receipt3.paid ? null : <Receipt receipt={receipt3} />}
    </div>
  );
}
