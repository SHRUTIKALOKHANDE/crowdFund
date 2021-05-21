import React from 'react';
import {Button} from 'antd';
//import { PlusCircleOutlined } from "@ant-design/icons";


class ButtonC extends React.Component {
     
    render() {
        return (
            <div className = "button-container">
              {this.props.disabled ?(
                <Button
                shape="round"
                type="primary"
                style={{ background: "darkgrey", 
                         border:"hsl(176, 50%, 47%)", 
                         borderRadius: "2em", 
                         color:"white",
                         padding: "0.50em 1em",
                         width: "10em",
                         height: "3em",
                         fontSize: "0.90em",
                         cursor: "pointer"
                        }}
                onClick={this.props.handleClick}
                hoverable = {true}
              >
                {this.props.name}
              </Button>
              ) : (
                <Button
                shape="round"
                type="primary"
                style={{ background: "hsl(176, 50%, 60%)", 
                         border:"hsl(176, 50%, 47%)", 
                         borderRadius: "2em", 
                         color:"white",
                         padding: "0.50em 1em",
                         width: "10em",
                         height: "3em",
                         fontSize: "0.90em",
                         cursor: "pointer"
                        }}
                onClick={this.props.handleClick}
                hoverable = {true}
              >
                {this.props.name}
              </Button>
              )

              }
              
            </div>
        );
    }
} 

export default ButtonC