import React, {Component} from 'react';
import Spinner from './common/Spinner';
import { Link, withRouter } from 'react-router-dom';

class HackathonList extends Component{
    constructor() {
        super();
        this.state = {
          data: ""
        };
    }
    componentDidMount() {
        let url = "https://hackathoncomplains.herokuapp.com/hackathon";
        fetch(url)
        .then(res => {
            console.log('res YASS', res);
            return res.json();
        })
        .then((data) => {
            this.setState({data: data.data});
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }
  render(){
    console.log('state', this.state)
      return(
          <div className="container">
              <h1>Current Hackathons</h1> 
              {
                this.state.data ? this.state.data.map((item, key) => {
                    return (
                        <ul className="list-group" key={key}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link to={`/hackathon/${item._id}`}>
                                    {item.name}
                                    <span className="badge badge-primary badge-pill">go</span>
                                </Link>
                            </li>
                        </ul>
                    );
                }): <Spinner />
            }
          </div>
      );
  }
}
export default (HackathonList);