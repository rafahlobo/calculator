import { Dimensions, StyleSheet } from 'react-native'
import { white } from 'ansi-colors';


export default StyleSheet.create({
    button: {
        fontSize: 20,
        height: Dimensions.get('window').height / 7,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#888'
    },
    orange:{
        backgroundColor : '#006caf',
        borderWidth: 1,
        borderColor: 'black'
    },
    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    tripleButton: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

