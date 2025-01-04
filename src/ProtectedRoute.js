// ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [checking, setChecking] = useState(true); // 用于显示“正在验证”过程中的状态
  const [isValid, setIsValid] = useState(false);  // 用于标记登录是否有效

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");

    // 如果本地都没存，就算没登录
    if (!token || !uid) {
      setChecking(false);
      setIsValid(false);
      return;
    }

    // 若存在 token/uid，则向后端确认是否有效
    fetch("/user/pulse", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 假设后端用 Authorization Bearer Token 来验证
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.ok) {
          // 如果返回 200，表示 token 有效
          setIsValid(true);
        } else {
          // 如果是 401/403，表示过期或无效
          setIsValid(false);
        }
      })
      .catch((err) => {
        console.error("验证 token 出错：", err);
        setIsValid(false);
      })
      .finally(() => {
        setChecking(false);
      });
  }, []);

  // 验证中的加载提示
  if (checking) {
    return <div>正在验证登录信息，请稍候...</div>;
  }

  // 验证失败 -> 跳转到登录页面
  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  // 验证成功 -> 渲染真正的子组件
  return children;
}

export default ProtectedRoute;
