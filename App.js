import {View,Text, FlatList } from "react-native";
import Detalhes from "./sources/telas/Carrinho/Detalhes";
import Topo from "./sources/telas/Carrinho/Topo";
import Mocks from ".sources/mocks/carrinho";
import Item from "./sources/telas/Carrinho/Item";
export default function App() {
  return (
    <View>
      <Text>Principal</Text>
      <Topo {...Mocks.Topo}/>
      <Detalhes {...Mocks.Detalhes}/>
      
      <FlatList
       data={Mocks.itens.lista}
       renderItem={Item}
       keyExtractor={({nome})=>nome}
      />
    </View>
  );
}