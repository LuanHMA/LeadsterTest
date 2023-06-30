import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DemoArea } from "./components/Sections/DemoArea";
import { FilterVideos } from "./components/Sections/FilterVideo";
import { Introduction } from "./components/Sections/Introduction";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <Header />

      <main>
        <Introduction />
        <FilterVideos />
        <DemoArea />
      </main>
      <Footer />
    </div>
  );
}
