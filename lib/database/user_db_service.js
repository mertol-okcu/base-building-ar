import { getDatabase, ref, set } from "firebase/database";

export const setUserName = async (uid, name) => {
  const db = getDatabase();
  await set(ref(db, "users/" + uid + "/name"), name);
};

export const setUserEmail = async (uid, email) => {
  const db = getDatabase();
  await set(ref(db, "users/" + uid + "/email"), email);
};

export const setUserPhotoUrl = async (uid, photoUrl) => {
  const db = getDatabase();
  await set(ref(db, "users/" + uid + "/photoUrl"), photoUrl);
};

export const setUserLocation = async (uid, lat, long) => {
  const db = getDatabase();
  await set(ref(db, "users/" + uid + "/location"), { lat: lat, long: long });
};
