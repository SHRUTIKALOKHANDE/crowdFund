import React from "react";
import { Card } from "antd";
import "./Pledge.css";
import ButtonC from "./ButtonC";

class Pledge extends React.Component {
  render() {
    return (
      <Card>
        <div className="pledge-container">
          <div className="pledge-title">
            <div
              style={{
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {this.props.info.title}
            </div>
            <div
              style={{
                color: "hsl(176, 50%, 50%)",
                fontSize: "16px",
                fontWeight: "200",
                cursor: "pointer",
              }}
            >
              {this.props.info.pledge}
            </div>
          </div>
          <div className="pledge-content">{this.props.info.content}</div>
          <div className="pledge-button">
            <div
              style={{
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
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
            <div>
              {this.props.disabled ? (
                <ButtonC
                  name={this.props.info.bname}
                  handleClick={this.props.handleClick}
                  disabled={true}
                />
              ) : (
                <ButtonC
                  name={this.props.info.bname}
                  handleClick={this.props.handleClick}
                />
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Pledge;
