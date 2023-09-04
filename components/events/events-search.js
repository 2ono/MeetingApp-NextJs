import { useRef } from "react";

import Button from "../ui/button";
import classes from "./event.search.module.css";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">연도</label>
          <select id="year" ref={yearInputRef}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">월</label>
          <select id="month" ref={monthInputRef}>
            <option value="01">1월</option>
            <option value="02">2월</option>
            <option value="03">3월</option>
            <option value="04">4월</option>
            <option value="05">5월</option>
            <option value="06">6월</option>
            <option value="07">7월</option>
            <option value="08">8월</option>
            <option value="09">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
        </div>
      </div>
      <Button>검색하기</Button>
    </form>
  );
}

export default EventsSearch;
