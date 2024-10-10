import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

function ThreadForm() {
  const [title, setTitle] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newThread = {
      title: title,
    }

    try {
      const response = await fetch(`${BASE_URL}/threads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newThread),  // 入力データを JSON 形式で送信
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 成功したらホーム画面に遷移
      navigate('/');
    } catch (error) {
      console.error('スレッドの作成に失敗しました:', error);
    }
  };

  return (
     <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">新規スレッド作成</h2>
      <form onSubmit={handleSubmit}>
        {/* タイトル入力フィールド */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            タイトル
          </label>
          <input
            id="title"
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          スレッドを作成する
        </button>
      </form>
    </div>
  )
}

export default ThreadForm;