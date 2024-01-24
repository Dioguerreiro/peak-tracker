import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logoNew.png";
import { CustomTextField } from "../../components/Textfield/Textfield.styles";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { createTeam } from "../../services/firebaseService";

const CreateTeam = () => {
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState<string>("");

  const handleCreateTeam = async () => {
    const teamId = await createTeam(teamName);

    if (teamId) {
      navigate("/dashboard/team");
    } else {
      console.error("Failed to create team");
    }
  };

  return (
    <section
      id="login-container"
      className="flex justify-center items-center h-[100vh]"
    >
      <div className="flex justify-center items-center w-[556px] bg-white rounded-3xl p-10">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="h-16 rounded-xl" />
          </div>
          <div className="flex flex-col">
            <h3 className=" text-3xl font-semibold text-center">
              Create your team
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <CustomTextField
                type="text"
                id="email"
                label="Team name"
                placeholder="Team name"
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
          </div>
          <PrimaryButton onClick={handleCreateTeam}>
            Create Team
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CreateTeam;
