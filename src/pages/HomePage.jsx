import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      });
  }, []);

  return (
    <div
      className='container'
      style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
    >
      <h1 style={{ fontSize: 24 + 'px' }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className='list-group'>
        {countries &&
          countries.map(country => {
            return (
              <Link
                key={country.alpha3Code}
                to={`/countries/${country.alpha3Code}`}
                className='list-group-item list-group-item-action'
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} flag`}
                />
                <br />
                {country.name.common}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default HomePage;
