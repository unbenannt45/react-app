import React from "react";
import cross from "../img/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setInitialSearch } from "../features/stateSearch/searchSlice";
import { useEffect } from "react";


function Heder() {
  const state = useSelector((state) => state);
  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("значение state: ", state);
  }, [state]);

  function clearInput() {
    const search = '';
    dispatch(setInitialSearch(search))
    document.querySelector("input[name='example']").value = '';
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
        <button className="heder__button_search">Поиск</button>
      </div>
    </div>
  );
}

export default Heder;
