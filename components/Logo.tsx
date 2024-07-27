import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Logo() {
    return (
        <Text style={styles.logo}>
            STECH
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 26,
        fontWeight: '800'
    },
});

export default Logo;
