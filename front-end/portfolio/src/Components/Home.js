import React, { Component } from 'react'

export default class Home extends Component {
    randomFact = ()=>{

    }
  render() {
    return (
      <div className='home'>
        <div className='title'>
            <h1> Web Developer Extraordinaire </h1>
            <h2> I am a full stack developer that loves what he does!</h2>
            <img src='/Assets/myAvatar.svg' alt='David Gleason'/>
        </div>
        <div className='summary'>
            <h2> Hi there! I'm David, thanks for visiting my page and taking the time to scroll down here!</h2>
            <h3> 
                Since you're down here reading here's a bit about me: <br/>
                I started my journey as a web developer in 2018.
                I had been in the workforce for a few years after University and wanted to seperate myself from the rest of the working force
                with a technical skill. After much consideration and a bit of back and forth between programs I chose web development! (Yay!)
                What's more difficult and technical than programming? Am I right?
                I've always loved computers and dabbled here and there with programming at computer camp, who needs the outdoors anyways?
                Now that I'm all grown up with a bcomm degree under my belt and a web development diploma I'm ready to take on the world! 
                On this site you can find some previous projects that I've worked on. In the top right corner you can reach me.
            </h3>
        </div>
        <div className='skills'>
            <div>
                <img src='/Assets/frontend.png' alt='Front-End'/>
                <h2>Front-End Developer</h2>
                <ul>
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> SCSS </li>
                    <li> Javascript </li>
                    <li> React </li>
                    <li> Node.js </li>
                    <li> REST API </li>
                    <li> GIT </li>
                </ul>
            </div>
            <div>
                <img src='/Assets/database.png' alt='Server'/>
                <h2>Back-End Developer</h2>
                <ul>
                    <li> Express.js </li>
                    <li> MySQL </li>
                    <li> MongoDB </li>
                    <li> Mongoose </li>
                    <li> Node.js </li>
                    <li> REST API </li>
                    <li> Postman </li>
                    <li> Database Structures </li>
                </ul>
            </div>
            <div>
                <img src='/Assets/future.png' alt='Future Logo'/>
                <h2>Future Languages</h2>
                <ul>
                    <li>
                        To be continued...
                    </li>
                </ul>
            </div>
        </div>
        <div className='recentWork'>
            <h1> My Recent Work </h1>
            <div>
                <h2> Listy </h2>
                <h2> HairCo </h2>
            </div>
        </div>
        <div className='funfacts'> 
            <h1> Some fun facts about me! </h1>
            <ul>
                <li> I rode a hippo once </li>
                <li> My rank is legendary in Dota 2 </li>
                <li> My great grandmother was the first Chinese woman in Ottawa  </li>
                <li> I volunteered in Guatemala for 2 months at an orphanage </li>
            </ul>
            <h2> For more fun facts feel free to email me! </h2>
        </div>
      </div>
    )
  }
}
