import React, {Component} from 'react';

class AddHackathon extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            rating: null,
            description: '',
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
        console.log('click', )
        e.preventDefault();
        const reviewData = {
            name: this.state.author,
            rating: this.state.rating,
            text: this.state.description,
        };
        this.props.postReview(reviewData, this.props.match.params.id, this.props.history);
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
                            <label htmlFor="text">Item name</label>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange} 
                                        className="col-8"
                                    />
                                </div>

                                <label htmlFor="text">Review</label>
                                <div className="form-group">
                                    <textarea 
                                        type="text" 
                                        id="description" 
                                        min="5" 
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange} 
                                        rows="3"
                                        className="col-8"
                                        >
                                    </textarea>
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