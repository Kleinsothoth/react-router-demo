import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/video");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>欢迎观看数理动画</h1>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          lineHeight: "100px",
          cursor: "pointer",
          margin: "0 auto",
        }}
        onClick={handleClick}
      >
        数理动画
      </div>
    </div>
  );
};

export default Home;
