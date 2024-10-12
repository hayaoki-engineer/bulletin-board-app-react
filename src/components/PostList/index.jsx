import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import {
  Container,
  Title,
  BackLink,
  PostContainer,
  PostItem,
  PostText,
  EmptyMessage,
  FormContainer,
  FormTitle,
  TextArea,
  SubmitButton,
} from "./index.css.js"; // スタイルをインポート

const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

function PostList() {
  const { thread_id } = useParams();

  const location = useLocation();
  const [threadTitle, setThreadTitle] = useState(
    location?.state?.threadTitle || ""
  );

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!location.state) {
          const threadResponse = await fetch(
            `${BASE_URL}/threads/${thread_id}`
          );
          const threadData = await threadResponse.json();
          setThreadTitle(threadData.title);
        }

        const response = await fetch(`${BASE_URL}/threads/${thread_id}/posts`);
        const data = await response.json();
        console.log("取得した投稿データ:", data); // 投稿データを確認

        setPosts(data.posts || data);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchPosts();
  }, [thread_id, location.state]);

  // 新しい投稿をAPIに送信、投稿一覧を更新
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 新しい投稿のデータ
    const newPostData = { post: newPost };
    console.log("newPostDataの取得", newPostData);

    try {
      // 新しい投稿をAPIに送信
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

      // 新しい投稿を送信後、最新の投稿一覧を再取得
      const updatedPostsResponse = await fetch(
        `${BASE_URL}/threads/${thread_id}/posts`
      );
      const updatedPosts = await updatedPostsResponse.json();
      console.log("updatedPostsの取得", updatedPosts);
      // -> {threadId: '4dfd828f-4366-431e-91df-3d8862e7e1bf', posts: Array(4)}

      // スレッド内の投稿一覧を更新
      setPosts(updatedPosts.posts || updatedPosts);
      setNewPost("");
    } catch (error) {
      console.error("投稿に失敗しました:", error);
    }
  };

  return (
    <Container>
      <Title>{threadTitle || "タイトルを取得中..."}</Title>
      <BackLink as={Link} to="/">
        スレッド一覧に戻る
      </BackLink>
      <PostContainer>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostItem key={post.id}>
              <PostText>
                {post.post || "内容がありません"}
              </PostText>
            </PostItem>
          ))
        ) : (
          <EmptyMessage>投稿がありません。</EmptyMessage>
        )}
      </PostContainer>
      <FormContainer>
        <FormTitle>新しい投稿を作成</FormTitle>
        <form onSubmit={handleSubmit}>
          <TextArea
            id="newPost"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows="4"
            placeholder="投稿内容を入力してください"
            required
          />
          <SubmitButton type="submit">投稿</SubmitButton>
        </form>
      </FormContainer>
    </Container>
  );
}

export default PostList;
