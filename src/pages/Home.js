import React, { Fragment } from 'react';
import Search from '../components/Search';
import Breweries from '../components/Breweries';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Breweries />
    </Fragment>
  );
};

export default Home;
