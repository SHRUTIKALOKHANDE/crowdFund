import React from 'react';
import {Card} from 'antd';
import './ParentCard.css';
import data from '../data/data';
import Pledge from './Pledge';
class ParentCard extends React.Component {
    constructor(props) {
        super(props);
        this.infos = data;
        this.state = {
            infos:[],
        }
    }

    getInfosElement = (info) => {
        console.log(info.left);
        if(info.left === "0"){
            return <Pledge history = {this.props.push} 
            info = {info} 
            handleClick = {this.props.handleClick}
            disabled = {true}/> 
        }
        else{
            return <Pledge history = {this.props.push} info = {info} handleClick = {this.props.handleClick}
            disabled = {false}/> 
        }
          
    }

    getContent(){
        let content = `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.`;
        return content;
    }
    
    render() {
        return (
            <Card className = "parentcard-container">
                <div className = "title">
                    {"About this project"}
                </div>
                <div className = "content">
                    {this.getContent()}
                </div>
                <div>
                    {
                        this.infos.map((info) => this.getInfosElement(info))
                    }
                    
                </div>
            </Card>
        );
    }
}

export default ParentCard;