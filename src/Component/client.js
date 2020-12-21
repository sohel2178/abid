import { blue } from '@material-ui/core/colors';
import React from 'react';
import Img1 from '../img/client-1.png'
import Img2 from '../img/client-2.png'
import Img3 from '../img/client-3.png'
import Img4 from '../img/client-4.png'
import Img5 from '../img/client-5.png'
import Img6 from '../img/client-6.png'
import Img7 from '../img/client-7.png'

const Client = () => {
    return (


        <div className="client-section" id="client-section" style={{backgroundColor:blue}}>
    
        <div className="container">
            <div className="row">
            
                <div className="owl-carousel owl-theme col-md-12" id="client">
                    
                    <div className="item row">
                        <div className="col-md-12">
                            <div className="client-box"><img  src={Img1}/>
                            </div>
                        </div>
                    </div>
             
                    <div className="item row">
                        <div className="col-md-12">
                            <div className="client-box"><img  src={Img2}/>
                            </div>
                        </div>
                    </div>
             
                    <div className="item row">
                        <div className="col-md-12">
                            <div className="client-box"><img  src={Img3}/>
                            </div>
                        </div>
                    </div>
              
                    <div className="item row">
                        <div className="col-md-12">
                            <div className="client-box"><img src={Img4}/>
                            </div>
                        </div>
                    </div>
                
                    <div className="item row">
                        <div className="col-md-12">
                            <div className="client-box"><img src={Img5}/>
                            </div>
                        </div>
                    </div>
                   
                    <div className="item row">
                        <div className="col-md-12">
                            <div className="client-box"><img  src={Img6}/>
                            </div>
                        </div>
                    </div>
                  
                    <div class="item row">
                        <div class="col-md-12">
                            <div class="client-box"><img src={Img7}/>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
          
        </div>
       
    </div>


      );
}
 
export default Client;