import React from 'react';
import {Card} from 'antd';
import ButtonC from './ButtonC';
import './Bookmark.css'
class Bookmark extends React.Component{
    render(){
        return (
            <Card>
                <div className = "bookmark-container">
                    
                    <div className = "title">
                        Mastercraft Bamboo Monitor Riser 
                    </div>
                    <div className = "subtitle">  
                        A beautiful & handcrafted monitor stand to reduce neck and eye strain. 
                    </div>
                    <div className = "bookmark">
                        <div>
                        <ButtonC name = {"Back this project"} disabled = {false}/>
                        </div>
                        <div>
                            <img className = "bookmark-icon" src="icon-bookmark.svg" alt="Bookmark-icon" />
                            <div className = "bookmark-title"> Bookmark </div>
                        </div>

                    </div>
                </div>
            </Card>
        );
    }
}

export default Bookmark;