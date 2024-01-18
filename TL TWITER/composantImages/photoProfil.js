import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PhotoProfil = (props) =>{
    const {monimage} = props
    return(
    <View>
    <Text>lacapacitee</Text>
    <Image
        style={styles.monimage}
        source={monimage}
      />
    <Text style={styles.centrer}>copyright lacapacitee</Text>
    </View>
    )
}

export default PhotoProfil

const styles = StyleSheet.create({
monimage:{
    width : 350,
    height : 350,
},
centrer:{
    textAlign:'center'
}
})