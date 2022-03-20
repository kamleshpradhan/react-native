import React from "react"
import {Text,StyleSheet,View} from "react-native"
const ComponentScreen = () =>{
    const greeting = "Hi There!"
    const bye = "Bye Dude !"
    return(
        <View>
        <Text style={styles.text}>Hello Components</Text>
        <Text style={styles.text2}>This is the Second text</Text>
        <Text>{greeting}</Text>
        <Text>{bye}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:40,
        color:"red"
    },
    text2:{
        fontSize:20,
        color:"green"
    }
})

export default ComponentScreen