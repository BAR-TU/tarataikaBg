import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const ResultsView = ({ result }) => {
    let history = useHistory();
    const redirectToTemplate = () => {
        history.push({
            pathname: '/vehicleTemplate',
            search: '',
            state: { id: result.id }
        });
    }

  return(
    <div className="message" onClick={redirectToTemplate}>
      <div className="field">
        <span className="label">Марка: </span>
        <span className="value">{result.make.make}</span>
      </div>
      <div className="field content">
        <span className="label">Модел: </span>
        <span className="value">{result.model.model}</span>
      </div>
      <div className="field">
        <span className="label">Цена: </span>
        <span className="value">{result.price}</span>
      </div>
    </div>
  );
};

ResultsView.propTypes = {
  result: PropTypes.object.isRequired
}

export default ResultsView;