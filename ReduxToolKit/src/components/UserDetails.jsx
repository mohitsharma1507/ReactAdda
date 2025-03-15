import { fakeUserData } from "../Api";
import DeleteUser from "./DeleteUser";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlices";
import DisplayUser from "./DisplayUser";

const UserDetails = () => {
  const dispatch = useDispatch();
  const handleAddUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  return (
    <div className="conatiner" style={{ textAlign: "center" }}>
      <div className="admin-table">
        <div className="admin-subtitle" style={{ color: "gray" }}>
          List of User Details
        </div>
        <button
          className="btn-add"
          onClick={() => handleAddUser(fakeUserData())}
        >
          Add New Users
        </button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DisplayUser />
      </ul>
      <hr />
      <DeleteUser />
    </div>
  );
};

export default UserDetails;
