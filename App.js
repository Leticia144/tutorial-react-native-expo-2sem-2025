import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default function App() {
return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>LOGO</Text>

  <View style={styles.menu}></View>
  </View>

  <View style={styles.content}>
    <Text>Box2</Text>

  <View style={styles.content2}></View>






    <View style={styles.card1}>
      <Text>Card1</Text>

      <View style={styles.minicard1}>
        <Text>mini card</Text>
      </View>

    </View>
    
   <View style={styles.card2}>
      <Text>Card2</Text>
    </View>
    







    </View>











  </View>


)
}

const styles = StyleSheet.create ({
container: {

flex: 2,
backgroundColor: "#b0e982ff",
justifyContent: "center",
alignItems: "center"
},


header: {
flex: 1,
width: "100%",
backgroundColor: "#d4d087ff",
justifyContent: "space-between",
alignItems:"center",
flexDirection: "row",
paddingHorizontal: 20
},


content: {
flex: 7,
width: "100%",
backgroundColor: "#8298e9ff",
},

menu: {
  width: 40,
  height: 40,
  backgroundColor: "#050505ff"
},

card1: {
  
  width: "100%",
  height: 200,
  alignItems:"center",
  backgroundColor: "#ffffff",
  margin: 50,
  justifyContent: "center",

  
  
  

},

card2: {
  
  width: "100%",
  height: 200,
  alignItems:"center",
  backgroundColor: "#ffffff",
  margin: 50,
  justifyContent: "center",

  
},
minicard1: {
  width: 40,
  heigh: 40,
  backgroundColor: "#000000",


}


})