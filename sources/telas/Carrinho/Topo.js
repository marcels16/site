import {View,Text } from "react-native";
import { StyleSheet, Text, View } from 'react-native';

export default function Topo({titulo,imagem}) {
  return (
    <View>
      <Text>{titulo}</Text>
      <Image
         source={imagem}
         style={{height:50,width:50}}
      />
    </View>
  );
}