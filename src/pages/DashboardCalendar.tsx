import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardCalendar = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <div>Calendar</div>
    </DashboardLayout>
  );
};

export default DashboardCalendar;
