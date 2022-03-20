import React from "react"
import {View,Text,StyleSheet,FlatList,Container,Button} from "react-native"

const ListScreen = () =>{
    const friends = [{key:"1",age:"1",name: "friend 1"},
                     {key:"2",age:"2",name: "friend 2"},
                     {key:"3",age:"3",name: "friend 3"},
                     {key:"4",age:"4",name: "friend 4"},
                     {key:"5",age:"5",name: "friend 5"},
                     {key:"6",age:"6",name: "friend 6"},
                     {key:"7",age:"7",name: "friend 7"},
                     {key:"8",age:"8",name: "friend 8"},
                     {key:"9",age:"9",name: "friend 9"}]

    return(
        <>
        <Text>List Screen</Text>
        <FlatList
        // horizontal={false}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend)=>friend.name}
        data={friends} 
        renderItem={({item})=>{return(
        <>
        <Text style={styles.textStyle}>Name: {item.name}-Age:{item.age}</Text>
        </>
        )}}></FlatList>
</>
    )
}

const styles = StyleSheet.create({
textStyle:{
    marginVertical: 50
},
textStyle2:{
    color:"red"
}
})

export default ListScreen;