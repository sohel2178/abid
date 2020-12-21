import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAddressBook, faAddressCard, faSeedling, faCarCrash } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return ( <section className="about-section" id="about-section"> 
    <div className="container">
        <div className="row">
            <div className="col-sm-6 about_bottom_warp">
              
                <div className="base-header">
                    <h3>About US</h3>
                </div>
              
                <div className="about_det_warp">
                 
                    <div className="about_short_des">
                        <p>Lorem ipsum dolor sit amet cons ectetur adipi scing elited hasellus id lectus quis duia euismod con placet ssa nec elit egestas efficitur Lorem ipsum dolor sit amet cons ect etur adipi scing elited hasellus id lectus quis dui</p>
                    </div>
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading active">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true">
                                  Our History
                                </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in" aria-expanded="true" role="button">
                                <div className="panel-body">
                                    Lorem ipsum   dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur ccumsan ipsum velit culpa charms of pleasure of the moment.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur ccumsan ipsum velit culpa charms of pleasure of the moment.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur ccumsan ipsum velit culpa charms of pleasure of the moment.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false">
                                  Our Mission
                                </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" aria-expanded="false" role="button">
                                <div className="panel-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur ccumsan ipsum velit culpa charms of pleasure of the moment.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false">
                                  Our Vision
                                </a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" aria-expanded="false" role="button">
                                <div className="panel-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur ccumsan ipsum velit culpa charms of pleasure of the moment.
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
           
            <div className="col-sm-6">
                <div className="about-right-img">
                    <div className="video-container">
                        <a data-backdrop="true" data-target="#video-modal" data-toggle="modal"><span class="play-video"><span class="fa fa-play"></span></span></a>
                    </div>
                   
                    <div className="modal fade video-modal" id="video-modal" role="dialog">
                        <div className="modal-content">
                            <div className="row">
                                <iframe allowfullscreen="" height="400" src="https://www.youtube.com/embed/BzMLA8YIgG0" width="712"></iframe>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
        <div className="row about_list_warp">
            <div className="col-sm-3 col-xs-12">
                
                <div className="about_list">
                <FontAwesomeIcon icon={faCarCrash} style={{height:50, width:50}}/>
                    <h5>Cost savings</h5>
                    <div className="about_para">Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth </div>
                </div>
               
            </div>
            <div className="col-sm-3 col-xs-12">
              
                <div className="about_list">
               
                <FontAwesomeIcon icon={faSeedling} style={{height:50, width:50}}/>
                    <h5>secure services</h5>
                    <div className="about_para">Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth </div>
                </div>
               
            </div>
            <div className="col-sm-3 col-xs-12">
              
                <div className="about_list">
                <FontAwesomeIcon icon={faAddressCard} style={{height:50, width:50}}/>
                    <h5>Cargo express</h5>
                    <div className="about_para">Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth </div>
                </div>
               
            </div>
            <div className="col-sm-3 col-xs-12">
               
                <div className="about_list">
              
                <FontAwesomeIcon icon={faCoffee} style={{height:50, width:50}}/>
                    <h5>Proven experience</h5>
                    <div className="about_para">Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth </div>
                </div>
              
            </div>
        </div>
      
    </div>

</section> );
}
 
export default About;