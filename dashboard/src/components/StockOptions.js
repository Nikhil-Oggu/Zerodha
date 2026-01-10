import React from "react";
import { Close } from "@mui/icons-material";
import "./StockOptions.css";

const StockOptions = ({ stock, onClose, onBuy, onSell }) => {
  const options = [
    {
      title: "View Details",
      description: "See detailed stock information and charts",
      icon: "📊",
      action: () => console.log("View details"),
    },
    {
      title: "Set Alert",
      description: "Get notified when price reaches target",
      icon: "🔔",
      action: () => console.log("Set alert"),
    },
    {
      title: "View News",
      description: "Read latest news about this stock",
      icon: "📰",
      action: () => console.log("View news"),
    },
    {
      title: "Add to Watchlist",
      description: "Add this stock to your watchlist",
      icon: "⭐",
      action: () => console.log("Add to watchlist"),
    },
    {
      title: "Compare Stocks",
      description: "Compare with other stocks",
      icon: "📈",
      action: () => console.log("Compare stocks"),
    },
    {
      title: "View History",
      description: "See historical price data",
      icon: "📉",
      action: () => console.log("View history"),
    },
  ];

  return (
    <div className="options-modal-overlay" onClick={onClose}>
      <div className="options-modal" onClick={(e) => e.stopPropagation()}>
        <div className="options-header">
          <h2>{stock.name} - More Options</h2>
          <button className="close-btn" onClick={onClose}>
            <Close />
          </button>
        </div>

        <div className="options-grid">
          {options.map((option, index) => (
            <div
              key={index}
              className="option-card"
              onClick={option.action}
            >
              <div className="option-icon">{option.icon}</div>
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </div>
          ))}
        </div>

        <div className="options-actions">
          <button className="btn-buy" onClick={onBuy}>
            Buy {stock.name}
          </button>
          <button className="btn-sell" onClick={onSell}>
            Sell {stock.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockOptions;
