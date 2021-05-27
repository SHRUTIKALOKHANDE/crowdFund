import React from 'react';
import { Button } from 'antd';
import './ButtonC.css';

class ButtonC extends React.Component {
	render() {
		return (
			<div>
				{this.props.disabled ? (
					<Button
						shape="round"
						type="primary"
						className="buttonClass"
						style={{
							background: 'darkgrey',
							border: 'hsl(176, 50%, 47%)',
							borderRadius: '2em',
							color: 'white',
						}}
						disabled={true}
						onClick={this.props.onClick}
					>
						{this.props.name}
					</Button>
				) : (
					<Button shape="round" type="primary" className="buttonClass" onClick={this.props.onClick}>
						{this.props.name}
					</Button>
				)}
			</div>
		);
	}
}

export default ButtonC;
