import { CategoriesSection } from "../components/CategoriesSection";
import { FeaturedObjects } from "../components/FeaturedObjects";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";

export function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedObjects />
      <HowItWorks />
    </>
  );
}
