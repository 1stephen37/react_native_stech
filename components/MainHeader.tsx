import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import Logo from "@/components/Logo";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function MainHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMobileMenu = () => {
        console.log(123);
        setShowMenu(!showMenu);
    }

    return (
        <header style={styles.header}>
            <Logo/>
            <MaterialCommunityIcons onPress={handleMobileMenu} name="menu" size={24} color="black"/>
            {showMenu && (
                <View style={styles.subMenu}>

                </View>
            )}
        </header>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        position: "relative",
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1,
    },
    subMenu: {
        position: "absolute",
        top: 40,
        right: 10,
        zIndex: 50,
        padding: 10,
        borderRadius: 2,
        // width: ,
        // height: 100,
        backgroundColor: "rgba(255,255,255,1)",
        color: "black"
    }
});

export default MainHeader;
