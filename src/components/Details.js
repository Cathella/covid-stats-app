import React from "react";
import { Link, useLocation } from 'react-router-dom';
import RegionCard from './RegionCard';

const Details = () => {
  const location = useLocation();
  const regionInfo = location.state.info;

  return (
    <>
      <Link to="/home">
        <b>-</b>
      </Link>
      <article>
        <h2>{regionInfo.name}</h2>
        <p>
          {regionInfo.today_confirmed}
          {' '}
          <br />
          **
        </p>
      </article>
      <span>REGION BREAKDOWN - 2021-12-15</span>
      <RegionCard data={regionInfo} />
    </>
  );
};

export default Details;
