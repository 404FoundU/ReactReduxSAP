import React, {Component} from 'react';
import StarEmpty from './StarEmpty';
import StarFilled from './StarFilled';
import StarHalf from './StarHalf';


export class StarRating extends Component {
	constructor(props) {
	    super(props);
	}

	render(){
		let rate = this.props.rate;// 3.4
    let half = Math.ceil(rate%1);
		let empty = 5 - (rate+half);
		let content = [];

    if (rate > 0){
  		for(let i=1; i<=Math.floor(rate); i++){


          content.push(<StarFilled key={'fill'+i}   />);


  		}
      if (half){
        content.push(<StarHalf  key={'fill-half'} />);
      }
    }

    for(let i=0; i<empty; i++){
      content.push(<StarEmpty key={'empty'+i}/>);
    }


		return (<div className="rating-wrap">{content}</div>);
	}
}


export default StarRating;
