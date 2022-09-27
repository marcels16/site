import {View,Text,Image} from "react-native";

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