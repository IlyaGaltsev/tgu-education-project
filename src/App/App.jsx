import { useState } from 'react';
import './App.scss';
import massVideos from './assets/data/massVideos';
import { AppCard } from './components/AppCard';
import { Header } from './components/Header';

function App() {
  const data = massVideos;
  const [corzina, setCorzina] = useState([]);
  const [faivouriteMass, setFavouriteMass] = useState([]);
  const [value,setValue] = useState('');

  const addCorzina = (id) => {
    let obj = data.find(elem => elem.id === id)
    obj.corzina = true;
    setCorzina([...corzina, obj])
  }
  const delCorzina = (id) => {
    let obj = data.find(elem => elem.id === id)
    obj.corzina = false;
    setCorzina(corzina.filter(item => item.id !== id))  
  }

  const onFavouriteFilm = (id) => {
    let obj = data.find(elem => elem.id === id);
    obj.faivourite = !obj.faivourite;
    (!obj.faivourite) 
    ? delFaivourite(id)
    : setFavouriteMass([...faivouriteMass, obj])
  }
  const delFaivourite = (id) => {
    let obj = data.find(elem => elem.id === id);
    obj.faivourite = false;
    setFavouriteMass(faivouriteMass.filter(item => item.id !== id))
  }
  return (
    <div className="app">
      <Header 
        value={value}
        setValue={setValue}
        corzina={corzina}
        delCorzina={delCorzina}
        faivouriteMass={faivouriteMass}
        delFaivourite={delFaivourite}
      />
      <div className="app__cards">
        {data
        .filter(item => item.title.includes(value))
        .map(film => {
          return(
            <AppCard
              key={film.id}
              {...film}
              addCorzina={addCorzina}
              onFavouriteFilm={onFavouriteFilm}
            />
          )
        })}
        
      </div>
    </div>
  );
}

export { App };
