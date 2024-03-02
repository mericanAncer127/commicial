import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import styles from "./Home.module.scss";
import MainSlider from "./Introduction/MainSlider";
import SectionsMenu from "./Introduction/SectionsMenu";
import OurProductsSection from "./OurProductsSection/OurProductsSection";
import ProductPoster from "./ProductPoster/ProductPoster";
import ThisMonthSection from "./ThisMonthSection/ThisMonthSection";
import TodaySection from "./TodaySection/TodaySection";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.introductionContainer}>
          <SectionsMenu />

          <div className={styles.line}></div>

          <MainSlider />
        </div>

        <TodaySection />
        <CategoriesSection />
        <ThisMonthSection />
        <ProductPoster />
        <OurProductsSection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default Home;
