import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextAPI from "./Context";

function App() {
  return (
    <ContextAPI>
    <BrowserRouter>
      <div className="bg-gray-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ContextAPI>
  
  );
}

export default App;
