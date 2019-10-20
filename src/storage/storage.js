import userConfig from './user-config';

const CART_KEY = 'smetic-customer-cart';

class ZStorage {
    constructor() {
        this.__CART__ = {};
        this._userId = userConfig.getUserId();
        if (!this._userId) {
            this._userId = 'anonymous';
        }

        this.__CART__[this._userId] = {};
        sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
        console.log('storage constructor')
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeProductToCart = this.removeProductToCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    addProductToCart(productCart) {
        if(productCart && productCart.productId) {
            this.__CART__[this._userId][productCart.productId] = productCart;
            sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
            return true;
        }
        return false;
    }

    removeProductToCart(productCart) {
        if(productCart && productCart.productId) {
            delete this.__CART__[this._userId][productCart.productId];
            sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
            return true;
        }
        return false;
    }

    getProductsInCart() {
        return sessionStorage.getItem(CART_KEY)[this._userId];
    }

    getProduct(productId) {
        if(productId) {
            return sessionStorage.getItem(CART_KEY)[this._userId][productId];
        }
    }

    clearCart() {
        this.__CART__ = {};
        sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
    }

    clearStorage() {
        sessionStorage.clear();
    }
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        return new ZStorage();
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const zStorage = Singleton.getInstance();
export default zStorage;