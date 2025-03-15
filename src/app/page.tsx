import { Cards } from "@/components/Cards";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Cards />
    </div>
  );
}
