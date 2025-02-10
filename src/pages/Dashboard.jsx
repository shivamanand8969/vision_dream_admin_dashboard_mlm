import { Helmet } from "react-helmet-async";

import { AppView } from "../sections/overview/view";



export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard | VISION DREAM </title>
      </Helmet>

      <AppView />
    </>
  );
}
