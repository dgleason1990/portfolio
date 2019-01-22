import React, { Component } from 'react'

export default class Home extends Component {
    state={
        listy: 'closed',
        hairco: 'closed'
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

    randomFact = ()=>{
    }
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
                Now that I'm all grown up with a bcomm degree under my belt and a web development diploma I'm ready to take on the world! 
                On this site you can find some previous projects that I've worked on. In the top right corner you can reach me.
            </h3>
        </div>
        <div className='skills' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> Developer Skills </h1>
            <div>
                <div data-aos='zoom-in' data-aos-delay='750'>
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
                <div data-aos='fade-zoom-in' data-aos-delay='750'>
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
                <div data-aos='zoom-in' data-aos-delay='750'>
                    <img src='/Assets/future.png' alt='Future Logo'/>
                    <h2>Future Languages</h2>
                    <ul>
                        <li>
                            To be continued...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='recentWork' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> My Recent Work </h1>
            <div> 
                <div>
                    <h2 className='listybutton' onClick={this.openListy}> Listy </h2>
                    <div className={this.state.listy}>
                        <h2> <a href='https://listy-ingredients.herokuapp.com'>Listy </a> <p onClick={this.close}> X </p></h2>
                        <p> 
                        Listy was a paired programming page that I worked on. 
                        The site starts with a request to an API called spoonacular.
                        Spoonacular receives requests divided by a list of ingredients provided and sends back several recipes.
                        Listy then takes the recipes and displays them on the page. 
                        When the user clicks on one of the items an ID is sent to Spoonacular again and displays cooking data on a seperate page.
                        Listy is also hands free with a speech-to-text feature. 
                        This feature listens and translates speech-to-text.
                        Using simple array methods Listy parses the information and sends the API request. 
                        A secondary feature was adding a text-to-speech feature on the cooking data page.
                        This took the recipe instructions, converted it to an mp3 file, and stored it locally.
                        Our front-end would thenpoint to the audio file created and would play it back for the users.
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
                            compare it to everything within the database. Retrieved data would then be displayed on an easy to use
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
            <ul>
                <li> I rode a hippo once </li>  
                <li> My great grandmother was the first Chinese woman in Ottawa  </li>
                <li> I volunteered in Guatemala for 2 months at an orphanage </li>
            </ul>
            <h2> For more fun facts feel free to email me! </h2>
        </div>
      </div>
    )
  }
}
