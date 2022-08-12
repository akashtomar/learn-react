import React from 'react';

function BoilingVerdict(props){
    if(props.celcius >=100){
        return <p>The water would boil.</p>
    }else{
        return <p>The water would not boil.</p>
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
    }
    handleChange = (event)=>{
        this.props.onTempChange(event.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temp in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }

}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
function toFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange = (temperature)=>{
        this.setState({scale: 'c', temperature})
    }
    handleFahrenheitChange = (temperature)=>{
        this.setState({scale: 'f', temperature})
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput scale='c' temperature={celcius} onTempChange={this.handleCelsiusChange} />
                <TemperatureInput scale='f' temperature={fahrenheit} onTempChange={this.handleFahrenheitChange} />
                <BoilingVerdict celcius={parseFloat(celcius)} />
            </div>
        );
    }
}

export default Calculator;