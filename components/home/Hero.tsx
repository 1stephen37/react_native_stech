import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Hero() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Apple iphone 15 Pro Max</Text>
            <Text style={styles.subHeading}>Hiệu năng dẫn đầu</Text>
            <Text style={styles.text}>Là chiếc điện thoại thông minh cao cấp nhất của Apple, iPhone 15 Pro Max mang đến
                sự kết hợp hoàn hảo
                giữa thiết kế thanh lịch, màn hình OLED siêu sắc nét và hiệu năng vượt trội nhờ chip Apple A17 Bionic.
            </Text>
            <Image source={require('@/assets/images/iPhone-15-Pro-Max-running-Genshin-Impact-rv.png')}
                   style={{alignSelf: 'center', height: 200, width: 500}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#000",
        padding: 10,
        // height: 100,
    },
    heading: {
        textAlign: 'center',
        color: "#fff",
        fontWeight: '700',
        fontSize: 24,
        marginVertical: 5,
    },
    subHeading: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
    },
    text: {
        color: "#fff",
        fontSize: 14,
        textAlign: 'center',
    }
});

export default Hero;
