import React, { Component } from 'react';
import randomfacts from '../randomfacts';
import script from '../script';

export default class Home extends Component {
    state={
        listy: 'closed',
        hairco: 'closed',
        randomFact: 'No facts yet!'
    }

    openListy = ()=>{
        this.setState({
            listy: 'listyOpen'
        })
    }

    openhairco = () => {
        this.setState({
            hairco: 'haircoOpen'
        })
    }

    close = () =>{
        this.setState({
            listy: 'closed',
            hairco: 'closed'
        })
    }

    componentDidMount(){
        let factArr = [];
        let random = () => { 
            let randomResult = Math.random() * (7-0) + 0;
            return Math.floor(randomResult); 
            }  
        let randomFact = ()=>{
            let randomNumber = random();
            console.log(randomNumber);
            factArr.push(randomNumber);
            console.log(factArr);
            let postedAlready = () => {
                let result;
                for(let i = 0 ; i < factArr.length-1; i++){
                    if(factArr[i] === randomNumber){
                        result = true
                        break;
                    } else {
                        result = false
                    }
                }
                return result
            };
            let checking = (e) => {
                let result;
                for(let i = 0 ; i < factArr.length-1; i++){
                    if(factArr[i] === e){
                        result = true
                        break;
                    } else {
                        result = false
                    }
                }
                return result
            };
            let check = postedAlready();
            console.log(check)
            if (factArr.length === 1){
                this.setState({
                    randomFact: randomfacts[randomNumber]
                })
            }
            else if (check === false){
                this.setState({
                    randomFact: randomfacts[randomNumber]
                })
            } 
            else if (checking(0) === true && checking(1) === true && checking(2) === true && checking(3) === true && checking(4) == true && checking(5)===true && checking(6) === true){
                this.setState({
                    randomFact: 'I wish I was more interesting and had more fun facts for you! 😱'
                })
            }
            else randomFact()
        }
        document.getElementById('randomFact').addEventListener('click', randomFact)
    }    

//     randomFact = (e)=>{
//         e.preventDefault();
//         let random = () => { 
//             let randomResult = Math.random() * (7-0) + 0;
//             return Math.floor(randomResult); 
//             }  
//         const randomNumber = random();
//         this.state.factArr.push(randomNumber);
//         let postedAlready=()=>{
//             for(let i=0 ; i<this.state.factArr.length-1 ; i++){
//                 return i === randomNumber
//             }
//         }
//         let check = postedAlready();
//         if(check === false){
//             this.setState({
//                 randomFact: randomfacts[randomNumber]
//             })
//         }
//         else randomFact()
// }

