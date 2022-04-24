import React, { Component } from 'react'
import CardList from './components/cardList'

class Home extends Component {
    render() {
        return(
            <div class="container">
			    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <CardList />
                </div>
            </div>
        )
    }
}

export default Home