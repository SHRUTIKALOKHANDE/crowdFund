import React from 'react';
import { Card, Progress } from 'antd';
import './Progress.css';

class ProgressC extends React.Component {
	render() {
		return (
			<Card className="progress-container">
				<div className="progress-content">
					<div className="progress-outer">
						<div className="progress-inner">
							<div
								style={{
									fontSize: '24px',
									fontWeight: '600',
								}}
							>
								${this.props.projectDetails.backed}
							</div>
							<div
								style={{
									fontSize: '12px',
									fontWeight: '100',
									color: 'darkgray',
								}}
							>
								of $100,000 backed
							</div>
						</div>
						<hr className="hr" />
						<div className="progress-inner">
							<div
								style={{
									fontSize: '24px',
									fontWeight: '600',
								}}
							>
								{this.props.projectDetails.total_backers}
							</div>
							<div
								style={{
									fontSize: '12px',
									fontWeight: '100',
									color: 'darkgray',
								}}
							>
								total backers
							</div>
						</div>
						<hr className="hr" />
						<div className="progress-inner">
							<div
								style={{
									fontSize: '24px',
									fontWeight: '600',
								}}
							>
								{this.props.projectDetails.days_left}
							</div>
							<div
								style={{
									fontSize: '12px',
									fontWeight: '100',
									color: 'darkgray',
								}}
							>
								days left
							</div>
						</div>
					</div>
					<div className="progress-bar">
						<Progress
							percent={70}
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
