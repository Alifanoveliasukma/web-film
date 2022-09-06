import './App.css'
import NavigationBar from './components/NavigationBar'
import "./style/landingPage.css"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Superhiro from "./components/Superhiro"

function App() {
  return (
    <div>
      {/*  intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      <div className="superhiro">
        <Superhiro />
      </div>
      {/* end trending section */}
    </div>
  );
}

export default App;
