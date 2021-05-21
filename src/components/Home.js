import React from 'react';
import { withRouter } from "react-router";
//import data from '../data/data';
import './Home.css';
import Header from './Header';
import ParentCard from './ParentCard';
import Bookmark from './Bookmark';
import ProgressC from './Progress';
import ModalC from './ModalC';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.projectDetails = {
            backed: 89914,
            total_backers: 5007,
            days_left: 56
        };
        this.state = {
            visible : false,
        };
    }
    handleClick = () => {
    this.setState({
        visible:true,
    }); 
    console.log("Button clicked",this.state.visible);   
    }
    
    hideModal= () => this.setState({visible: false});
 
    render() {
        return (
            
            <>
                <div className = "home-container">
                    <Header/>
                </div>
                <div className = "home-bookmark">
                    <img className = "mastercraft-icon" src="logo-mastercraft.svg" alt="mastercraft-icon" />
                    <Bookmark />
                </div>
                <div className = "home-progress">
                    <ProgressC projectDetails = {this.projectDetails}/>
                </div>
                <div className = "card-container">
                    <ParentCard handleClick = {this.handleClick}/>
                </div>
                <div className = "home-modal">
                    {this.state.visible && (
                        <ModalC 
                        isVisible = {this.state.visible} 
                        hideModal= {this.hideModal}
                        />
                    )}  
                </div>
            </>
        );
    }
}

export default withRouter(Home);