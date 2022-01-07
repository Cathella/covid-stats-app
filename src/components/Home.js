import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetData } from "../redux/stats/main";
import africa from '../assets/africa.png';
import { getCountryData } from "../redux/stats/country";
import Input from './Input';

const Home = () => {
  const data = useSelector((state) => state.data);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetData('2021-12-15', 'Africa'));
  }, []);

  useEffect(() => {
    dispatch(getCountryData('2021-12-15', 'Africa'));
  }, []);

  return (
    <div className="mainContainer">
      <section className="mainSection">
        <img src={africa} alt="africa's map" className="brazilMap" />
        <article className="mainHeader">
          <h2>AFRICA</h2>
          <p>
            Cases confirmed today:
            <br />
            {country.today_new_confirmed}
            <br />
            **
          </p>
        </article>
      </section>
      <Input data={data} />
    </div>
  );
}

export default Home;
