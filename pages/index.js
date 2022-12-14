import { metaTagHome } from "../components/localData/localData";
import Meta from "../components/meta/meta";
import HomePage from "../components/pages/home";

export default function Home() {
  return (
    <>
      <Meta metaTag={metaTagHome} />
      <HomePage />
    </>
  );
}
