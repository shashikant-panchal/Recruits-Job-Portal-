import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
  const [ctc, setCtc] = useState('1000000');
  const [selectedIndustry, setSelectedIndustry] = useState('IT');

  // Dummy JSON data
  const profileData = {
    avatar_url: 'https://example.com/avatar.jpg',
    name: 'Pavitra Sali',
    email: 'pavitrasali@example.com',
    department: 'Engineering',
    industries: ['IT', 'Healthcare', 'Finance', 'Education', 'Retail'],
  };

  const handleSave = () => {
    // Save functionality
    console.log('Saved:', { ctc, selectedIndustry });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profileData.avatar_url }} style={styles.avatar} />
        <Text style={[styles.text, styles.name]}>{profileData.name}</Text>
        <Text style={[styles.text, styles.email]}>{profileData.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.sectionTitle]}>My Info</Text>
        <View style={styles.inputContainer}>
          <Text style={[styles.text, styles.label]}>Department</Text>
          <Picker
            selectedValue={selectedIndustry}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedIndustry(itemValue)}
          >
            {profileData.industries.map((industry, index) => (
              <Picker.Item key={index} label={industry} value={industry} />
            ))}
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.text, styles.label]}>CTC</Text>
          <TextInput
            style={[styles.text, styles.input]}
            placeholder="Enter CTC"
            value={ctc}
            onChangeText={setCtc}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} color="darkblue" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    color: '#333', // Default text color
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  department: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'green', // Button container background color
    borderRadius: 10,
  },
});

export default ProfileScreen;
