import './App.css';
import Form from './components/Form';

import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom";
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/pages/Dashboard"
import About from "./components/pages/About"
import Comment from "./components/pages/Comment"
import Analytics from "./components/pages/Analytics"
import Product from "./components/pages/Product"
import ProductList from "./components/pages/ProductList"

function App() {
  return (
    <div>
  
      <Router>
        <Routes>

          <Route exact path="/" element={<Form />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
          {/* <Route exact path="/home" element={<Home />} /> */}

 
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />

        </Routes>

        <Routes>
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
