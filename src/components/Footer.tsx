import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full py-10 border-t border-gray-200">
      <div className="gap-6 container mx-auto flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <p className="tracking-wider text-sm text-gray-500">
          © {new Date().getFullYear()} Jamil Turguzin
        </p>
        <div className="p-1 rounded-full border-2 border-gray-700">
          <a href="https://www.instagram.com/djamil_turguzin">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
