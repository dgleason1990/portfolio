import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'> 
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src='./Assets/Listy.png'/>
          </div>
          <div>
            <h2> Listy </h2>
            <a href='https://listy-ingredients.herokuapp.com'> Visit the site </a>
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
          <div>
            <img src='./Assets/Hairco.png'/>
          </div>
          <div>
            <h2 className='hairco'> HairCo </h2>
            <a href='https://hairco.herokuapp.com/'> Visit the site </a>
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
          <div>
            <h2> All programs work 100% when hosted locally (responsiveness is to come!) - if you would like to download them please visit <a href='​https://github.com/dgleason1990'> ​https://github.com/dgleason1990</a></h2> 
          </div> 
        </Carousel> 
      </div>
    )
  }
}
