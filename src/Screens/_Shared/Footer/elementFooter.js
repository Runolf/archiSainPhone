import { View, Text } from "react-native";

const ElementFooter = (props) => {
    return (
        <View>
            <Text style={{color:"white"}}>{props.title}</Text>
        </View>
    );
}
 
export default ElementFooter;