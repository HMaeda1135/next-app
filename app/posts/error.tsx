'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="card">
            <h1>エラーが発生しました</h1>
            <p>{error.message}</p>

            <button className="button" type="button" onClick={() => reset()}>
                再試行
            </button>
        </div>
    );
}