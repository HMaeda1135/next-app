import Link from 'next/link';

export default function PostNotFound() {
    return (
        <div className="card">
            <h1>記事が見つかりませんでした</h1>
            <p>指定された記事IDのデータは存在しません。</p>

            <Link href="/posts">記事一覧へ戻る</Link>
        </div>
    );
}