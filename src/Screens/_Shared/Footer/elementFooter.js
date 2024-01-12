import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const ElementFooter = (props) => {
    return (
        <View>
            <Icon color={"white"} name={props.logo} size={25}/>
            <Text style={{color:"white"}}>{props.title}</Text>
        </View>
    );
}
 
export default ElementFooter;