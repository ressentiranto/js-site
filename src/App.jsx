import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <div className="wrap row">
          <div className="brand"><span className="dot"></span> sinnergems</div>
          <nav>
            <Link to="/" className="btn" style={{marginRight:8}}>Главная</Link>
            <Link to="/catalog" className="btn">Каталог</Link>
          </nav>
        </div>
      </header>
      <main className="wrap">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} sinnergems</div>
      </footer>
    </div>
  )
}
