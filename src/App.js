
import "./App.css";
// import Footer from './Navbar/Footer';
 import AllRoutes from "./Router/AllRoutes";
 import Navbar from './Navbar/Navbar';
// import Home from "./Components/Home";



function App() {
  return (
    <div className="App">
      <Navbar />
     <AllRoutes/>
      {/* <Home/> */}
{/* <Footer/> */}
     
    </div>
  );
}

export default App;

