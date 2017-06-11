import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from './Header';
import WineImg from './wine-placeholder.png';
import EmptyStar from './star-empty.svg';
import FilledStar from './star-filled.svg';


import * as actionCreators from './wineActions';

import './wines.scss';

export class Wines extends Component {
  componentDidMount() {
    this.props.actions.fetchWines();
  }

  render() {
    return (


      <div className="wines">
        <Header/>
        <ul className="wines__list row">
          {
            this.props.wines
              .map(wine =>
              <li key={wine.name} className="wine">
                <img src={WineImg}/>
                {wine.name} {wine.vintage} {wine.vineyard}
                <EmptyStar className='App-logo' ariaLabel='logo' />
              </li>)
          }
        </ul>
        <div>
        <div className="row">
          <div className= "col-md-4">
          </div>
        </div>
      </div>
      </div>
    );
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
