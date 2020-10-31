import React, { useContext } from 'react';
import Spinner from './Spinner';
import BreweryContext from '../context/brewery/breweryContext';
import Brewery from './Brewery';

const Breweries = () => {
  const breweryContext = useContext(BreweryContext);

  const { loading, breweries } = breweryContext;

  if (loading) {
    return <Spinner />;
  } else if (breweries != null) {
    return breweries?.length > 0 ? (
      <div style={breweryStyle}>
        {breweries.map((brewery) => (
          <Brewery key={brewery.id} brewery={brewery} />
        ))}
      </div>
    ) : (
      <h1 style={{ textAlign: 'center', margin: 60 }}>No results were found</h1>
    );
  } else {
    return null;
  }
};

const breweryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  padding: 20,
};

export default Breweries;
