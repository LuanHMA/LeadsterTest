import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DemoArea } from "./components/Sections/DemoArea";
import { FilterVideos } from "./components/Sections/FilterVideos";
import { Introduction } from "./components/Sections/Introduction";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-red-500">
      <Header />

      <main>
        <Introduction />
        <FilterVideos />
        <DemoArea />
        <Footer />
      </main>
    </div>
  );
}
