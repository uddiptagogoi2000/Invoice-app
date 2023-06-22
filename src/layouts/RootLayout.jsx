import { Outlet } from "react-router-dom";

import { InvoicesContext } from "../contexts/InvoicesContext";
import SidebarContainer from "../containers/SidebarContainer";
import data from "../../db/data.json";

function RootLayout() {
  return (
    <InvoicesContext.Provider value={data}>
      <div className="layout">
        <SidebarContainer />
        <Outlet />
      </div>
    </InvoicesContext.Provider>
  );
}

export default RootLayout;
