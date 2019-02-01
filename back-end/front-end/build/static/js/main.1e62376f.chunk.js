(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t){e.exports=["I wish I was more interesting and had more fun facts for you! \ud83d\ude31","If you keep clicking nothing will happen","Alright fine. How about some random facts?"]},16:function(e,t){e.exports=["I rode a hippo once","My great grandmother was the first Chinese woman in Ottawa","I volunteered in Guatemala for 2 months","I've gone scuba diving with turtles \ud83d\udc22","I rode in a hot air balloon over the Serengeti while the Great Migration was happening \ud83d\udc03\ud83e\udd93","I saw Justin Trudeau during Pride week","I once saw Michael Shannon on the streets of Toronto (I almost said hi... next time...)"]},27:function(e,t,a){e.exports=a(49)},33:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),s=a.n(o),r=(a(33),a(2)),i=a(3),c=a(5),m=a(4),u=a(6),d=a(55),h=a(52),p=a(54),g=a(51),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={classNameHome:"onHome",classNameContact:"notOnContact",classNameNavbar:"navbar"},a.onHomeChange=function(){a.setState({classNameHome:"onHome",classNameContact:"notOnContact"}),a.props.history.push("/home")},a.onContactChange=function(){a.setState({classNameContact:"onContact",classNameHome:"notOnHome"}),a.props.history.push("/contact")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];window.addEventListener("scroll",function(){t.push(window.scrollY),window.scrollY<80?e.setState({classNameNavbar:"navbar"}):t[t.length-2]<window.scrollY?(t=[],e.setState({classNameNavbar:"navbarChanged"})):t[0]-window.scrollY>500&&e.setState({classNameNavbar:"navbar"})})}},{key:"render",value:function(){return l.a.createElement("div",{className:this.state.classNameNavbar},l.a.createElement("div",{className:this.state.classNameHome,to:"/home",onClick:this.onHomeChange}," David Gleason's Page "),l.a.createElement("div",{className:this.state.classNameContact,to:"/contact",onClick:this.onContactChange}," Want to Talk "))}}]),t}(n.Component),v=Object(g.a)(f),E=(a(38),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).scrollToTop=function(){document.getElementById("recentWork").scrollIntoView(!0)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=["Welcome to My Page","Pleasure to have you here","Want to talk?","Contact me above","&"],t=[],a="&&";setInterval(function(){var n=function(){return void 0===t?t.push(a[0]):a.length!==t.length?t.push(a[t.length]):void 0};"&&"===a?a=e[0].split(""):t.join()!==a.join()?(n(),document.getElementById("code").innerHTML=t.join("")+"|"):(t=[],function(){for(var t=0;t<e.length-1;t++)if(t===e.length-2)console.log("falsee"),a=e[0].split("");else if(e[t]===a.join("")){a=e[t+1].split("");break}}(),n(),document.getElementById("code").innerHTML=t.join(""))},250)}},{key:"render",value:function(){return l.a.createElement("div",{className:"title","data-aos":"fade-zoom-in","data-aos-duration":"1000"},l.a.createElement("div",null,l.a.createElement("h1",null," Welcome to David Gleason's Portfolio Page! "),l.a.createElement("h2",null," I am a full stack developer in Toronto, Ontario "),l.a.createElement("div",{id:"code"}),l.a.createElement("div",{className:"seeRecent",onClick:this.scrollToTop}," See my Recent Work "),l.a.createElement("div",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.linkedin.com/in/davidjdgleason"},l.a.createElement("img",{src:"/Assets/linkedin-icon.svg",alt:"LinkedIn Icon"})),l.a.createElement("a",{href:"https://github.com/dgleason1990"},l.a.createElement("img",{src:"/Assets/github-1.svg",alt:"Github Icon"})))),l.a.createElement("img",{className:"avatar",src:"/Assets/profilePicture.jpg",alt:"David Gleason"}))}}]),t}(n.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"summary","data-aos":"fade-zoom-in","data-aos-duration":"1000"},l.a.createElement("div",null,l.a.createElement("h2",null," Hi there! I'm David, thanks for visiting my page and taking the time to scroll down here. This is my story. "),l.a.createElement("img",{src:"/Assets/computerImage.jpg",alt:"computer image"})),l.a.createElement("p",null,"I started my journey as a web developer in 2018 by fully committing myself to learning Web Development at Brainstation in Toronto. After having multiple roles in sales and marketing after University I decided I wanted to seperate myself from the rest of the working force with a technical skill. After much consideration and a bit of back and forth between programs I chose web development! Can I ask you - what's more difficult and technical than programming? Am I right? I've always loved computers and dabbled here and there with programming at computer camp, who needs the outdoors anyways? Now that I'm all grown up with my Ryerson University Bachelor of Commerce Degree under my belt and a Web Development Diploma I'm ready to take on the world! My current background includes full-stack development using REACT for front-end, Express for the back-end, and MongoDB/MySQL for database management. I also use Node.JS for packages and modules.",l.a.createElement("br",null),l.a.createElement("hr",null),"On this site you can find an updated list of skills I've acquired and previous projects that I've worked on. In the top left corner you can reach me and at the bottom you can find some random facts about me!"))}}]),t}(n.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"skills","data-aos":"fade-zoom-in","data-aos-duration":"1000"},l.a.createElement("h1",null," Developer Skills "),l.a.createElement("div",{className:"skillCard","data-aos":"fade-zoom-in","data-aos-delay":"500"},l.a.createElement("div",null,l.a.createElement("h3",null,"HTML"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/html5.svg",alt:"html5 logo"}),l.a.createElement("p",null," HTML5 ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/react.svg",alt:"jsx logo"}),l.a.createElement("p",null," JSX ")))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null," CSS "),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/css3.svg",alt:"css3 logo"}),l.a.createElement("p",null," CSS3 ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/sass-1.svg",alt:"sass logo"}),l.a.createElement("p",null," SASS ")))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null," Javascript"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/react.svg",alt:"react logo"}),l.a.createElement("p",null," REACT ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/nodejs-1.svg",alt:"node logo"}),l.a.createElement("p",null," Node.js ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/webpack.svg",alt:"webpack logo"}),l.a.createElement("p",null," Webpack ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/npm.svg",alt:"npm logo"}),l.a.createElement("p",null," NPM ")))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null," Back-End "),l.a.createElement("div",{className:"backend"},l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/mongodb.svg",alt:"mongodb log"}),l.a.createElement("p",null," MongoDB ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/mlab-1.svg",alt:"mlab logo"}),l.a.createElement("p",null," MLab ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/mysql.svg",alt:"mysql logo"}),l.a.createElement("p",null," MySQL ")))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null," Other "),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/postman.svg",alt:"postmamn logo"}),l.a.createElement("p",null," Postman ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/github-icon.svg",alt:"github logo"}),l.a.createElement("p",null," Github ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/visual-studio-code.svg",alt:"visual studio code logo"}),l.a.createElement("p",null," Visual Studio Code ")),l.a.createElement("div",null,l.a.createElement("img",{src:"/Assets/heroku.svg",alt:"heroku logo"}),l.a.createElement("p",null," Heroku "))))))}}]),t}(n.Component),w=a(23),k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"projects"},l.a.createElement(w.Carousel,{autoPlay:!0,infiniteLoop:!0},l.a.createElement("div",null,l.a.createElement("img",{src:"./Assets/Listy.png"})),l.a.createElement("div",null,l.a.createElement("h2",null," Listy "),l.a.createElement("a",{href:"https://listy-ingredients.herokuapp.com"}," Visit the site "),l.a.createElement("p",null,"Listy was a paired programming page that I worked on. Listy starts with a request to an API called Spoonacular. Spoonacular receives requests of ingredients provided and sends back several recipes. Listy then takes the recipes and displays them on the page. When the user clicks on one of the items an ID is sent to Spoonacular again and displays cooking data on a seperate page. Listy is also hands free with a speech-to-text feature. This feature listens and translates speech-to-text. Using simple array methods Listy parses the information and sends the API request. A secondary feature added is text-to-speech on the cooking data page. This took the recipe instructions, converted it to an mp3 file, and stored it locally. Our front-end would then point to the audio file created and would play it back for the users. We had a bit of fun with creating the audio files and hard coded several scripts that would randomly generate and be converted to mp3 files with the recipe instructions. My contribution was creating the REACT components, REST API requests, and the text-to-speech/speech-to-text features.")),l.a.createElement("div",null,l.a.createElement("img",{src:"./Assets/Hairco.png"})),l.a.createElement("div",null,l.a.createElement("h2",{className:"hairco"}," HairCo "),l.a.createElement("a",{href:"https://hairco.herokuapp.com/"}," Visit the site "),l.a.createElement("p",null,"HairCo is a solo project that was used to explore all facets of a full-stack website. The aim of the project was to connect clients to stylists in an easy to use application. The tools used within this application were the following:",l.a.createElement("div",{className:"list"},l.a.createElement("ul",null,l.a.createElement("li",null," REACT.js "),l.a.createElement("li",null," Node.js "),l.a.createElement("li",null," Express.js "),l.a.createElement("li",null," REST API "),l.a.createElement("li",null," MongoDB "),l.a.createElement("li",null," JSONWebToken ")),l.a.createElement("ul",null,l.a.createElement("li",null," Bcrypt "),l.a.createElement("li",null," Mongoose "),l.a.createElement("li",null," Cors "),l.a.createElement("li",null," Google Maps/Google Cloud Platform "),l.a.createElement("li",null," Twilio "),l.a.createElement("li",null," React-calendar "))),"The website has 2 user interfaces for clients and stylists. The client side would allow clients to display stylists closest to them by checking HairCo's database. The client's address would be sent to a google API which would return a latitude and longitude and compare it to all locations within the database. Retrieved data would then be displayed on an easy to use Google maps component where clients could view information and choose their preferred stylist. By selecting the stylist they would be directed to a page that would allow clients to directly contact stylists using Twilio - a cloud based service which sends texts. The stylist interface would allow stylists to register their information and be stored within HairCo's database. Using bcrypt HairCo would hash the password and would be saved later for a comparison during login. Registered information would also include a geolocation and using the google API a latitude and longitude would be stored for comparison. Using JSONWebTokens and storing it into LocalSession HairCo would provide authorization and access to a dashboard for stylists. This project is still in development - the framework is developed and concepts are in place.")),l.a.createElement("div",null,l.a.createElement("h2",null," All programs work 100% when hosted locally (responsiveness is to come!) - if you would like to download them please visit ",l.a.createElement("a",{href:"\u200bhttps://github.com/dgleason1990"}," \u200bhttps://github.com/dgleason1990")))))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"recentWork","data-aos":"fade-zoom-in","data-aos-duration":"1000"},l.a.createElement("h1",null," My Recent Work "),l.a.createElement(k,null))}}]),t}(n.Component),O=a(16),N=a.n(O),C=a(14),I=a.n(C),A=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={randomFact:"No facts yet!"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[],a=[];document.getElementById("randomFact").addEventListener("click",function n(){console.log(a.length);var l=function(){var e=7*Math.random()+0;return Math.floor(e)}();t.push(l);var o=function(e){for(var a,n=0;n<t.length-1;n++){if(t[n]===e){a=!0;break}a=!1}return a},s=function(){for(var e,a=0;a<t.length-1;a++){if(t[a]===l){e=!0;break}e=!1}return e}();1===t.length?e.setState({randomFact:N.a[l]}):!1===s?e.setState({randomFact:N.a[l]}):!0===o(0)&&!0===o(1)&&!0===o(2)&&!0===o(3)&&1==o(4)&&!0===o(5)&&!0===o(6)?0===a.length?(a.push(I.a[0]),e.setState({randomFact:"I wish I was more interesting and had more fun facts for you! \ud83d\ude31"})):1===a.length?(a.push(I.a[1]),e.setState({randomFact:"If you keep clicking nothing will happen"})):2===a.length?(a.push(I.a[2]),e.setState({randomFact:"Alright fine how about some jokes?"})):fetch("https://geek-jokes.sameerkumar.website/api").then(function(e){return e.json()}).then(function(t){e.setState({randomFact:t})}):n()})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"background"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0},l.a.createElement("source",{src:"/Assets/skyline.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),l.a.createElement("div",{className:"funfacts","data-aos":"fade-zoom-in","data-aos-duration":"1000"},l.a.createElement("h1",null," Some fun facts about me! "),l.a.createElement("button",{id:"randomFact"}," Click me for a random fact!"),l.a.createElement("h2",null," ",this.state.randomFact," "),l.a.createElement("h2",null," For more fun facts feel free to email me! ")))}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement(E,null),l.a.createElement(b,null),l.a.createElement(y,null),l.a.createElement(j,null),l.a.createElement(A,null))}}]),t}(n.Component),T=(a(45),a(24)),M=a.n(T),H=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"particles"},l.a.createElement(M.a,{params:{particles:{number:{value:1e3,density:{enable:!0,value_area:1803.4120608655228}},color:{},shape:{type:"circle",polygon:{nb_sides:4}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:0,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:2,direction:"top",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",message:""},a.handleName=function(e){a.setState({name:e.target.value})},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handleMessage=function(e){a.setState({message:e.target.value})},a.handleSubmission=function(e){e.preventDefault();var t={method:"POST",body:JSON.stringify(a.state),headers:{"content-type":"application/json"}};fetch("https://david-gleasons-portfolio.herokuapp.com/contact",t).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact","data-aos":"flip-left","data-aos-duration":"1000"},l.a.createElement(H,null),l.a.createElement("div",{className:"submission"},l.a.createElement("p",null,"Thanks for taking the time to visit my site and reach out to me! What can I do for you?"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("div",null,"Name: ",l.a.createElement("input",{onChange:this.handleName})),l.a.createElement("div",null,"Email: ",l.a.createElement("input",{type:"email",onChange:this.handleEmail}))),"Message: ",l.a.createElement("textarea",{className:"message",onChange:this.handleMessage}),l.a.createElement("div",{className:"button",onClick:this.handleSubmission}," Submit ")),l.a.createElement("div",{className:"callMe"},"Also feel free to call me at 416-994-2941")),l.a.createElement("div",{className:"submissionBackground"}))}}]),t}(n.Component),P=a(25),D=a.n(P),W=(a(47),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){D.a.init()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/",render:function(){return l.a.createElement(p.a,{to:"/home"})}}),l.a.createElement(h.a,{path:"/home",component:S}),l.a.createElement(h.a,{path:"/contact",component:L})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(53);s.a.render(l.a.createElement(x.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.1e62376f.chunk.js.map