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

    //sorting employees by names
    sortedByName = () => {
        const newFiltered = this.state.filteredResults;

        if (this.state.order === "asc") {
            const newList = newFiltered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                filteredResults: newList,
                order: "desc"
            })
        } else {
            const newList = newFiltered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            this.setState({
                filteredResults: newList,
                order: "asc"
            })
        }
    };

    

}

export default Main;

