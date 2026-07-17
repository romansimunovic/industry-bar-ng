import Navbar from "@/components/Navbar";
import GuestFavorites from "@/components/GuestFavorites";
import DailyOffer from "@/components/DailyOffer";
import Cjenik from "@/components/CjenikContent";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Navbar />
      <header className="h-screen flex items-center justify-center bg-[url('/images/bg.jpg')] bg-cover bg-center">
        <div className="text-center p-6 bg-black/50 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">INDUSTRY</h1>
          <p className="text-xl text-stone-300">Kultni i urbani bar u srcu grada</p>
        </div>
      </header>
      <GuestFavorites />
      <DailyOffer />
      <Cjenik />
      <Contact />
    </main>
  );
}