import React, {Component} from 'react';

class AddHackathon extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0); 
    }
 
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
//         Link - https://hackathoncomplains.herokuapp.com/hackathon
// Request - POST
// Body - name
        console.log('click', this.state)
        e.preventDefault();
        const reviewData = {
            text: this.state.text,
        };
        console.log('click', reviewData)
        let url = "https://hackathoncomplains.herokuapp.com/hackathon";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.text
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log('it work');
            this.props.history.push('/');
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
        // this.props.postReview(reviewData, this.props.match.params.id, this.props.history);
    }
    
    render() {
        console.log('props', this.props)
        const {errors} = this.state;
        return(
            <div className="container">
                <div className=" container text-center">
                    <div className="col">
                        <h1>Add Hackathon</h1>
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                            <label htmlFor="text">Name of the Hackathon</label>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="text"
                                        value={this.state.text}
                                        onChange={this.onChange} 
                                        className="col-8"
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </div>
                        </form>
                    </div>
                
                </div>

            </div>
        )
    }


}
export default (AddHackathon);