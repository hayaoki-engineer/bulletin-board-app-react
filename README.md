### ディレクトリ構造

```
src
├── assets                  # アセット（画像やスタイル）を格納するディレクトリ
├── components              # 各種 React コンポーネントを格納するディレクトリ
│   ├── PostList.jsx        # 投稿一覧を表示するコンポーネント
│   ├── ThreadForm.jsx      # 新規スレッド作成フォームを表示するコンポーネント
│   └── ThreadList.jsx      # スレッド一覧を表示するコンポーネント
├── App.css                 # グローバルスタイル（Tailwind CSS の設定）
├── App.jsx                 # アプリケーションのルートコンポーネント
├── index.css               # 基本的な CSS スタイル（Tailwind CSS をインポート）
└── main.jsx                # React アプリケーションのエントリポイント
```


### 各ファイル・ディレクトリの説明

- **`App.jsx`**:
  - アプリケーション全体のルーティング設定とページ表示のルートコンポーネント

- **`components`**:
  
  - **`ThreadList.jsx`**:
    - すべてのスレッドを一覧表示し、スレッドごとに詳細画面へのリンクを提供する

  - **`ThreadForm.jsx`**:
    - 新しいスレッドを作成するためのフォームを表示する

  - **`PostList.jsx`**:
    - 特定のスレッド内の投稿を表示し、投稿の追加を管理する
  

