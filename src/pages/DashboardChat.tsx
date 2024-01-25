import ChatApp from "../components/Chat/ChatApp/ChatApp";
import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";

const DashboardChat = () => {
  const { user, loading } = useAuthRedirect();

  return (
    <DashboardLayout>
      <ChatApp />
    </DashboardLayout>
  );
};

export default DashboardChat;
