import {View,Text } from "react-native"
export default function Detalhes({titulo,tituloproduto,descricao,preco,imagem}) {
  return (
    <View>
      <Text>{titulo}</Text>
      <Text>{tituloproduto}</Text>
      <Text>{descricao}</Text>
      <Text>{preco}</Text>
      <Image
       source={imagem}
       style={{height:50,width:50}}
      />
    </View>
  );
}