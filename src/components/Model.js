import React from "react";
import { Card } from "antd";
import { Radio } from "antd";
//import { Input } from 'antd';
import ButtonC from "./ButtonC";
import "./Model.css";

class Model extends React.Component {
  render() {
    return (
      <Card>
        <div className="pcard-container">
          <Radio style = {{ marginTop:"1em"}}>
            <div className="pcard-title">
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                {this.props.info.title}
                <span style={{
                  color: "hsl(176, 50%, 50%)",
                  fontSize: "16px",
                  fontWeight: "400",
                  cursor: "pointer",
                  marginLeft:"1em"
                }}>{this.props.info.pledge}</span>
              </div>
            <div style={{ fontSize: "20px", fontWeight: "500", marginRight: "1em" }}>
                {this.props.info.left}
                <span
                  style={{
                    color: "darkgray",
                    paddingLeft: "5px",
                    fontSize: "12px",
                  }}
                >
                  left
                </span>
              </div>
            </div>

            <div className="pcard-content">{this.props.info.content}</div>
            <hr className = "hr"></hr>
            <div className="pcard-extend">
              <div
                style={{
                  color: "darkgray",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                Enter your pledge
              </div>
              <div className="pcard-cost">$ {this.props.info.cost}</div>
              <div style = {{marginRight:"1em"}}>
                <ButtonC name={"Continue"} handleClick={this.handleClick} />
              </div>
            </div>
          </Radio>
        </div>
      </Card>
    );
  }
}

export default Model;
