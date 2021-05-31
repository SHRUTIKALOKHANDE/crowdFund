import React from 'react';
import data from '../data/data';
import './Home.css';
import NavBar from'./NavBar';
import ParentCard from './ParentCard';
import Bookmark from './Bookmark';
import ProgressC from './Progress';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.infos = data;
		this.state = {
			id:0,
			visible: false,
			projectDetails: {
				backed: 89914,
				total_backers: 5007,
				days_left: 56,
			},
		};
	}
	
	closeModal = () => {
		this.setState({
			visible: false,
		}, () => console.log('closeModal', this.state.visible));
	
	};

	showModal = (idx) => {
		this.setState({
			id:idx,
			visible: true,
		}, () => console.log('showModal', this.state.visible));
	};

	onContinue = (info) => {
		console.log(info);

		if (info) {
			let project_Details = this.state.projectDetails;
			project_Details.backed = project_Details.backed + parseInt(info.cost);
			project_Details.total_backers = project_Details.total_backers + 1;
			console.log('Project_Details', project_Details);
			
			this.setState({
				visible: false,
				projectDetails: project_Details,
			}, () => console.log(this.state));
		}
	};

	render() {
		return (
			<>
				<div className="home-container">
					<NavBar />
				</div>
				<div className="home-content">
					<Bookmark
						visible={this.state.visible}
						closeModal={this.closeModal}
						showModal={this.showModal}
						onContinue={this.onContinue}
						infos={this.infos}
					/>
					<ProgressC projectDetails={this.state.projectDetails} />
					<ParentCard
						visible={this.state.visible}
						closeModal={this.closeModal}
						showModal={this.showModal}
						onContinue={this.onContinue}
						infos={this.infos}
						id={this.state.id}
					/>
				</div>
			</>
		);
	}
}

export default Home;
