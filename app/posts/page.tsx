import type { Metadata } from "next";

type Post = {
    id: number;
    title: string;
};

export const metadata: Metadata = {
    title: "About",
    description: "About page",
};

async function sleep(ms: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

async function getPosts(): Promise<Post[]> {
    // loading.tsx の確認用に少し待たせる
    await sleep(1500);

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('記事一覧の取得に失敗しました');
    }

    return res.json();
}

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div className="card">
            <h1>Posts</h1>
            <p>Server Componentでデータ取得して表示しています。</p>

            <ul>
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}