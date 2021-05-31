import React from 'react';
import './NavBar.css'
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked:false,
        }
    }
    
    handleClick = () => {
        this.setState({
            clicked:!this.state.clicked,
        });
    }
	render() {
		return (
			<nav className="NavbarItems">
				<div className="navbar-logo" onClick={this.root}>
					<img src="logo.svg" alt="Crowdfund-icon"></img>
				</div>
                <div className="navbar-menu-list">
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
                        <li>
                            <a className = "nav-links" href="/">About</a>
                        </li>
                        <li>
                            <a className = "nav-links" href="/">Discover</a>
                            </li>
                        <li>
                            <a className = "nav-links" href="/">Get Started</a>
                        </li>
                    </ul>
                </div>
			</nav>
		);
	}
}
export default NavBar;
