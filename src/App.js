import './App.css';
import Navbar from './Component/Navbar';
import Cart from './Component/Cart'
import { useState } from 'react';
function App() {
  const [product, setProduct]=useState([
    {
      id:1,
      img:'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a055fzshins/gallery/in-galaxy-a05-sm-a055-480573-sm-a055fzshins-thumb-539703178',
      name: "sumsung",
      price:20000,
      quntity:1,
    },
    {
      id:2,
      img:'https://cdn1.smartprix.com/rx-ikYCntYcZ-w1200-h1200/kYCntYcZ.jpg',
      name: "Realme",
      price:30000,
      quntity:1,
    },
    {
      id:3,
      img:'https://www.reliancedigital.in/medias/iPhone-14-Pro-Space-Black-PDP-Image-493177779-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDA2OHxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaDc5LzEwMDE2OTAzNDMwMTc0LmpwZ3xlNGM4MDJjMDU3N2VmNmE4YmJhODQwMGQ2MjBhN2M0MGJlMzk2ZTcxZjc1MDk0ZTQyMjhmNzk5MTEzZjBmYTU1',
      name: "iPHONE",
      price:10000,
      quntity:1,
    },
  ]);
  return (
    <div className="App">
      <Navbar/>
      <Cart products={product} setProduct={setProduct}/>
    </div>
  );
}

export default App;
