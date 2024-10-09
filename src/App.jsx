import "./index.css";

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">掲示板</h1>
      <h2 className="text-2xl font-semibold mb-6">スレッド一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            スレッド 1
          </h3>
          <p className="mb-3 font-normal text-gray-700">
            これはスレッド 1 の説明です。
          </p>
        </div>
        <div className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            スレッド 2
          </h3>
          <p className="mb-3 font-normal text-gray-700">
            これはスレッド 2 の説明です。
          </p>
        </div>
        <div className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            スレッド 3
          </h3>
          <p className="mb-3 font-normal text-gray-700">
            これはスレッド 3 の説明です。
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
