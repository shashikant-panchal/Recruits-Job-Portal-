import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { jobsData } from '../data/jobsData';

const JobCard = ({ job }) => {
    const navigation = useNavigation();
    let jobTypeColor = job.job_type === "Technical" ? "#4BA1B6" : "#4BA1B6";
    let CtcTypeColor = '#FCE7A8';

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('JobDetails', {
            description: job.description,
            company_name: job.company_name,
            job_type: job.job_type,
            ctc: job.ctc
        })}>
            <Card containerStyle={styles.cardContainer}>
                <Card.Title style={styles.cardTitle}>{job.company_name}</Card.Title>
                <Card.Divider />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={[styles.infoText, { backgroundColor: CtcTypeColor, color: '#FCA404' }]}>CTC: {job.ctc}</Text>
                    <Text style={[styles.infoText, { backgroundColor: jobTypeColor }]}>{job.job_type}</Text>
                </View>
            </Card>
        </TouchableWithoutFeedback>
    );
};

const JobsScreen = () => {
    const [filter, setFilter] = useState('All');

    const filteredJobs = jobsData.filter(job => {
        if (filter === 'All') return true;
        return job.job_type === filter;
    });

    const renderItem = ({ item }) => <JobCard job={item} />;

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setFilter('All')} style={[styles.filterButton, filter === 'All' && styles.activeFilter]}>
                    <Text style={styles.filterText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('Technical')} style={[styles.filterButton, filter === 'Technical' && styles.activeFilter]}>
                    <Text style={styles.filterText}>Technical</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('Non-Technical')} style={[styles.filterButton, filter === 'Non-Technical' && styles.activeFilter]}>
                    <Text style={styles.filterText}>Non-Technical</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredJobs}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    filterButton: {
        borderRadius: 15,
        backgroundColor: 'grey',
    },
    activeFilter: {
        backgroundColor: 'darkgreen',
    },
    filterText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '700',
        padding: 10
    },
    cardContainer: {
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    infoText: {
        fontSize: 15,
        padding: 10,
        fontWeight: '700',
        color: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default JobsScreen;
