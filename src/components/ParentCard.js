import React from 'react';
import { Card, Modal, Row } from 'antd';
import './ParentCard.css';
import data from '../data/data';
import Pledge from './Pledge';
import Model from './Model';
//import ProgressC from "./Progress";

class ParentCard extends React.Component {
	constructor(props) {
		super(props);
		this.infos = data;
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
		if (info.id === 0) {
			return;
		} else if (info.left === '0') {
			return (
				<Row key={info.id}>
					<Pledge
						history={this.props.push}
						info={info}
						disabled={true}
						style={{ background: 'darkgrey' }}
						onClick={this.props.showModal}
					/>
				</Row>
			);
		}
		return (
			<Row key={info.id}>
				<Pledge history={this.props.push} info={info} onClick={this.props.showModal} disabled={false} />
			</Row>
		);
	};

	getContent() {
		let content = `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.`;
		return content;
	}

	render() {
		return (
			<>
				<Card className="parentcard-container">
					<div className="title">{'About this project'}</div>
					<div className="content">{this.getContent()}</div>
					<div>{this.infos.map((info) => this.getInfosElement(info))}</div>
				</Card>
				<Modal title={this.getTitle()} visible={this.props.visible} centered={true} footer={null} width={600}>
					<Model infos={this.infos} onContinue={this.props.onContinue} />
				</Modal>
			</>
		);
	}
}

export default ParentCard;
