import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {numberFormat} from "@/contants";

type Product = {
    id: string;
    name: string;
    image: string
    brand: string;
    price: number;
    sale: number;
    index: number;
    views: number;
    memory: string;
    color: string;
    isShowView?: boolean
}

function BoxProduct({id, name, image, brand, price, sale, index, views, memory, color, isShowView = false}: Product) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={{
                    alignSelf: 'center',
                    width: 280,
                    height: 280
                }}
                       source={{uri: `https://firebasestorage.googleapis.com/v0/b/fasco-shop.appspot.com/o/products%2F${image}?alt=media`}}/>
            </View>
            <View>
                <Text style={styles.brand}>{brand}</Text>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{numberFormat(price)}</Text>
            </View>
            {sale !== 0 && (
                <LinearGradient
                    colors={['#fb923c', '#ef4444']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.sale}
                >
                    <Text style={{color: "#fff"}}>{`${sale}%`}</Text>
                </LinearGradient>
            )}
            {views >= 1000 && (
                <LinearGradient
                    colors={['#06b6d4', '#3b82f6']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.hot}
                >
                    <Text style={{color: "#fff"}}>Hot</Text>
                </LinearGradient>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "auto",
        position: 'relative',
        padding: 20,
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
    brand: {
        fontSize: 16,
        textTransform: 'capitalize'
    },
    name: {
        fontSize: 20,
        fontWeight: "700"
    },
    price: {
        fontSize: 20
    },
    sale: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 16,
        color: "#fff",
        fontWeight: "semibold",
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    hot: {
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 16,
        color: "#fff",
        fontWeight: "semibold",
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#000',
    }
})

export default BoxProduct;
