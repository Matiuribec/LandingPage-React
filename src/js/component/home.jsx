import React from "react";
import Card from './Card.jsx'
import NavBar from './NavBar.jsx'
import Jumbotron from './Jumbotron.jsx'



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
 
	const card =[
		{img:{src:"https://picsum.photos/seed/1/150/150", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Card Title",text:"A little text from here to there"},
		{img:{src:"https://picsum.photos/seed/2/150/150", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Card Title",text:"A little text from here to there"},
		{img:{src:"https://picsum.photos/seed/3/150/150", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Card Title",text:"A little text from here to there"},
		{img:{src:"https://picsum.photos/seed/4/150/150", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Card Title",text:"A little text from here to there"},

	]
	return (
		<div className="text-center">
			<NavBar />
			<Jumbotron />
			<div className= "d-flex">
				{card.map((card, index)=><Card key={index} button= {card.btn} img={card.img} title={card.title} text={card.text}/>)}
			</div>
			
		</div>
	);
};

export default Home;
