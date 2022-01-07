import React from "react";
import { Link } from 'react-router-dom';

const RegionCard = (props) => {
  const { data } = props;

  return (
    <ul>
      {data.map((info) => (
        <li key={data.indexOf(info)} className="stateCard">
          <Link
            to="/details"
            state={{ info }}
          >
            <button type="button" className={`stateButton stateButton-${data.indexOf(info)}`}>
              <span className="buttonArrow">&#8594;</span>
              <span className="buttonTitle">
                <b>{info.name}</b>
                <br />
                {info.today_new_confirmed}
              </span>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RegionCard;
