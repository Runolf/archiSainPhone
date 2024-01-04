import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'

const Errors = (errorList) => {
    
    const renderitem = ({error}) => {
        return <Text style={styles.error}>{error}</Text>;
    }
    return ( <View style={styles.listError}>
                <FlatList 
                    data={errorList}
                    renderItem={renderitem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    listError: {
        width: "50%",
        height: "auto",
        backgroundColor: "red",
    },
    error: {
        color: "white"
    }
});
 
export default Errors;