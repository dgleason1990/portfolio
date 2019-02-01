import React, { Component } from 'react'

export default class Title extends Component {

    //Scroll button
    scrollToTop = () => {
    let elmnt = document.getElementById("recentWork");
    elmnt.scrollIntoView(true);
    }
    
    componentDidMount(){
        let wordArr = ['Welcome to My Page', 'Pleasure to have you here', 'Want to talk?', 'Contact me above', '&']
        let word = []
        let newWord ='&&';
        this.intervalId = setInterval(function(){
                let pushWord = ()=>{
                    if(word === undefined){
                        return word.push(newWord[0])
                    }
                    else if(newWord.length !== word.length){
                        return word.push(newWord[word.length])
                    }
                };
                let checkIndex = ()=>{
                    for(let i=0; i<wordArr.length-1; i++){
                        if(i === wordArr.length-2){
                            newWord = wordArr[0].split('');
                        }
                        else if(wordArr[i] === newWord.join('')){
                            newWord = wordArr[i+1].split('');
                            break;
                        }
                    }
                };
                    if (newWord === '&&'){
                        newWord = wordArr[0].split('');
                    } else if ( word.join() !== newWord.join()){
                        pushWord();
                        document.getElementById('code').innerHTML = word.join('') + '|';
                    } else {
                        word = [];
                        checkIndex();
                        pushWord();
                        document.getElementById('code').innerHTML = word.join('');
                    }
                }
            , 250)
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
        }
 

  render() {
   

    return (
        <div className='title' data-aos='fade-zoom-in' data-aos-duration='1000'>
        <div>
            <h1> Welcome to David Gleason's Portfolio Page! </h1>
            <h2> I am a full stack developer in Toronto, Ontario </h2>
            <div id='code'></div>
            <div className='seeRecent' onClick={this.scrollToTop}> See my Recent Work </div>
            <div className='socialMedia'>
                <a href='https://www.linkedin.com/in/davidjdgleason'> 
                    <img  src='/Assets/linkedin-icon.svg' alt='LinkedIn Icon'/>
                </a>
                <a href='https://github.com/dgleason1990'> 
                    <img src='/Assets/github-1.svg' alt='Github Icon' />
                </a>
            </div>
        </div>
        <img className='avatar' src='/Assets/profilePicture.jpg' alt='David Gleason'/>
    </div>
    )
  }
}
