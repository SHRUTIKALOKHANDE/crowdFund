import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  root = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="header">
        {/* Shows Crowdfund title image */}
        <div className="header-title" onClick={this.root}>
          <img src="logo.svg" alt="Crowdfund-icon"></img>
        </div>

        {/* Display links based on if the user's logged in or not */}
        <div className="header-action">
          
            <div className="header-link" onClick={this.root}>
                About
            </div>

            <div className="header-link" onClick={this.root}>
                Discover
            </div>
        
            <div className="header-link" onClick={this.root}>
                Get Started
            </div>
            
        </div>
      </div>
    );
  }
}
