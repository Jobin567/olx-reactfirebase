import React, { useState, useEffect, useContext } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom';

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [freshRecommendations, setFreshRecommendations] = useState([]);

  useEffect(() => {
    // Fetch all products from Firestore
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allProducts = snapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id
      }));
      // Sort products by createdAt in descending order to get the latest products first
      allProducts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setProducts(allProducts);

      // Set fresh recommendations (latest 2 products)
      setFreshRecommendations(allProducts.slice(0, 2));
    });
  }, [firebase]);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {/* Display all products */}
          {products.map((product) => (
            <div
              key={product.id}
              className="card"
              onClick={() => {
                setPostDetails(product);
                history.push('/view');
              }}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display fresh recommendations (latest 2 products) */}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh Recommendation</span>
        </div>
        <div className="cards">
          {freshRecommendations.map((product) => (
            <div
              key={product.id}
              className="card"
              onClick={() => {
                setPostDetails(product);
                history.push('/view');
              }}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
