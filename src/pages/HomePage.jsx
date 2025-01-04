import React from "react";

const HomePage = () => {
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
          />
          <ToolCard
            title="语音制作"
            description="根据文本快速生成语音内容，想要的声音全都有"
            icon="🎙️"
          />
          <ToolCard
            title="教案生成"
            description="快速生成教案方案，轻松解决问题"
            icon="📋"
          />
          <ToolCard
            title="随堂测试"
            description="精准推送随堂测验，精准练习"
            icon="📊"
          />
          <ToolCard
            title="数理动画生成"
            description="生成课堂动画，让数学课堂更生动"
            icon="📐"
          />
          <ToolCard
            title="知识词典"
            description="根据检测生成知识词典，丰富你的知识库"
            icon="📖"
          />
        </div>
      </section>
    </div>
  );
};

const ToolCard = ({ title, description, icon }) => (
  <div className="bg-white shadow rounded-lg p-6 flex items-center">
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
