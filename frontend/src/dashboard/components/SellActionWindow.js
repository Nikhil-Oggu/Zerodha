import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import styles from "./BuyActionWindow.module.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = async () => {
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    closeSellWindow();
  };

  return (
    <div className={styles.actionWindow}>
      <div className={styles.actionHeader}>
        <h3>
          Sell {uid} <span>NSE</span>
        </h3>
      </div>

      <div className={styles.regularOrder}>
        <div className={styles.inputs}>
          <fieldset>
            <legend>Qty</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className={styles.buttons}>
        <span>Margin required ₹140.65</span>
        <div>
          <button className={`${styles.btn} ${styles.btnBlue}`} onClick={handleSellClick}>
            Sell
          </button>
          <button className={`${styles.btn} ${styles.btnGrey}`} onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
