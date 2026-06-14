# Next.js App Router use client sample

Next.js App Routerで、どのような場面で `"use client"` が必要になるのかを最小構成で確認するためのサンプルです。

## このサンプルで確認すること

このサンプルでは、以下を確認できます。

- 表示だけのページでは `"use client"` が不要なこと
- `useState` を使うコンポーネントでは `"use client"` が必要なこと
- `onClick` などのイベントハンドラを使う場合も `"use client"` が必要なこと
- `window` / `localStorage` などのブラウザAPIを使う場合も `"use client"` が必要なこと
- ページ全体ではなく、必要な部品だけClient Componentに切り出せること

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
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## ファイル構成

```txt
app/
├─ page.tsx
└─ components/
   ├─ Counter.tsx
   ├─ AlertButton.tsx
   └─ StorageButton.tsx
```

## 実装内容

### `app/page.tsx`

`app/page.tsx` はServer Componentのままにしています。

このページから、Client Componentとして切り出した以下の3つのコンポーネントを読み込みます。

- `Counter`
- `AlertButton`
- `StorageButton`

```tsx
import AlertButton from './components/AlertButton';
import Counter from './components/Counter';
import StorageButton from './components/StorageButton';

export default function HomePage() {
  return (
    <main>
      <h1>use clientの確認</h1>

      <p>このページ自体はServer Componentです。</p>

      <section>
        <h2>useStateを使う例</h2>
        <Counter />
      </section>

      <section>
        <h2>onClickを使う例</h2>
        <AlertButton />
      </section>

      <section>
        <h2>window / localStorageを使う例</h2>
        <StorageButton />
      </section>
    </main>
  );
}
```

### `app/components/Counter.tsx`

`useState` を使うため、`"use client"` が必要です。

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((current) => current + 1)}>
      count: {count}
    </button>
  );
}
```

### `app/components/AlertButton.tsx`

`onClick` を使うため、`"use client"` が必要です。

```tsx
'use client';

export default function AlertButton() {
  return (
    <button type="button" onClick={() => alert('clicked')}>
      alertを表示
    </button>
  );
}
```

### `app/components/StorageButton.tsx`

`window` / `localStorage` を使うため、`"use client"` が必要です。

```tsx
'use client';

export default function StorageButton() {
  const handleClick = () => {
    localStorage.setItem('message', 'hello');
    alert(window.location.href);
  };

  return (
    <button type="button" onClick={handleClick}>
      localStorageに保存
    </button>
  );
}
```

## 動作確認ポイント

以下を確認します。

- `npm run dev` で起動できる
- `count` ボタンを押すとカウントが増える
- `alertを表示` ボタンを押すとアラートが表示される
- `localStorageに保存` ボタンを押すと現在URLのアラートが表示される
- DevToolsのApplication > Local Storageに `message: hello` が保存される
- `app/page.tsx` には `"use client"` を付けていない
- `"use client"` は `app/components/` 配下の必要なコンポーネントだけに付けている

## 試してみると理解しやすいこと

### `Counter.tsx` から `"use client"` を外す

`useState` を使っているため、エラーになります。

### `AlertButton.tsx` から `"use client"` を外す

`useState` を使っていなくても、`onClick` を使っているためエラーになります。

### `StorageButton.tsx` から `"use client"` を外す

`window` / `localStorage` はブラウザAPIなので、Server Componentでは使えません。

## メモ

Next.js App Routerでは、`app` 配下のコンポーネントは基本的にServer Componentとして扱われます。

そのため、状態管理・イベントハンドラ・ブラウザAPIなど、クライアント側の機能が必要なコンポーネントにだけ `"use client"` を付けます。

ページ全体に `"use client"` を付けるのではなく、必要な部品だけClient Componentに切り出すことで、Server ComponentとClient Componentの役割を分けやすくなります。

## 参考

- Next.js Docs - use client  
  https://nextjs.org/docs/app/api-reference/directives/use-client

- Next.js Docs - Server and Client Components  
  https://nextjs.org/docs/app/getting-started/server-and-client-components

## 関連記事

* Qiita: https://qiita.com/hiro92196/items/a04d8079d6c87817e5db