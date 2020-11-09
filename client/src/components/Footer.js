import React from 'react'
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillYoutube,AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
    return (
        <div style={{marginBottom:'0%',paddingBottom:'0%' ,backgroundColor:'rgba(126, 190, 180, 0.774)',color:' rgb(255, 255, 255)'}}>            
<div className="page-footer font-small mdb-color pt-4">


  <div className="container text-center text-md-left">

  
    <div class="row text-center text-md-left mt-3 pb-3">
    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
    <img style={{width:'300px' , height:'180px'}} src="https://www.freelogodesign.org/file/app/client/thumb/59c867c9-fb29-4849-851e-45053a83d774_200x200.png?1603683579786" />
    </div>
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Private Primary School Al Khansa</h6>
        <p>We are ready to welcome our schoolchildren in a workspace that encourages concentration and the pleasure of learning.</p>
      </div>

      <hr className="w-100 clearfix d-md-none"></hr>

      {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!">MDWordPress</a>
        </p>
        <p>
          <a href="#!">BrandFlow</a>
        </p>
        <p>
          <a href="#!">Bootstrap Angular</a>
        </p>
      </div>
       */}

      {/* <hr className="w-100 clearfix d-md-none"></hr> */}

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>
      </div>

      
      <hr className="w-100 clearfix d-md-none"></hr>

      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
      </div>
      

    </div>
    

    <hr></hr>

    
    <div className="row d-flex align-items-center">

     
      <div className="col-md-7 col-lg-8">

        
        <p className="text-center text-md-left">© 2020 Copyright:
          
            <strong> DAConcept </strong>
          
        </p>

      </div>
     
      
      <div className="col-md-5 col-lg-4 ml-lg-0">

        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-facebook-f"><AiFillFacebook/></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-twitter"><AiFillInstagram/></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-google-plus-g"><AiFillLinkedin/></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-linkedin-in"><AiFillYoutube/></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating  rgba-white-slight mx-1">
                <i className="fab fa-linkedin-in"><AiFillTwitterSquare/></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
     

    </div>
    

  </div>
  

</div>

        </div>
    )
}

export default Footer
