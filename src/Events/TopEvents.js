import React, { Component } from "react";

class TopEvents extends Component {

    handleFooter(value, e){
        e.preventDefault();
        alert(value);
    }
    render(){
        return(
            <div>
                <a href="/" onClick={(e) => this.handleFooter("Back To Home")}>Back To Home</a>
            </div>
        );
    }
}

export default TopEvents;