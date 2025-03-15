import { useEffect, useState } from "react";
import { delpost, getPost } from "../Api/PostApi";
import "../components/Posts.css";
import { Form } from "./Form";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPost();
    setPost(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await delpost(id);
      if (res.status === 200) {
        const newUpdatedPost = post.filter((currPost) => {
          return currPost.id != id;
        });
        setPost(newUpdatedPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (currPost) => {
    setUpdateDataApi(currPost);
  };

  return (
    <>
      <section className="section-form">
        <Form
          post={post}
          setPost={setPost}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol>
          {post.map((currPost) => {
            return (
              <li key={currPost.id}>
                <p> Title: {currPost.title}</p>
                <p> News :{currPost.body}</p>

                <button onClick={() => handleEdit(currPost)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(currPost.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default Posts;
