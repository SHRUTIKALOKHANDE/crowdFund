import React from 'react';
import { Card, Modal } from 'antd';
import { Radio } from 'antd';
import ButtonC from './ButtonC';
import './ModelCard.css';
import logo from '../images/icon-check.svg';
class ModelCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPledgeId: 0,
			select: false,
			thanksVisible: false,
		};
	}

	showThanksModal = () => {
		this.setState({
				thanksVisible: true,
			},
			() => console.log('thanksVisible', this.state.thanksVisible)
		);
	};

	closeThanksModal = () => {
		this.setState({
			thanksVisible: false,
		});
	};

	handleSelect = (info) => {
		this.showThanksModal();
		this.props.onContinue(info);
	};

	onPledgeCardClick = (e) => {
		this.props.onPledgeCardChange(this.props.data.id);
	};

	render() {
		
		const isSelected = this.props.selectedPledgeId === this.props.data.id ? true : false;
		const disabled = this.props.data.left === '0' ? true : false;
		console.log(this.state.selectedPledgeId, this.props.data);
		return (
			<>
			<Card className={isSelected ? "pcard-container shadow" : "pcard-container"}>
				<Radio
					autoFocus={true}
					value={this.props.data.id}
					checked={isSelected}
					defaultChecked={isSelected}
					onChange={this.onPledgeCardClick}
					disabled={disabled}
				>
					<div className="pcard-title">
						<h4 className="pcard-heading">{this.props.data.title}</h4>
						<h6 className="pcard-pledge">{this.props.data.pledge}</h6>

						{this.props.data.id === 0 ? (
							''
						) : (
							<div className="pcard-left">
								{this.props.data.left}
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
						)}
					</div>

					<div className="pcard-content">{this.props.data.content}</div>

					{this.props.data.id === 0
						? ''
						: isSelected && (
								<div className="pcard-extend">
									<div
										style={{
											color: 'darkgray',
											fontSize: '18px',
										}}
									>
										Enter your pledge
									</div>
									<div className="pcard-right">
										<div className="pcard-cost">
											<span style={{ color: 'darkgray', marginLeft: '-2em' }}> $ </span>
											{this.props.data.cost}
										</div>
										<div>
											<ButtonC
												name={'Continue'}
												onClick={() => this.handleSelect(this.props.data)}
												disabled={disabled}
											/>
										</div>
									</div>
								</div>
						  )}
				</Radio>
			</Card>
			<Modal
			visible={this.state.thanksVisible}
			onCancel={this.closeThanksModal}
			footer={null}
			closable={false}
			centered={true}
			width={300}
		>
			<img src={logo} className="thanks-check-icon" alt="Check-icon" />
			<h2>Thanks for your support!</h2>
			<p className="thanks-content">
				Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You
				will get an email once our campaign is completed.
			</p>
			<div className="thanks-btn">
				<ButtonC name="Got it!" onClick={this.closeThanksModal} />
			</div>
		</Modal>
		</>
		);
	}
}
export default ModelCard;
