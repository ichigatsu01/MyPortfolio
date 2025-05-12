import { useEffect, useState } from 'react'
import './App.css'
import Contents from './components/Contents/Contents'
import Footer from './components/Footer'
import Header from './components/Header'
import Loading from './components/Loading'

function App() {
  // Loading画面の設定
  const [loading, setLoading] = useState(true);
  // 初回アクセス時のみ起動するようにする
  useEffect(() => {
    const done = () => setLoading(false);
    // 既に読み込み済みなら即座にLoading.tsxを閉じる
    if (document.readyState === 'complete') {
      done();
      return;
    }

    // 読込がまだなら load を待つ
    window.addEventListener("load", done)
    return () => window.removeEventListener("load", done)
  }, [])

  return (
    <div className='App'>
      <Loading open={loading} />
      {/* <Header setLoading={setLoading}/> */}
      <Header />
      <Contents />
      <Footer />
    </div>
  )
}

export default App
