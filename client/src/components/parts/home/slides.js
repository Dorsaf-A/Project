import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/nursery-admisison-647_040517113924.jpg?size=770:433',
  'https://ichef.bbci.co.uk/news/800/cpsprodpb/177EE/production/_113783269_hi061731191.jpg',
  'https://iadsb.tmgrup.com.tr/1d3833/645/344/0/28/958/540?u=https://idsb.tmgrup.com.tr/2018/05/17/1526587034781.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,display:'flex',justifyContent:'stretch', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'}}>
              <img src='https://www.freelogodesign.org/file/app/client/thumb/59c867c9-fb29-4849-851e-45053a83d774_200x200.png?1603683579786' style={{width:'100px',height:'70px'}}/>
    <span style={{margin:'200px',textAlign:'center',fontSize:'50px',color:'transparent'}}>Join Us!</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,display:'flex',justifyContent:'stretch', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'}}>
            <img src='https://www.freelogodesign.org/file/app/client/thumb/59c867c9-fb29-4849-851e-45053a83d774_200x200.png?1603683579786' style={{width:'100px',height:'70px'}}/>
    <span style={{margin:'200px',textAlign:'center',fontSize:'50px',color:'transparent'}}>Join Us!</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,display:'flex',justifyContent:'stretch', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'}}>
            <img src='https://www.freelogodesign.org/file/app/client/thumb/59c867c9-fb29-4849-851e-45053a83d774_200x200.png?1603683579786' style={{width:'100px',height:'70px'}}/>
    <span style={{margin:'200px',textAlign:'center',fontSize:'50px',color:'transparent'}}>Join Us!</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;