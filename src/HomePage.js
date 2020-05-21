import React from 'react';
import axios from 'axios';

export default class HomePage extends React.Component {
    state = {
        rates: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState(data)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h1>Rates</h1>
                {this.state.rates.map((rate) =>
                    <li>{rate}</li>
                )}
            </div>
        )
    }
}



/*
 * <ul>
                {this.state.rates.map(rate => <li>{rate}</li>)}
            </ul>
 * 
state = {
    rates: [],
};

 function HomePage() {
    setInterval(getData(), 1000);
    return (
        <div>
            <h1>HomePage</h1>
            <div>
                {rates.map(rate => <Card key={rate.id} {...rate} />)}
            </div>
        </div>
    );
}



getData = async () => {
    const resp = await axios.get(`https://api.exchangerate-api.com/v6/latest`);
    this.setState(prevState => ({
        rates: [...prevState.rates, resp.data],
    }));
};

export default HomePage;*/