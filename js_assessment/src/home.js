import React, { Component } from 'react'
import CardList from './components/cardList'
import Container from 'react-bootstrap/Container';

class Home extends Component {
    render() {
        return(
            <Container>
                <CardList />
            </Container>
        )
    }
}

export default Home