import PlayerProps from "../components/DashboardAddNewPlayer/DashboardAddNewPlayer.types";
import { auth, firestore } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

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

export const addPlayerToTeam = async (
  playerInfo: PlayerProps
): Promise<string | null> => {
  try {
    // Get the currently logged-in user
    const user = auth.currentUser;

    // Check if the user is authenticated
    if (!user || !user.uid) {
      return "User not authenticated.";
    }

    // Query teams where userId is equal to the user's UID
    const teamsQuery = query(
      collection(firestore, "teams"),
      where("userId", "==", user.uid)
    );

    // Get teams matching the query
    const teamsSnapshot = await getDocs(teamsQuery);

    // Check if any team was found
    if (teamsSnapshot.empty) {
      return "User does not have a team.";
    }

    // Assuming the user has only one team, get the first team
    const teamDoc = teamsSnapshot.docs[0];

    // Get the team ID from the team document
    const teamId = teamDoc.id;

    // Add a player document to the 'players' collection inside the team document
    const teamPlayersCollection = collection(
      firestore,
      `teams/${teamId}/players`
    );

    const playerDocRef = await addDoc(teamPlayersCollection, {
      name: playerInfo.name,
      birthday: playerInfo.birthday,
      shirtNumber: playerInfo.shirtNumber,
      position: playerInfo.position,
      positionFieldZone: playerInfo.positionFieldZone,
      nationality: playerInfo.nationality,
    });

    // Save the player photo to Firebase Storage
    const storage = getStorage();
    const photoRef = storageRef(storage, `teams/${teamId}/players/${playerDocRef.id}/photo`);
    await uploadBytes(photoRef, playerInfo.photo as Blob);

    return null;
  } catch (error: any) {
    console.error("Error adding player to team:", error.message || error);
    return "Failed to add player to team.";
  }
};
