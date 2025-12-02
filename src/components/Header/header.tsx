import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-semibold">
        MyRTC
      </Link>

      <Link
        href="/login"
        className="px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
      >
        Login
      </Link>
    </header>
  );
}
