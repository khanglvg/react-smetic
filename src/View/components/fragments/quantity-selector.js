import React from 'react';
import '../../css/quantity-selector.scss';

class QuantitySelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: 1};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if (this.state.value < 9) {
            this.setState((state) => {
                return {value: ++state.value};
            });
        }
    }

    decrement() {
        if (this.state.value > 1) {
            this.setState((state) => {
                return {value: --state.value};
            });
        }

    }

    render() {

        return (
          <div>
              <div className="quantity-input">
                  <button
                    className="quantity-input__modifier quantity-input__modifier--left"
                    onClick={this.decrement}>
                      &mdash;
                  </button>
                  <input className="quantity-input__screen" type="text"
                         value={this.state.value} readonly/>
                  <button
                    className="quantity-input__modifier quantity-input__modifier--right"
                    onClick={this.increment}>
                      &#xff0b;
                  </button>
              </div>
          </div>
        );
    }
}

export default QuantitySelector;