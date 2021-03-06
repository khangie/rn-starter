import React, {useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput 
                style={styles.Input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
        />
        {name.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );

};

const styles = StyleSheet.create({
    Input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    }
});

export default TextScreen;