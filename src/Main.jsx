import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Heder from "./components/Heder";
import { useSelector } from "react-redux";


function Main() {
  const state = useSelector((state) => state);
  const [appState, setAppState] = useState();
  const search = state.searchProducts.search
  //useEffect будет следить за изменениями setAppState и производить рендинг если это необходимо
  useEffect(() => {
    const apiUrl = `https://dummyjson.com/products/search?select=title&q=${state.searchProducts.search}`;
    //`https://dummyjson.com/products/search?select=title&q=${phone}&limit=${state.meaning.length}`
    console.log(appState)
    

    
    axios
      .get(apiUrl)

      .then((res) => {
        const allProducts = res.data.products;
        setAppState(allProducts);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [state.meaning.length]);

  useEffect(()=> {
    console.log('поле поиска', search)
  },[search])

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
      </div>
      <Footer />
    </div>
  );
}

export default Main;
