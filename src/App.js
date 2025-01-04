// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // 左侧导航栏
import HomePage from "./pages/HomePage";     // 首页
import ChatPage from "./pages/ChatPage";     // 聊天机器人页面
import HistoryPage from "./pages/HistoryPage"; // 输出历史页面
import DatabasePage from "./pages/DatabasePage"; // 个人数据库页面
import LoginForm from "./components/LoginForm";  // 登录页面

const App = () => {
  return (
    <div className="flex h-screen">
      {/* 左侧导航栏 */}
      <Sidebar />

      {/* 右侧主内容区域 */}
      <main className="flex-1 bg-gray-50 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/database" element={<DatabasePage />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
