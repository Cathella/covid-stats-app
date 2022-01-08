import { React } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegionCard = (props) => {
  const { data } = props;

  return (
    <ul className="stateList">
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

RegionCard.propTypes = {
  data: PropTypes.shape({
    indexOf: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RegionCard;
