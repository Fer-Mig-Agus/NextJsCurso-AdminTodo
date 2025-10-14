// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import SidebarPage from "@/components/sidebar/Sidebar";
import TopMenuPage from "../../components/TopMenu";
import DashboardPage from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarPage />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenuPage />
        <div className="px-6 pt-6 bg-white p-2 m-2 rounded pb-5">{children}</div>
      </div>
    </>
  );
}
