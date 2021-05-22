import React from "react";
import { withRouter } from "react-router";
import data from "../data/data";
import "./Home.css";
import Header from "./Header";
import ParentCard from "./ParentCard";
import Bookmark from "./Bookmark";
import ProgressC from "./Progress";
import Model from "./Model";
import { Col } from "antd";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.infos = data;
    this.projectDetails = {
      backed: 89914,
      total_backers: 5007,
      days_left: 56,
    };
    this.state = {
      setVisible: false,
      visible: true,
    };
  }
  handleClick = () => {
    this.setState({
      setVisible: true,
    });
    console.log("Button clicked", this.state.visible);
  };

  hideModal = () => this.setState({ visible: false });

  getElement = (info) => {
    return <Model history={this.props.push} info={info} />;
  };

  render() {
    return (
      <>
        <div className="home-container">
          <Header />
        </div>
        <Col xs={24} xl={24}>
          <div className = "home-content">
            <Bookmark />
            <ProgressC projectDetails={this.projectDetails} />
            <ParentCard handleClick={this.handleClick} />
          </div>
        </Col>
        {/* <div className="home-modal">
          {this.infos.map((info) => this.getElement(info))}
        </div>
        <div>
          {this.state.setVisible && <ModalC visible={this.state.visible} />}
        </div> */}
      </>
    );
  }
}

export default withRouter(Home);
