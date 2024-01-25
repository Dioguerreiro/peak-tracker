import CustomCalendar from "../components/Calendar/Calendar";
import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardCalendar = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <div className="p-5">
      <CustomCalendar/>
      </div>
    </DashboardLayout>
  );
};

export default DashboardCalendar;
