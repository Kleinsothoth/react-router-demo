import React from "react";

const VideoPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>数理动画</h1>
      <video width="800" controls autoPlay>
        <source src="/videos/PolynomialGraph.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  );
};

export default VideoPage;
