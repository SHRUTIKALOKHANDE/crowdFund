import React from 'react';
import { Card, Modal } from 'antd';
import ButtonC from './ButtonC';
import './Bookmark.css';
import ModelCard from './ModelCard';
import bookmarked from '../images/icon-bookmark-green.svg';
import notBookmarked from '../images/icon-bookmark.svg';

class Bookmark extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isBookmark: false,
			selectedPledgeId:0,
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
		let check = !this.state.isBookmark;
		this.setState({
			isBookmark: check,
		});
	};

	onPledgeCardChange = (id) => {
		this.setState({
		  selectedPledgeId: id,
		});
	  };

	render() {
		return (
			<>
				<Card className="bookmark-container">
					<img className="mastercraft-icon" src="logo-mastercraft.svg" alt="mastercraft-icon" />
					<div className="bookmark-content">
						<h2 className="title">Mastercraft Bamboo Monitor Riser</h2>

						<h4 className="subtitle">
							A beautiful & handcrafted monitor stand to reduce neck and eye strain.
						</h4>

						<div className="bookmark">
							<div>
								<ButtonC name={'Back this project'} disabled={false} onClick={this.props.showModal} />
							</div>

							<div className="bookmark-btn" onClick={this.addBookmark}>
								<img
									className='bookmark-icon'
									src={this.state.isBookmark ? bookmarked : notBookmarked}
									alt="Bookmark-icon"
								/>

								<div className={this.state.isBookmark ? 'bookmark-titlehover' : 'bookmark-title'}>
									Bookmark
								</div>
							</div>
						</div>
					</div>
				</Card>
				<Modal title={this.getTitle()} visible={this.props.visible} onCancel={this.props.closeModal} centered={true} footer={null} width={600}>
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

export default Bookmark;
