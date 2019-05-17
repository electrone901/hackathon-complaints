import React, {Component} from 'react';

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
              HackathonList 
          </div>
      );
  }
}
export default (HackathonList);