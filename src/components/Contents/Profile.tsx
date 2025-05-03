// import React from 'react'

const Profile = () => {
  return (
    <div className="profile">
        <div className="prof-img">
            <img src="src/assets/me.jpg" alt="実はマグロの赤身が一番好きです" />
        </div>
        <div className="prof-message">
            <p>初めまして、齋藤です。</p>
            <p>これまでは経理の仕事を中心に、管理部門で働いてきました。</p>
            <p>2024年7月頃から一念発起し、プログラミングを勉強し始めています。</p>
            <p>いつか人の役に立つようなアプリ開発に携われるよう、</p>
            <p>フルスタック型のエンジニアを目指しています。</p>
            <p>次の勉強目標：</p>
            <p>TypeScript, Python, 資格勉強（応用技術 or セキュリティ）</p>
            
        </div>
        <div className="prof-tech-stack">
            <p>技術スタック：</p>
            <p>HTML/CSS, JavaScript, TypeScript</p>
            <p>React, Vite, MUI</p>
            <p>PHP, Python, Flask</p>
            <p>VSCode, Git/GitHub, Firebase, Render, Vercel</p>
        </div>
    </div>
  )
}

export default Profile
