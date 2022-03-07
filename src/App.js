import './App.css';
import Content from './layoutDemo/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/caseStudy_RJ2111R1_Ha' element={<Home />} /> */}
          <Route path='/' element={<Content />} />
          {/* <Route path='/products' element={<Products />} />
          <Route path='/products/edit/:productId' element={<Edit />} />
          <Route path='/products/delete/:productId' element={<Delete />} />
          <Route path='/products/add' element={<Add />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
