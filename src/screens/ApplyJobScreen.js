import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const ApplyJobScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [expectedCtc, setExpectedCtc] = useState('');

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Apply for Job</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <View style={styles.radioContainer}>
                <Text style={styles.label}>Gender:</Text>
                <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                    <View style={styles.radioOption}>
                        <RadioButton value="male" />
                        <Text>Male</Text>
                    </View>
                    <View style={styles.radioOption}>
                        <RadioButton value="female" />
                        <Text>Female</Text>
                    </View>
                </RadioButton.Group>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Education:</Text>
                <Picker
                    selectedValue={education}
                    onValueChange={(itemValue) => setEducation(itemValue)}
                >
                    <Picker.Item label="Undergraduate" value="ug" />
                    <Picker.Item label="Postgraduate" value="pg" />
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Experience:</Text>
                <Picker
                    selectedValue={experience}
                    onValueChange={(itemValue) => setExperience(itemValue)}
                >
                    <Picker.Item label="Fresher" value="fresher" />
                    <Picker.Item label="Experienced" value="experienced" />
                </Picker>
            </View>
            {experience === 'experienced' && (
                <TextInput
                    style={styles.input}
                    placeholder="Expected CTC"
                    value={expectedCtc}
                    onChangeText={setExpectedCtc}
                    keyboardType="numeric"
                />
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.applyButton]}
                    onPress={() => {/* Handle Apply button press */ }}
                >
                    <Text style={styles.buttonText}>Apply</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    label: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 18,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    pickerContainer: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#ccc',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    applyButton: {
        backgroundColor: '#ff6f61',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ApplyJobScreen;
