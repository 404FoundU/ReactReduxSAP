import React, {Component} from 'react';
import StarEmpty from './StarEmpty';
import StarFilled from './StarFilled';


export class StarRating extends Component {
	constructor(props) {
	    super(props);
	}

	render(){
		let rate = this.props.rate;
		let empty = 5 - rate;
		let content = [];

		for(let i=0; i<rate; i++){
			content.push(<StarFilled key={'fill'+i}/>);
		}
		for(let i=0; i<empty; i++){
			content.push(<StarEmpty key={'empty'+i}/>);
		}

		return (<div className="rating-wrap">{content}</div>);
	}
}


export default StarRating;
