import axios from "axios";

export const getNearby = async (lat, long) => {
  const query = `Starbucks, Çanakkale`;
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&lat=${lat}&lon=${long}`;

  try {
    const response = await axios.get(apiUrl);
    const places = response.data;
    if (places.length > 0) {
      places.forEach((place) => {
        console.log(`Name: ${place.display_name}, Type: ${place.type}`);
      });
    } else {
      console.log("No result for nearby search");
    }
  } catch (error) {
    throw Error(error);
  }
};
