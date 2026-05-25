// app/posts/error.tsx

"use client";

export default function Error({
    error,
    unstable_retry,
}: {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}) {
    return (
        <div>
            <h2>エラーが発生しました</h2>
            <p>{error.message}</p>
            <button onClick={() => unstable_retry()}>再試行</button>
        </div>
    );
}