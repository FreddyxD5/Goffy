import React, {lazy} from "react";
import { Link } from "wouter";

export default function Gif({title,id, url}){
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="gif-link">
                <h4> {title}</h4>                      
                <img loading={lazy} alt = {title} src={url}></img>                
            </Link>
        </div>
    )
}