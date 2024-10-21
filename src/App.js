import "./App.css";
import MyKline from "./MyKline";
import React, { useEffect, useState } from "react";
import getId from "./data.js";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import StockList from "./Components/StockList";

function App() {
  const [formattedData, setFormattedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [showStocks, setShowStocks] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {}, []);

  async function fData(Id) {
    let api = `https://api.investing.com/api/financialdata/${Id}/historical/chart/?interval=PT30M&pointscount=110`;
    try {
      let res = await fetch(api);
      let jsData = await res.json();
      let rawData = jsData["data"];
      if (Array.isArray(rawData)) {
        setFormattedData(rawData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  let stockData = getId();

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredResults = stockData.filter((stock) => {
        return stock.Name.toLowerCase().includes(value.toLowerCase());
      });
      setSearchResults(filteredResults);
      setShowStocks(true);
    } else {
      setShowStocks(false);
    }
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      setShowStocks(true);
    }
  };

  const handleSelectStock = (selectedStock) => {
    console.log("選擇的股票：", selectedStock);
    setSelectedStock(selectedStock);
    fData(selectedStock["Id"]);
    setModalOpen(true);
    setShowChart(true);
  };

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setShowChart(false);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="輸入股票名稱進行搜索"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button" onClick={handleSearchClick}>
          搜索
        </button>
      </div>
      {showStocks && (
        <StockList
          stocks={searchTerm ? searchResults : stockData}
          onStockSelect={handleSelectStock}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        stock={selectedStock}
      >
        {selectedStock && (
          <div className="modal-content-wrapper">
            <div className="stock-info-row">
              <h2>{selectedStock.Name}</h2>
              <p>Symbol: {selectedStock.Symbol}</p>
              <button className="chart-button" onClick={toggleChart}>
                {showChart ? "隱藏圖表" : "顯示圖表"}
              </button>
            </div>
            {showChart && (
              <div className="chart-container">
                <MyKline rawData={formattedData} />
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
