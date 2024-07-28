import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

function Reviews() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Đánh giá của người dùng</Text>
            <View style={styles.reviewContainer}>
                <View style={styles.reviewTop}>
                    <Image source={require('@/assets/images/sections/avatar-user-review-1.jpg')}
                           style={{alignSelf: 'center', height: 60, width: 40}}/>
                    <Text style={{fontSize: 20, fontWeight: "700"}}>Shizuka</Text>
                </View>
                <Text style={styles.reviewText}>Tôi rất thích website này ! Giao diện sạch sẽ và dễ sử dụng. Tôi đã tìm
                    thấy tất cả thông tin cần
                    thiết mà không mất quá nhiều thời gian.</Text>
                <View style={styles.star}>
                    <AntDesign name="star" size={20} color="#FADA5E"/>
                    <AntDesign name="star" size={20} color="#FADA5E"/>
                    <AntDesign name="star" size={20} color="#FADA5E"/>
                    <AntDesign name="star" size={20} color="#FADA5E"/>
                    <AntDesign name="star" size={20} color="#FADA5E"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold"
    },
    reviewContainer: {
        marginTop: 5,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    reviewTop: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    reviewText: {
        marginTop: 10,
        fontSize: 16,
    },
    star: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 5,
    }
})

export default Reviews;
