import { useEffect, useState } from "react";
import "./index.css";

const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

function App() {
  // APIから取得したデータを管理
  const [threads, serThreads] = useState([]);

  useEffect(() => {
    // APIからスレッドデータを取得
    fetch(`${BASE_URL}/threads`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('取得したデータ：', data);
        serThreads(data)
      })
      .catch((error) => {
        console.error('データ取得エラー：', error)
      })
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">掲示板</h1>
      <h2 className="text-2xl font-semibold mb-6">スレッド一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {threads.map((thread) => (
          <div key={thread.id} className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {thread.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
