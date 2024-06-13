import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import OverviewScreen from '../screens/OverViewScreen';
import JobsScreen from '../screens/JobsScreen';
import MyApplicationsScreen from '../screens/MyApplicationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ApplyJobScreen from '../screens/ApplyJobScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


function JobsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JobsScreen" component={JobsScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="ApplyJob" component={ApplyJobScreen} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 10,
        },
        labelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Overview':
              iconName = 'grid-outline';
              break;
            case 'Jobs':
              iconName = 'briefcase-outline';
              break;
            case 'MyApplications':
              iconName = 'document-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'alert-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={size + 5} color={color} />;
        },
        tabBarLabel: ({ color }) => {
          let label;
          switch (route.name) {
            case 'Overview':
              label = 'Overview';
              break;
            case 'Jobs':
              label = 'Jobs';
              break;
            case 'MyApplications':
              label = 'Applications';
              break;
            case 'Profile':
              label = 'Profile';
              break;
            default:
              label = 'Tab';
              break;
          }

          return <Text style={{ color, fontSize: 14, fontWeight: '600' }}>{label}</Text>;
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Jobs" component={JobsStack} />
      {/* <Tab.Screen name="MyApplications" component={MyApplicationsScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default Navigator;
