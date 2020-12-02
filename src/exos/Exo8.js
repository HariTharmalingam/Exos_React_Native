import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const users = [
    {"id":1,"first_name":"Sandro","last_name":"Eustice"},
    {"id":2,"first_name":"Britt","last_name":"Lusted"},
    {"id":3,"first_name":"Lenee","last_name":"Matanin"},
    {"id":4,"first_name":"Audrie","last_name":"Swapp"},
    {"id":5,"first_name":"Anderea","last_name":"Minigo"},
    {"id":6,"first_name":"Ferd","last_name":"Gimert"},
    {"id":7,"first_name":"Milty","last_name":"Vokes"},
    {"id":8,"first_name":"Millicent","last_name":"Keough"},
    {"id":9,"first_name":"Oliy","last_name":"Torel"},
    {"id":10,"first_name":"Toinette","last_name":"Taffee"},
    {"id":11,"first_name":"Frieda","last_name":"Benoi"},
    {"id":12,"first_name":"Oliy","last_name":"Blanko"},
    {"id":13,"first_name":"Dulce","last_name":"Abson"},
    {"id":14,"first_name":"Bonnibelle","last_name":"Farryan"},
    {"id":15,"first_name":"Elmore","last_name":"Alliott"},
    {"id":16,"first_name":"Barnie","last_name":"Coltan"},
    {"id":17,"first_name":"Trudie","last_name":"MacFaell"},
    {"id":18,"first_name":"Cordi","last_name":"Talby"},
    {"id":19,"first_name":"Rowland","last_name":"Harrington"},
    {"id":20,"first_name":"Manya","last_name":"Allington"},
    {"id":21,"first_name":"Stavro","last_name":"Halliberton"},
    {"id":22,"first_name":"Ardenia","last_name":"Brownill"},
    {"id":23,"first_name":"Charline","last_name":"Vido"},
    {"id":24,"first_name":"Lyman","last_name":"Jahncke"},
    {"id":25,"first_name":"Lyn","last_name":"Edgar"},
    {"id":26,"first_name":"Nevile","last_name":"Whyberd"},
    {"id":27,"first_name":"Tanya","last_name":"Devonshire"},
    {"id":28,"first_name":"Willem","last_name":"Hitchens"},
    {"id":29,"first_name":"Briny","last_name":"Audley"},
    {"id":30,"first_name":"Rudyard","last_name":"Cowdray"},
    {"id":31,"first_name":"Flora","last_name":"Schapero"},
    {"id":32,"first_name":"Keefe","last_name":"Kanwell"},
    {"id":33,"first_name":"Mayor","last_name":"Reignould"},
    {"id":34,"first_name":"Kalli","last_name":"Imison"},
    {"id":35,"first_name":"Ikey","last_name":"Lunck"},
    {"id":36,"first_name":"Barry","last_name":"MacCambridge"},
    {"id":37,"first_name":"Rutledge","last_name":"Rishbrook"},
    {"id":38,"first_name":"Garvey","last_name":"Tunno"},
    {"id":39,"first_name":"Bent","last_name":"Veness"},
    {"id":40,"first_name":"Loy","last_name":"Gentry"},
    {"id":41,"first_name":"Decca","last_name":"Bird"},
    {"id":42,"first_name":"Rourke","last_name":"McBoyle"},
    {"id":43,"first_name":"Lyman","last_name":"Grevel"},
    {"id":44,"first_name":"Marna","last_name":"Arp"},
    {"id":45,"first_name":"Isidora","last_name":"Spaldin"},
    {"id":46,"first_name":"Rickie","last_name":"Echallier"},
    {"id":47,"first_name":"Harriette","last_name":"Forgan"},
    {"id":48,"first_name":"Hoyt","last_name":"Collier"},
    {"id":49,"first_name":"Fred","last_name":"Kneebone"},
    {"id":50,"first_name":"Ginnie","last_name":"Pamplin"}]

class Exo8 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={( {item} ) => (
                    <View style={styles.card}>
                        <Text>{item.first_name} {item.last_name}</Text>
                    </View>
                )}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    borderBottomWidth: 1
  }
})


export default Exo8;