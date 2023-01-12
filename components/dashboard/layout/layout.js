import Sidebar from "../sidebar/sidebar";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className=" flex-1 p-4 text-white border-1 border-dashed">
        {children}
      </div>
    </div>
  );
}

export default Layout;
