import React from 'react'; 

class App extends React.Component {
    constructor() {
        super(); 
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(obj => this.setState({people: obj.people}))
    }

    render() {
        let listPeople = this.state.people.map((person, index) => {
            return (
                <div key={index}>
                    <h1>Name: {person.name}</h1>
                    <h2>Spaceship: {person.craft}</h2>
                </div>
            )
        })
        return (
            <div>{listPeople}</div>
        )
    }
}

export default App; 