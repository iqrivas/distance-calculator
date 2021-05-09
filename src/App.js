import logo from './logo.svg';
import './sass/App.scss';

import Location from './components/Location';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>How far is it?</h1>
      </header>
      <main className="grid">
        <Location id="origin" title="Origin" placeholder="Enter origin address" />
        <Location id="destination" title="Destination" placeholder="Enter destination address" />
        <button id="calc_btn" className="btn">Calculate Distance</button>
        <Results id="results"/>
        <section id="map">MAP</section>
      </main>

    </div>
  );
}

export default App;
