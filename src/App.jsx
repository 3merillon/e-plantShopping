import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const [buttonText, setButtonText] = useState('Get Started');

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleLogoClick = () => {
    setShowProductList(false);
    setButtonText('Back to Shop >'); // Reset button text when navigating back to the welcome page
  };

  const handleAnimationEnd = () => {
    if (showProductList) {
      setButtonText('Back to Shop >');
    }
  };

  const handleAddToCartState = (plantName) => {
    setAddedToCart(prevState => ({ ...prevState, [plantName]: true }));
  };

  const handleRemoveFromCartState = (plantName) => {
    setAddedToCart(prevState => {
      const updatedState = { ...prevState };
      delete updatedState[plantName];
      return updatedState;
    });
  };

  return (
    <div className="app-container" onAnimationEnd={handleAnimationEnd}>
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              {buttonText}
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList
          onLogoClick={handleLogoClick}
          addedToCart={addedToCart}
          onAddToCart={handleAddToCartState}
          onRemoveFromCart={handleRemoveFromCartState}
        />
      </div>
    </div>
  );
}

export default App;