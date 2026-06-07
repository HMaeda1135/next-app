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