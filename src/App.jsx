import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: "Coca-Cola",
    price: "R$ 7,99",
    image: "https://supermercadosimperatriz.vteximg.com.br/arquivos/ids/182881-800-800/cocacola-2litros.png?v=637774374772900000"
  },
  {
    id: 2,
    title: "Espetinho",
    price: "R$ 8,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupZzTnzzSchjG3Y-LQNuox0andDg7B5MIyA&s"
  },
  {
    id: 3,
    title: "Kafta",
    price: "R$ 9,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl0_e84Fi0oK1QmylK6inbe2vq8l2AKqA8w&s"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;