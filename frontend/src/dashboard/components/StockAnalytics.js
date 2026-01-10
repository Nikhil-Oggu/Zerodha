import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import "./StockAnalytics.css";

const StockAnalytics = ({ stock, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock technical data - in real app, fetch from API
  const technicalData = {
    resistance: stock.price * 1.05,
    support: stock.price * 0.95,
    ma50: stock.price * 1.02,
    ma200: stock.price * 0.98,
    rsi: Math.floor(Math.random() * 100),
    volume: Math.floor(Math.random() * 1000000),
    marketCap: Math.floor(Math.random() * 100000000000),
    peRatio: Math.floor(Math.random() * 50),
    eps: (Math.random() * 100).toFixed(2),
    beta: (Math.random() * 2).toFixed(2),
  };

  return (
    <div className="analytics-modal-overlay" onClick={onClose}>
      <div className="analytics-modal" onClick={(e) => e.stopPropagation()}>
        <div className="analytics-header">
          <h2>{stock.name} Analytics</h2>
          <button className="close-btn" onClick={onClose}>
            <Close />
          </button>
        </div>

        <div className="analytics-tabs">
          <button
            className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical
          </button>
          <button
            className={`tab-btn ${activeTab === "fundamental" ? "active" : ""}`}
            onClick={() => setActiveTab("fundamental")}
          >
            Fundamental
          </button>
        </div>

        <div className="analytics-content">
          {activeTab === "overview" && (
            <div className="analytics-section">
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Current Price</span>
                  <span className="value">₹{stock.price}</span>
                </div>
                <div className="info-item">
                  <span className="label">Day Change</span>
                  <span className={`value ${stock.isDown ? "loss" : "profit"}`}>
                    {stock.percent}
                  </span>
                </div>
                <div className="info-item">
                  <span className="label">Volume</span>
                  <span className="value">
                    {(technicalData.volume / 1000000).toFixed(2)}M
                  </span>
                </div>
                <div className="info-item">
                  <span className="label">Market Cap</span>
                  <span className="value">
                    ₹{(technicalData.marketCap / 1000000000).toFixed(2)}B
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "technical" && (
            <div className="analytics-section">
              <h4>Technical Indicators</h4>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Resistance</span>
                  <span className="value">₹{technicalData.resistance.toFixed(2)}</span>
                </div>
                <div className="info-item">
                  <span className="label">Support</span>
                  <span className="value">₹{technicalData.support.toFixed(2)}</span>
                </div>
                <div className="info-item">
                  <span className="label">50-Day MA</span>
                  <span className="value">₹{technicalData.ma50.toFixed(2)}</span>
                </div>
                <div className="info-item">
                  <span className="label">200-Day MA</span>
                  <span className="value">₹{technicalData.ma200.toFixed(2)}</span>
                </div>
                <div className="info-item">
                  <span className="label">RSI</span>
                  <span className="value">{technicalData.rsi}</span>
                </div>
                <div className="info-item">
                  <span className="label">Beta</span>
                  <span className="value">{technicalData.beta}</span>
                </div>
              </div>

              <div className="signal-container">
                <h5>Trading Signals</h5>
                <div className="signal-box">
                  <span className={`signal profit`}>↑ Buy Signal</span>
                  <span className="signal-desc">Price above 50-Day MA</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "fundamental" && (
            <div className="analytics-section">
              <h4>Fundamental Data</h4>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">PE Ratio</span>
                  <span className="value">{technicalData.peRatio}</span>
                </div>
                <div className="info-item">
                  <span className="label">EPS</span>
                  <span className="value">₹{technicalData.eps}</span>
                </div>
                <div className="info-item">
                  <span className="label">Market Cap</span>
                  <span className="value">
                    ₹{(technicalData.marketCap / 1000000000).toFixed(2)}B
                  </span>
                </div>
                <div className="info-item">
                  <span className="label">Volume</span>
                  <span className="value">
                    {(technicalData.volume / 1000000).toFixed(2)}M
                  </span>
                </div>
              </div>

              <div className="details-container">
                <h5>Company Details</h5>
                <p>
                  Detailed fundamental analysis and company information would be
                  displayed here. This includes financial statements, ratios,
                  and other important metrics.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="analytics-actions">
          <button className="btn-primary">Add to Watchlist</button>
          <button className="btn-secondary">Set Alert</button>
        </div>
      </div>
    </div>
  );
};

export default StockAnalytics;
