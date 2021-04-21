import React, {Component} from "react";
import fetchData from "../Includes/axios";

class UserList extends Component {

    state = {
        persons: [],
        loading: true,
    }

    componentDidMount() {
        fetchData.getDate('users')
            .then(res => this.setState({persons: res.data}))
            .catch(error => console.log(error))
            .finally(() => this.setState({loading: false}))
    }

    render() {
        return (
            <table className="table table-hover table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address (street) </th>
                    <th>Company Name</th>
                    <th>Website</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                <tbody>
                {
                    this.state.persons.map(
                        person =>
                            <tr>
                                <td>{person.name}</td>
                                <td>{person.phone}</td>
                                <td>{person['address']['street']}</td>
                                <td>{person['company']['name']}</td>
                                <td>{person['website']}</td>
                                <td>{person.email}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary" onClick={
                                        () => {
                                        this.props.history.push({
                                            pathname: '/profile',
                                            id: person.id,
                                        })
                                    }}>
                                        View
                                    </button>
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default UserList;