    // randomFact = (e)=>{
    //     e.preventDefault();
    //     let random = () => { 
    //         let randomResult = Math.random() * (8-0) + 0;
    //         return Math.floor(randomResult); 
    //         }  
    //     const randomNumber = random();
    //     this.setState({
    //         randomFact: randomfacts[randomNumber]
    //     })
    // }
  render() {
      
    return (
      <div className='home'>
        <div className='title' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> Web Developer Extraordinaire </h1>
            <h2> I am a full stack developer that loves what he does!</h2>
            <img src='/Assets/myAvatar.svg' alt='David Gleason'/>
        </div>
        <div className='summary' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h2> Hi there! I'm David, thanks for visiting my page and taking the time to scroll down here!</h2>
            <h3> 
                Since you're down here reading here's a bit about me: <br/>
                I started my journey as a web developer in 2018.
                I had been in the workforce for a few years after University and wanted to seperate myself from the rest of the working force
                with a technical skill. After much consideration and a bit of back and forth between programs I chose web development! (Yay!)
                What's more difficult and technical than programming? Am I right?
                I've always loved computers and dabbled here and there with programming at computer camp, who needs the outdoors anyways?
                Now that I'm all grown up with my Ryerson University degree under my belt and a web development diploma I'm ready to take on the world! 
                On this site you can find some previous projects that I've worked on. In the top left corner you can reach me.
            </h3>
        </div>
        <div className='skills' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> Developer Skills </h1>
            <div className='skillCard' data-aos='fade-zoom-in' data-aos-delay='750'>
                <div>
                    <h3>HTML</h3>
                    <div>
                        <img src='/Assets/html5.svg' alt='html5 logo' />
                        <p> HTML5 </p>
                        <img src='/Assets/react.svg' alt='jsx logo'/>
                        <p> JSX </p>
                    </div>
                </div>
                <hr />
                <div>
                    <h3> CSS </h3>
                    <div>
                        <img src='/Assets/css3.svg' alt='css3 logo' />
                        <p> CSS3 </p>
                        <img src='/Assets/sass-1.svg' alt='sass logo'/>
                        <p> SASS </p>
                    </div>
                </div>
                <hr />
                <div>
                    <h3> Javascript</h3>
                    <div>
                        <img src='/Assets/react.svg' alt='react logo'/>
                        <p> REACT </p>
                        <img src='/Assets/nodejs-1.svg' alt='node logo' />
                        <p> Node.js </p>
                        <img src='/Assets/webpack.svg' alt='webpack logo' />
                        <p> Webpack </p>
                        <img src='/Assets/npm.svg' alt='npm logo' />
                        <p> NPM </p>
                    </div>
                </div>
                <hr />
                <div>
                    <h3> Back-End </h3>
                    <div className='backend'>
                        <img src='/Assets/mongodb.svg' alt='mongodb log' />
                        <p> MongoDB </p>
                        <img src='/Assets/mlab-1.svg' alt='mlab logo' />
                        <p> MLab </p>
                        <img src='/Assets/mysql.svg' alt='mysql logo' />
                        <p> MySQL </p>
                    </div>
                </div>
                <hr />
                <div>
                    <h3> Other </h3>
                    <div>
                        <img src='/Assets/postman.svg' alt='postmamn logo'/>
                        <p> Postman </p>
                        <img src='/Assets/github-icon.svg' alt='github logo'/>
                        <p> Github </p>
                        <img src='/Assets/visual-studio-code.svg' alt='visual studio code logo' />
                        <p> Visual Studio Code </p>
                        <img src='/Assets/heroku.svg' alt='heroku logo'/>
                        <p> Heroku </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='recentWork' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> My Recent Work </h1>
            <h2> All programs work locally and on a computer (responsiveness is to come!) - if you would like to download them please visit <a href='​https://github.com/dgleason1990'> ​https://github.com/dgleason1990</a></h2>
            <div> 
                <div>
                    <h2 className='listybutton' onClick={this.openListy}> Listy </h2>
                    <div className={this.state.listy}>
                        <h2> <a href='https://listy-ingredients.herokuapp.com'>Listy </a> <p onClick={this.close}> X </p></h2>
                        <p> 
                        Listy was a paired programming page that I worked on. 
                        Listy starts with a request to an API called Spoonacular.
                        Spoonacular receives requests of ingredients provided and sends back several recipes.
                        Listy then takes the recipes and displays them on the page. 
                        When the user clicks on one of the items an ID is sent to Spoonacular again and displays cooking data on a seperate page.
                        Listy is also hands free with a speech-to-text feature. 
                        This feature listens and translates speech-to-text.
                        Using simple array methods Listy parses the information and sends the API request. 
                        A secondary feature added is text-to-speech on the cooking data page.
                        This took the recipe instructions, converted it to an mp3 file, and stored it locally.
                        Our front-end would then point to the audio file created and would play it back for the users.
                        We had a bit of fun with creating the audio files and hard coded several scripts that would randomly generate and be converted to mp3 files
                        with the recipe instructions. 

                        My contribution was creating the REACT components, REST API requests, and the text-to-speech/speech-to-text features.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='haircobutton' onClick={this.openhairco}>  <img src='./Assets/button.png' alt='Button Image'/> HairCo </h2>
                    <div className={this.state.hairco}>
                        <h2 className='hairco'> <a href='https://hairco.herokuapp.com/'> HairCo </a><p onClick={this.close}> X </p> </h2>
                        <p>
                            HairCo is a solo project that was used to explore all facets of a full-stack website.
                            The aim of the project was to connect clients to stylists in an easy to use application.
                            The tools used within this application were the following:
                            <div className='list'>
                                <ul>
                                    <li> REACT.js </li>
                                    <li> Node.js </li>
                                    <li> Express.js </li>
                                    <li> REST API </li>
                                    <li> MongoDB </li>
                                    <li> JSONWebToken </li>
                                </ul>
                                <ul>
                                    <li> Bcrypt </li>
                                    <li> Mongoose </li>
                                    <li> Cors </li>
                                    <li> Google Maps/Google Cloud Platform </li>
                                    <li> Twilio </li>
                                    <li> React-calendar </li>
                                </ul>
                            </div>
                            The website has 2 user interfaces for clients and stylists.
                            
                            The client side would allow clients to display stylists closest to them by checking HairCo's database.
                            The client's address would be sent to a google API which would return a latitude and longitude and 
                            compare it to all locations within the database. Retrieved data would then be displayed on an easy to use
                            Google maps component where clients could view information and choose their preferred stylist.
                            By selecting the stylist they would be directed to a page that would allow clients to directly contact 
                            stylists using Twilio - a cloud based service which sends texts. 

                            The stylist interface would allow stylists to register their information and be stored within HairCo's database.
                            Using bcrypt HairCo would hash the password and would be saved later for a comparison during login.
                            Registered information would also include a geolocation and using the google API a latitude and longitude 
                            would be stored for comparison. Using JSONWebTokens and storing it into LocalSession HairCo would provide authorization and access
                            to a dashboard for stylists.

                            This project is still in development - the framework is developed and concepts are in place. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='funfacts' data-aos='fade-zoom-in' data-aos-duration='1000'> 
            <h1> Some fun facts about me! </h1>
            <button id='randomFact'> Click me for a random fact!</button>
            {/* <button id='randomFact' onClick={this.randomFact}> Click me for a random fact!</button> */}
            <h2> {this.state.randomFact} </h2>
            <h2> For more fun facts feel free to email me! </h2>
        </div>
      </div>
    )
  }
}
