# Next.js App Router Practice

React経験者がNext.js App Routerを触るときに、最初に混乱しやすいポイントを確認するためのサンプルプロジェクトです。

Zenn記事とセットで、App Routerの基本的なファイル規約や動作を確認する目的で作成しています。

## Article

Zenn記事：

- React経験者がNext.js App Routerで最初に混乱したポイントまとめ

※記事URLは公開後に追記予定です。

## Tech Stack

```txt
Node.js: 24.13
npm: 11.6
Next.js: 16.2
React: 19.2
TypeScript: ^5
OS: Windows 11
```

## What This Project Covers

このサンプルでは、以下を確認できます。

- `app/page.tsx` によるトップページ表示
- `app/about/page.tsx` によるファイルベースルーティング
- `app/layout.tsx` による共通レイアウト
- `components/Counter.tsx` によるClient Component
- `'use client'` と `useState` の確認
- Server Componentでのデータ取得
- `app/posts/loading.tsx` によるローディングUI
- `app/posts/error.tsx` によるエラーUI
- `app/posts/[id]/page.tsx` による動的ルート
- `notFound()` と `not-found.tsx` による404表示
- `app/api/hello/route.ts` によるRoute Handler

## Getting Started

依存パッケージをインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下にアクセスします。

```txt
http://localhost:3000
```

## Verification URLs

以下のURLで動作確認できます。

```txt
/              HomeページとCounterの確認
/about         Aboutページの確認
/posts         Server Componentでの記事一覧取得
/posts/1       動的ルートの記事詳細
/posts/999     not-found.tsx の確認
/api/hello     Route Handlerの確認
```

## Notes

`/api/hello` は画面ページではなくRoute Handlerです。  
そのため、`app/layout.tsx` の共通ヘッダーは表示されず、JSONレスポンスのみが返ります。

`error.tsx` を確認する場合は、`app/posts/page.tsx` などで一時的に `throw new Error()` を実行してください。

例：

```tsx
export default async function PostsPage() {
  throw new Error('検証用のエラーです');

  return <div>Posts</div>;
}
```

## Directory Structure

```txt
app/
  api/
    hello/
      route.ts
  about/
    page.tsx
  posts/
    [id]/
      not-found.tsx
      page.tsx
    error.tsx
    loading.tsx
    page.tsx
  globals.css
  layout.tsx
  page.tsx

components/
  Counter.tsx
```

## References

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js File-system conventions](https://nextjs.org/docs/app/api-reference/file-conventions)
- [Next.js Route Handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route)
- [Next.js Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
