import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardChat = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <div>Chat</div>
    </DashboardLayout>
  );
};

export default DashboardChat;
