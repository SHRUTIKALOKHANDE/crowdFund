import React from "react";
import { Card, Progress } from "antd";
import "./Progress.css";

class ProgressC extends React.Component {
  render() {
    return (
      <Card>
        <div className="progress-container">
        <div className="progress-content">
          <div className="progress-outer">
            <div
              className="progress-inner"
              style={{
                borderRight: "4px solid whitesmoke",
                height: "50px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                ${this.props.projectDetails.backed}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "200",
                  color: "darkgray",
                }}
              >
                of $100,000 backed
              </div>
            </div>
            <div
              className="progress-inner"
              style={{
                borderRight: "4px solid whitesmoke",
                height: "50px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                {this.props.projectDetails.total_backers}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "200",
                  color: "darkgray",
                }}
              >
                total backers
              </div>
            </div>
            <div className="progress-inner">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                {this.props.projectDetails.days_left}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "200",
                  color: "darkgray",
                }}
              >
                days left
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <Progress
              percent={70}
              status="active"
              showInfo={false}
              style={{
                width: "100%",
                background: "#ddd",
                borderRadius: "2em",
              }}
              strokeColor={{
                "0%": "hsl(176, 50%, 50%)",
                "100%": "hsl(176, 50%, 50%)",
              }}
            />
          </div>
        </div>
        </div>
      </Card>
    );
  }
}
export default ProgressC;
