
import {
  setInitialMeaning,
  initialLength,
} from "../features/stateStatus/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Footer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [length, setLength] = useState(state.meaning.appState);

  function Click() {
    setLength(length + state.meaning.initialMeaning);
    dispatch(initialLength(length));
  }

  

  return (
    <div>
      <div className="footer">
        <p className="footer__loading">
          Загружено {state.meaning.length} из {state.meaning.length}
        </p>
        <button className="footer__button" onClick={Click}>
          Показать еще {}
        </button>
        <div className="footer__select">
          <p className="footer__display_loading">Показать по</p>
          <select
            onChange={(e) => {
              dispatch(setInitialMeaning(e.target.value));
            }}
            className="footer__style_select"
          >
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
