import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetData } from "../redux/stats/main";
import { getCountryData } from "../redux/stats/country";
import Search from './Search';
import './Home.css';
import './Card.css';

const Home = () => {
  const data = useSelector((state) => state.data);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const date = new Date();
  const newDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const [inputDate, setInputDate] = useState(newDate);

  useEffect(() => {
    dispatch(fetchGetData(inputDate, 'Spain'));
  }, [inputDate]);

  useEffect(() => {
    dispatch(getCountryData(inputDate, 'Spain'));
  }, [inputDate]);

  const handleChange = (e) => {
    setInputDate(e.target.value);
  };

  return (
    <div className="mainContainer">
      <section className="mainSection">
        <article className="mainHeader">
          <h2>SPAIN</h2>
          <p>
            Cases confirmed on
            {' '}
            <input type="date" className="date" name="date" value={inputDate} onChange={handleChange} />
            :
            <br />
            {country.today_new_confirmed}
            <br />
            **
          </p>
        </article>
      </section>
      <Search data={data} />
    </div>
  );
}

export default Home;
