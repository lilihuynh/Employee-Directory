import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar";
import Table from "../Table"

class Main extends Component {
  
        state = {
            searchResults: [],
            search: "",
            filteredResults: [],
            order: ""
        };
    

    //make API call to third party and display all random employees info on main page 
    //when page loads
    componentDidMount() {

        API.searchAPI().then(({ data }) => {
            console.log(data)
            console.log(data.results)
            this.setState({
                ...this.state,
                searchResults: data.results,
                filteredResults: data.results
            })
            console.log(this.state)
        }).catch(err => console.log(err)
        );
        console.log(this.state)
    };

    

}

export default Main;

