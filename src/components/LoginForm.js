import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 用于页面跳转
import HttpsRequest from "../utils/HttpsRequest"; // 确保路径正确

const LoginForm = () => {
  const [username, setUsername] = useState(""); // 保存用户名
  const [password, setPassword] = useState(""); // 保存密码
  const [responseMessage, setResponseMessage] = useState(""); // 显示响应信息
  const [loading, setLoading] = useState(false); // 加载状态
  const apiClient = new HttpsRequest("http://1.13.2.20:886"); // 初始化 HttpsRequest
  const navigate = useNavigate(); // 用于页面跳转

  // 处理用户名输入
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // 处理密码输入
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 登录功能
  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setResponseMessage("Error: Username and password cannot be empty.");
      return;
    }

    try {
      setLoading(true); // 设置加载状态
      setResponseMessage("Logging in...");
      const response = await apiClient.request("/edux/api0/user/login", {
        method: "POST",
        body: {
          code1: username, // 用户名
          code2: password, // 密码
          isRegister: 0, // 登录操作
        },
      });

      console.log("Login Response:", response);

      if (response.uid && response.token) {
        // 存储登录信息
        localStorage.setItem("uid", response.uid);
        localStorage.setItem("token", response.token);

        setResponseMessage("Login Success! Redirecting...");
        // 跳转到首页或用户尝试访问的页面
        const redirectTo = localStorage.getItem("redirectTo") || "/";
        localStorage.removeItem("redirectTo");
        setTimeout(() => navigate(redirectTo), 1500);
      } else {
        setResponseMessage("Login failed: Invalid username or password.");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      setResponseMessage(`Login Failed: ${error.message}`);
    } finally {
      setLoading(false); // 恢复加载状态
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Login</h2>

      {/* 用户名输入框 */}
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange} // 绑定输入事件
        placeholder="Enter username"
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* 密码输入框 */}
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange} // 绑定输入事件
        placeholder="Enter password"
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* 登录按钮 */}
      <button
        onClick={handleLogin} // 绑定登录功能
        disabled={loading} // 禁用按钮在加载时
        style={{
          display: "inline-block",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer", // 禁用时改变光标样式
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* 显示响应结果 */}
      <p
        style={{
          marginTop: "10px",
          color: responseMessage.startsWith("Error") ? "red" : "green",
        }}
      >
        {responseMessage}
      </p>
    </div>
  );
};

export default LoginForm;
