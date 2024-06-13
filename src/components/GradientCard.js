import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const GradientCard = () => {
    return (
        <LinearGradient
            colors={['#FF9800', '#fff', '#fff', '#fff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.card}
        >
            <Text style={styles.text1}>Super Dream</Text>
            <Text style={styles.text}>Opportunities</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    text1: {
        fontSize: 28,
        paddingRight: 10,
        textAlign: 'right',
        color: '#FF9800',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        paddingRight: 10,
        textAlign: 'right',
        color: '#FF9800',
        fontWeight: 'bold',
    },
});

export default GradientCard;
