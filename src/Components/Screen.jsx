import React, { useState } from 'react';
import axios from 'axios';

const Screen = () => {
  // Stati per gestire i dati, la località e l'avviso
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [avviso, setAvviso] = useState('');

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9e3f8d4dd688ce1ef46de6ccce96f758&units=metric`;

      axios
        .get(url)
        .then((response) => {
          // Aggiorna i dati con la risposta dell'API
          setData(response.data);
          // Resetta l'avviso
          setAvviso('');
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            // Imposta l'avviso se la località non viene trovata
            setAvviso('Località non trovata');
            // Imposta un timeout per 2 secondi e reimposta l'avviso a una stringa vuota
            setTimeout(() => setAvviso(''), 2000);
          } else {
            // Imposta l'avviso in caso di errore nella richiesta
            setAvviso('Errore nella richiesta');
            // Imposta un timeout per 2 secondi e reimposta l'avviso a una stringa vuota
            setTimeout(() => setAvviso(''), 2000);
          }
        });

      // Resetta la località
      setLocation('');
    }
  };

  return (
    <>
      <div className='search'>
        <input
          value={location}
          type='text'
          onChange={(event) => setLocation(event.target.value)}
          placeholder={avviso ? avviso : 'Località'}
          onKeyPress={searchLocation}
          className={avviso ? 'avviso' : ''}
        ></input>
      </div>

      <div className='container'>
        {data.name !== undefined && (
          <>
            <div className='top'>
              <div className='name'>
                <h1>{data.name}</h1>
              </div>
              <div className='temp'>
                <h2>{data?.main?.temp}°</h2>
              </div>
              <div className='description'>
                <p>{data?.weather?.description}</p>
              </div>
            </div>

            <div className='bottom'>
              <div className='humidity'>
                <p className='bold'>{data?.main?.humidity}</p>
                <p>Umidità</p>
              </div>
              <div className='wind'>
                <p className='bold'>{data?.wind?.speed}</p>
                <p>Vento</p>
              </div>
              <div className='pressure'>
                <p className='bold'>{data?.main?.pressure}</p>
                <p>Pressione</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Screen;
