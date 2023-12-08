import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);

  const { alpha3Code } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        console.log(response.data);
        setCountryDetails(response.data);
      });
  }, [alpha3Code]);

  return (
    <div className='container'>
      <p style={{ fontSize: 24 + 'px', fontWeight: 'bold' }}>Country Details</p>

      {!countryDetails && <p>Loading...</p>}

      {countryDetails && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
            alt={`${countryDetails.name.common} flag`}
          />
          <br />
          <h1>{countryDetails.name.common}</h1>
          <table className='table'>
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: 30 + '%' }}>Capital</td>
                <td>{countryDetails.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDetails.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul style={{ listStyleType: 'none' }}>
                    {countryDetails.borders.map(borderCountry => {
                      return (
                        <li>
                          <Link
                            key={borderCountry}
                            to={`/countries/${borderCountry}`}
                          >
                            {borderCountry}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
