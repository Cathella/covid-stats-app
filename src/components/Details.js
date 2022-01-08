import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import RegionCard from './RegionCard';
import './Details.css';

const Details = () => {
  const location = useLocation();
  const regionInfo = location.state.info;

  return (
    <>
      <Link to="/main" className="backButton">
        <b><FaAngleLeft /></b>
      </Link>
      <article className="regionTitle">
        <h2>{regionInfo.name}</h2>
        <p>
          Total cases confirmed:
          <br />
          {regionInfo.today_confirmed}
          <br />
          **
        </p>
      </article>
      <span className="regionBanner">
        REGION BREAKDOWN -
        {' '}
        {regionInfo.date}
      </span>
      <RegionCard data={regionInfo} />
    </>
  );
};

export default Details;
