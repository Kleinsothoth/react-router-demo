import React, { useEffect, useState } from 'react';

const TestHttpRequest = ({ apiClient }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // 调用封装的 HttpsRequest
        const response = await apiClient.request('/test-endpoint', {
          method: 'GET',
        });
        setData(response);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [apiClient]);

  return (
    <div>
      <h1>HttpsRequest Test</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default TestHttpRequest;
