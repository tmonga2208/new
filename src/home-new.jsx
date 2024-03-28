import React from "react";
import './css/homenew.css';


function HomeNew(props){
    return (
        <div>
            <div  className="container-x">
                <p className="container-x-p">lorem ipsum lorem ipsidjowodcdecssocnk sdfcfsjicndescneiacnnicdsniuc jfodhpfioaeioh</p>
            </div>
        <div  className="container-2">
                <div className="lefthalf-1">
                    <img className="img-x" src={props.img} alt="book"/>
                </div>
                <div className="righthalf-1">
                    <h3 className="newp">{props.tit2}</h3>
                    <p className="homep-1">{props.para}</p> 
                </div>
            </div>
            <div  className="container-3">
                <div className="lefthalf-2">
                    <img className="img-x1" src={props.img} alt="book"/>
                </div>
                <div className="righthalf-1">
                    <h3 className="newp">{props.tit2}</h3>
                    <p className="homep-1">{props.para}</p> 
                </div>
            </div>
            <div  className="container-2">
                <div className="lefthalf-1">
                    <img className="img-x" src={props.img} alt="book"/>
                </div>
                <div className="righthalf-1">
                    <h3 className="newp">{props.tit2}</h3>
                    <p className="homep-1">{props.para}</p> 
                </div>
            </div>
            </div>
    );
}



export default HomeNew ;