import React, { Component } from 'react'
import axios from 'axios'
import jsonCourse from './../assets/json/courses.json'

class CardList extends Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(jsonCourse)
      .then(res => {
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    return (
        <div class="col mt-4">
            {
            this.state.courses
                .map(course =>
                    <div class="card h-100" id={course.Id} data-product-id={course.Id}>
                        <img src={course.ThumbnailUrl} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{course.Title}</h5>
                            <p class="card-text">{course.Description}</p>
                        </div>
                        <div class="card-body js_card-links">
                            <div class="form-group">
                                <label for="purchase-02">Items to purchase</label>
                                <input class="js_item_count form-control" id="purchase-02" type="number" value="1" min="1" max="100" />
                            </div>
                            <button class="btn btn-primary btn-block" type="button">Add to Basket</button>
                            <a href={course.InfoURL} class="btn btn-secondary btn-block">More Info</a>
                        </div>
                    </div>
                )
            }
        </div>
    )
  }
}

export default CardList