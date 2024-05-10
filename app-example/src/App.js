import './App.css';
import { Description } from './components/Description';
import { List } from './components/List';
import { PlaceCard } from './components/PlaceCard';
import Title from './components/Title';
import data from './places.json';

const App = () => {
  console.log(data.places);
  
  return (
    <div className="container">
      <Title title="Ciekawe miejsca do zobaczenia" numberOfPlaces={data.places.length} />
      <Description>
        Witaj na stronie z ciekawymi miejscami <strong>do zobaczenia</strong>!
      </Description>
      <List>
        {data.places.map((place) => (
          // <PlaceCard
          //   key={place.id}
          //   image={place.image}
          //   description={place.description}
          //   name={place.name}
          //   location={place.location}
          // />
          <PlaceCard
            key={place.id}
            {...place}
          />
        ))}  
      </List>
    </div>
  )
}

export default App;
