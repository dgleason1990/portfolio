import React, { Component } from 'react'

export default class Developer extends Component {
  render() {
    return (
        <div className='skills' data-aos='fade-zoom-in' data-aos-duration='1000'>
        <h1> Developer Skills </h1>
        <div className='skillCard' data-aos='fade-zoom-in' data-aos-delay='500'>
            <div>
                <h3>HTML</h3>
                <div>
                    <div>
                        <img src='/Assets/html5.svg' alt='html5 logo' />
                        <p> HTML5 </p>
                    </div>
                    <div>
                        <img src='/Assets/react.svg' alt='jsx logo'/>
                        <p> JSX </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3> CSS </h3>
                <div>
                    <div>
                        <img src='/Assets/css3.svg' alt='css3 logo' />
                        <p> CSS3 </p>
                    </div>
                    <div>
                        <img src='/Assets/sass-1.svg' alt='sass logo'/>
                        <p> SASS </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3> Javascript</h3>
                <div>
                    <div>
                        <img src='/Assets/react.svg' alt='react logo'/>
                        <p> REACT </p>
                    </div>
                    <div>
                        <img src='/Assets/nodejs-1.svg' alt='node logo' />
                        <p> Node.js </p>
                    </div>
                    <div>
                        <img src='/Assets/webpack.svg' alt='webpack logo' />
                        <p> Webpack </p>
                    </div>
                    <div>
                        <img src='/Assets/npm.svg' alt='npm logo' />
                        <p> NPM </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3> Back-End </h3>
                <div className='backend'>
                    <div>
                        <img src='/Assets/mongodb.svg' alt='mongodb log' />
                        <p> MongoDB </p>
                    </div>
                    <div>
                        <img src='/Assets/mlab-1.svg' alt='mlab logo' />
                        <p> MLab </p>
                    </div>
                    <div>
                        <img src='/Assets/mysql.svg' alt='mysql logo' />
                        <p> MySQL </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3> Other </h3>
                <div>
                    <div>
                        <img src='/Assets/postman.svg' alt='postmamn logo'/>
                        <p> Postman </p>
                    </div>
                    <div>
                        <img src='/Assets/github-icon.svg' alt='github logo'/>
                        <p> Github </p>
                    </div>
                    <div>
                        <img src='/Assets/visual-studio-code.svg' alt='visual studio code logo' />
                        <p> Visual Studio Code </p>
                    </div>
                    <div>
                        <img src='/Assets/heroku.svg' alt='heroku logo'/>
                        <p> Heroku </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
