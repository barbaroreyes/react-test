import Form from "./components/Fom/Form"
import {Routes ,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
