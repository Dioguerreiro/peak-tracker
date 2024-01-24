import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CircularProgress from "@mui/material/CircularProgress";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { CustomDialogTitle } from "./DashboardAddNewPlayer.styles";
import { CustomTextField } from "../Textfield/Textfield.styles";
import { addPlayerToTeam } from "../../services/firebaseService";

interface DashboardAddNewPlayerProps {
  open: boolean;
  onClose: () => void;
}

interface PlayerInfo {
  name: string;
  age: string;
  position: string;
  photo: File | null;
}

const DashboardAddNewPlayer: React.FC<DashboardAddNewPlayerProps> = ({
  open,
  onClose,
}) => {
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo>({
    name: "",
    age: "",
    position: "",
    photo: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlayerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPlayerInfo((prevInfo) => ({ ...prevInfo, photo: file || null }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    // Call your Firebase function to add the player
    const result = await addPlayerToTeam(playerInfo.name, playerInfo.position);

    setIsLoading(false);

    if (result) {
      // Handle error (e.g., show an error message)
      console.error("Error adding player:", result);
    } else {
      // Player added successfully
      console.log("Player added successfully!");

      // Reset the form
      setPlayerInfo({
        name: "",
        age: "",
        position: "",
        photo: null,
      });

      // Close the dialog
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: "18px" } }}
    >
      <CustomDialogTitle className="text-3xl font-semibold text-center">
        Add New Player
      </CustomDialogTitle>
      <DialogContent>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <CustomTextField
              label="Name"
              name="name"
              value={playerInfo.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              label="Age"
              name="age"
              value={playerInfo.age}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              label="Position"
              name="position"
              value={playerInfo.position}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            {/* File input for photo upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ margin: "16px 0" }}
            />
            <DialogActions>
              <div className="flex gap-6">
                <button
                  onClick={onClose}
                  className="px-3 py-4 text-neutral-900"
                >
                  Cancel
                </button>
                <PrimaryButton type="submit">Add Player</PrimaryButton>
              </div>
            </DialogActions>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DashboardAddNewPlayer;
