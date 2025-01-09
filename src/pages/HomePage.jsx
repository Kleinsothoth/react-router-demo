import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // 使用 React Router 的导航功能

  const handleToolClick = (tool) => {
    // 根据点击的工具跳转到对应的页面
    if (tool === "数理动画生成") {
      navigate("/video");
    } else {
      alert(`点击了${tool}，但未设置跳转路径`);
    }
  };

  return (
    <div>
      {/* 搜索框 */}
      <div className="flex items-center bg-purple-100 rounded-md p-4 mb-8">
        <input
          type="text"
          placeholder="搜索工具"
          className="w-full bg-transparent outline-none text-lg"
        />
        <button className="text-purple-800 text-2xl">🔍</button>
      </div>

      {/* 推荐工具 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">为你推荐</h2>
        <div className="grid grid-cols-2 gap-6">
          <ToolCard
            title="Magic Face"
            description="生成数字人，让课堂动起来"
            icon="🪄"
            onClick={() => handleToolClick("Magic Face")}
          />
          <ToolCard
            title="语音制作"
            description="根据文本快速生成语音内容，想要的声音全都有"
            icon="🎙️"
            onClick={() => handleToolClick("语音制作")}
          />
          <ToolCard
            title="教案生成"
            description="快速生成教案方案，轻松解决问题"
            icon="📋"
            onClick={() => handleToolClick("教案生成")}
          />
          <ToolCard
            title="随堂测试"
            description="精准推送随堂测验，精准练习"
            icon="📊"
            onClick={() => handleToolClick("随堂测试")}
          />
          <ToolCard
            title="数理动画生成"
            description="生成课堂动画，让数学课堂更生动"
            icon="📐"
            onClick={() => handleToolClick("数理动画生成")} // 点击后跳转到 /video
          />
          <ToolCard
            title="知识词典"
            description="根据检测生成知识词典，丰富你的知识库"
            icon="📖"
            onClick={() => handleToolClick("知识词典")}
          />
        </div>
      </section>
    </div>
  );
};

const ToolCard = ({ title, description, icon, onClick }) => (
  <div
    className="bg-white shadow rounded-lg p-6 flex items-center cursor-pointer hover:bg-gray-100"
    onClick={onClick} // 为每个工具卡绑定点击事件
  >
    <div className="text-4xl">{icon}</div>
    <div className="ml-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <button className="ml-auto text-gray-400 hover:text-yellow-500 text-2xl">
      ⭐
    </button>
  </div>
);

export default HomePage;
