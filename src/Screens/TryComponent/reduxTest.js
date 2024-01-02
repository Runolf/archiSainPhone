import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import useFetchUsers from '../../Services/users/useFetchUsers';
import {getAllUsersSelector} from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ReduxTest = () => {

    const { getAllUsers } = useFetchUsers();
    
    useEffect( () => {;
        getAllUsers();
    },[])

    const listUsers = useSelector(getAllUsersSelector);

    const renderItem = ({item}) => {
        return <Text>{item.email}</Text>
    }

    return (
        <View>
            <FlatList 
                data={listUsers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}
 
export default ReduxTest;