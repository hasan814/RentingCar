import CustomFilter from "@/modules/CustomFilter";
import Hero from "@/modules/Hero";
import SearchBar from "@/modules/SearchBar";
import { fetchCars } from "../utils";

const Home = async () => {
  // =========== Fetch API ============
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // =========== Rendering ============
  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>We Have Cars</section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
