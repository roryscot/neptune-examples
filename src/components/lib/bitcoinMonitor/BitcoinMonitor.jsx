import React, { Component } from 'react';
import { Display } from './Display';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { BitcoinService}  from './services/BitcoinService';
import { CurrencyService } from './services/CurrencyService';
import {monitors as monitorActions} from '../../../redux/actions/'
// import { connect } from 'net';


const bitcoinService = new BitcoinService();
const currencyService = new CurrencyService();

const mapToPrice = (currentPrice, previousPrice) => {
    return {
        code: currentPrice.code,
        description: currentPrice.description,
        currentRate: currentPrice.currentRate,
        previousRate: previousPrice ? previousPrice.currentRate : 0
    };
};

class BitcoinMonitor extends Component {
    // constructor(props){
    //     super(props);

    //     // this.props = {
    //     //     prices: {}, 
    //     //     ready: false,
    //     //     currencies: []
    //     // };

    //     // this.handleOnRefresh = this.handleOnRefresh.bind(this);
    //     // this.loadBitcoinPriceIndex = this.loadBitcoinPriceIndex.bind(this);
    //     // this.handleOnCurrencyChanged = this.handleOnCurrencyChanged.bind(this);
    // }

    
    handleOnRefresh = () => {
        if (this.props.prices.SELECTED) {            
            
            const currency = this.props.prices.SELECTED.code;
            
            bitcoinService
                .getPrice(currency)
                .then(price => {
                    if (price) {
                        this.loadBitcoinPriceIndex(price);
                    } else {
                        this.loadBitcoinPriceIndex();
                    }
                })
                .catch(error => console.log(error.message));

        } else {
            this.loadBitcoinPriceIndex();
        }
    }

    
    handleOnCurrencyChanged = (event) => {
        
        const currency = event.target.value;
        
        bitcoinService
            .getPrice(currency)
            .then(price => {
                if (price) {                    
                    this.setState(prevState => {
                        const prices = prevState.prices;
                        prices.SELECTED = mapToPrice(price[currency], prevState.prices[currency]);
                        return { prices: prices };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }

    
    // loadBitcoinPriceIndex = (additionalPrice) => {
    //     bitcoinService
    //         .getPrices()
    //         .then(prices => {
    //             if (prices) {                    
    //                 this.setState(prevState => {
    //                     const newPrices = {
    //                         EUR: mapToPrice(prices.EUR, prevState.prices.EUR),
    //                         GBP: mapToPrice(prices.GBP, prevState.prices.GBP),
    //                         USD: mapToPrice(prices.USD, prevState.prices.USD)
    //                     };

    //                     if (additionalPrice) {
    //                         newPrices.SELECTED = mapToPrice(
    //                             Object.values(additionalPrice)[0],
    //                             prevState.prices.SELECTED);
    //                     }

    //                     return { prices: newPrices, ready: true };
    //                 });
    //             }
    //         })
    //         .catch(error => console.log(error.message));
    // }

    
    loadSupportedCurrencies() {
        this.setState(() => ({ currencies: currencyService.getSupportedCurrencies() }));
    }

    
    componentDidMount(){
        this.loadSupportedCurrencies();
        // this.loadBitcoinPriceIndex();
    }


    render() {
        return (
            this.props.ready === true && <div>
                
                <Display 
                    currencies={this.props.currencies}
                    prices={this.props.prices}
                    onCurrencyChanged={this.handleOnCurrencyChanged} />

                <div className=" mt-5 text-center">
                    <button className="btn btn-lg btn-refresh" onClick={this.handleOnRefresh}>
                        <i className="fa fa-refresh fa-lg"></i>
                    </button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prices: state.prices,
        ready: state.ready,
        currencies: state.currencies,  
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        actions: bindActionCreators(monitorActions, dispatch)
    })
}


// export { BitcoinMonitor };
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(BitcoinMonitor)