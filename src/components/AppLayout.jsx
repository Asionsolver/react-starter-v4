import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-[#030711] text-white">
      <main className="flex grow flex-col font-epilogue">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;