import React from 'react';
import { Button } from 'antd';
import './ButtonC.css';

class ButtonC extends React.Component {
	render() {
		const styles = {
			background: 'darkgrey',
			border: 'hsl(176, 50%, 47%)',
			borderRadius: '2em',
			color: 'white',
		};
		return (
			<div>
				<Button
					shape="round"
					type="primary"
					className="buttonClass"
					style={this.props.disabled ? {styles} : {}}
					disabled={this.props.disabled}
					onClick={this.props.onClick}
				>
						{this.props.name}
				</Button>
			</div>
		);
	}
}

export default ButtonC;
