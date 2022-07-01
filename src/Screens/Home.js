import { useDispatch } from "react-redux";
import {setScreen}from "../Utils/appSlice";

const Home = ()=>{
  const dispatch = useDispatch();
  return (
    <>
      <div>HomeScreen</div>
      <button onClick={()=>dispatch(setScreen("profile"))}>Profile</button>
    </>
  );
};
export default Home;