import React from "react";

const StockList = ({ stocks, onStockSelect }) => {
  return (
    <div className="stock-list">
      {stocks.map((stock) => (
        <div
          key={stock.Id}
          className="stock-item"
          onClick={() => onStockSelect(stock)}
        >
          <span>{stock.Name}</span>
          <span>{stock.Symbol}</span>
        </div>
      ))}
    </div>
  );
};

export default StockList;
