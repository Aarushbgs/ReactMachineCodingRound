
import './App.css';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
     <h1>Custom Tabs</h1>
     <Tabs>
      <div title='Home'>
        Tab content for Home
      </div>
      <div title='About'>
        Tab content for About
      </div>

      <div title='Contact'>
        Tab content for Contact
      </div>
     </Tabs>
    </div>
  );
}

export default App;
