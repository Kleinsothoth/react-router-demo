import React, { useState } from "react";

const ChatPage = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 p-8">
      {/* 顶部选项 */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-6 text-lg">
          <Dropdown label="模型" options={["最快", "高效"]} />
          <Dropdown label="年级" options={["七年级", "八年级"]} />
        </div>
        <div className="flex space-x-6 text-lg">
          <Dropdown label="版本" options={["北师", "人教"]} />
          <Dropdown label="学科" options={["语文", "数学"]} />
        </div>
      </div>

      {/* 聊天显示区域 */}
      <div className="bg-white rounded-md shadow p-6 mb-6">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          你好！我是教慧通，专为学校设计
        </h2>
        <p className="text-gray-700 leading-relaxed">
          你好！我是教慧通，是你的AI教学教练。你可以问任何与教学最佳实践或学校工作相关的问题。随时向我寻求课堂上的创意、教育学最佳实践的研究、行为管理策略或任何一般性建议！你的问题越具体，我的回答就会越好。我今天怎样可以帮助你？
        </p>
      </div>

      {/* 灵感创意卡片 */}
      <section>
        <h3 className="text-2xl font-bold mb-4">灵感创意</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationData.map((item, index) => (
            <InspirationCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              participants={item.participants}
            />
          ))}
        </div>
      </section>

      {/* 底部操作栏 */}
      <div className="flex items-center mt-8">
        <button className="bg-purple-100 p-4 rounded-full text-purple-700 text-2xl">
          ➕
        </button>
        <input
          type="text"
          placeholder="开始探索未知的问题吧"
          className="flex-1 bg-gray-100 p-4 rounded-full mx-4 outline-none"
        />
        <button className="bg-purple-500 text-white px-6 py-2 rounded-full">
          🎤
        </button>
      </div>

      {/* 历史记录区域 */}
      <aside className="bg-white p-6 rounded-md shadow mt-8">
        <h3 className="text-xl font-bold mb-4">历史记录</h3>
        {historyData.map((item, index) => (
          <HistoryItem
            key={index}
            title={item.title}
            timestamp={item.timestamp}
          />
        ))}
        <button className="text-green-500 mt-4">+ 添加更多历史</button>
      </aside>
    </div>
  );
};

// 下拉菜单组件
const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-purple-800 focus:outline-none"
      >
        {label} ▾
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow rounded w-40 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-purple-100 cursor-pointer text-purple-800"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 灵感卡片组件
const InspirationCard = ({ title, subtitle, icon, participants }) => (
  <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start hover:shadow-lg transition">
    <div className="flex items-center mb-4">
      <span className="text-3xl">{icon}</span>
      <h4 className="text-lg font-bold ml-4">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
    <div className="flex items-center mt-auto text-gray-400 text-sm">
      <span>+{participants} 人已参与</span>
    </div>
  </div>
);

// 历史记录组件
const HistoryItem = ({ title, timestamp }) => (
  <div className="flex justify-between items-center py-2 border-b">
    <span className="text-gray-700">{title}</span>
    <span className="text-gray-500 text-sm">{timestamp}</span>
  </div>
);

// 假数据
const inspirationData = [
  {
    title: "可以帮我生成初一英语第一单元的教案吗？",
    subtitle: "可以轻松帮您优化教案",
    icon: "📘",
    participants: 98,
  },
  {
    title: "可以帮我分析总结这篇文章的大纲吗？",
    subtitle: "快速提供思路和文本",
    icon: "📖",
    participants: 45,
  },
  {
    title: "帮我根据提供的模板生成一份教案",
    subtitle: "可以轻松帮您优化教案",
    icon: "📋",
    participants: 75,
  },
  {
    title: "可以帮我分析这篇文章的生词和语法吗？",
    subtitle: "快速提供语法+UI",
    icon: "🖊️",
    participants: 33,
  },
  {
    title: "帮我生成一份九年级上册的数学教学反思",
    subtitle: "教学教反思",
    icon: "📐",
    participants: 62,
  },
];

const historyData = [
  { title: "生成一份语文教案", timestamp: "5分钟前" },
  { title: "分析文章的大纲", timestamp: "10分钟前" },
  { title: "数学课堂反思模板", timestamp: "30分钟前" },
];

export default ChatPage;
