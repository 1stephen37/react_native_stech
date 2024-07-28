import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from "react-native";
import Logo from "@/components/Logo";
import Ionicons from '@expo/vector-icons/Ionicons';

function MainHeader() {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = () => {
        console.log(123);
        setShowSearch(!showSearch);
    }

    return (
        <header style={styles.header}>
            <Logo/>
            <Ionicons onPress={handleSearch} name="search" size={24} color="black"/>
            {showSearch && (
                <View style={styles.subMenu}>
                    <TextInput  placeholder="useless placeholder" />
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,

    },
});

export default MainHeader;
