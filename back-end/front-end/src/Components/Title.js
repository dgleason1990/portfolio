import React, { Component } from 'react'

export default class Title extends Component {

    //Scroll button
    scrollToTop = () => {
    let elmnt = document.getElementById("recentWork");
    elmnt.scrollIntoView(true);
    }

    // componentDidMount(){
    //     let wordArr = ['programmer', 'testing']
    //     let newWordArr = 'test';
    //     let word = [];
    //     let newWord = [''];
   
    //     setInterval(function(){
    //         let code = document.getElementById('code').innerHTML;
    //         console.log(newWordArr);
    //         console.log(newWord)
    //         let pushy = setInterval(function(){
    //             let index = newWord.length-1;
    //             if (newWord[newWord.length-1] === newWordArr[newWordArr.length-1]){
    //                 newWord.push()
    //             }
    //         }, 1000 )
    //         // let pushFunction = (arr) => {
    //         //     console.log(newWord[0] !== arr[0])
    //         //     for( let i=0 ; i<newWord.length ; i++){
    //         //         if (newWord[i] !== arr[i]){
    //         //             console.log('hi');
    //         //             newWord.push(arr[i])
    //         //             setTimeout(100)
    //         //         } 
    //         //     }
    //         // }

    //         if(newWordArr === 'test'){
    //             newWordArr = wordArr[0].split('');
    //             document.getElementById('code').innerHTML = pushFunction(newWordArr);
    //             // newWord.push(newWordArr[0]);
    //         } else if ( newWord === 'programmer'){

    //         }
        
    //         // for(let i=0;i<wordArr.length-1;i++){
    //         //     newWordArr = wordArr[i].split('');
    //         //     console.log('newWordArr');
    //         //     setTimeout(1000);
    //         // }
    //         // console.log(newWordArr)
    //         // if(code === 'test'){
    //         //     document.getElementById('code').innerHTML = newWordArr[0];
    //         //     newWord.push(newWordArr[0]);
    //         // } else if (code === 'p'){
    //         //     document.getElementById('code').innerHTML = newWord.join()
    //         // }
    //     }
    //     , 1000)
    // }

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
        <img className='avatar' src='/Assets/profilePicture.PNG' alt='David Gleason'/>
    </div>
    )
  }
}
