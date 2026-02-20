import ProfessionalWelcome from "@/components/HomePageAboutBrief";
import ImageSlider from "@/components/HomePageSlidingImage";
import ClientTicker from "@/components/MovingPartnersAssociates";
import LeadershipVision from "@/components/MissionVision";
import Image from "next/image";
import ProductGrid from "@/components/ProductsPreview";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <ClientTicker />
      <ProfessionalWelcome />
      <ProductGrid />
      <LeadershipVision />
    </>
  );
}
