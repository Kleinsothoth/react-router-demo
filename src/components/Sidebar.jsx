import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // 引入 useNavigate

const Sidebar = () => {
  const location = useLocation(); // 获取当前路径
  const navigate = useNavigate(); // 用于导航跳转

  return (
    <aside className="bg-purple-100 w-1/5 p-6 flex flex-col">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-purple-800 mb-8">教慧通</h1>

      {/* 导航菜单 */}
      <nav className="space-y-6 text-lg">
        <MenuItem icon="⚙️" label="快捷工具" path="/" isActive={location.pathname === "/"} />
        <MenuItem icon="🤖" label="聊天机器人" path="/chat" isActive={location.pathname === "/chat"} />
        <MenuItem icon="📄" label="输出历史" path="/history" isActive={location.pathname === "/history"} />
        <MenuItem icon="📚" label="个人数据库" path="/database" isActive={location.pathname === "/database"} />
        <MenuItem icon="📈" label="升级/定制" path="/upgrade" isActive={location.pathname === "/upgrade"} />
        <MenuItem icon="🤝" label="寻求合作" path="/collaboration" isActive={location.pathname === "/collaboration"} />
      </nav>

      {/* 免费按钮 */}
      <button className="bg-purple-500 text-white py-2 px-4 rounded-full mt-auto self-start">
        免费
      </button>

      {/* 底部设置 */}
      <div className="flex items-center justify-between mt-6">
        <button className="text-lg text-purple-800">ZH</button>

        {/* 登录按钮 */}
        <button
          className="text-lg text-purple-800"
          onClick={() => navigate("/login")} // 点击跳转到登录页面
        >
          👤
        </button>
      </div>
    </aside>
  );
};

const MenuItem = ({ icon, label, path, isActive }) => (
  <Link
    to={path}
    className={`flex items-center space-x-4 cursor-pointer ${
      isActive ? "text-purple-600 font-bold bg-purple-200 p-2 rounded-md" : "text-purple-800"
    } hover:text-purple-600`}
  >
    <span className="text-2xl">{icon}</span>
    <span>{label}</span>
  </Link>
);

export default Sidebar;
