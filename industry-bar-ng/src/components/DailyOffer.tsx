const dailyMenu = [
  { day: "Ponedjeljak", meal: "Čobanac + Kruh", price: "6,20 €" },
  { day: "Utorak", meal: "Svinjski vrat + Restani krumpir", price: "6,50 €" },
];

export default function DailyOffer() {
  return (
    <section className="py-16 bg-stone-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-amber-500 pl-4">Dnevna ponuda (do 15h)</h2>
        {dailyMenu.map((m) => (
          <div key={m.day} className="flex justify-between py-3 border-b border-stone-800">
            <span className="font-bold text-stone-500">{m.day}</span>
            <span className="text-stone-200">{m.meal}</span>
            <span className="text-amber-500 font-bold">{m.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}