import logo from './logo.svg';
import './sass/App.scss';

import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>How far is it?</h1>
      </header>
      <main className="container">
        <Location id="autocomplete-origin" title="Origin" placeholder="Enter origin address" />
        <Location id="autocomplete-destination" title="Destination" placeholder="Enter destination address" />
      </main>

    </div>
  );
}

export default App;
