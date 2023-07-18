import logo from './logo.svg';
import './App.css';
import ContactList from './components/pure/container/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
