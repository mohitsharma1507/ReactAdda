import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlices";

const DeleteUser = () => {
  const dispatch = useDispatch();

  const deleteAllUser = () => {
    dispatch(deleteUsers());
  };
  return <button onClick={deleteAllUser}>DeleteAllUser</button>;
};

export default DeleteUser;
