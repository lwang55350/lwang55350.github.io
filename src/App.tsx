import './styles.css'
import Jumbotron from './Components/Jumbotron'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import Experience from './Components/Experience'
import Coursework from './Components/Coursework'
import Project from './Components/Project'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app">
        <Jumbotron />
        <Navbar />
        <Introduction />
        <Experience />
        <Coursework />
        <Project />
        <Footer />
    </div>
  );
}

export default App;
