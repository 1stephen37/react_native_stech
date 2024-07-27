import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Hero() {
    return (
        <Text style={styles.container}>

            <h1>hero banner</h1>
        </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default Hero;
