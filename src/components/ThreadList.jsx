import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

function ThreadList() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // API からスレッドデータを取得
    const fetchThreads = async () => {
      try {
        const response = await fetch(`${BASE_URL}/threads`);
        const data = await response.json();
        setThreads(data); // スレッドデータを state に保存
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">スレッド一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* スレッド一覧の表示 */}
        {threads.map((thread) => (
          <Link
            to={`/threads/${thread.id}`}
            state={{ threadTitle: thread.title }} // オブジェクト形式で `state` を直接渡す
            key={thread.id}
            className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {thread.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ThreadList;
