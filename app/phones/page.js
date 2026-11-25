import Link from "next/link";

export default async function Phones() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error("Утасны мэдээлэл авахад алдаа гарлаа");
  }

  const data = await response.json();
  const phones = data.products ?? [];

  return (
    <main className=" bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">📱 Утаснууд</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {phones.map((phone) => (
          <Link
            key={phone.id}
            href={`/phones/${phone.id}`}
            className="bg-slate-900 p-6 rounded-2xl text-center hover:bg-slate-800 hover:scale-105 transition"
          >
            <img
              src={phone.thumbnail}
              alt={phone.title}
              className="mx-auto h-48 object-contain mb-5"
            />

            <h2 className="text-xl font-bold mb-2">{phone.title}</h2>
            <p className="text-lg text-gray-300">${phone.price}</p>
            <p className="mt-5 text-red-400 font-semibold"> Утас үзэх →</p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="text-gray-400 hover:text-white">
          ← Нүүр хуудас руу буцах
        </Link>
      </div>
    </main>
  );
}
