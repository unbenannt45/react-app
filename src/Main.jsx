import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Heder from "./components/Heder"
import { useDispatch, useSelector } from "react-redux";


function Main() {
  // отвечает за состояние стейта в компоненте
  const [appState, setAppState] = useState();
  const [meaning, setMeaning] = useState(5);
  const [length, setLength] = useState(5);

  const state = useSelector((state) => state);

  useEffect(() => {
    console.log('state', state.meaning.initialMeaning)
  }, [state])

  function hendleChange(event) {
    setMeaning(Number(event.target.value));
  }

  function Click() {
    setLength(length + meaning);
  }

  //useEffect будет следить за изменениями setAppState и производить рендинг если это необходимо
  useEffect(() => {
    const apiUrl = `https://dummyjson.com/products?limit=${length}`;

    axios
      .get(apiUrl)

      .then((res) => {
        const allProducts = res.data.products;
        setAppState(allProducts);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [length]);

  return (
    <div className="main-container">
      <Heder />
      <div>
        <div className="scrol_table">
          <table className="main__table">
            <thead>
              <th className="table__th table__date">Дата заказа</th>
              <th className="table__th table__number">Номер заказа</th>
              <th className="table__th table__product">Товар</th>
              <th className="table__th table__date">Требуемая дата</th>
              <th className="table__th table__condition">Состояние</th>
              <th className="table__th table__zone">Зона</th>
            </thead>

            <tbody>
              {appState &&
                appState.map(
                  (
                    goods // allProducts appState
                  ) => (
                    <tr key={goods.id} className="main__table_tr">
                      <td className="table_td">20.04.2022</td>
                      <td className="table_td">ЗН-1</td>
                      <td className="table_td">{goods.title}</td>
                      <td className="table_td">21.04.2022</td>
                      <td className="table_td">Выполнено</td>
                      <td className="table_td">Площадка 1</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>

        <div>
          <div className="footer">
            <p className="footer__loading">
              Загружено {length} из {length}
            </p>
            <button className="footer__button" onClick={Click}>
              Показать еще
            </button>
            <div className="footer__select">
              <p className="footer__display_loading">Показать по </p>
              <select
                value={meaning}
                onChange={hendleChange}
                className="footer__style_select"
              >
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;