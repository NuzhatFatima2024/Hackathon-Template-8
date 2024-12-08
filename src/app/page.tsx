import Image from "next/image";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categories from "./components/catogarioes";
import CompanyLogo from "./components/companylogo";
import Hero from "./components/Hero";
import HotProduct from "./components/hotproducts";
import OurProduct from "./components/ourProducts";
import AllProduct from "./components/allproducts";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Topbar/>
    <Header/>
    <Navbar/>
      <Hero />
      <CompanyLogo />
     
      <Categories />
      <HotProduct />
      <OurProduct />
      <Footer/>
    </>
  );
}