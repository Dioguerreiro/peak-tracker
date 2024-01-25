import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardStats = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <div>Videos</div>
    </DashboardLayout>
  );
};

export default DashboardStats;
