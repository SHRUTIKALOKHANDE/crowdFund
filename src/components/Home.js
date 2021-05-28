import React from 'react';
import { withRouter } from 'react-router';
import data from '../data/data';
import './Home.css';
import NavBar from'./NavBar';
import ParentCard from './ParentCard';
import Bookmark from './Bookmark';
import ProgressC from './Progress';
import { Col } from 'antd';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.infos = data;
		this.projectDetails = {
			backed: 89914,
			total_backers: 5007,
			days_left: 56,
		};
		this.state = {
			setVisible: false,
			visible: false,
			projectDetails: this.projectDetails,
		};
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
		console.log('showModal', this.state.visible);
	};

	onContinue = (info) => {
		console.log(info);

		if (info) {
			let project_Details = this.projectDetails;
			project_Details.backed = project_Details.backed + parseInt(info.cost);
			project_Details.total_backers = project_Details.total_backers + 1;
			console.log('Project_Details', project_Details);

			this.setState({
				visible: false,
				projectDetails: project_Details,
			});

			console.log(this.state.projectDetails);
			return <ProgressC projectDetails={this.state.projectDetails} />;
		}
	};

	render() {
		return (
			<>
				<div className="home-container">
					<NavBar history={this.props.push} />
				</div>
				<Col xs={24} xl={24}>
					<div className="home-content">
						<Bookmark
							visible={this.state.visible}
							showModal={this.showModal}
							onContinue={this.onContinue}
						/>
						<ProgressC projectDetails={this.projectDetails} />
						<ParentCard
							visible={this.state.visible}
							showModal={this.showModal}
							onContinue={this.onContinue}
						/>
					</div>
				</Col>
			</>
		);
	}
}

export default withRouter(Home);
