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
    let color = 'red';
      return(
          <div className="container">
              <h3>Current Hackathons</h3> 
              <hr className="line"/>
              <div className="container listPostUser">
                {
                    this.state.data ? this.state.data.map((item, key) => {
                        return (

                            <div className="row" key={key}>
                                <Link className="col-10 text-left" to={`/hackathon/${item._id}`}>
                                    {item.name}
                                </Link>

                                <Link className="col-2 text-left" to={`/hackathon/${item._id}`}>
                                        <i className="fa fa-angle-double-right fa-1x"></i>
                                </Link>
                                <hr className="line"/>
                            </div>
                        );
                    }): <Spinner />
                }
              </div>

          </div>
      );
  }
}
export default (HackathonList);