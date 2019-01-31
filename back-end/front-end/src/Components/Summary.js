import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
    <div className='summary' data-aos='fade-zoom-in' data-aos-duration='1000'>
        <div>
            <h2> Hi there! I'm David, thanks for visiting my page and taking the time to scroll down here. This is my story. </h2>
            <img src='/Assets/computerImage.jpg' alt='computer image'/>
        </div>
        <p> 
            I started my journey as a web developer in 2018 by fully committing myself to learning Web Development at Brainstation in Toronto.
            After having multiple roles in sales and marketing after University I decided I wanted to seperate myself from the
            rest of the working force with a technical skill.
            After much consideration and a bit of back and forth between programs I chose web development!
            Can I ask you - what's more difficult and technical than programming? Am I right?
            I've always loved computers and dabbled here and there with programming at computer camp, who needs the outdoors anyways?
            Now that I'm all grown up with my Ryerson University Bachelor of Commerce Degree under my belt and a Web Development Diploma I'm ready to take on the world! 
            My current background includes full-stack development using REACT for front-end, Express for the back-end, and MongoDB/MySQL for database management.
            I also use Node.JS for packages and modules.
            <br/>
            <hr/>
            On this site you can find an updated list of skills I've acquired and previous projects that I've worked on. In the top left corner you can reach me and at the bottom you can find some random facts about me!
        </p>
    </div>
    )
  }
}
