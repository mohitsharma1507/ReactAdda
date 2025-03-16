import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch(url);
    const data = await res.json();
    const result = data.data.children;
    const list = result
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);

    setImage(list);
    setLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handlePrevButton = () => {
    setIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };
  const handleNextButton = () => {
    setIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="ImageContainer">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          <button onClick={handlePrevButton}>{"<"}</button>
          <img
            src={image[index]}
            alt="Not Found"
            style={{ width: "900px", height: "600px" }}
          />
          <button onClick={handleNextButton}>{">"}</button>{" "}
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
