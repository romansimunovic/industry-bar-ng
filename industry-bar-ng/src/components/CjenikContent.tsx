export default function Cjenik() {
  const menuData = {
    "Glavna jela": [
      { name: "Šarena piletina (ploč. file, paprika, tikvice, riža, šampinjoni)", price: "8,50 €" },
      { name: "Love Cheese (punjena piletina, gorgonzola, šampinjoni, pekarski krumpir)", price: "8,50 €" },
      { name: "Punjene tikvice (tikvice, piletina, grašak, mix sir, vrhnje, za kuhanje)", price: "8,20 €" },
      { name: "Lungić na lovački (lungić, šampinjoni, lovački umak, pekarski krumpir)", price: "9,90 €" },
      { name: "Lignje punjene (lignje, krumpir, krumpir ploška)", price: "9,90 €" },
      { name: "Lignje žar (lignje, krumpir, krumpir ploška)", price: "9,50 €" },
      { name: "Lignje frigane (lignje, krumpir, krumpir ploška)", price: "9,50 €" },
      { name: "BBQ Wings (pileća krila, bbq umak, salata mix, umak od kopra, pomes)", price: "7,50 €" },
      { name: "Pileće rolice (piletina, slanina, mozarella, salata mix, umak od kopra)", price: "9,50 €" },
      { name: "Wine box for two (hladni naresci)", price: "5,90 €" },
      { name: "Industry box for two (2x mini burger, 4x bbq pileća krila, 2x pileće rolice, 4x pileći fingers, dollar chips, 4x umak)", price: "16,99 €" },
    ],
    "Tjestenina": [
      { name: "Pasta Cubana (tjestenina, slanina, rukola, grana padano, cherry rajčice, vrhnje)", price: "7,90 €" },
      { name: "Njoki sa pršutom (domaći njoki, pršut, rukola, grana padano, vrhnje za kuhanje)", price: "8,30 €" },
      { name: "Njoki 4 vrste sira (domaći njoki, gorgonzola, mozzarella, gauda, grana padano, vrhnje za kuhanje)", price: "8,30 €" },
      { name: "Industry Pasta (tjestenina, pršut, gorgonzola, rukola, vrhnje za kuhanje)", price: "8,00 €" },
      { name: "Pasta de Poulet (tjestenina, piletina, cherry rajčice, peperoncino, grana padano, crveni umak)", price: "7,90 €" },
      { name: "Spaghetti Bolognese / Carbonara", price: "7,90 €" },
      { name: "Bečki odrezak (piletina, pekarski krumpir, tartar, čista limun)", price: "8,90 €" },
    ],
    "Pizza": [
      { name: "Margherita", price: "6,90 €" },
      { name: "Mista", price: "7,50 €" },
      { name: "Santa Maria", price: "8,40 €" },
      { name: "Tuna", price: "8,40 €" },
      { name: "Mexicana", price: "8,40 €" },
      { name: "Picante", price: "8,70 €" },
      { name: "Pizza Bianco Prosciutto", price: "8,70 €" },
      { name: "Molte Verdure", price: "8,70 €" },
      { name: "Calzone", price: "8,70 €" },
      { name: "Quattro Formaggio", price: "8,70 €" },
    ],
    "Salate": [
      { name: "Vege salata (mix salata, svježi krastavac, pečena paprika, kukuruz, grah, hrenova slanina, umak od kopra)", price: "6,60 €" },
      { name: "Industry salata (mix salata, svježi krastavac, šampinjoni, tikvice, crvena paprika, hrenova slanina, umak od kopra)", price: "7,50 €" },
      { name: "Caesar salata (pohana piletina, grana padano, mix salata, cherry rajčice, hrenova slanina, umak od kopra)", price: "7,90 €" },
      { name: "Tuna salata", price: "7,90 €" },
      { name: "Mix salata", price: "3,00 €" },
    ],
    "Burger's": [
      { name: "Industry Burger (domaće pecivo, juneće meso 180g, bbq umak, zelena salata, slanina, rajčica, cheddar, pommes frites)", price: "7,90 €" },
      { name: "Chicago Papa's Burger (domaće pecivo, juneće meso 180g, zelena salata, pečena paprika, kajmak, pommes frites)", price: "7,90 €" },
    ],
    "Wok, Breakfast & Deserti": [
      { name: "Industry Wok (piletina, crvena paprika, zelena paprika, tikvice, šampinjoni, riža)", price: "8,40 €" },
      { name: "Industry Breakfast", price: "4,50 €" },
      { name: "Tost (šunka, sir)", price: "1,70 €" },
      { name: "Industry Cake", price: "3,00 €" },
      { name: "Palačinke sa nutelom", price: "3,50 €" },
      { name: "Family vrući buhtlić", price: "6,90 €" },
    ],
    "Prilozi & Tortilla": [
      { name: "Pommes frites / Pekarski krumpir", price: "2,70 €" },
      { name: "Krumpir ploške", price: "2,70 €" },
      { name: "Njoki", price: "2,20 €" },
      { name: "Lepinja", price: "1,70 €" },
      { name: "Povrće na žaru", price: "2,70 €" },
      { name: "Tortilla Mexicana (piletina, gljive, paprika, sir)", price: "7,90 €" },
      { name: "Tortilla Espanola (piletina, gljive, mljeveno juneće meso, grah, šampinjoni, zelena salata)", price: "7,90 €" },
    ],
    "Dječji menu & Dodaci": [
      { name: "Kids Fingers (piletina, pomes)", price: "5,40 €" },
      { name: "Kids Pasta (bolonjez/carbonara)", price: "5,40 €" },
      { name: "Kids Burger (mini burger, pomes)", price: "5,70 €" },
      { name: "Dodatak (pršut/sir)", price: "2,00 €" },
      { name: "Dodatci (jaje, majoneza, kečap, sir, vrhnje, paprika, povrće)", price: "1,50 €" },
    ]
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-amber-500 mb-12 text-center tracking-tight border-b-2 border-amber-900 pb-8">JELOVNIK</h1>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="bg-stone-900 p-6 rounded-xl border border-stone-800 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-amber-600 pb-2">{category}</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-stone-800 pb-3">
                    <span className="text-sm md:text-base font-medium text-stone-300">{item.name}</span>
                    <span className="text-amber-500 font-bold ml-4 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-stone-500 italic text-sm">
          * Molimo da nas obavijestite o eventualnim alergijama. Informacije o alergenima dostupne su na zahtjev.
        </p>
      </div>
    </div>
  );
  
}

export const metadata = {
  title: 'Cjenik i Ponuda | Industry Bar Nova Gradiška',
  description: 'Pogledajte naš kompletan jelovnik: pizze, burgeri, wok, dnevna jela i slastice. Industry Bar & Restoran.',
};