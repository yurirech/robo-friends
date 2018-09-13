/* jshint esversion: 6*/

import React from 'react';
// import robots from './robots';
import Card	 from './Card';

// CardList equals prop robots from the index.js
const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={robots[i].id}
							id={robots[i].id}
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})	
			} 
		</div>	
	);
};

export default CardList;