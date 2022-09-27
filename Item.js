import { Text, View ,Image} from "react-native";

export default function Item({item:{nome,imagem,descricao,preco}}) {
    return(
        <view key={nome}>
         <text>{nome}</text>
         <text>{descricao}</text>
         <Image
          source={imagem}
          style={height}
       />
         <text>{preco}</text>
        </view>
    );
}