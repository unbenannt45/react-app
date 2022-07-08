import React from "react";
import cross from '../img/close.svg'

function Heder() {
  return (
    <div className="heder__container">
      <h1 className="heder__heading">Заказы на производство</h1>
      <div className="heder__container_search">
        <input className="heder__container_input" placeholder="Поиск"></input>
        <button className="heder__button_delit">
          <img src={cross} alt='cross' className="heder__button_cross"></img>
        </button>
        <button className="heder__button_search">Поиск</button>
      </div>
    </div>
  );
}

export default Heder;