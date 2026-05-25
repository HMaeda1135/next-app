import type { Metadata } from "next";
import { notFound } from 'next/navigation';

type Post = {
    id: number;
    title: string;
    body: string;
};

type PostDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { id } = await params;

    return {
        title: `Post ${id}`,
        description: `Post detail page for ${id}`,
    };
}

async function getPost(id: string): Promise<Post | null> {
    if (id === '999') {
        return null;
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store',
    });

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error('記事詳細の取得に失敗しました');
    }

    return res.json();
}

export default async function PostDetailPage({
    params,
}: PostDetailPageProps) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="card">
            <h1>{post.title}aa</h1>
            <p>{post.body}</p>
            <p>
                Post ID: <strong>{post.id}</strong>
            </p>
        </div>
    );
}