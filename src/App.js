import './App.css';
import { ExperienceItem } from './components/ExperienceItems';
import image1 from './assets/images.png';

function App() {
  return (
    <div className="App">
      <h1>Resume</h1>
      <h3>Dilan Chuquimia</h3>
      <p>Sofware developer</p>
      <ExperienceItem title={'UAB'} content={'Worked here as an assistant teacher and a developer on specific projects'} image={image1} />
      <ExperienceItem title={'IATec'} content={'Currently working here'} image={image1} />
    </div>
  );
}

export default App;
