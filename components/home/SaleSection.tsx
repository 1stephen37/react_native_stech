import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import BoxProduct from "@/components/BoxProduct";

function SaleSection() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ProductBox[]>([]);
    const getSaleProduct = async () => {
        try {
            const response = await fetch(`https://fasco-shop-default-rtdb.firebaseio.com/products.json`, {
                headers: {
                    contentType: 'application/json'
                },
                method: 'GET'
            });
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSaleProduct()
            .then(() => {
                console.log("đã lấy sản phẩm thành công");
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sản phẩm giảm giá sốc !</Text>
            {!isLoading && (
                <View style={styles.saleContainer}>
                    {data.map((product, index) => (
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
    saleContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    }
});

export default SaleSection;
