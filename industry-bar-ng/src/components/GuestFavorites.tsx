const favorites = [
  { name: "Industry Wok", price: "8,40 €", desc: "Piletina, paprika, tikvice, soja" },
  { name: "Industry Burger", price: "7,90 €", desc: "180g junetine, bbq, slanina, cheddar" },
  { name: "Chicago Papa's", price: "7,90 €", desc: "Junetina, kajmak, pečena paprika" },
];

export default function GuestFavorites() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-500 mb-10 text-center">Gosti biraju</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {favorites.map((f) => (
          <div key={f.name} className="p-6 bg-stone-900 rounded border border-stone-800 hover:border-amber-600 transition-colors">
            <h3 className="text-xl text-white font-bold mb-2">{f.name}</h3>
            <p className="text-stone-400 text-sm mb-4">{f.desc}</p>
            <span className="text-amber-500 font-bold">{f.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}