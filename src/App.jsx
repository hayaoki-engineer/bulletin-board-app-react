import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import ThreadList from "./components/ThreadList";
import ThreadForm from "./components/ThreadForm";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">掲示板</h1>
        {/* ナビゲーションバー */}
        <nav className="text-center mb-6">
          <Link to="/" className="text-blue-600 hover:underline mx-4">
            ホーム
          </Link>
          <Link
            to="/threads/new"
            className="text-blue-600 hover:underline mx-4"
          >
            新規作成
          </Link>
        </nav>
        {/* ルートの設定 */}
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<ThreadForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
