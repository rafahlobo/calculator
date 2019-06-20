import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    View
} from 'react-native'
import buttonStyle from './ButtonCss'


export default props => {
    const stylesButtons = [buttonStyle.button]

    // Condicional styles
    if( props.double) stylesButtons.push(buttonStyle.doubleButton)
    if( props.triple) stylesButtons.push(buttonStyle.tripleButton)
    if( props.orange) stylesButtons.push(buttonStyle.orange)

    return (
        <TouchableHighlight
            onPress={() => props.onClick && props.onClick(props.label)}>
            <Text style={stylesButtons}>{props.label} </Text>
        </TouchableHighlight>
    )
}