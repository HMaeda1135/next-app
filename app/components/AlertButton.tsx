'use client';

export default function AlertButton() {
    return (
        <button type="button" onClick={() => alert('clicked')}>
            alertを表示
        </button>
    );
}