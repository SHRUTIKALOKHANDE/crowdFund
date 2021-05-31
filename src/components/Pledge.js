import React from 'react';
import { Card } from 'antd';
import './Pledge.css';
import ButtonC from './ButtonC';

class Pledge extends React.Component {
	render() {
		return (
			<Card style={{ margin: '1em 0em' }}>
				<div className="pledge-container">
					<div className="pledge-title">
						<div className = "pledge-heading">
							{this.props.info.title}
						</div>
						<div className = "pledge-subheading">
							{this.props.info.pledge}
						</div>
					</div>
					<div className="pledge-content">{this.props.info.content}</div>
					<div className="pledge-button">
						<div className="pledge-left">
							{this.props.info.left}
							<span 
								style={{
									color: 'darkgray',
									paddingLeft: '5px',
									fontSize: '12px',
								}}
							>
								left
							</span>
						</div>
						<div>
							<ButtonC
								name={this.props.info.bname}
								onClick={() => this.props.onClick(this.props.info.id)}
								disabled={this.props.disabled}
							/>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}

export default Pledge;
