import React from 'react';
import {View, StyleSheet, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import MainLayout from "@/components/layouts/MainLayout";
import {numberFormat} from "@/contants";

const ProductPage = () => {
    const products = [
        {
            id: 1,
            name: 'Iphone XR',
            image: 'https://firebasestorage.googleapis.com/v0/b/fasco-shop.appspot.com/o/products%2F_0004_iphonexr-black-360_us-en-screen.webp?alt=media&token=1c8c50c8-d7e8-48f6-bec5-6e11c0ce7020',
            price: 8000000,
        },
        {
            id: 2,
            name: 'Oppo A18',
            image: 'https://firebasestorage.googleapis.com/v0/b/fasco-shop.appspot.com/o/products%2Fdien-thoai-oppo-a18-4gb-64gb-blue_1_.webp?alt=media&token=53957ab1-eb05-4599-8ea1-dbdc4d45d116',
            price: 5000000,
        },
        {
            id: 3,
            name: 'Galaxy S24 Plus',
            image: 'https://firebasestorage.googleapis.com/v0/b/fasco-shop.appspot.com/o/products%2Fgalaxy-s24-plus-vang-12GB-258GB_2.webp?alt=media&token=aca6d4b0-8edc-44ca-9ec4-3e0bb1868200',
            price: 15000000,
        },
        {
            id: 4,
            name: 'Galaxy S24 Ultra',
            image: 'https://firebasestorage.googleapis.com/v0/b/fasco-shop.appspot.com/o/products%2Fgalaxy-s24-ultra-den-12GB-256GB-1_1_3.webp?alt=media&token=b1856ed4-aac6-4270-bb9b-d571acd498dc',
            price: 14000000,
        },
    ];

    const ProductBox = ({item}: { item: any }) => (
        <TouchableOpacity style={styles.productBox}>
            <Image source={{uri: item.image}} style={styles.productImage}/>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{numberFormat(item.price)}</Text>
        </TouchableOpacity>
    );

    return (
        <MainLayout>
            <Text style={{textAlign: "center", fontSize: 26, fontWeight: "bold", marginTop: 10}}>Danh sách sản
                phẩm</Text>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={ProductBox}
                    contentContainerStyle={styles.productList}
                />
            </View>
            <View style={styles.paginationWrapper}>
                <TouchableOpacity style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pageButton, styles.activePageButton]}>
                    <Text style={[styles.pageButtonText, styles.activePageButtonText]}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>5</Text>
                </TouchableOpacity>
            </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    productList: {
        padding: 10,
    },
    productBox: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        margin: 8,
        flex: 1,
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    paginationWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 16,
    },
    pageButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 4,
    },
    activePageButton: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        borderColor: 'rgba(0,0,0,0.75)',
    },
    pageButtonText: {
        color: '#333',
    },
    activePageButtonText: {
        color: '#fff',
    },
});

export default ProductPage;
