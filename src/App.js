import './sass/App.scss';

import LocationForm from './components/LocationForm';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>How far is it?</h1>
      </header>
      <main className="grid">
        <LocationForm />
        <Results id="results"/>
        <section id="map">MAP</section>
      </main>

    </div>
  );
}

export default App;
