import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Footer from "./Footer";
import Header from "./Header";
import {
  FaSwimmingPool,
  FaUtensils,
  FaShieldAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import mainexpagebaneer from "../Images/mainexpagebaneer.jpg";
import { useTranslation } from "react-i18next";

const ExcercisesPage = () => {
  const { t } = useTranslation();
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [exerciseType, setExerciseType] = useState("All");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch exercises from API
    const fetchExercises = async () => {
      try {
        const response = await axios.get("/exercises"); // Use Axios to get data
        setExercises(response.data);
        setFilteredExercises(response.data); // Set initial filtered exercises
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setError("Failed to fetch exercises"); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchExercises();
  }, []);

  useEffect(() => {
    // Filter exercises based on search term and selected exercise type
    const filtered = exercises.filter((exercise) => {
      const matchesSearch =
        exercise.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        exercise.description?.toLowerCase().includes(searchTerm?.toLowerCase());
      const matchesType =
        exerciseType === "All" || exercise.category === exerciseType;

      return matchesSearch && matchesType;
    });

    setFilteredExercises(filtered);
  }, [searchTerm, exerciseType, exercises]);

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-356px)]">
        <section
          className="relative py-40 text-accent-100"
          style={{
            backgroundImage: `url(${mainexpagebaneer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 relative max-w-3xl">
            <div className=" backdrop-blur-xl rounded-xl p-8 shadow-lg">
              <div className="text-center mb-12">
                <h1 className="text-4xl uppercase">
                  {t("exercise.hero.welcome")}
                </h1>
                <h2 className="mt-4 text-lg italic font-normal lowercase">
                  "{t("exercise.hero.subtitle")}"
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary-500 uppercase">
              {t("exercise.heading")}
            </h2>
            <form className="flex flex-col md:flex-row gap-3 py-4 justify-center">
              <div className="flex">
                <input
                  type="text"
                  placeholder={t("exercise.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-80 px-3 h-10 text-accent-600 rounded-l border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-primary-500 text-accent-100 rounded-r px-4 py-1 hover:bg-primary-600 transition-all duration-300"
                >
                  {t("exercise.search_btn")}
                </button>
              </div>

              <select
                id="exerciseType"
                name="exerciseType"
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value)}
                className="w-full md:w-64 h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded px-3 py-0 tracking-wider bg-white transition-all duration-300"
              >
                <option value="All" selected="">
                  {t("exercise.all_text")}
                </option>
                <option value="Lower Body">Lower Body</option>
                <option value="Upper Body">Upper Body</option>
                <option value="Stretching">Stretching</option>
              </select>
            </form>

            {loading ? (
              <div className="text-center text-lg font-semibold">
                {t("Loading...")}
              </div>
            ) : error ? (
              <div className="text-center text-lg font-semibold text-red-500">
                {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {filteredExercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md shadow-md overflow-hidden"
                  >
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-primary-500 uppercase">
                        {exercise.name}
                      </h3>
                      <h3 className="text-xl font-normal mb-2 text-accent-700">
                        {exercise.category}
                      </h3>
                      <p className="text-gray-600">{exercise.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-secondary-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-secondary-500 uppercase">
              {t("exercise.global.insights")}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaSwimmingPool size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("exercise.global.overcome")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaUtensils size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("exercise.global.healthy_dite")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaShieldAlt size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("exercise.global.dedication")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
                <FaExclamationCircle
                  size={32}
                  className="text-secondary-500 mr-2"
                />
                <span className="text-lg font-semibold text-accent-600">
                  {t("exercise.global.commitment")}
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

export default ExcercisesPage;
