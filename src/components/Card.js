import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ iconName, number, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.iconsContainer}>
                <Icon name={iconName} size={20} style={styles.icon} />
            </View>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 30,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    iconsContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
    },
    icon: {
        textAlign: 'center',
        fontSize: 35,
        color: '#4CAF50',
        fontWeight: 'bold'
    },
    number: {
        textAlign: 'center',
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '600',
        color: '#555',
        color: 'black',
    },
});

export default Card;
