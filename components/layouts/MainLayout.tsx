import React from 'react';
import {Animated, SafeAreaView, StyleSheet, View} from "react-native";
import MainHeader from "@/components/MainHeader";
import ScrollView = Animated.ScrollView;

function MainLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <MainHeader/>
                <View>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'white',
    },
});

export default MainLayout;
