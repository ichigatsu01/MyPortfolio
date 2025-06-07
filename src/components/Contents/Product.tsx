type productWork = {
  img: string;
  link: string;
  title: string;
  tech: string;
  explain: string;
  readme: string;
}

const Product = ({img, link, title, tech, explain, readme}: productWork) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <ul>
        <li><a target='_brank' href={link}><img src={img} alt="画面イメージ" /></a></li>
        <li>技術:{tech}</li>
        <li>説明：{explain}</li>
        <li>
          <span style={{marginRight: '30px'}}>デプロイ：<a target='_brank' href={link}>リンク</a></span>
          <span>README(github)：<a target='_brank' href={readme}>リンク</a></span>
        </li>
      </ul>
      </div>
  )
}

export default Product
