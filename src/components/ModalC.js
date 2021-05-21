import React from 'react';
import { Modal } from 'antd';

class ModalC extends React.Component {
  handleCancel = () => {
    // because the client controls the visivlity state of the component
    this.props.hideModal();
  }
  handleOk = () => {
    this.props.hideModal();
  }

  render() {
    const shouldBeVisible = this.props.isVisible;
    return (

        <Modal
          title="Modal 1000px width"
          centered
          visible={shouldBeVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      
    ); 
  }
}
export default ModalC;