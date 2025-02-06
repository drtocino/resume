import './App.css';
import { ExperienceItem } from './components/ExperienceItems';
import image1 from './assets/images.png';

function App() {
  return (
    <div className="App">
      <h1>Resume</h1>
      <ExperienceItem title={'UAB'} content={'Worked here as an assistant teacher and a '} image={image1} />
        {/* <img src='images.png'/> */}
      {/* </ExperienceItem> */}
    </div>
  );
}

export default App;
