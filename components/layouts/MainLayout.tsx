import React from 'react';
import {Animated, SafeAreaView, StyleSheet, View} from "react-native";
import MainHeader from "@/components/MainHeader";
import ScrollView = Animated.ScrollView;
import MainFooter from "@/components/MainFooter";

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
                <MainFooter/>
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
