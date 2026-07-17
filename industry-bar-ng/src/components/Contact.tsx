export default function Contact() {
  return (
    <section className="py-20 bg-stone-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Posjetite nas</h2>
          <p className="text-stone-400 mb-4">Ul. Alojzija Stepinca 2, 35400, Nova Gradiška</p>
          <p className="text-amber-500 font-bold text-xl mb-6">035/444-222</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/IndustryNg/" className="text-stone-400 hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/industry.bar.restoran/" className="text-stone-400 hover:text-white">Instagram</a>
          </div>
        </div>
        <div className="h-64 w-full rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.8443905953047!2d17.3826066!3d45.2536855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47676372cb190e01%3A0xf865d81d3021f57c!2sIndustry%20Bar%20%26%20Restoran!5e0!3m2!1shr!2shr!4v1721181234567!5m2!1shr!2shr" 
            width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}