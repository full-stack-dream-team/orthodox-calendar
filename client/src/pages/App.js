import React, { useState, useEffect } from "react";
import Landing from "../components/Landing";
// import axios from "axios";
//
// function App() {
//   const [products, setProducts] = useState(null);
//
//   useEffect(() => {
//     if (!products) {
//       getProducts();
//     }
//   });
//
//   const getProducts = async () => {
//     let res = await getAll();
//     setProducts(res);
//   };
//
//   const getAll = async () => {
//     let res = await axios.get(`/api/product`);
//     return res.data || [];
//   };
//
//   return (
//     <div className="App main">
//       <div className="card">
//         <ul>
//           {products && products.length > 0 ? (
//             products.map(product => (
//               <li key={product._id}>
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//               </li>
//             ))
//           ) : (
//             <p>No products found</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <>
        <Landing />
      </>
    );
  }
}

export default App;
