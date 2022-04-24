import React, { Component } from 'react'
import axios from 'axios'

class CardList extends Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get('./courses.json')
        .then(res => {
            const courses = res.data;
            this.setState({ courses });
        }).catch((err)=>{
            console.log(err);
        })
  }

  render() {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {
            this.state.courses
                .map(course =>
                    <div className="col m-4" key={course.Id}>
                        <div className="card" id={course.Id} data-product-id={course.Id}>
                            <img src={course.ThumbnailUrl} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{course.Title}</h5>
                                <p className="card-text">{course.Description}</p>
                            </div>
                            <div className="card-body js_card-links">
                                <div className="form-group">
                                    <label>Items to purchase</label>
                                    <input className="js_item_count form-control" type="number" min="1" max="100" />
                                </div>
                                <button className="btn btn-primary btn-block" type="button">Add to Basket</button>
                                <a href={course.InfoURL} className="btn btn-secondary btn-block">More Info</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
  }
}

export default CardList