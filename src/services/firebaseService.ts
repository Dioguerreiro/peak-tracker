import { auth, firestore } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// Function to create a team for the logged-in user
export const createTeam = async (teamName: string): Promise<string | null> => {
  try {
    // Get the currently logged-in user
    const user = auth.currentUser;

    if (!user) {
      return "User not authenticated.";
    }

    // Create a team document in the 'teams' collection
    const teamRef = await addDoc(collection(firestore, "teams"), {
      teamName: teamName,
      userId: user.uid,
    });

    // Update the user document with the team ID
    await updateDoc(doc(firestore, "users", user.uid), {
      teamId: teamRef.id,
    });

    return teamRef.id;
  } catch (error: any) {
    console.error("Error creating team:", error);
    return error.message;
  }
};

// Define an interface for user data
interface UserData {
  teamId?: string;
}

export const addPlayerToTeam = async (
  playerName: string,
  position: string
): Promise<string | null> => {
  try {
    // Get the currently logged-in user
    const user = auth.currentUser;

    // Check if the user has a team
    if (!user || !user.uid || !user.metadata.creationTime) {
      return "User does not have a team.";
    }

    // Check if the user has a team ID
    const userDocRef = doc(firestore, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    // Ensure that the user document exists and has a valid type
    if (!userDocSnap.exists()) {
      return "User document not found or invalid type.";
    }

    // Access the user data with the specified type
    const userData: UserData = userDocSnap.data();

    // Get the team ID from the user data
    const teamId = userData.teamId;

    if (!teamId) {
      return "User does not have a team.";
    }

    // Create a player document in the 'players' subcollection under the user's team
    await addDoc(collection(firestore, `teams/${teamId}/players`), {
      playerName: playerName,
      position: position,
    });

    return null;
  } catch (error: any) {
    console.error("Error adding player to team:", error.message || error);
    return "Failed to add player to team.";
  }
};

// const getUserDocSnap = async () => {
//   const userDocSnap = await getDoc(userDocRef);

//   // Check if the document exists
//   if (userDocSnap.exists()) {
//     // Access the data using .data() method
//     const userData = userDocSnap.data();

//     if (userData) {
//       // Access user properties
//       const teamId = userData.teamId;

//       if (teamId) {
//         // The user has a team, you can proceed with the logic here
//       } else {
//         return "User does not have a team.";
//       }
//     } else {
//       return "User data is invalid.";
//     }
//   } else {
//     return "User document does not exist.";
//   }
// };
