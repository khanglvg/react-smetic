import userConfig from './user-config';

const IS_AUTH = 'isAuth';
const CART_KEY = 'smetic-customer-cart';

class ZStorage {
    constructor() {
        this.__CART__ = {};
        console.log('storage constructor');
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeProductToCart = this.removeProductToCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    initUserId() {
        this._userId = userConfig.getUserId();
        if (!this._userId) {
            this._userId = 'anonymous';
        }
        this.__CART__[this._userId] = {};
    }

    addProductToCart(productCart) {
        if (productCart && productCart.productId) {
            console.log(this.__CART__);
            if (this.__CART__[this._userId]) {
                this.__CART__[this._userId][productCart.productId] = productCart;
                sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
                return true;
            }
            return false;
        }
        return false;
    }

    removeProductToCart(productCart) {
        if (productCart && productCart.productId) {
            delete this.__CART__[this._userId][productCart.productId];
            sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
            return true;
        }
        return false;
    }

    getProductsInCart() {
        const obj = JSON.parse(sessionStorage.getItem(CART_KEY));
        if (!obj) {
            return {};
        }

        if (obj[this._userId]) {
            return obj[this._userId];
        }
        else {
            return {};
        }

    }

    getCartCount() {
        const r = this.getProductsInCart();
        return Object.keys(r).length;
    }

    getProduct(productId) {
        if (productId) {
            return sessionStorage.getItem(CART_KEY)[this._userId][productId];
        }
    }

    clearCart() {
        this.__CART__[this._userId] = {};
        sessionStorage.setItem(CART_KEY, JSON.stringify(this.__CART__));
    }

    clearStorage() {
        sessionStorage.clear();
    }

    getAuth() {
        return sessionStorage.getItem(IS_AUTH);
    }

    setAuth(isAuth) {
        sessionStorage.setItem(IS_AUTH, JSON.stringify(isAuth));
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
        },
    };
})();

const zStorage = Singleton.getInstance();
export default zStorage;