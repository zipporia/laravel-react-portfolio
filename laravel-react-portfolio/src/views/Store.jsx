import { Link } from 'react-router-dom';

import '../StoreAssets/styles/pages/index.css';
import '../StoreAssets/styles/shared/general.css';
import '../StoreAssets/styles/shared/header.css';

import cartIcon from '../StoreAssets/images/icons/cart-icon.png';

import { useEffect } from 'react';
import { products } from '../../starting-code/data/products';


export default function Store() {
    useEffect(() => {
        console.log(products);
    }, []);

    return (
        <>
            <title>Store</title>
            <div className="header">
                {/* <div className="left-section">
                    <a href="index.html" className="header-link">
                    <img className="logo"
                        src={logo}/>
                    <img className="mobile-logo"
                        src={mobileLogo} />
                    </a>
                </div> */}

                {/* <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                    <img className="search-icon" src={searchIcon}/>
                    </button>
                </div> */}

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">
                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={cartIcon} />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="product-container">
                                <div className="product-image-container">
                                    <img className="product-image" src={product.image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">{product.name}</div>

                                <div className="product-rating-container">
                                    <img className="product-rating-stars" src={`/images/ratings/rating-${product.rating.stars * 10}.png`} />
                                    <div className="product-rating-count link-primary">{product.rating.count}</div>
                                </div>

                                <div className="product-price">{ (product.priceCents / 100).toFixed(2) }</div>

                                <div className="product-quantity-container">
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src="/images/icons/checkmark.png" />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary">Add to Cart</button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
}
