/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,




    },

    text: {
        fontSize: 16,
        color: '#6f6f6f',
    },

    textDone: {
        fontSize: 16,
        color: '#6f6f6f',
        textDecorationLine: 'line-through',
    },

    title: {
        fontSize: 20,
        color: '#6f6f6f',
    },

    whiteText: {
        fontSize: 16,
        color: '#FFF',
    },

    textInput: {
        borderColor: '#6f6f6f',
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.6,
        borderRadius: 5,
        paddingLeft: 10,
    },

    inputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addButton: {
        width: Dimensions.get('screen').width * 0.25,
        backgroundColor: '#5897fb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    scrollContainer: {
        marginTop: 20,
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: 1,
    },
    RemoveButton: {
        backgroundColor: '#F33D3D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 22,
    },
});

export default styles;
