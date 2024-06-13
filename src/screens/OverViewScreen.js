import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import GradientCard from '../components/GradientCard'
import { useNavigation } from '@react-navigation/native'


const OverviewScreen = () => {

    const navigation = useNavigation()

    const NavigateToJobScreen = () => {
        navigation.navigate('Jobs')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header title={'Recruits'} />
            <View style={{ flexDirection: 'row', }}>
                <Card iconName={'receipt-outline'} number={'1'} text={'Jobs Applied'} />
                <Card iconName={'people-outline'} number={'8'} text={'Users'} />
            </View>
            <GradientCard />
            <View style={{ flexDirection: 'row', }}>
                <Card iconName={'briefcase-outline'} number={'10'} text={'Jobs'} onPress={NavigateToJobScreen} />
                <Card iconName={'code-outline'} number={'6'} text={'Technical Jobs'} />
            </View>
        </View>
    )
}

export default OverviewScreen

const styles = StyleSheet.create({})