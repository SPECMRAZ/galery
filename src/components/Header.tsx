import { Instagram } from "lucide-react";

export function Header() {
  return (
    <div className="text-center py-10 border-b border-gray-200 w-full">
      <div className="gap-6 container mx-auto flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <h2 className="text-xl tracking-wider">Jamil Turguzin</h2>

        <div className="tracking-wider text-sm text-gray-500 flex gap-4">
          <a href="mailto:example@gmail.com">jamil.turguzin@gmail.com</a>
        </div>

        <div className="p-1 rounded-full border-2 border-gray-700">
          <a href="https://www.instagram.com/djamil_turguzin">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
