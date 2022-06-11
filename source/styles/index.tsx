import { Dimensions, StyleSheet } from "react-native";

export const searchStyle = StyleSheet.create({
    centeredView: {
        top: '5%',
        margin: 16,
        width: '90%',
        borderRadius: 30,
        position: 'absolute',
        flexDirection: 'row',
    },
    buttonSearch: {
        right: '110%'
    },
    buttonClose: {
        top: '4%',
        right: '280%',
    },
    input: {
        width: '100%',
        fontSize: 16,
        borderRadius: 30,
        borderColor: '#000',
        paddingHorizontal: 24,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export const flexStyle = StyleSheet.create({
    container: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerCircle: {
        backgroundColor: 'red',
        height: 60,
        width: 60,
        bottom: 48,
        padding: 2,
        position: 'absolute',
        borderRadius: 100,
        alignItems: 'center'
    },
    star: {
        top: '20%',
        position: 'absolute',
        margin: 16,
        alignSelf: 'flex-end',
        right: '2%',
        borderRadius: 50
    },
    navigation: {
        top: '28%',
        position: 'absolute',
        margin: 16,
        alignSelf: 'flex-end',
        right: '2%',
        borderRadius: 50
    },
    circle: {
        alignItems: 'center',
        padding: 24
    }
});

export const imageStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        bottom: 100,
        borderRadius: 30,
        position: 'absolute',
        backgroundColor: 'tansparent',
        width: Dimensions.get('screen').width,
    },
    card: {
        flex: 1,
        width: 300, 
        margin: 12,
        padding: 16,  
        flexWrap: 'wrap',
        borderRadius: 20,
        flexDirection: 'row',
    }
});