import React, { Component } from 'react';
import randomfacts from '../randomfacts';
import script from '../script';
import Projects from './Projects'
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    
    //Scroll button
    scrollToTop = () => {
        console.log('triggered')
        let elmnt = document.getElementById("recentWork");
        elmnt.scrollIntoView(true); // Top
    }
    
    componentDidMount(){
        // random fact button
        let factArr = [];
        let scriptArr = [];
        let random = () => { 
            let randomResult = Math.random() * (7-0) + 0;
            return Math.floor(randomResult); 
            }  
        let randomFact = ()=>{
            console.log(scriptArr.length)
            let randomNumber = random();
            factArr.push(randomNumber);
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
                if(scriptArr.length === 0){
                    scriptArr.push(script[0]);
                    this.setState({
                        randomFact: 'I wish I was more interesting and had more fun facts for you! 😱'
                    })
                } else if (scriptArr.length === 1){
                    scriptArr.push(script[1]);
                    this.setState({
                        randomFact: 'If you keep clicking nothing will happen'
                    })
                } else if (scriptArr.length === 2){
                    scriptArr.push(script[2])
                    this.setState({
                        randomFact: 'Alright fine how about some jokes?'
                    })
                } else {
                    fetch('https://geek-jokes.sameerkumar.website/api')
                    .then(res=>res.json())
                    .then(data=>{
                        this.setState({
                            randomFact: data
                        })
                    })
                }
            }
            else randomFact()
        }
        document.getElementById('randomFact').addEventListener('click', randomFact);
    }    

  render() {
      
    return (
      <div className='home'>
        <div className='title' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> Welcome to David Gleason's Portfolio Page! </h1>
            <h2> I am a full stack developer in Toronto, Ontario </h2>
            <div className='seeRecent' onClick={this.scrollToTop}> See my Recent Work </div>
            <div>
                <a href='www.linkedin.com/in/davidjdgleason'> 
                    <img className='socialMedia' src='/Assets/linkedin-icon.svg' alt='LinkedIn Icon'/>
                </a>
                <a href='https://github.com/dgleason1990'> 
                    <img className='socialMedia' src='/Assets/github-1.svg' alt='Github Icon' />
                </a>
            </div>
            <img className='avatar' src='/Assets/profilePicture.PNG' alt='David Gleason'/>
        </div>
        <div className='summary' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h2> Hi there! I'm David, thanks for visiting my page and taking the time to scroll down here.</h2>
            <p> 
                I started my journey as a web developer in 2018 by fully committing myself to learning Web Development at Brainstation in Toronto.
                After having multiple roles in sales in marketing after University I decided I wanted to seperate myself from the
                rest of the working force with a technical skill.
                After much consideration and a bit of back and forth between programs I chose web development!
                What's more difficult and technical than programming? Am I right?
                I've always loved computers and dabbled here and there with programming at computer camp, who needs the outdoors anyways?
                Now that I'm all grown up with my Ryerson University degree under my belt and a web development diploma I'm ready to take on the world! 
                On this site you can find some previous projects that I've worked on. In the top left corner you can reach me.
            </p>
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
        <div id='recentWork' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> My Recent Work </h1>
            <Projects />
        </div>
        <div className='background'>
            <video autoPlay muted loop>
                <source src="/Assets/skyline.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className='funfacts' data-aos='fade-zoom-in' data-aos-duration='1000'> 
            <h1> Some fun facts about me! </h1>
            <button id='randomFact'> Click me for a random fact!</button>
            <h2> {this.state.randomFact} </h2>
            <h2> For more fun facts feel free to email me! </h2>
        </div>
      </div>
    )
  }
}
