import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUser, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
const Service = () => {
    return (  


            <div class="estimat_sectn" id="quote">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <form id="contactForm" class="form-order">
                                <div class="estimate_form_inner">
                                    <h4>Request a quote</h4>
                                    <div id="success"></div>
                                    <div class="input-group">
                                        <input name="user-name" id="user-name" placeholder="Full Name" required="" class="form-control" type="text"/>
                                    </div>
                                    <div class="input-group">
                                        <input name="user" id="Email" placeholder="Email" required="" class="form-control" type="text"/>
                                    </div>
                                    
                                    <div class="input-group">
                                        <input name="user" id="Email" placeholder="Contact" required="" class="form-control" type="text"/>
                                    </div>
                                    
                                    
                                    <div class="input-group input_group_full_width">
                                        <textarea id="user-message" placeholder="Message" required="" class="form-control" rows="4"></textarea>
                                    </div>
                                    <button class="btn btn-primary">GET AN ESTIMATE</button>
                                </div>
                            </form>
                           
                        </div>
                        <div class="col-sm-8 why_chs">
                            <div class="base-header">
                                <h3>Why Choosing us?</h3>
                            </div>
                            <div class="why_chs_box">
                                <span class="why_chs_icon"><FontAwesomeIcon icon={faGlobe} /></span>
                                <h4><span>Global supply Chain Solutions</span></h4>
                                <div class="why_chs_desc">
                                    <p>Efficiently unleash cross-media information without cross-media value.</p>
                                </div>
                            </div>
                            <div class="why_chs_box">
                                <span class="why_chs_icon"><FontAwesomeIcon icon={faUser} /></span>
                                <h4><span>24 Hours - Technical Support</span></h4>
                                <div class="why_chs_desc">
                                    <p>Specialises in international freight forwarding of merchandise and associated logistic services</p>
                                </div>
                            </div>
                            <div class="why_chs_box">
                                <span class="why_chs_icon"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
                                <h4><span>Mobile Shipment Tracking</span></h4>
                                <div class="why_chs_desc">
                                    <p>We Offers intellgent concepts for road and tail and well as complex special transport services</p>
                                </div>
                            </div>
                        </div>
        
                    </div>
                
                </div>
              
            </div>
       
          
        


    );
}
 
export default Service;