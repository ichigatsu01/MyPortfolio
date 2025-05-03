// import React from 'react'

type productWork = {
  img: string;
  link: string;
  title: string;
  tech: string;
  explain: string;
}

const Product = ({img, link, title, tech, explain}: productWork) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <ul>
        <li><a target='_brank'　href={link}><img src={img} alt="画面イメージ" /></a></li>
        <li>技術:{tech}</li>
        <li>説明：{explain}</li>
        <li>デプロイ：<a href={link}>リンク</a></li>
      </ul>
      </div>
  )
}

export default Product
