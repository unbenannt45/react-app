import React, { useEffect } from "react";
import { setInitialMeaning } from '../features/stateStatus/stateSlice';
import { useDispatch, useSelector } from "react-redux";

function Footer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log('state', state)
  }, [state])

  return (
    <div>
      <div className="footer">
        <p className="footer__loading">Загружено из</p>
        <button className="footer__button">Показать еще</button>
        <div className="footer__select">
          <p className="footer__display_loading">Показать по </p>
          <select
            onChange = {(e) => {
              console.log('состояние value: ', e.target.value)
              dispatch(setInitialMeaning(e.target.value))
            }} 
            
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
  );
}
export default Footer;
