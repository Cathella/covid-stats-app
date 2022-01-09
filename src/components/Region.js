import React from 'react';
import PropTypes from 'prop-types';

const Region = (props) => {
  const { data } = props;

  return (
    <>
      <section className="regionTodayContainer">
        <article>
          <b>Confirmed cases today:</b>
          <p>{data.today_new_confirmed}</p>
        </article>
        <article>
          <b>Number of deaths:</b>
          <p>{data.today_new_deaths}</p>
        </article>
        <article>
          <b>Number of cases recovered:</b>
          <p>{data.today_new_recovered}</p>
        </article>
        <article>
          <b>Number of open cases:</b>
          <p>{data.today_new_open_cases}</p>
        </article>
      </section>
      <span className="regionBanner">REGION BREAKDOWN - OVERALL</span>
      <section className="regionOverallContainer">
        <article>
          <b>Total number of deaths:</b>
          <p>{data.today_deaths}</p>
        </article>
        <article>
          <b>Total number of cases recovered:</b>
          <p>{data.today_recovered}</p>
        </article>
        <article>
          <b>Total number of open cases:</b>
          <p>{data.today_open_cases}</p>
        </article>
      </section>
    </>
  );
};

Region.propTypes = {
  data: PropTypes.shape({
    today_new_confirmed: PropTypes.number.isRequired,
    today_new_deaths: PropTypes.number.isRequired,
    today_new_recovered: PropTypes.number.isRequired,
    today_new_open_cases: PropTypes.number.isRequired,
    today_deaths: PropTypes.number.isRequired,
    today_recovered: PropTypes.number.isRequired,
    today_open_cases: PropTypes.number.isRequired,
  }).isRequired,
};

export default Region;
