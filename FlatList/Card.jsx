import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Card = ({ id,title }) => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return (
   
    
  
    
    
    <View style={{...styles.card,backgroundColor:"red" }}>
      <Text style={styles.text}>UserId: {id}</Text>
      <Text style={styles.title}>Title: {title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height:180,
    width:155,
    borderRadius:20,
    marginBottom:10,
    padding:10
  },
  text:{
    fontSize:19,
    fontWeight:"500",
    color:"white",
    marginBottom:7
  },
  title:{
    fontSize:18,
    fontWeight:"600",
    color:"white"
  }
});
