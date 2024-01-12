import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const ElementFooter = (props, {navigation}) => {
    const goToScreen = () => {
        navigation.navigate("Homescreen");
    }

    return (
        <Pressable onPress={goToScreen}>
            <View style={styles.container}>
                <Icon color={"white"} name={props.logo} size={25}/>
                <Text style={{color:"white"}}>{props.title}</Text>
            </View>
        </Pressable>
    );
}
 
export default ElementFooter;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});