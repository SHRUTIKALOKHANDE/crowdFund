import React from 'react';
import { Card, Progress } from 'antd';
import './Progress.css';

class ProgressC extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			percent:0,
		};
	};

	getPercent = () => {
		let result = Math.floor(this.props.projectDetails.backed/1000)
		// this.setState({
		// 	percent:result,
		// },console.log(this.state.percent)); 
		return result;
	};

	render() {
		console.log(this.getPercent());
		return (
			<Card className="progress-container">
				<div className="progress-content">
					<div className="progress-outer">
						<div className="progress-inner">
							<h1>
								${this.props.projectDetails.backed}
							</h1>
							<h4 style={{ color: 'darkgray' }}>
								of $100,000 backed
							</h4>
						</div>
						<hr className="hr" />
						<div className="progress-inner">
							<h1>
								{this.props.projectDetails.total_backers}
							</h1>
							<h4
								style={{ color: 'darkgray' }}>
								total backers
							</h4>
						</div>
						<hr className="hr" />
						<div className="progress-inner">
							<h1>
								{this.props.projectDetails.days_left}
							</h1>
							<h4
								style={{ color: 'darkgray'}}>
								days left
							</h4>
						</div>
					</div>
					<div className="progress-bar">
						<Progress
							percent={this.getPercent()}
							status="active"
							showInfo={false}
							strokeColor={{
								'0%': 'hsl(176, 50%, 50%)',
								'100%': 'hsl(176, 50%, 50%)',
							}}
						/>
					</div>
				</div>
			</Card>
		);
	}
}
export default ProgressC;
