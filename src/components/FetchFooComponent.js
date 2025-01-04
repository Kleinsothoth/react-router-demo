import React, { useState } from 'react';
import HttpsRequest from '../utils/HttpsRequest'; // 确保 HttpsRequest 类已正确导入

const FetchFooComponent = () => {
  const [buttonText, setButtonText] = useState('Click me to fetch data'); // 按钮默认文本
  const apiClient = new HttpsRequest('http://1.13.2.20:886'); // 初始化 HttpsRequest

  // 点击事件处理函数
  const handleClick = async () => {
    try {
      // 调用封装的 request 方法
      const response = await apiClient.request('/edux/api0/foo', { method: 'GET' });
      setButtonText(response); // 将按钮文本替换为返回的字符串
    } catch (error) {
      setButtonText('Request failed: ' + error.message); // 请求失败时显示错误信息
    }
  };

  return (
    <div
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#FFF',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
      }}
      onClick={handleClick} // 点击事件绑定
    >
      {buttonText} {/* 显示当前按钮文本 */}
    </div>
  );
};

export default FetchFooComponent;
