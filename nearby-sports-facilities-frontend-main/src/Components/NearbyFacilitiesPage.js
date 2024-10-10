import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Footer from "./Footer";
import Header from "./Header";
import nearbymain from "../Images/nearbymain.jpg";
import { useTranslation } from "react-i18next";

// Maps container style
const containerStyle = {
  width: "100%",
  height: "800px",
};

const NearbyFacilitiesPage = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSSRugXnsD4G1DZbfwTm85UuWvF3dEEOM",
    libraries: ["places"],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isLoaded && location.lat !== 0 && location.lng !== 0) {
      const map = new window.google.maps.Map(document.createElement("div"), {
        center: location,
        zoom: 15,
      });

      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location,
        radius: "3000", // 3km radius
        type: ["Gym", "Stadium", "Sports Complex", "Country club"], // Search for gyms or stadiums
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setNearbyPlaces(results);
        }
      });
    }
  }, [isLoaded, location]);
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-356px)]">
        <section
          className="relative py-40 text-accent-100"
          style={{
            backgroundImage: `url(${nearbymain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 relative max-w-3xl">
            <div className="backdrop-blur-xl rounded-xl p-8 shadow-lg">
              <div className="text-center mb-12">
                <h1 className="text-4xl uppercase">
                  {t("nearby.hero.welcome")}
                </h1>
                <h2 className="mt-4 text-lg italic font-light lowercase">
                  "{t("nearby.hero.subtitle")}"
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Location-based Map BC  */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-2 text-center text-primary-500 uppercase">
              {t("nearby.heading")}
            </h2>
            <p className="text-accent-600 mb-8 text-center text-lg lowercase">
              {t("nearby.text")}
            </p>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={14}
              >
                {/* Markers isliya taka nearby places */}
                {nearbyPlaces.map((place) => (
                  <Marker
                    key={place.place_id}
                    position={{
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    }}
                    title={place.name}
                  />
                ))}
              </GoogleMap>
            ) : (
              <p>Loading map...</p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NearbyFacilitiesPage;
