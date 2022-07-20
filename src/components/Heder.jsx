import React from "react";
import cross from "../img/close.svg";
import { initialLength } from "../features/stateStatus/stateSlice";
import { useDispatch } from "react-redux";
import { setInitialSearch } from "../features/stateSearch/searchSlice";

function Heder() {
  const dispatch = useDispatch();

  function clearInput() {
    const search = "";
    dispatch(setInitialSearch(search));
    document.querySelector("input[name='example']").value = "";
  }

  function searchProducts() {
    const resetter = 1; // затычка на перендеринг страницы 
    dispatch(initialLength(resetter));
  }

  return (
    <div className="heder__container">
      <h1 className="heder__heading">Заказы на производство</h1>
      <div className="heder__container_search">
        <input
          name="example"
          className="heder__container_input"
          placeholder="Поиск"
          onChange={(e) => {
            dispatch(setInitialSearch(e.target.value));
          }}
        ></input>
        <button className="heder__button_delit" onClick={clearInput}>
          <img src={cross} alt="cross" className="heder__button_cross"></img>
        </button>
        <button className="heder__button_search" onClick={searchProducts}>
          Поиск
        </button>
      </div>
    </div>
  );
}

export default Heder;
