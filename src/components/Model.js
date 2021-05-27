import React from 'react';
import { Card, Row, Col } from 'antd';
import { Radio } from 'antd';
import ButtonC from './ButtonC';
import './Model.css';

class Model extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPledgeIndex: 0,
			select: false,
		};
	}
	handleSelect = (value) => {
		console.log(value);
		this.setState({
			selectedPledgeIndex: value,
		});
	};
	render() {
		return (
			<Radio.Group
				onChange={(e) => {
					this.setState({
						selectedPledgeIndex: e.target.value,
						select: true,
					});
				}}
			>
				<Row>
					{this.props.infos.map((info, index) => (
						<Col key={index}>
							<Card className="pcard-container">
								<Radio autoFocus={true} value={index}>
									<div className="pcard-title">
										<div style={{ fontSize: '18px', fontWeight: '500', marginLeft: '-1em' }}>
											{info.title}
										</div>
										<div className="pcard-pledge">{info.pledge}</div>

										{info.id === 0 ? (
											''
										) : (
											<div className="pcard-left">
												{info.left}
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

									<div className="pcard-content">{info.content}</div>

									{info.id === 0 ? (
										''
									) : this.state.select ? (
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
													{info.cost}
												</div>

												<div>
													<ButtonC
														name={'Continue'}
														onClick={() => {
															this.setState({
																select: false,
															});
															this.props.onContinue(info);
														}}
													/>
												</div>
											</div>
										</div>
									) : (
										''
									)}
								</Radio>
							</Card>
						</Col>
					))}
					;
				</Row>
			</Radio.Group>
		);
	}
}

export default Model;
