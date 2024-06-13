import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const JobDetailsScreen = ({ route }) => {
    const navigation = useNavigation()
    const { description, company_name, job_type, ctc } = route.params;

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.companyName}>{company_name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Job Type:</Text>
                <Text style={styles.value}>{job_type}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>CTC:</Text>
                <Text style={styles.value}>{ctc}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.applyButton} onPress={() => navigation.navigate('ApplyJob')}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    companyName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    label: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 18,
    },
    value: {
        color: '#ff6f61',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        fontSize: 20,
        lineHeight: 30,
        color: '#333',
        marginVertical: 25,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    applyButton: {
        backgroundColor: '#ff6f61',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default JobDetailsScreen;
