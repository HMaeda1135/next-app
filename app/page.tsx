import Counter from '@/components/Counter';

export default function HomePage() {
  return (
    <div className="card">
      <h1>Home</h1>
      <p>Next.js App Routerの検証用トップページです。</p>

      <h2>Client Componentの確認</h2>
      <p>
        下のボタンは <code>'use client'</code> を付けたコンポーネントです。
      </p>

      <Counter />
    </div>
  );
}