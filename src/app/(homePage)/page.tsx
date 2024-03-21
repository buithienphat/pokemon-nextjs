import SectionHero from "./SectionHero";
import SectionList from "./SectionList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SectionHero />
      <SectionList />
    </main>
  );
}
