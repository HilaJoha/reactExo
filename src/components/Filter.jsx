import React from 'react';
import './Filter.css';

const Filter = ({ filter, handleFilterChange, handleReset }) => {
  return (
    <div className="filter-container">
      <div className="buttons">
        <button
          className={filter === '' ? 'active' : ''}
          onClick={() => handleFilterChange('')}
        >
          Tous 
        </button>
        <button
          className={filter === 'Mâle' ? 'active' : ''}
          onClick={() => handleFilterChange('Mâle')}
        >
          Mâles
        </button>
        <button
          className={filter === 'Femelle' ? 'active' : ''}
          onClick={() => handleFilterChange('Femelle')}
        >
          Femelles
        </button>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Filter;
