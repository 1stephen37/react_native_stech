import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";

function Brands() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('@/assets/images/sections/iphoneBrands.png')}
                       style={{alignSelf: 'center', height: 50, width: 100}}/>
            </View>
            <View>
                <Image source={require('@/assets/images/sections/samsung-logo.png')}
                       style={{alignSelf: 'center', height: 50, width: 100}}/>
            </View>
            <View>
                <Image source={require('@/assets/images/sections/xiaomiLogo.png')}
                       style={{alignSelf: 'center', height: 50, width: 100}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#fff"
    }
})

export default Brands;
