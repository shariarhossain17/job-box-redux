import React from "react";
import { useSelector } from "react-redux";
import Landing from "./Landing";

const Home = () => {
  const auth = useSelector((state) => console.log(state))
  return <Landing />;
};

export default Home;
