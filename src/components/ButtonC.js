import React from "react";
import { Button, Modal } from "antd";
// import ModalC from "./ModalC"
import './ButtonC.module.css';
class ButtonC extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      visible:false,
    }
  }
  showModal = () => {
    this.setState({
      visible:true
    })
  };

  handleOk = e => {
    this.setState({
      visible:false
    });
  };

  handleCancel = e => {
    this.setState({
      visible:false
    });
  };

  render() {
    return (
      <div className="button-container">
        {this.props.disabled ? (
          <Button
            shape="round"
            type="primary"
            style={{
              background: "darkgrey",
              border: "hsl(176, 50%, 47%)",
              borderRadius: "2em",
              color: "white",
              padding: "0.50em 1em",
              width: "10em",
              height: "3em",
              fontSize: "0.90em",
              cursor: "pointer",
            }}
            onClick={() => this.showModal}
            
          >
            {this.props.name}
          </Button>
        ) : (
          <Button
            shape="round"
            type="primary"
            style={{
              background: "hsl(176, 50%, 60%)",
              border: "hsl(176, 50%, 47%)",
              borderRadius: "2em",
              color: "white",
              padding: "0.50em 1em",
              width: "10em",
              height: "3em",
              fontSize: "0.90em",
              cursor: "pointer",
            }}
            onClick={this.showModal}
            
          >
            {this.props.name}
          </Button>
        )}
          <Modal className = "home-model" title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}
            style = {{ width:"50px", height:"50px"}}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        
        
      </div>
    );
  }
}

export default ButtonC;
