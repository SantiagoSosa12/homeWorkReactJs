import './App.css';
// import ExampleAxios from './components/pure/exampleAxios';
// import Clock from './components/pure/Clock';
import ContactList from './components/pure/container/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList></ContactList>
        {/* <Clock></Clock> */}
        {/* <ExampleAxios></ExampleAxios> */}
      </header>
    </div>
  );
}

export default App;
