import React, { useState } from "react";
import "./App.css"; // 使用同样的样式文件

function Chatbot() {
  const [activeButtons, setActiveButtons] = useState({
    model: false,
    grade: false,
    version: false,
    subject: false,
  });

  const toggleButton = (buttonName) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <div className="app-container">
      {/* 左侧导航栏 */}
      <aside className="sidebar">
        <h1 className="logo">教慧通</h1>
        <nav className="menu">
          <ul>
            <li className="menu-item">
              <a href="/">快捷工具</a>
            </li>
            <li className="menu-item active">聊天机器人</li>
          </ul>
        </nav>
        <button className="free-btn">免费</button>
      </aside>

      {/* 右侧聊天机器人内容 */}
      <main className="content">
        <header className="header">
          <h1>你好！我是教慧通</h1>
          <p>专为学校设计</p>
        </header>
        <section className="chat-area">
          <div className="chat-box">
            <p>你好！我是教慧通，是你的 AI 教学教练。你可以问我任何与教学相关的问题。</p>
          </div>
          <div className="suggestions">
            <h3>功能按钮</h3>
            <div className="buttons-container">
              <button
                className={`toggle-button ${activeButtons.model ? "active" : ""}`}
                onClick={() => toggleButton("model")}
              >
                模型
              </button>
              {activeButtons.model && (
                <div className="dropdown-content">模型选项内容</div>
              )}

              <button
                className={`toggle-button ${activeButtons.grade ? "active" : ""}`}
                onClick={() => toggleButton("grade")}
              >
                年级
              </button>
              {activeButtons.grade && (
                <div className="dropdown-content">年级选项内容</div>
              )}

              <button
                className={`toggle-button ${activeButtons.version ? "active" : ""}`}
                onClick={() => toggleButton("version")}
              >
                版本
              </button>
              {activeButtons.version && (
                <div className="dropdown-content">版本选项内容</div>
              )}

              <button
                className={`toggle-button ${activeButtons.subject ? "active" : ""}`}
                onClick={() => toggleButton("subject")}
              >
                学科
              </button>
              {activeButtons.subject && (
                <div className="dropdown-content">学科选项内容</div>
              )}
            </div>
          </div>
        </section>
        <footer className="chat-footer">
          <input
            type="text"
            className="chat-input"
            placeholder="开始探索未知的问题..."
          />
          <button className="send-button">发送</button>
        </footer>
      </main>
    </div>
  );
}

export default Chatbot;
