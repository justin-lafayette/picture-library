import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Api from '../utils/Api';

const Context = createContext();

class ProviderComponent extends Component {

    state = {
        title: "test title",
        user: {},
        email: "",
        isAuth: false,
        logged_in: false,
        event_id: ""
    }

    componentDidMount() {
        
    }

    render () {
        return (
            <Context.Provider value = {{
                ...this.state,
                
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Provider = withRouter( ProviderComponent );

export function connectStore( Dependent ) {
    return class extends Component {
        render() {
            return (
                <Context.Consumer>
                    { ( context ) => <Dependent {...context} /> }
                </Context.Consumer>
            );
        }
    }
}