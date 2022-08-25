// import Home from './Components/Home/Home';
// import Footer from './Footer/Footer'
// import Header from "./Header/Header";

import {Routes, Route} from 'react-router-dom'
import Layout from './Layout';

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import HeaderBlog from './Components/HeaderBlog/HeaderBlog';
import HeaderPrice from './Components/HeaderPrice/HeaderPrice';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route path='/'  element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='service' element={<Service/>}/>
            <Route path="blog" element={<HeaderBlog/>}/>
            <Route path="price" element={<HeaderPrice/>}/>
            <Route path="contact" element={<Contact/>}/>
         </Route>
      </Routes>
    </div>
  );
}

export default App;
