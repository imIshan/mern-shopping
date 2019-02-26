import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
class ShoppingList extends Component{
    state = {
        items: [
            {id: uuid.v4(), name: 'Eggs'},
            {id: uuid.v4(), name: 'Milk'},
            {id: uuid.v4(), name: 'Chicken'},
            {id: uuid.v4(), name: 'Water'},
        ]
    }

    render(){
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem'}}
                    onClick = {() => {
                        const name = prompt('Enter Items');
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, {id: uuid.v4(), name}]
                            }))
                        }
                    }}
                >
                Add item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }))
                                }}
                                >
                                </Button>
                                {name}
                            </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;