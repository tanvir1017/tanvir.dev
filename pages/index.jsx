import HomePage from "components/home/main-page/home";
import { metaTagHome } from "../components/localData/localData";
import Meta from "../components/meta/meta";

export default function Home() {
  return (
    <main className="font-firaSansRegular">
      <Meta metaTag={metaTagHome} />
      <HomePage />
    </main>
  );
}
