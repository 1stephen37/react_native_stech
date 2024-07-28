import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native'
import BoxProduct from "@/components/BoxProduct";

function CategorySection() {
    const [indexBrand, setIndexBrand] = useState(0);
    const [isBrandLoading, setIsBrandLoading] = useState(true);
    const [brands, setBrands] = useState<Brand[]>([]);
    const getBrands = async () => {
        try {
            const response = await fetch(`https://fasco-shop-default-rtdb.firebaseio.com/brands.json`, {
                headers: {
                    contentType: 'application/json'
                },
                method: 'GET'
            });
            const json = await response.json();
            setBrands(json);
        } catch (error) {
            console.log(error);
        } finally {
            setIsBrandLoading(false);
        }
    };

    const [isProductLoading, setIsProductLoading] = useState(true);
    const [products, setProducts] = useState<ProductBox[]>([]);
    const getProducts = async () => {
        try {
            const response = await fetch(`https://fasco-shop-default-rtdb.firebaseio.com/products.json`, {
                headers: {
                    contentType: 'application/json'
                },
                method: 'GET'
            });
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.log(error);
        } finally {
            setIsProductLoading(false);
        }
    };

    useEffect(() => {
        getBrands()
            .then(() => {
                console.log("đã lấy sản phẩm thành công");
            });
        getProducts()
            .then(() => {
                console.log("đã lấy sản phẩm thành công");
            });
    }, []);

    console.log(brands);


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Các sản phẩm được xem nhiều</Text>
            {!isBrandLoading && (
                <View style={styles.brandContainer}>
                    {brands.map((brand, index) => (
                        <Pressable onPress={() => setIndexBrand(index)} style={{
                            ...styles.brandItem,
                            backgroundColor: `${index === indexBrand ? 'rgba(0,0,0,0.75)' : ''}`,
                        }} key={index}>
                            <Text style={{
                                fontSize: 18,
                                color: `${index === indexBrand ? 'rgba(255,255,255,1)' : ''}`
                            }}>{brand.name}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
            {!isProductLoading && (
                <View style={styles.productContainer}>
                    {products.map((product, index) => (
                        <BoxProduct index={index} key={index} name={product.name} image={product.image}
                                    views={product.views}
                                    memory={product.memory}
                                    id={product.id_product} sale={product.sale_off} color={product.color}
                                    brand={product.brand_name} price={product.price}/>
                    ))}
                </View>
            )}
            <View style={{
                marginTop: 10,
                marginHorizontal: "auto",
            }}>
                <Text style={{
                    color: "rgba(0,0,0,0.9)",
                    fontSize: 18
                }}>Xem thêm</Text>
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
    brandContainer: {
        display: 'flex',
        flexDirection: "row",
        width: "auto",
        marginHorizontal: "auto",
        gap: 15,
        marginTop: 10,
    },
    brandItem: {
        textTransform: 'capitalize',
        paddingVertical: 5,
        paddingHorizontal: 10,
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
    productContainer: {
        marginTop: 15,
        display: "flex",
        gap: 10,
        flexDirection: 'column',
    }
})

export default CategorySection;
