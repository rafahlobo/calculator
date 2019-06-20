import { View } from 'react-native'
import React, { Component } from 'react'
import Button from '../components/Button/Button'
import Display from '../components/Display/Display'
import styles from './CalculatorCss'



const initialStale = {
    displayValue: '0',
    values: [0, 0],
    operation: null,
    current: 0,
    clean: false
}


export default class Calculator extends Component {

    state = { ...initialStale } // Inicia estado

    addValue = value => {
        const currentValue = this.state.displayValue
        if (value === '.' && currentValue === '0') {
            this.setState({ displayValue: "0." })
            return
        }


        if (currentValue.includes('.') && value === '.') return
        let clean = this.state.clean || currentValue === '0'
        const displayValue = clean ? value : `${currentValue}${value}`
        if (clean) clean = false
        this.setState({ displayValue, clean })
    }

    setOperation = (op) => {
        let operation = this.state.operation
        if (op === '=' && operation === null) return

        let displayValue = this.state.displayValue
        const oldCurrent = this.state.current
        const clean = true
        let values = this.state.values
        values[oldCurrent] = parseFloat(displayValue)
        if (oldCurrent === 1) {
            values = [eval(`${values[0]}${operation}${values[1]}`), 0]
            displayValue = values[0] + ''
        }
        const current = oldCurrent === 0 ? 1 : 0
        operation = op === '=' ? null : op
        this.setState({ operation, displayValue, current, clean, values })
    }


    reset = () => {
        this.setState({ ...initialStale })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.display}>
                    <Display value={this.state.displayValue} operation={this.state.operation}></Display>
                </View>
                <View style={styles.buttons}>
                    <Button label="AC" onClick={this.reset} triple></Button>
                    <Button label="/" orange onClick={this.setOperation}></Button>
                    <Button label="7" onClick={this.addValue}></Button>
                    <Button label="8" onClick={this.addValue}></Button>
                    <Button label="9" onClick={this.addValue}></Button>
                    <Button label="*" orange onClick={this.setOperation}></Button>
                    <Button label="4" onClick={this.addValue}></Button>
                    <Button label="5" onClick={this.addValue}></Button>
                    <Button label="6" onClick={this.addValue}></Button>
                    <Button label="-" orange onClick={this.setOperation}></Button>
                    <Button label="1" onClick={this.addValue}></Button>
                    <Button label="2" onClick={this.addValue}></Button>
                    <Button label="3" onClick={this.addValue}></Button>
                    <Button label="+" orange onClick={this.setOperation}></Button>
                    <Button label="0" onClick={this.addValue}></Button>
                    <Button label="=" double onClick={this.setOperation}></Button>
                    <Button label="." orange onClick={this.addValue}></Button>
                </View>
            </View>
        )
    }

}