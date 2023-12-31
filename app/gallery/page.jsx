import galleryBanner from '../../assets/png/galleryImage.jpeg';
import CardsSection from '../../components/galleryComponents/cardsSection';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import PagitnationButton from '../../components/galleryComponents/paginationButton';

const GallerySection = () => {
  return (
    <main className="bg-primary">
      <PagesHeader title="Gallery" bannerImage={galleryBanner} />
      <CardsSection />
      <PagitnationButton />
    </main>
  );
};
export default GallerySection;
