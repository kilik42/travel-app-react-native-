import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Details" onPress={() => {
        navigation.navigate('Details');
      } } >Click me </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    }
})

export default Home