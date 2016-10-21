import React from 'react'
import ReactDOM from 'react-dom'

import  '../css/index.css';

const HeaderWeb = () =>{
	return(
		<div className={"block-header"}>	
					<img src={require("../image/bg_header_top.jpg")} className={"logo"} />
		</div>
	)
		
}
const Nav = () =>{
	return(	
				<div className={"mainMenu"}>
							<nav className={"displayNone "}>
								<ul>
									<li  ><a href="#"  id="homeMenu">Home</a></li>
									<li><a href="#" >How to play</a></li>
									<li><a href="#" >Information Pokemon</a></li>
									<li><a className={"active"}  href="#">Pokemon catched</a></li>
									<li><a href="#">Calculate IV</a></li>
									
								</ul>
							</nav>
							<nav  className={"displayNoneSize700"}>
								<ul>
										<li><a  href="#"><img src={require("../image/list.png")} className={"icon"} /></a></li>
								</ul>
							</nav>
					</div>
		)
}	


const Search = () =>{
	return(
		<div className={"center-box"}>
					Search
					<input type="text" class="text"/>
					<button> OK</button>
		</div>
	)
		
}

const ContentPokemon = (props) =>{
	
	
		return( 
			<div className={" box-sub-details"}>
									<div className={"box-details-pokemon"}>
											<img src={props.items}  className={"img-center"} />
											<div className={"col-12"}>
												{props.id}  <br/>
												 {" Name : "+props.name}  <br/>
												 {"Incubation : "+ props.incubation}	<br/>										 
											</div>
									</div>
								<center><button className={"green-button"}> View</button></center>
			</div>									
		)
  	
	
	
}

const NextPage = () =>{
	return(
		<div className={"next-page"}>
					<center>
						<button className={"next-button"}> Back </button>
						<button className={"white-button"}> 1 </button>
						<button className={"white-button"}> 2</button>
						<button className={"white-button"}> 3 </button>
						<button className={"white-button displayNone"}> 4 </button>
						<button className={"next-button"}>  Next </button>
					</center>
		</div>
	)
		
}


const MainContent = () => {		
	const items =[
		require("../image/001.png"),require("../image/002.png"),require("../image/003.png"),
		require("../image/004.png"),require("../image/005.png"),require("../image/006.png"),
		require("../image/007.png"),require("../image/008.png"),require("../image/009.png")
	]
	const id =[
		"ID : #001","ID : #002","ID : #003","ID : #004","ID : #005","ID : #006","ID : #007","ID : #008","ID : #009"
	]
	const name =[
		"Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise"
	]
	
	const incubation =[
		"2 km","-","-","2 km","-","-","2 km","-","-"
	]
	
	return (
		<section>
			<div className = {"container"}>
				<div className = {"block"}>
					<div className ={"block-white"}>	
							<HeaderWeb />
							<Nav/ >
							<Search/ >
							<ContentPokemon items={items[0]} name={name[0]} id={id[0]} incubation={incubation[0]} />
							<ContentPokemon items={items[1]} name={name[1]} id={id[1]} incubation={incubation[1]} />
							<ContentPokemon items={items[2]} name={name[2]} id={id[2]} incubation={incubation[2]} />
							<ContentPokemon items={items[3]} name={name[3]} id={id[3]} incubation={incubation[3]} />
							<ContentPokemon items={items[4]} name={name[4]} id={id[4]} incubation={incubation[4]} />
							<ContentPokemon items={items[5]} name={name[5]} id={id[5]} incubation={incubation[5]} />
							<ContentPokemon items={items[6]} name={name[6]} id={id[6]} incubation={incubation[6]} />
							<ContentPokemon items={items[7]} name={name[7]} id={id[7]} incubation={incubation[7]} />
							<ContentPokemon items={items[8]} name={name[8]} id={id[8]} incubation={incubation[8]} />
							<NextPage/ >
					</div>
				</div>
			</div>
		</section>
	 )
} 

const element = document.getElementById('main')
ReactDOM.render(<MainContent/ >,element)
