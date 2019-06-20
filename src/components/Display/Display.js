import React from 'react'
import { Text, View } from 'react-native'
import displayCss from './DisplayCss'
export default props =>
    <View>
        <Text style={displayCss.loboDev}> Lobodev </Text>
        <Text style={displayCss.displayOp}>{props.operation}</Text>
        <Text style={displayCss.display}>{props.value}</Text>
    </View>