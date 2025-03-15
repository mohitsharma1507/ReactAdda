import { useEffect, useState } from "react";
import { postData, updateData } from "../Api/PostApi";

export const Form = ({ post, setPost, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    // Update form state when updateDataApi changes
    if (Object.keys(updateDataApi).length > 0) {
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    } else {
      setAddData({ title: "", body: "" });
    }
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPostData = async () => {
    const res = await postData(addData);
    if (res.status === 201) {
      setPost([...post, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      setPost((prev) => {
        return prev.map((currPost) =>
          currPost.id === updateDataApi.id ? res.data : currPost
        );
      });
      setAddData({ title: "", body: "" });
      setUpdateDataApi({});
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(updateDataApi).length > 0) {
      updatePostData();
    } else {
      addPostData();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add News"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">
        {Object.keys(updateDataApi).length > 0 ? "Edit" : "Add"}
      </button>
    </form>
  );
};
