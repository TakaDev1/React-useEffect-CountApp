# React-useEffect-CountApp

Reactの `useEffect` を使って、状態変更に応じた副作用を学習するためのカウントアプリです。

## 使用技術

- React
- TypeScript
- Vite
- Tailwind CSS
- CSS Modules

## 学習内容

- `useState` による状態管理
- `useEffect` による副作用処理
- `useEffect` の依存配列
- コンポーネント分割
- CSS Modulesによるスタイリング
- Git / GitHubを使った開発フロー

## 機能

- カウントの表示
- カウントアップ
- カウント更新時のコンソール出力

```text
カウント: 0
[カウントアップ]

↓ クリック

カウント: 1
[カウントアップ]

Console:
カウントが更新されました: 1

```

## useEffect 

カウントが変更されるたびに useEffect が実行されます。

useEffect(() => {
  console.log(`カウントが更新されました: ${count}`);
}, [count]);

[count] を依存配列に指定することで、count が変更されたときに副作用が実行されます。

## 起動方法
npm install
npm run dev

ブラウザで表示されたURLにアクセスしてください。
