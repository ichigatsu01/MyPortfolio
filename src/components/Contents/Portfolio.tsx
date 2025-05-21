import Product from "./Product";
// import React from 'react'

type Work = {
  img: string;
  link: string;
  title: string;
  tech: string;
  explain: string;
}

const Portfolio = () => {
  // 作品群。imgを変更するときは画像タイトルを更新しないとキャッシュが更新されない
  // 例:00.png -> 00_a.png
  const works: Work[] = [
    {
      img: "img_product/01.png",
      link: "https://my-portfolio-bay-two-44.vercel.app/",
      title: "Portfolio-Site",
      tech: "HTML/CSS, React/Vite, TypeScript, MUI",
      explain: "このサイトそのものです。レスポンシブは対応作業中。"
    },
    {
      img: "img_product/00.png",
      link: "https://cbt-app-hazel.vercel.app//",
      title: "CBT-app",
      tech: "HTML/CSS, React/Vite, PHP, MySQL, MUI",
      explain: "カウンセリングの一環で用いられる、認知行動療法のコラム表をアプリ化したものです。SQLを用いた保存・読込の他、JSONファイル形式で出力することも可能です。実際にSQLを動かして保存しているため、個人情報や機密情報などは保存しないようにしてください！"
    },
    {
      img: "img_product/02.png",
      link: "https://shiritori-app.onrender.com/",
      title: "しりとりアプリ",
      tech: "HTML/CSS, Python, Flask, Bootstrap(アイコンのみ)",
      explain: "Python内に辞書を持たせてしりとりを出来るようにしました。Renderを利用しているため、起動までに時間がかかる可能性があります。表示がおかしい場合は「再スタート」をクリックしてください。レスポンシブ非対応。"
    },
    {
      img: "img_product/03.jpg",
      link: "https://weatherapi-fceebvwkapd7uzgpytk2gy.streamlit.app/",
      title: "現在時刻の全国天気アプリ",
      tech: "Python, Folium, Streamlit, Streamlit-folium",
      explain: "OpenWeatherの現在時刻の天気APIをPythonで取得し、Streamlit-foliumで表示します。レスポンシブ非対応。"
    },
    {
      img: "img_product/04.jpg",
      link: "https://kitakatasuikomap-ajrp3msyidm2tkvnalqljy.streamlit.app/",
      title: "北方水滸伝地図",
      tech: "Python, Folium, Streamlit, Streamlit-folium",
      explain: "北方謙三の水滸伝を地図と一緒に読めたらいいのになあ、と思って作った趣味丸出しのアプリ。"
    },
  ];
  return (
    <div className="portfolio">
      {works.map((work, index) => (
        <Product
          key={index}
          img={work.img}
          link={work.link}
          title={work.title}
          tech={work.tech}
          explain={work.explain}
        />
      ))}
    </div>
  )
}

export default Portfolio
