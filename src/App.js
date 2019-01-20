import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "db543e6850b8cb7a6cb90cd44587bd58";

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  // declare state in react v.16, no constructor required
  // key in state at the beginning are undefined because no fetching data from API yet.
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  // getWeather async Function
  // async is called for easy HTTP Request
  getWeather = async e => {
    // Prevent Default Submit Method
    e.preventDefault();

    // Declare Variables and take target to attribute name="".value
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // wait for fetch data before in heap
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    // wait for api_call was declared and continoun declare data
    //The json() method, It returns a promise that resolves with the result of parsing the body text as JSON.
    const data = await api_call.json();

    // Check Input Data
    if (city && country) {
      // Test see data
      console.log(data);

      // Set API data to State
      // Don't set State directly, use this.setState(); to set State
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Enter Correct Value !!!"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />

        {/* Send State to Weather to display */}
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
