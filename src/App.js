import React from 'react';
import './App.css';
import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import HomePage from './HomePage';
import { render } from '@testing-library/react';

var isAuth = false;

class Form extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email.includes("@ey.com")) {
            alert("You successfully loged in");
            isAuth = true
        } else {
            alert("Use an EY email please.");
            isAuth = false;
        }
    };

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Hello!</h1>
                <label>Email:   </label>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={event => this.setState({ email: event.target.value })}
                    placeholder="EY email"
                    required
                />

                <text><br /></text>

                <label>Password:    </label>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value })}
                    placeholder="EY password"
                    required
                />
                <button>Login</button>
                </form>

                

            </div>
        );
    }
}

function App() {
    let component;
    if (isAuth == false) {
         component = Form;
    } else {
        component = HomePage;
    }
        return (
            <Switch>
                <Route exact path="/" component={component} />
            </Switch>
        );
}

export default App;
