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
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PlayerProps, {
  PlayerPosition,
  PlayerPositionFieldZone,
} from "./DashboardAddNewPlayer.types";

interface DashboardAddNewPlayerProps {
  open: boolean;
  onClose: () => void;
}

const DashboardAddNewPlayer: React.FC<DashboardAddNewPlayerProps> = ({
  open,
  onClose,
}) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [playerName, setPlayerName] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [formatedDate, setFormatedDate] = useState<Date>();
  const [shirtNumber, setShirtNumber] = useState<number>(1);
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition>(
    PlayerPosition.Goalkeeper
  );
  const [playerPositionZone, setPlayerPositionZone] =
    useState<PlayerPositionFieldZone>(PlayerPositionFieldZone.Goalkeeper);

  const [isLoading, setIsLoading] = useState(false);

  const onChangeDate = (newDate: Dayjs | null) => {
    setDate(newDate);
    setFormatedDate(newDate?.toDate());
  };

  const onChangePosition = (newPosition: PlayerPosition) => {
    setPlayerPosition(newPosition);
    if (newPosition === PlayerPosition.Goalkeeper) {
      setPlayerPositionZone(PlayerPositionFieldZone.Goalkeeper);
    } else if (
      newPosition === PlayerPosition.CenterDefender ||
      newPosition === PlayerPosition.LeftDefender ||
      newPosition === PlayerPosition.LeftWingBack ||
      newPosition === PlayerPosition.RighWingBack ||
      newPosition === PlayerPosition.RightDefender
    ) {
      setPlayerPositionZone(PlayerPositionFieldZone.Defender);
    } else if (
      newPosition === PlayerPosition.DefensiveMidfielder ||
      newPosition === PlayerPosition.CentralMidfielder ||
      newPosition === PlayerPosition.LeftMidfielder ||
      newPosition === PlayerPosition.RightMidfielder ||
      newPosition === PlayerPosition.AttackingMidfileder ||
      newPosition === PlayerPosition.LeftWinger ||
      newPosition === PlayerPosition.RightWinger
    ) {
    } else {
      setPlayerPositionZone(PlayerPositionFieldZone.Striker);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !playerName ||
      !nationality ||
      !formatedDate ||
      !shirtNumber ||
      !playerPosition ||
      !playerPositionZone
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    setIsLoading(true);

    const player: PlayerProps = {
      name: playerName,
      birthday: formatedDate,
      shirtNumber: shirtNumber,
      position: playerPosition,
      positionFieldZone: playerPositionZone,
      nationality: nationality,
      photo: photo,
    };

    // Call your Firebase function to add the player
    const result = await addPlayerToTeam(player);

    setIsLoading(false);

    if (result) {
      // Handle error (e.g., show an error message)
      console.error("Error adding player:", result);
    } else {
      // Player added successfully
      console.log("Player added successfully!");

      // Reset the form
      setPlayerName("");
      setNationality("");
      setDate(null);
      setShirtNumber(1);
      setPlayerPosition(PlayerPosition.Goalkeeper);

      // Close the dialog
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: "18px", width: "600px" } }}
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
            {/* File input for photo upload */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              style={{ margin: "16px 0" }}
            />
            <CustomTextField
              label="Name"
              name="name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              label="Nationality"
              name="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              fullWidth
              margin="normal"
            />
            <div className="w-full">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    value={date}
                    onChange={(newDate) => onChangeDate(newDate)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="flex gap-4">
              <CustomTextField
                label="Shirt Number"
                name="number"
                type="number"
                value={shirtNumber}
                onChange={(e) => setShirtNumber(parseInt(e.target.value, 10))}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={playerPosition}
                  label="Position"
                  onChange={(e) =>
                    onChangePosition(e.target.value as PlayerPosition)
                  }
                >
                  {Object.values(PlayerPosition).map((position) => (
                    <MenuItem key={position} value={position}>
                      {position}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
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
