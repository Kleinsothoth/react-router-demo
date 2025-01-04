// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// 引入各个页面
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";
import DatabasePage from "./pages/DatabasePage";
import LoginForm from "./components/LoginForm";

// 引入自定义的 ProtectedRoute
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* 左侧导航栏，一般只有登录后才显示。
          如果你想登录页也隐藏它，就可以做条件渲染或者干脆放在ProtectedRoute里 */}
      <Sidebar />

      {/* 右侧主内容区域 */}
      <main className="flex-1 bg-gray-50 p-8 overflow-auto">
        <Routes>
          {/* 登录页面，不需要验证 */}
          <Route path="/login" element={<LoginForm />} />

          {/* 受保护的路由：如果没登录或 token 无效，会自动跳转到 /login */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/database"
            element={
              <ProtectedRoute>
                <DatabasePage />
              </ProtectedRoute>
            }
          />

          {/* 其它的路由，比如 404 等 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
