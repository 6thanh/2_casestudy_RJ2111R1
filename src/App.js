import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paperbase from './back-end/control/Paperbase';
import { Edit } from './back-end/model/Edit';
import { Delete } from './back-end/model/Delete';
import { Add } from './back-end/model/Add';
import Contact from './front-end/components/Contact';
import Main from './front-end/components/Main';
import LogIn from './front-end/components/Login';
import Shop from './front-end/components/Shop';
import Category from './front-end/components/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/shop' element={<Shop />} />
          {/* <Route path='/shop/:categoryId' element={<Category />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Paperbase />} />
          <Route path='/products/edit/:productId' element={<Edit />} />
          <Route path='/products/delete/:productId' element={<Delete />} />
          <Route path='/products/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
