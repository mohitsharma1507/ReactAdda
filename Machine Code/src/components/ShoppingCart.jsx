import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [bucketList, setBuketList] = useState([]);

  const handleChange = (e) => {
    setFood(e.target.value);
  };
  const fetchItem = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    setShoppingList(data);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchItem(food);
    }
  }, [food]);

  const handleShoppingList = (e) => {
    const idx = e.target.getAttribute(`data-id`);
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBuketList(copyBucketList);
    }
    setFood("");
  };
  const handleTickClick = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBuketList(newBucketList);
  };
  const handleDeletechange = (id) => {
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id != id);
    setBuketList(newList);
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: "800" }}>My Shopping List</h1>
      <div>
        <input type="text" value={food} onChange={handleChange} />
      </div>
      {food.length >= 2 ? (
        <div className="shopping-list" onClick={handleShoppingList}>
          {shoppingList.map((item, index) => {
            return (
              <div data-id={index} className="Product">
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="bucket">
        {bucketList.map((item) => {
          return (
            <div className="bucket-list">
              <button onClick={() => handleTickClick(item.id)}>✅</button>
              <div className={item.isDone ? "strike" : ""}>{item.data}</div>
              <button onClick={() => handleDeletechange(item.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ShoppingCart;
