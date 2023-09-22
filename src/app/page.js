import Welcome from "@/components/Welcome";
import Header from "@/components/Header";
import React from "react";
import OrganizersQuote from "@/components/OrganizersQuote";
import Prizes from "@/components/Prizes";
import EnrollNow from "@/components/EnrollNow";
import RegFees from "@/components/RegFees";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <>
      <Header/>
      <Welcome/>
      <ImageGallery/>
      <OrganizersQuote/>
      <Events/>
      <Prizes/>
      <EnrollNow/>
      <Sponsor/>
      <Footer/>
    </>
  );
}
