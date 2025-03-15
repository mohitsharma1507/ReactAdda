import { useState } from "react";
import Model from "./Model";

const Overlay = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOffer, setIsOffer] = useState(false);

  const handleOfferChange = () => {
    setIsShow(true);
  };
  const handleClose = () => {
    setIsShow(false);
  };

  const handleOfferAccept = () => {
    setIsOffer(true);
    setIsShow(false);
  };
  return (
    <div>
      <div className="container">
        {!isOffer && <button onClick={handleOfferChange}>Show Offer</button>}
        {isOffer && <h1>OfferAccepted</h1>}
      </div>

      {isShow && (
        <Model
          handleOfferAccept={handleOfferAccept}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Overlay;
