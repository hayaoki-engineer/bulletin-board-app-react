import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Grid,
  ThreadCard,
  ThreadTitle,
} from "./index.css.js"; // スタイルをインポート

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
    <Container>
      <Title>スレッド一覧</Title>
      <Grid>
        {/* スレッド一覧の表示 */}
        {threads.map((thread) => (
          <ThreadCard key={thread.id}>
            <Link
              to={`/threads/${thread.id}`}
              state={{ threadTitle: thread.title }} // オブジェクト形式で `state` を直接渡す
            >
              <ThreadTitle>{thread.title}</ThreadTitle>
            </Link>
          </ThreadCard>
        ))}
      </Grid>
    </Container>
  );
}

export default ThreadList;
