import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function MainFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                @Bản quyền thuộc về Stephen Nguyễn
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center'
    }
})

export default MainFooter;
