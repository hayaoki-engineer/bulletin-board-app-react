import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

function PostList() {
  const { thread_id } = useParams(); // URL パラメータからスレッド ID を取得
  const location = useLocation(); // Link から渡された state を取得
  const [posts, setPosts] = useState([]); // 投稿データを管理する state
  const [threadTitle, setThreadTitle] = useState(
    location?.state?.threadTitle || ""
  ); // スレッドのタイトルを管理する state
  const [newPost, setNewPost] = useState(""); // 新しい投稿内容を管理する state

  useEffect(() => {
    // スレッド情報と投稿データを取得する非同期関数
    const fetchPosts = async () => {
      try {
        if (!location.state) {
          const threadResponse = await fetch(
            `${BASE_URL}/threads/${thread_id}`
          );
          const threadData = await threadResponse.json();
          setThreadTitle(threadData.title); // スレッドタイトルを設定
        }

        const response = await fetch(`${BASE_URL}/threads/${thread_id}/posts`);
        const data = await response.json();
        console.log("取得した投稿データ:", data); // デバッグ用
        setPosts(data.posts || data); // `data.posts` があれば使用、なければ `data` を設定
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchPosts();
  }, [thread_id, location.state]);

  // 新しい投稿を API に送信し、投稿一覧を更新する関数
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPost.trim() === "") {
      return; // 空白投稿は送信しない
    }

    const newPostData = {
      body: newPost,
    };

    try {
      console.log("新しい投稿を送信中:", newPostData); // デバッグ用
      const response = await fetch(`${BASE_URL}/threads/${thread_id}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const addedPost = await response.json();
      console.log("追加された投稿:", addedPost); // デバッグ用

      // サーバー側から最新の投稿一覧を再取得
      const updatedPostsResponse = await fetch(
        `${BASE_URL}/threads/${thread_id}/posts`
      );

      const updatedPosts = await updatedPostsResponse.json();
      console.log("更新された投稿一覧:", updatedPosts); // デバッグ用

      setPosts(updatedPosts.posts || updatedPosts);
      setNewPost(""); // 投稿フォームをリセット
    } catch (error) {
      console.error("投稿に失敗しました:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      {/* スレッドタイトルを表示 */}
      <h2 className="text-3xl font-bold mb-4">
        {threadTitle || "タイトルを取得中..."}
      </h2>
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline">
          スレッド一覧に戻る
        </Link>
      </div>

      {/* 投稿の一覧表示 */}
      <div className="space-y-4 mb-8">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex justify-between items-center"
            >
              <p className="text-gray-800">
                {post.body || post.post || "内容がありません"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">投稿がありません。</p>
        )}
      </div>

      {/* 新規投稿フォーム */}
      <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">新しい投稿を作成</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            id="newPost"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="投稿内容を入力してください"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            投稿
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostList;
