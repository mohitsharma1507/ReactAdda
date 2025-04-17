import React from "react";
import CryptoCard from "./CryptoCard";

export default function CryptoList({ coinsData }) {
  return (
    <div
      className="crypto_list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {coinsData.map((coin, idx) => {
        return (
          <CryptoCard
            key={idx}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        );
      })}
    </div>
  );
}
