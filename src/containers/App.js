/* jshint esversion: 6*/

import React, { Component } 		from 'react';
import { connect } from 'react-redux';
import CardList 	from '../components/CardList';
import SearchBox 	from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from "../actions";

//Step 9 -> function will receive a state
// searchField refers to the initial state in reducers.js file
// state.searchRobots.searchField comes from the reducers.js file
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
};

//Step 10 -> this will get the action object created in action.js e dispatch(send) it into the reducer.
//onSearchChange can be name as you like
// dispatch(setSearchField(event.target.value)) dispatches  setSearchField(event.target.value) to reducer.
const mapDispatchToProps = (dispatch) => {
  return {
  	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
};

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render(){
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
			return isPending ?
			<h1>Loading</h1> :
			(<div className="tc">
				<h1 className='f1'>Robofriends</h1>
				 <SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
			);
	}	
}
// Step 8 -> import 'connect' from react-redux and the actions needed (ex setSearchField) from actions.js
// and call the higher function connect as below. ps.: mapStateToProps and mapDispa... could be any name but they are standard redux syntax
// Step 9 up above the file
export default connect(mapStateToProps, mapDispatchToProps)(App);
