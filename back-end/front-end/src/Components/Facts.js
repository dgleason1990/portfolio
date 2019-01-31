import React, { Component } from 'react';
import randomfacts from '../randomfacts';
import script from '../script';

export default class Facts extends Component {
    state={
        randomFact: 'No facts yet!'
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
    <div>
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
