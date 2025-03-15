import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlices";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      {data.map((user, id) => {
        return (
          <li
            key={id}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {user}

            <button className="delete-btn" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </>
  );
};
export default DisplayUser;
