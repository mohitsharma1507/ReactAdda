import { useState } from "react";

export default function Model({ handleClose, handleOfferAccept }) {
  const handleOutsideClick = (e) => {
    if (e.target.className === "model") {
      handleClose();
    }
  };
  return (
    <div className="model" onClick={handleOutsideClick}>
      <div className="model-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <div className="mainLine">
          click the button below to accept our amazing offer!.
        </div>

        <button className="accept-btn" onClick={handleOfferAccept}>
          Accept Offer
        </button>
      </div>
    </div>
  );
}
