import React, { useState } from 'react';
import HttpsRequest from '../utils/HttpsRequest'; // 修正路径

const EditBox = () => {
  const [inputValue, setInputValue] = useState(''); // 保存输入框内容
  const [responseMessage, setResponseMessage] = useState(''); // 显示响应信息
  const apiClient = new HttpsRequest('http://1.13.2.20:886'); // 初始化 HttpsRequest

  // 处理输入框内容变化
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 提交按钮点击事件
  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setResponseMessage('Error: Input cannot be empty.');
      return;
    }

    try {
      const response = await apiClient.request('/edux/api0/ping', {
        method: 'POST',
        body: { message: inputValue }, // 提交输入框内容
      });

      console.log('Response:', response); // 打印完整的响应内容
      setResponseMessage(`Response: ${response}`); // 将响应内容显示到页面
    } catch (error) {
      console.error('Error:', error.message); // 打印错误信息
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // 输入框内容变化时触发
        placeholder="Enter your text"
        style={{
          width: '300px',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleSubmit} // 按钮点击时触发
        style={{
          display: 'block',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
      <p style={{ marginTop: '10px', color: responseMessage.startsWith('Error') ? 'red' : 'green' }}>
        {responseMessage}
      </p>
    </div>
  );
};

export default EditBox;
