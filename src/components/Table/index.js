import React from 'react'
import Moment from 'react-moment';

function Table(props) {
    console.log(props)
    return (
        <table className="table table-striped">


            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={props.sortedByName} style= {{cursor:"pointer"}} title ="click here to sort by First Name"> First Name</th>
                    <th scope="col" onClick={props.sortedByName}style= {{cursor:"pointer"}}  title ="click here to sort by Last Name"> Last Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => {
                    return(
                    <tr>
                        {console.log(result)}
                        <th scope="row">
                            <img alt={result.lastName} src={result.picture.thumbnail} />
                        </th>

                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td><Moment format="MM/DD/YYY">{result.dob.date}</Moment></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;