import { db } from "./firebaseConfig";
import {
  collection,
  updateDoc,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

export const sendNewContact = async (info) => {
  let docRef = {};
  try {
    docRef = await addDoc(collection(db, "contacts"), {
      info,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return docRef.id;
};
