
import './App.css';
import Intro from './components/Navbar/Intro';
import Navbar from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import Projects from './components/Projects/Certificate';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MobileNav from './components/Navbar/MobileNav';
import 'C:/Users/DELL/Practice/practicee/src/components/Projects/Certificate.css'
import Article from "C:/Users/DELL/Practice/practicee/src/components/Articles/Articles.jsx";
function App() {
  const data=[{
    id:1,
    name:"A Small Intro to ML",
    date:"Published on April 22, 2022",
    link:"https://www.linkedin.com/pulse/small-intro-ml-durga-chikkala/",
    img:"https://media-exp1.licdn.com/dms/image/C5612AQFrtts2RHti6w/article-cover_image-shrink_720_1280/0/1650633492524?e=2147483647&v=beta&t=YZBlMz_KufboFjvML3xhWeFUjHsWwvhoNHR-Bii2b-c"
},
{
id:2,
name:" V Environment in Python?",
date:"Published on March 1, 2022",
link:"https://www.linkedin.com/pulse/do-you-know-virtual-environment-python-durga-chikkala/",
img:"https://media-exp1.licdn.com/dms/image/C5612AQGEgoGC9OEI2g/article-cover_image-shrink_423_752/0/1646105123579?e=2147483647&v=beta&t=BGlcT9csnOfktCuVUIRHc_wPBUWcZ6cx1zsE7XPLyK8"
},
{
id:3,
name:"Topics about websites?",
date:"Published on February 18, 2022",
link:"https://www.linkedin.com/pulse/do-you-know-topics-websites-durga-chikkala/",
img:"https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
},
{
id:4,
name:"Web Scraping using Python",
date:"Published on January 12, 2022",
link:"https://www.linkedin.com/pulse/web-scraping-using-python-durga-chikkala/",
img:"data:image/png;base64,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",
},{
id:5,
name:"What is Recursion?",
date:"Published on January 10, 2022",
link:"https://www.linkedin.com/pulse/what-recursion-durga-chikkala/",
img:"https://media-exp1.licdn.com/dms/image/C5612AQEZnCmdKh0_8w/article-cover_image-shrink_720_1280/0/1641791632780?e=2147483647&v=beta&t=NiIVRXc_MC_oXAQ0ywb8GbOYRgqyzyyCWKAfZ6_2NKc"
},
{
id:6,
name:".py",
date:"Published on December 14, 2021",
link:"https://www.linkedin.com/pulse/py-durga-chikkala/",
img:"https://media-exp1.licdn.com/dms/image/C5612AQGKh6SKsiAVuQ/article-cover_image-shrink_423_752/0/1639489656105?e=2147483647&v=beta&t=K0POmIGdeFanc1UToOdsJQ_Ht9Nm_5ae5i0IxSxaVy8"

}];
var allarticles=data.map((x,index)=>
 {
   return  (
     <div className='certificates flex'>
          <Article name={x.name} date={x.date} img={x.img} link={x.link} key={index}/>  
      </div>
   
    
 )});
  return(
  <div className="App">
    <Navbar></Navbar>
    <MobileNav/>
    <Intro></Intro>
    <Education></Education>
    <Projects></Projects>
    
    <div className='Articles' id="Articles">
      <h1>Articles I have Written</h1>
      <div className='Article'>
        {allarticles}
      </div>
    </div>
    <Contact></Contact>
    <Footer></Footer>
  </div>
  );
  
}

export default App;
