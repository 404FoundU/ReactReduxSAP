import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from './Header';
import WineImg from './wine-placeholder.png';
import StarEmpty from './StarEmpty';
import StarFilled from './StarFilled';


import * as actionCreators from './wineActions';

import './wines.scss';

export class Wines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSold: undefined
    }
  }
  componentDidMount() {
    this.props.actions.fetchWines();
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps: ", nextProps.wines);
    if(nextProps.wines){

      var maxSold = Math.max(...nextProps.wines.map(item => {
        return parseInt(item.unitsSold, 10);
      }));
      console.log("maxSold: ", nextProps.wines.map(item => {
        return parseInt(item.unitsSold, 10);
      }));
      console.log(maxSold);
      this.setState({"maxSold": maxSold});
    }

  }

  yearChange(){
    var value = document.getElementById("yeardropdown").value;
    if(value == "-1"){

      this.props.actions.fetchWines();
    }else{

    console.log("value: ", value);
      this.props.actions.fetchWinesByYear(value);
    }
  }

render() {

  return (
    <div className="wines">
      <Header/>
        <div className="product-filter">
          <select id="yeardropdown" onChange={this.yearChange.bind(this)}>
            <option value={-1}>Select Year</option>
            <option value={2016}>2016</option>
            <option value={2015}>2015</option>
            <option value={2014}>2014</option>
            <option value={2013}>2013</option>
            <option value={2012}>2012</option>
            <option value={2011}>2011</option>
          </select>
        </div>
          {
            this.props.wines
                .map(wine =>
                    <div className="product-item">
                        <figure className="profuct-img">
                            <img src={WineImg}/>
                        </figure>
                        <div className="product-des">
                          <div className="product-title">
                            <div className="title-wraper">
                              <span className="title-main with-tag">{wine.name}, {wine.vintage}</span>
                              { this.bestSeller(this.state.maxSold, wine.unitsSold) }

                            </div>
                            <span className="title-caption">{wine.region}</span>
                          </div>
                            <div className="product-rating">
                              <div className="rating-stars">
                                    <StarFilled/>
                                    <StarFilled/>
                                    <StarFilled/>
                                    <StarEmpty/>
                                    <StarEmpty/>
                                    <span className="rating-count">({wine.ratings.length})</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
              }
        </div>
      );
    }

    bestSeller(maxSold, unitsSold ){
      if(this.state.maxSold === unitsSold){
        return (<span className="sell-tag">Best seller</span>);
    }
  }
}

Wines.propTypes = {
  wines: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    ...state.wines
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
