import React, { Component } from "react";

import "./App.css";
import {connect} from 'react-redux';
import {increment, decrement, undo, redo} from './ducks/counter'
//mapStateToProps
//connect
//export connected component
//outputActions

export class App extends Component {
	render() {
		let { currentValue, increment, decrement, undo, redo} = this.props;
		//
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{currentValue}</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => increment(5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							
							onClick={ () => undo() }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							
							onClick={ () => redo() }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

function mapStateToProps(state){
	return state;
}
let outPutActions = {
	increment: increment, 
	decrement: decrement, //same as doing decrement: decrement
	undo: undo,
	redo: redo
}


export default connect(mapStateToProps,outPutActions)(App);