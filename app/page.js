import Link from "next/link";

export default async function Phones() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  const data = await response.json();
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">📱 Pine Phone Shop</h1>

      <p className="text-gray-400 text-lg mb-8 text-center">
        Шинэ утсаа эндээс сонго
      </p>

      <div className="flex gap-4">
        <Link
          href="/phones"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
        >
          Утаснууд үзэх →
        </Link>
      </div>
    </main>
  );
}
