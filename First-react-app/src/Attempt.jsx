import { useState } from "react";

function Attempt() {
  const [visible, setVisible] = useState(true);
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(10);
  // const handleChange = () => {
  //   setVisible(!visible);
  // };
  const handleLikeChange = () => {
    setLike((prevCount) => prevCount + 1);
  };
  const handleDisLikeChange = () => {
    setDisLike((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="Container">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et animi, quas
        facere cumque iste architecto id obcaecati in maxime aut tenetur,
        laboriosam voluptatum sapiente omnis harum aliquam, atque explicabo
        maiores quos velit ipsum vitae pariatur dolorem necessitatibus? Adipisci
        eligendi aut corrupti eaque dolore nisi maiores est expedita rerum
        veritatis saepe facere quisquam, neque tempora nihil amet cumque, esse
        in vel quis nesciunt modi voluptas at accusantium! Fugit, in nesciunt
        quasi impedit animi eligendi, quaerat culpa ipsam provident ipsum vitae
        sed a ad! Tempore minus eos eum maiores ipsa unde nulla quod amet quam
        enim corrupti inventore alias fugiat voluptatum itaque, aut fugit
        recusandae veritatis deleniti repellat exercitationem voluptate magnam
        ducimus? Totam ipsam recusandae optio iste alias quaerat ullam, nisi,
        cupiditate tempore cumque vel. Aut ipsam distinctio quos eum incidunt,
        illo adipisci illum commodi magni, voluptate porro modi rem numquam quis
        molestias vitae fugiat ex impedit sint autem eveniet eligendi
        voluptatibus?
      </p>

      <button onClick={handleLikeChange}>Like 👍{like}</button>
      <button onClick={handleDisLikeChange}>DisLike 👎{disLike}</button>

      {/* <button onClick={handleChange}>{visible ? "Hide" : "Show"}</button>
      {visible && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et animi,
          quas facere cumque iste architecto id obcaecati in maxime aut tenetur,
          laboriosam voluptatum sapiente omnis harum aliquam, atque explicabo
          maiores quos velit ipsum vitae pariatur dolorem necessitatibus?
          Adipisci eligendi aut corrupti eaque dolore nisi maiores est expedita
          rerum veritatis saepe facere quisquam, neque tempora nihil amet
          cumque, esse in vel quis nesciunt modi voluptas at accusantium! Fugit,
          in nesciunt quasi impedit animi eligendi, quaerat culpa ipsam
          provident ipsum vitae sed a ad! Tempore minus eos eum maiores ipsa
          unde nulla quod amet quam enim corrupti inventore alias fugiat
          voluptatum itaque, aut fugit recusandae veritatis deleniti repellat
          exercitationem voluptate magnam ducimus? Totam ipsam recusandae optio
          iste alias quaerat ullam, nisi, cupiditate tempore cumque vel. Aut
          ipsam distinctio quos eum incidunt, illo adipisci illum commodi magni,
          voluptate porro modi rem numquam quis molestias vitae fugiat ex
          impedit sint autem eveniet eligendi voluptatibus?
        </p>
      )} */}
    </div>
  );
}
export default Attempt;
