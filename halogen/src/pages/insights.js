import React, { Component } from "react";
import image1 from "./radar.PNG";
import image2 from "./Screenshot (66).png";
import image3 from "./Screenshot (67).png";
import image4 from "./Screenshot (68).png";
import image5 from "./Screenshot (69).png";
import image6 from "./Screenshot (70).png";

class insights extends Component {
    render() {
        return(
        //Form here
        <div>
            <h2> Insights - RADAR CHART </h2>
            <img src={image1}/>
           <div/>
           <div/>
           <h2> Anomaly - BOXPLOT</h2>
           <img src={image5}/>
           <h2> Anolomy - FORECASTING</h2>
            <img src={image3}/>
            <img src={image4}/>
            
            <img src={image6}/>
            
        </div>
        );
    }
}

export default insights;