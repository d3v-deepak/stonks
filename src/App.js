import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  var [stocks, setStocks] = useState({
    pharma: [
      "Dr. Reddys Laboratories Ltd.",
      "Sun Pharmaceutical Industries Ltd.",
      "Cipla Ltd.",
      "Biocon Ltd.",
      "Cadila Healthcare Ltd.",
    ],
    allTimeBuy: [
      "Oracle Financial Services Software",
      "ITC",
      "HDFC",
      "Reliance Industries Limited",
      "Bajaj Auto",
      "Polycab India",
    ],
    IT: ["Infosys", "Tech Mahindra", "Mindtree", "Mphasis", "TCS", "LTI"],
  });
  var [selected, setSelected] = useState([
    "Dr. Reddys Laboratories Ltd.",
    "Sun Pharmaceutical Industries Ltd.",
    "Cipla Ltd.",
    "Biocon Ltd.",
    "Cadila Healthcare Ltd.",
  ]);

  function btnClickHandler(item) {
    console.log("btn click", item);

    setSelected(stocks[item]);
  }
  function renderList() {
    return selected;
  }

  return (
    <div className="App">
      <nav class="navigation nav-heading">💲📈stonks.io📈💲</nav>
      <main class="container">
        <ul class="stock-type">
          {Object.keys(stocks).map((item, index) => {
            return (
              <li key={item} onClick={() => btnClickHandler(item)}>
                {item}
              </li>
            );
          })}
        </ul>

        <ul class="stock-list">
          {selected.map((item, index) => {
            return (
              <li key={item}>
                <h1>{item}</h1>
              </li>
            );
          })}
        </ul>
      </main>

      <footer class="navigation footer-nav">
        Hey..!!Are you nrew to the Stock Market and worried about which stock to
        buy but also too tired to do your research..???? <br></br>Well now
        ..just for you ..yeah only for you we have bought our new product stonks
        which tells you stocks you need to buy for a better returns
      </footer>
    </div>
  );
}

export default App;
