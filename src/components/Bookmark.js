import React from 'react';
import { Card, Modal } from 'antd';
import ButtonC from './ButtonC';
import './Bookmark.css';
import Model from './Model';
import data from '../data/data';

class Bookmark extends React.Component {
	constructor(props) {
		super(props);
		this.infos = data;
		this.state = {
			clicked: false,
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

	addBookmark = () => {
		this.setState({
			clicked: true,
		});
	};

	render() {
		return (
			<>
				<Card className="bookmark-container">
					<img className="mastercraft-icon" src="logo-mastercraft.svg" alt="mastercraft-icon" />
					<div className="bookmark-content">
						<div className="title">Mastercraft Bamboo Monitor Riser</div>

						<div className="subtitle">
							A beautiful & handcrafted monitor stand to reduce neck and eye strain.
						</div>

						<div className="bookmark">
							<div>
								<ButtonC name={'Back this project'} disabled={false} onClick={this.props.showModal} />
							</div>

							<div className="bookmark-btn" onClick={this.addBookmark}>
								<img
									className={this.state.clicked ? 'bookmark-iconhover' : 'bookmark-icon'}
									src="icon-bookmark.svg"
									alt="Bookmark-icon"
								/>

								<div className={this.state.clicked ? 'bookmark-titlehover' : 'bookmark-title'}>
									{' '}
									Bookmark{' '}
								</div>
							</div>
						</div>
					</div>
				</Card>
				<Modal title={this.getTitle()} visible={this.props.visible} centered={true} footer={null} width={600}>
					<Model infos={this.infos} onContinue={this.props.onContinue} />
				</Modal>
			</>
		);
	}
}

export default Bookmark;
