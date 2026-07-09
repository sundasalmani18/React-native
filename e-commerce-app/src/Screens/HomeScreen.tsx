import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import Header from "../component/Home/Header";
import BannerSlider from "../component/Home/BannerSlider";
import CategorySection from "../component/Home/CategorySection";
import ProductSection from "../component/Home/ProductSection";
import FlashSaleBanner from "../component/Home/FlashSaleBanner";
import BottomTab from "../component/Home/BottomTab";
import SaleSection from "../component/Home/SaleSection";

export default function HomeScreen() {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Header />

        <BannerSlider />

        <CategorySection/>

        <ProductSection />

        <FlashSaleBanner />
        <SaleSection/>
      </ScrollView>

      <BottomTab />
    </SafeAreaView>
  );
}