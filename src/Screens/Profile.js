import { useDispatch, useSelector } from "react-redux";
import { setScreen, setModalVissible } from "../Utils/appSlice";
import Modal from "../Components/Modal";
import CommentForm from "../Components/CommentForm";

const Profile = () => {
  const app = useSelector((state) => state.app);
  const comments = useSelector((state) => state.comments.list);
  const dispatch = useDispatch();

  const listComments = comments.map((comment, index) => (
    <p key={index}>{comment}</p>
  ));

  return (
    <>
      <h1>Profile Screen</h1>
      <div>
        <img
          src={require("../Images/profile.jpg")}
          alt=""
          style={{ width: 200 }}
        />
      </div>
      <div>{listComments}</div>
      <button onClick={() => dispatch(setScreen("home"))}>Home</button>
      <button onClick={
        () => dispatch(setModalVissible(true))
        }>
        Add Comment
      </button>
      {app.modalVissible && (
        <Modal>
          <CommentForm />
        </Modal>
      )}
    </>
  );
};

export default Profile;