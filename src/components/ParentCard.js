import React from 'react';
import { Card, Modal } from 'antd';
import './ParentCard.css';
import Pledge from './Pledge';
import ModelCard from './ModelCard';

class ParentCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPledgeId: 0,
		};
	}

	getTitle = () => {
		return (
			<div>
				<h2>Back this project</h2>
				<p style={{ color: 'darkgrey' }}>
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
				</p>
			</div>
		);
	};

	getInfosElement = (info) => {
		//console.log(info.left);
		if(info.id === 0 ){
			return; 
		}
		let hasNoPledgesLeft = info.left === '0';
		return <Pledge
				history={this.props.push}
				info={info}
				disabled={hasNoPledgesLeft ? true : false}
				style={hasNoPledgesLeft ? { background: 'darkgrey' } : {}}
				onClick={this.props.showModal}
			/>
	};

	getContent() {
		let content = `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.`;
		return content;
	}

	onPledgeCardChange = (id) => {
		this.setState({
			selectedPledgeId: id,
		});
	};

	render() {
		return (
			<>
				<Card className="parentcard-container">
					<div className="title">{'About this project'}</div>
					<div className="content">{this.getContent()}</div>
					<div>{this.props.infos.map((info) => this.getInfosElement(info))}</div>
				</Card>
				<Modal
					title={this.getTitle()}
					visible={this.props.visible}
					onCancel={this.props.closeModal}
					centered={true}
					footer={null}
					width={600}
				>
					{this.props.infos.map((info, idx) => (
						<ModelCard
							data={info}
							selectedPledgeId={this.state.selectedPledgeId}
							onPledgeCardChange={this.onPledgeCardChange}
							onContinue={this.props.onContinue}
						/>
					))}
				</Modal>
			</>
		);
	}
}

export default ParentCard;
