import {Image, StyleSheet, Platform, View, Button} from 'react-native';
import {Text} from 'react-native';
import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import SaleSection from "@/components/home/SaleSection";
import Brands from "@/components/home/Brands";
import News from "@/components/home/News";
import Reviews from "@/components/home/Reviews";
import CategorySection from "@/components/home/CategorySection";

export default function HomeScreen() {
    return (
        <MainLayout>
            {/*<Button*/}
            {/*    title="Go to Second Page"*/}
            {/*    onPress={() => navigation.navigate('/products')}*/}
            {/*/>*/}
            <Hero/>
            <Brands/>
            <SaleSection/>
            <CategorySection/>
            <News/>
            <Reviews/>
        </MainLayout>
    );
}

const styles = StyleSheet.create({});
