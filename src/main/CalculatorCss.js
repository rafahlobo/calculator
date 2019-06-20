import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    display: {
        flexGrow: 2,
        justifyContent : 'center',
        backgroundColor: 'gray'
    }

})