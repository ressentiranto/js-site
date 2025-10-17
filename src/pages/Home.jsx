import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero">
      <h1>Украшения в спокойной серой гамме</h1>
      <p>Лаконичный дизайн и аккуратная обработка. Подборка для повседневной носки.</p>
      <div style={{marginTop:16}}>
        <Link to="/catalog" className="btn">К каталогу</Link>
      </div>
      <div className="grid">
        <div className="card"><img src="https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1000&auto=format&fit=crop" alt="Витрина" /></div>
        <div className="card"><img src="https://images.unsplash.com/photo-1603566234499-857cbb1d46c1?q=80&w=1000&auto=format&fit=crop" alt="Деталь" /></div>
      </div>
    </section>
  )
}
