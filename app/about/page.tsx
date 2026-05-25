import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About page",
};


export default function AboutPage() {
    return (
        <div className="card">
            <h1>About</h1>
            <p>
                このページは <code>app/about/page.tsx</code> で作成しています。
            </p>
            <p>
                App Routerでは、フォルダ構成によってURLのルートが決まります。
            </p>
        </div>
    );
}