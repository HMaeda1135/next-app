# Next.js App Router basic sample

Next.js App Routerの基本的な構成を確認するためのサンプルです。

React経験者がNext.js App Routerを触るときに最初に混乱しやすい、以下のようなポイントを最小構成で確認できます。

## このサンプルで確認すること

このサンプルでは、以下を確認できます。

- `app/` 配下のファイルルーティング
- `page.tsx` によるページ作成
- `layout.tsx` による共通レイアウト
- Server Component / Client Component の違い
- `"use client"` が必要になる場面
- `loading.tsx` によるローディング表示
- `error.tsx` によるエラー表示
- `not-found.tsx` による404表示
- Route Handlers によるAPI作成
- `metadata` によるページメタ情報の設定

## 環境

検証時の環境です。

```txt
Node.js: 24.13
npm: 11.6
Next.js: 16.2
React: 19.2
TypeScript: ^5
OS: Windows 11
```

## セットアップ

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

ブラウザで以下を開きます。

```txt
http://localhost:3000
```

## ビルド

```bash
npm run build
```

Windows環境でTurbopackのパス長エラーが出る場合は、プロジェクトを `C:\dev\next-app` のような浅いパスに配置するか、検証目的では以下のようにWebpackでビルドできます。

```bash
npx next build --webpack
```

## 主なファイル構成

```txt
app/
├─ layout.tsx
├─ page.tsx
├─ about/
│  └─ page.tsx
├─ counter/
│  └─ page.tsx
├─ posts/
│  ├─ page.tsx
│  ├─ loading.tsx
│  ├─ error.tsx
│  └─ not-found.tsx
└─ api/
   └─ hello/
      └─ route.ts
```

## 各ファイルの役割

### `app/layout.tsx`

アプリ全体の共通レイアウトを定義します。

`html` / `body` や共通ナビゲーションなど、複数ページで共通して使う要素を配置します。

### `app/page.tsx`

トップページです。

App Routerでは、`app/page.tsx` が `/` に対応します。

### `app/about/page.tsx`

`/about` に対応するページです。

App Routerでは、ディレクトリ構成がそのままURLに対応します。

### `app/counter/page.tsx`

Client Componentの動作を確認するためのページです。

`useState` や `onClick` など、ブラウザ側で動く処理を使う場合は `"use client"` が必要になります。

### `app/posts/page.tsx`

投稿一覧など、データ取得を伴う画面を想定したページです。

Server Componentでデータ取得する流れを確認できます。

### `app/posts/loading.tsx`

`/posts` 配下のローディング表示を定義します。

データ取得中など、ページの表示が完了するまでの間に表示されます。

### `app/posts/error.tsx`

`/posts` 配下でエラーが発生した場合の表示を定義します。

`error.tsx` はClient Componentとして扱う必要があります。

### `app/posts/not-found.tsx`

`/posts` 配下で404表示を行うためのファイルです。

`notFound()` を呼び出した場合などに表示されます。

### `app/api/hello/route.ts`

Route Handlersのサンプルです。

`/api/hello` にアクセスすると、APIレスポンスを返します。

## 動作確認ポイント

以下を確認します。

- `/` にアクセスするとトップページが表示される
- `/about` にアクセスするとaboutページが表示される
- `/counter` でボタン操作ができる
- `/posts` でデータ取得を伴うページの挙動を確認できる
- `loading.tsx` によるローディング表示を確認できる
- `error.tsx` によるエラー表示を確認できる
- `not-found.tsx` による404表示を確認できる
- `/api/hello` にアクセスするとAPIレスポンスが返る

## App Routerの基本メモ

Next.js App Routerでは、`app/` 配下のディレクトリ構成がルーティングに対応します。

```txt
app/page.tsx              -> /
app/about/page.tsx        -> /about
app/posts/page.tsx        -> /posts
app/api/hello/route.ts    -> /api/hello
```

また、`layout.tsx` / `loading.tsx` / `error.tsx` / `not-found.tsx` のようなファイル名には、それぞれ特別な役割があります。

## Server Component / Client Component

App Routerでは、`app/` 配下のコンポーネントは基本的にServer Componentとして扱われます。

そのため、以下のような処理はServer Componentのまま実装できます。

- データ取得
- 静的な表示
- サーバー側で扱う処理
- 秘密情報を使う処理

一方で、以下のような処理を使う場合はClient Componentにする必要があります。

- `useState`
- `useEffect`
- `onClick` などのイベントハンドラ
- `window`
- `localStorage`
- ブラウザ上で動くライブラリ

Client Componentにする場合は、ファイルの先頭に `"use client"` を書きます。

## Route Handlers

App Routerでは、`route.ts` を使ってAPIを作成できます。

例：

```txt
app/api/hello/route.ts -> /api/hello
```

画面だけでなく、簡単なAPIエンドポイントも同じ `app/` 配下で管理できます。

## 参考

- Next.js Docs - App Router  
  https://nextjs.org/docs/app

- Next.js Docs - Project Structure  
  https://nextjs.org/docs/app/getting-started/project-structure

- Next.js Docs - Server and Client Components  
  https://nextjs.org/docs/app/getting-started/server-and-client-components

- Next.js Docs - Route Handlers  
  https://nextjs.org/docs/app/getting-started/route-handlers

- Next.js Docs - File-system conventions  
  https://nextjs.org/docs/app/api-reference/file-conventions

## 関連記事

* Zenn: https://zenn.dev/maeda_dev/articles/63f80e1fe84af1