import './App.css'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App bg-lilac">
      <LandingPage />
      <AboutMe />
      <Projects />
      <img className="w-20 fixed bottom-10 left-10" src="/images/prof.gif"></img>
    </div>
  )
}

export default App
