import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { id:1, name:'Янтарь', price:'€120', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTm6MKwY3weHnTan3cQscsjv9iYumKpEXmg&s?q=80&w=800&auto=format&fit=crop' },
  { id:2, name:'Кольцо с изумрудом (18ct)', price:'€256000', img:'https://s0.rbk.ru/v6_top_pics/media/img/4/48/754981292206484.gif?q=80&w=800&auto=format&fit=crop' },
  { id:3, name:'Кобальтовая шпинель (2.25ct)', price:'€90000', img:'https://sun9-76.userapi.com/impg/D8xTKER3oSNa4UYbLIkxbKYtI9d72fuea2SPiA/4AUM00ISGcw.jpg?size=1427x1007&quality=96&sign=22e57f81d36c0ef2764f8925b01d060d&type=album?q=80&w=800&auto=format&fit=crop' },
]

export default function Catalog(){
  return (
    <section className="hero">
      <h1>Каталог</h1>
      <p>Короткий список базовых моделей.</p>
      <div className="grid">
        {items.map(x => (
          <div key={x.id} className="card">
            <img src={x.img} alt={x.name} />
            <div className="p">
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <strong>{x.name}</strong>
                <span>{x.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:16}}>
        <Link to="/" className="btn">На главную</Link>
      </div>
    </section>
  )
}
