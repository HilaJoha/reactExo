import React from 'react';
import Filter from './Filter.css'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    
    <div className="filter-container">
      <label>Filter by sexe:</label>
      <div>
        <button
          className={filter === '' ? 'active' : ''}
          onClick={() => handleFilterChange('')}
        >
          All
        </button>
        <button
          className={filter === 'Mâle' ? 'active' : ''}
          onClick={() => handleFilterChange('Mâle')}
        >
          Mâle
        </button>
        <button
          className={filter === 'Femelle' ? 'active' : ''}
          onClick={() => handleFilterChange('Femelle')}
        >
          Femelle
        </button>
      </div>
    </div>
  );
};

export default Filter;
