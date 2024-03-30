import React from "react";
import styles from './css/homenew.module.css';

const defaultStyles = {
    "container-2": "default-container",
    "lefthalf-1": "default-lefthalf",
    "img_x": "default-img",
    "righthalf-1": "default-righthalf",
    "newp": "default-newp",
    "homep_1": "default-homep"
  };

const mergedStyles = { ...defaultStyles, ...styles };

function HomeNew(props){
    const containerClass = props.variant === 'Second' ? mergedStyles['container-2-reverse'] : mergedStyles['container-2'];
    const imgClass = props.variant === 'Second' ? mergedStyles['img_x-second'] : mergedStyles['img_x'];
    return (
        <div>
        <div  className={containerClass}>
                <div className={mergedStyles["lefthalf-1"]}>
                    <img className= {imgClass} src={props.img} alt="book"/>
                </div>
                <div className={mergedStyles["righthalf-1"]}>
                    <h3 className={mergedStyles["newp"]}>{props.tit2}</h3>
                    <p className={mergedStyles["homep_1"]}>{props.para}</p> 
                </div>
            </div>
        </div>
    );
}



export default HomeNew ;