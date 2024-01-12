import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const ElementFooter = (props) => {
    return (
        <View style={styles.container}>
            <Icon color={"white"} name={props.logo} size={25}/>
            <Text style={{color:"white"}}>{props.title}</Text>
        </View>
    );
}
 
export default ElementFooter;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});