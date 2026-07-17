import { MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white tracking-widest">INDUSTRY</h1>
      <div className="flex gap-4 text-sm text-stone-400">
        <div className="flex items-center gap-1"><MapPin size={16} /> NG, A. Stepinca 2</div>
        <div className="flex items-center gap-1"><Phone size={16} /> 035/444-222</div>
      </div>
    </nav>
  );
}