import logo from './logo.svg';
import './App.css';
import { ExperienceItem } from './components/ExperienceItems';

function App() {
  return (
    <div className="App">
      <h1>Resume</h1>
      <img src='images.png'/>
      <ExperienceItem title={'UAB'} content={'Worked here as an assistant teacher and a '} />
    </div>
  );
}

export default App;
