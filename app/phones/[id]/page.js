import Link from "next/link";

export default async function Box() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error("Утасны мэдээлэл авахад алдаа гарлаа");
  }

  const data = await response.json();
  const phones = data.products ?? [];
  const phone = phones[0];

  if (!phone) {
    throw new Error("Утасны мэдээлэл олдсонгүй");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <div className="bg-slate-900 p-10 rounded-3xl max-w-md w-full text-center">
        <img
          src={phone.thumbnail}
          alt={phone.title}
          className="mx-auto h-48 object-contain mb-5"
        />

        <div className="text-4xl mb-6">{phone.title}</div>

        <h1 className="text-xl font-bold mb-4">${phone.price}</h1>

        <p className="text-slate-300 mb-4">{phone.description}</p>

        <p className="text-yellow-400 font-semibold mb-6">★ {phone.rating}</p>

        <Link
          href="/phones"
          className="block bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
        >
          ← Утаснууд руу буцах
        </Link>
      </div>
    </main>
  );
}
