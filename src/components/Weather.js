import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Clock from './Clock.js'
import axios from 'axios'

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=9b706266b62ecb327121ca9708f8c096&zip='

const icons = {
  clear: '☀',
  rain: '️🌧',
  storm: '⛈',
  snow: '🌨',
  mist: '🌫',
  clouds: '☁',
};

class Info extends Component {
  constructor (props) {
    super(props)
    // initialize all values to null or empty
    this.state = {
      zip: '',
      city: null,
      icon: null,
      temp: null,
      conditions: null,
    }
  }

  // take form input on button click
  handleInputChange = (event) => {
    event.persist()
    // set input to the value of zip
    this.setState({ zip: event.target.value })
  }

  handleSubmit = (event) => {
    // prevent page refresh
    event.preventDefault()
    const { zip } = this.state
    // make api call
    axios.get(`${apiUrl}${zip}`)
    // .then(res => console.log('This is res.data', res.data))
    // pull all data from openweathermap api
    .then(res => this.setState({
      zip: '',
      city: res.data.name,
      icon: res.data.weather[0].main,
      temp: res.data.main.temp,
      conditions: res.data.weather[0].description
    }))
    .catch(console.error)
  }

  render() {
    let weatherDisplay
    // deconstruct all necessary values from state
    const { city, temp, conditions } = this.state

    // if there's no input, keep info display blank
    if (!city) {
      weatherDisplay = ''
    } else {
      // fill input display with content
      weatherDisplay =(
        <div>
          <h3>{icons.clear} {temp}°F</h3>
          <p id="city">{city}</p>
          <p id="weather-conditions">{conditions}</p>
        </div>
      )
    }

    return (
      <div className="weather">
        <div className="weather-info">
          {weatherDisplay}
        </div>
        <Form.Group controlId="zip" id="weather-input">
          <Clock/>
          <Form onSubmit={this.handleSubmit} inline>
            <FormControl
              type="text"
              className="mr-sm-2"
              required
              name="zip"
              value={this.state.zip}
              placeholder="Enter Your Zip"
              onChange={this.handleInputChange}
            />
            <Button className='search-btn' type="submit" variant="outline-primary">Get Weather</Button>
          </Form>
        </Form.Group>
      </div>
    )
  }
}

export default Info
