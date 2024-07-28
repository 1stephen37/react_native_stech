import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

function News() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tin tức công nghệ</Text>
            <View style={styles.newsContainer}>
                <Image source={require('@/assets/images/sections/news18-1.jpg')}
                       style={{alignSelf: 'center', height: 200, width: 360, borderRadius: 5}}/>
                <Text style={styles.headingNews}>iOS 18 mang tới cải tiến gì cho màn hình chính và khóa của iPhone
                    ?</Text>
                <Text style={styles.text}>Trong bài viết dưới đây, chúng ta hãy cùng tìm hiểu những thay đổi, cải tiến
                    mà Apple đã mang
                    đến
                    cho màn hình chính và khóa iPhone thông qua bản cập nhật iOS 18 sắp tới.</Text>
                <Text style={styles.description}>2024-05-01 • Stephen Nguyễn</Text>
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
        fontWeight: 'bold',
    },
    newsContainer: {
        marginTop: 5,
        padding: 10,
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
    headingNews: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    text: {
        fontSize: 16,
        marginTop: 5
    },
    description: {
        fontSize: 16,
        marginTop: 5
    }
})

export default News;
