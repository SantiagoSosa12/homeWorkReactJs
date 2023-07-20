import logo from './logo.svg';
import './App.css';
import Clock from './components/pure/Clock';
// import ContactList from './components/pure/container/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ContactList></ContactList> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
