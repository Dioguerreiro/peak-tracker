import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardStats = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <div>Team Stats In Previous Games / Trainning sessions</div>
    </DashboardLayout>
  );
};

export default DashboardStats;
