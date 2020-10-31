import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/alertContext';
import BreweryContext from '../context/brewery/breweryContext';

const Search = () => {
  const breweryContext = useContext(BreweryContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('empty text');
      alertContext.setAlert('Please enter something', 'light');
    } else {
      breweryContext.searchBreweries(encodeURIComponent(text));
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search breweries by city or name...'
          value={text}
          style={{ backgroundColor: '#202020', color: '#FFF' }}
          onChange={onChange}
        />
        <input
          style={{ backgroundColor: '#202020', color: '#FFF' }}
          type='submit'
          value='Search'
          className='btn btn-light btn-block'
        />
      </form>
      {breweryContext.breweries?.length > 0 && (
        <button
          style={{ backgroundColor: '#202020', color: '#FFF' }}
          className='btn btn-light btn-block'
          onClick={breweryContext.clearBreweries}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
