class HttpsRequest {
  constructor(baseURL = '') {
    this.baseURL = baseURL;
  }

  /**
   * 发送 HTTP 请求
   * @param {string} url - 请求的相对路径
   * @param {object} options - 请求选项，包括 method、headers、body 等
   * @returns {Promise<any>} - 返回一个 Promise，解析为 JSON 或纯文本
   */
  request(url, options = {}) {
    const fullUrl = `${this.baseURL}${url}`;

    // 从 localStorage 中获取 uid 和 utoken
    const uid = localStorage.getItem('uid');
    const utoken = localStorage.getItem('utoken');

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(uid && utoken ? { uid, utoken } : {}), // 如果有 uid 和 utoken，则添加到请求头
          ...options.headers, // 合并用户传入的 headers
        },
        body: options.body ? JSON.stringify(options.body) : null, // 如果有 body，则序列化为 JSON
      })
        .then((response) => {
          if (!response.ok) {
            // 如果响应不是 2xx，直接抛出错误
            return response.text().then((errorText) => {
              reject(new Error(errorText || `HTTP error! status: ${response.status}`));
            });
          }

          // 尝试解析为 JSON，否则直接返回纯文本
          return response
            .text()
            .then((text) => {
              try {
                return JSON.parse(text); // 尝试解析 JSON
              } catch {
                return text; // 如果解析失败，返回纯文本
              }
            });
        })
        .then((data) => resolve(data)) // 成功时返回解析结果
        .catch((error) => reject(error)); // 捕获任何错误
    });
  }
}

export default HttpsRequest;
