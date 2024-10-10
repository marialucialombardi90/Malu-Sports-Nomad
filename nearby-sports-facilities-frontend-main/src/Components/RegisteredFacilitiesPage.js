import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaBroom,
  FaTshirt,
  FaShieldAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import registeredmain from "../Images/registeredmain.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const RegisteredFacilitiesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // State for facilities data
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter and Pagination state
  const [filteredFacilities, setFilteredFacilities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const facilitiesPerPage = 6;

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);

  const [filters, setFilters] = useState({
    search: "",
    country: "All",
    city: "All",
    trainer: "All",
    category: "All",
    state: "All",
  });

  // Fetch facilities from the API
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get("/facilities");
        setFacilities(response.data);
        setCities([...new Set(response.data.map((data) => data.city))]);
        setCountries([...new Set(response.data.map((data) => data.country))]);
        setStates([...new Set(response.data.map((data) => data.state))]);
        setFilteredFacilities(response.data); // Initialize filtered data with all facilities
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  // Handle filters
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); // Reset to first page after filter change
  };

  // Apply filters to the facilities data
  useEffect(() => {
    let filtered = facilities;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter((facility) =>
        facility.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Country filter
    if (filters.country !== "All") {
      filtered = filtered.filter(
        (facility) => facility.country === filters.country
      );
    }

    // City filter
    if (filters.city !== "All") {
      filtered = filtered.filter((facility) => facility.city === filters.city);
    }

    // State filter
    if (filters.state !== "All") {
      filtered = filtered.filter(
        (facility) => facility.state === filters.state
      );
    }

    // Trainer filter
    if (filters.trainer !== "All") {
      filtered = filtered.filter((facility) =>
        filters.trainer === "yes" ? facility.hasTrainer : !facility.hasTrainer
      );
    }

    // Open hours filter
    if (filters.category !== "All") {
      filtered = filtered.filter(
        (facility) => facility.category === filters.category
      );
    }

    setFilteredFacilities(filtered);
  }, [filters, facilities]);

  // Pagination logic
  const indexOfLastFacility = currentPage * facilitiesPerPage;
  const indexOfFirstFacility = indexOfLastFacility - facilitiesPerPage;
  const currentFacilities = filteredFacilities.slice(
    indexOfFirstFacility,
    indexOfLastFacility
  );

  const totalPages = Math.ceil(filteredFacilities.length / facilitiesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (id) => {
    navigate(`/registered-facilities/${id}`);
  };

  // const onlyUnique = (value, index, array) => {
  //   return array.indexOf(value) === index;
  // };

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-356px)]">
        <section
          className="relative py-40 text-accent-100"
          style={{
            backgroundImage: `url(${registeredmain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 relative max-w-3xl">
            <div className=" backdrop-blur-xl rounded-xl p-8 shadow-lg">
              <div className="text-center mb-12">
                <h1 className="text-4xl uppercase">
                  {t("registered_facility.hero.welcome")}
                </h1>
                <h2 className="mt-4 text-lg italic font-normal lowercase">
                  "{t("registered_facility.hero.subtitle")}"
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary-500 uppercase">
              {t("registered_facility.heading")}
            </h2>
            <form
              className="flex flex-col lg:flex-row gap-3 py-4 justify-center flex-wrap"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* Search input */}
              <div className="flex">
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder={t("global.filters.filter_text_search")}
                  className="w-full md:w-80 px-3 h-10 rounded-l border-2 text-accent-600 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-primary-500 text-accent-100 rounded-r px-4 py-1 hover:bg-primary-600 transition-all duration-300"
                >
                  {t("exercise.search_btn")}
                </button>
              </div>

              {/* Country Filter */}
              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="w-full lg:w-64 h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded px-3 py-0 tracking-wider bg-white transition-all duration-300"
              >
                <option value="All">{t("global.filters.country")}</option>
                {countries.length
                  ? countries?.map((facility) => (
                      <option key={facility} value={facility}>
                        {facility}
                      </option>
                    ))
                  : null}
              </select>

              {/* City Filter */}
              <select
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
                className="w-full lg:w-64 h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded px-3 py-0 tracking-wider bg-white transition-all duration-300"
              >
                <option value="All">{t("global.filters.city")}</option>
                {cities.length
                  ? cities?.map((facility) => (
                      <option key={facility} value={facility}>
                        {facility}
                      </option>
                    ))
                  : null}
              </select>
              {/* state filter  */}
              <select
                name="state"
                value={filters.state}
                onChange={handleFilterChange}
                className="w-full lg:w-64 h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded px-3 py-0 tracking-wider bg-white transition-all duration-300"
              >
                <option value="All">{t("global.filters.state")}</option>
                {states.length
                  ? states?.map((facility) => (
                      <option key={facility} value={facility}>
                        {facility}
                      </option>
                    ))
                  : null}
              </select>

              {/* Trainer Filter */}
              <select
                name="trainer"
                value={filters.trainer}
                onChange={handleFilterChange}
                className="w-full lg:w-64 h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded px-3 py-0 tracking-wider bg-white transition-all duration-300"
              >
                <option value="All">{t("global.filters.trainer")}</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {/* Open Hours Filter */}
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full lg:w-64 h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded px-3 py-0 tracking-wider bg-white transition-all duration-300"
              >
                <option value="All">{t("global.filters.open_hours")}</option>
                <option value="Pilates">Pilates</option>
                <option value="Yoga">Yoga</option>
                <option value="Surf">Surf</option>
                <option value="Roller">Roller</option>
                <option value="Running">Running</option>
                <option value="Gym">Gym</option>
                <option value="Cross Fit">Cross Fit</option>
              </select>
            </form>

            {/* Loading or Error State */}
            {loading ? (
              <p className="text-center">Loading.....</p>
            ) : error ? (
              <p className="text-center text-red-500 uppercase">
                Oooops! an error occured
              </p>
            ) : (
              <div>
                {/* Display Filtered Facilities */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {currentFacilities.map((facility) => (
                    <div
                      className="bg-white rounded-md shadow-md overflow-hidden"
                      key={`facility_registered_${facility._id}`}
                    >
                      <img
                        src={facility.image}
                        alt="Facility"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-primary-500 uppercase">
                          {facility.name}
                        </h3>
                        <h3 className="text-xl font-normal mb-2 text-accent-700">
                          {facility.category}
                        </h3>
                        <p className="text-gray-600 text-ellipsis line-clamp-4 h-24 lowercase">
                          {facility.description}
                        </p>
                        <button
                          onClick={() => handlePageChange(facility._id)}
                          className="mt-8 bg-primary-500 text-accent-100 px-6 py-3 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
                        >
                          {t("global.explore_btn")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    className="bg-primary-500 text-white px-4 py-2 mr-2 rounded-md shadow-md"
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                  >
                    {t("pagination.prev")}
                  </button>
                  <button
                    className="bg-primary-500 text-white px-4 py-2 ml-2 rounded-md shadow-md"
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                  >
                    {t("pagination.next")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-secondary-100">
          <div className="container max-w-[1100px] mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center  text-secondary-500 uppercase">
              {t("global.registered_facilities")}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaWifi size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.wifi")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaParking size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.parkign")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaSwimmingPool size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.pllo")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaUtensils size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.cafe")}
                </span>
              </div>

              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaBroom size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.maintained")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaTshirt size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.dressing")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaShieldAlt size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.security")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaExclamationCircle
                  size={32}
                  className="text-secondary-500 mr-2"
                />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.complaint")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RegisteredFacilitiesPage;
