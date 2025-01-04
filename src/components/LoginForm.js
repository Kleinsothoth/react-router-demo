import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 点击登录按钮时触发
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 调用后端接口
      const response = await fetch("http://1.13.2.20:886/edux/api0/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 根据后端需要的字段名来发送
        body: JSON.stringify({
          username,   // 注意字段要和后端约定一致
          password,
        }),
      });

      // 如果后端返回 HTTP 4xx/5xx，则 response.ok = false
      if (!response.ok) {
        // 可以在这里做更具体的错误提示，比如区分401/403等
        alert("登录失败，可能是用户名或密码错误，或接口异常。");
        return;
      }

      // 解析后端返回的JSON
      const result = await response.json();

      // 假设后端格式 { code: 0, message: "..", data: { token, uid } }
      if (result.code !== 0) {
        // 非0表示后端判定登录失败
        alert(`登录失败：${result.message || "请检查用户名或密码"}`);
        return;
      }

      // 如果 code === 0，说明登录成功
      const { token, uid } = result.data;

      // 将 token, uid 存储到 localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("uid", uid);

      // 跳转到主页面，比如首页 "/"
      navigate("/");
    } catch (error) {
      console.error("登录请求发生错误:", error);
      alert("登录请求出错，请检查网络或接口。");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl mb-4">登录</h2>
      <form onSubmit={handleSubmit} className="w-64">
        <div className="mb-4">
          <label className="block mb-1">用户名</label>
          <input
            type="text"
            className="border w-full px-2 py-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入用户名"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">密码</label>
          <input
            type="password"
            className="border w-full px-2 py-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2"
        >
          登录
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
