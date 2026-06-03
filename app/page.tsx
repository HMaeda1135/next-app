import AlertButton from './components/AlertButton';
import Counter from './components/Counter';
import StorageButton from './components/StorageButton';

export default function HomePage() {
  return (
    <main>
      <h1>use clientの確認</h1>

      <p>このページ自体はServer Componentです。</p>

      <section>
        <h2>useStateを使う例</h2>
        <Counter />
      </section>

      <section>
        <h2>onClickを使う例</h2>
        <AlertButton />
      </section>

      <section>
        <h2>window / localStorageを使う例</h2>
        <StorageButton />
      </section>
    </main>
  );
}