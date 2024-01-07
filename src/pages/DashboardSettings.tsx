import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardSettings = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <div>Settings</div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
