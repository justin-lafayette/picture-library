import React, { Component, createContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Context = createContext();

class ProviderComponent extends Component {
    state={
        user: {},
        logged_in: false
    }

    componentDidMount() {
        axios.get('/auth/isauth')
            .then(res => {
                if( res.data.user ) {
                    this.setState({
                        user: res.data.user,
                        logged_in: true
                    });
                }
            });
    }

    render() {
        return (
            <Context.Provider value ={{
                ...this.state,
                logOut: this.logOut,
                storeUser: this.storeUser,
                isAuth: this.isAuth
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Provider = withRouter(ProviderComponent);

export function connectStore(Dependent) {
    return class extends Component {
        render() {
            return (
                <Context.Consumer>
                    {(context) => <Dependent {...context} />}
                </Context.Consumer>
            );
        }
    }
}