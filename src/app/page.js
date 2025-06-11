import Image from "next/image";
import Link from "next/link";

{/* set function later to reach faster the images, name, prices. */}
export default function DesktopComponent() {
  const image = [
  '/conjunto/conjunto1.jpeg',
  '/conjunto/conjunto2.jpeg',
  '/conjunto/conjunto3.jpeg',
  '/conjunto/conjunto4.jpeg',
  '/conjunto/conjunto5.jpeg',
  '/conjunto/conjunto1.jpeg',
];
const productData = [
  {
    name: 'Conjunto Aurora',
    description: 'Um conjunto elegante para ocasiões especiais.',
  },
  {
    name: 'Conjunto Sol',
    description: 'Ideal para dias quentes e ensolarados.',
  },
  {
    name: 'Conjunto Noite',
    description: 'Perfeito para eventos noturnos sofisticados.',
  },
  {
    name: 'Conjunto Primavera',
    description: 'Inspirado nas flores da estação.',
  },
  {
    name: 'Conjunto Verão',
    description: 'Leve, confortável e estiloso.',
  },
  {
    name: 'Conjunto Retrô',
    description: 'Estilo vintage com toque moderno.',
  },
];
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#112233b2] via-[#0e1e2e9a] to-[#0d1d2eaf] font-sans px-4 sm:px-6 md:px-8 gap-10">

  {/* Header */}
  <header className="bg-gray-900 text-white w-full">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5 relative">
      <img src="/logoEtc/mostfLogo.ico" alt="Mostf Logo" className="h-10 w-auto" />
      
      {/* Nav - hidden on mobile */}
      <nav className="hidden md:flex space-x-6 mx-auto">
        <Link href="/jaquetasPagina" className="hover:underline">Jaquetas</Link>
        <Link href="/trousersPage" className="hover:underline">Calças</Link>
        <Link href="/conjuntosPagina" className="hover:underline">Conjuntos</Link>
      </nav>
    </div>
  </header>

  <main className="bg-white text-black w-full max-w-7xl mx-auto">

    {/* Hero */}
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gray-100">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 tracking-tight">
          MOSTF
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light">
          Descubra nossa coleção mostf. Inspired by sailing, technology, and innovation.
        </p>
      </div>
    </section>

    {/* Collection Title */}
    <section className="py-12 sm:py-16 px-4 md:px-12 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-10">
        Nossos Conjuntos
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            href: "/conjuntosPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672838/mirela_1_d1tfoq.jpg",
            title: "Conjunto Mirela",
            desc: "Perfeito para tardes"
          },
          {
            href: "/jaquetasPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672838/macacaoVinho_pcyqid.jpg",
            title: "Conjunto Vinho",
            desc: "Vinhos e noites"
          },
          {
            href: "/jaquetasPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672838/livia_4_jpu2gj.jpg",
            title: "Conjunto Livia",
            desc: "Além do céu"
          },
          {
            href: "/conjuntosPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672835/italiaOceano_4_vptr9t.jpg",
            title: "Itália Oceano",
            desc: "Estilo impecável"
          },
          {
            href: "/conjuntosPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672831/conjunto_7_csvmte.jpg",
            title: "Rosa buque",
            desc: "Rosa chique"
          },
          {
            href: "/conjuntosPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672831/conjunto_6_ojwfyg.jpg",
            title: "Conjunto 6",
            desc: "6"
          },
          {
            href: "/conjuntosPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672830/barbara_3_pgquqv.jpg",
            title: "Bárbara",
            desc: "barbara"
          },
          {
            href: "/conjuntosPagina",
            src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672830/auroraVinho_4_dl4lnv.jpg",
            title: "Aurora vinho",
            desc: "aurora vinho"
          }
        ].map((item, index) => (
          <Link href={item.href} key={index} className="flex flex-col items-center bg-white p-4 shadow hover:shadow-md transition rounded">
            <img src={item.src} alt={item.title} className="w-full h-100 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* CTA */}
    
  </main>

  {/* Footer */}
  <footer className="w-full bg-gray-900 text-gray-200 px-4 py-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
      <div>
        <h3 className="text-white font-semibold mb-2">Suporte</h3>
        <ul>
          <li><Link href="/policy/helpCenter" className="hover:underline">Centro de ajuda</Link></li>
          <li><Link href="/policy/helpCenter" className="hover:underline">Tenho perguntas</Link></li>
          <li><Link href="/policy/helpCenter" className="hover:underline">Entre em contato</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Email</h3>
        <a href="mailto:ecommercmkssouza@gmail.com" className="hover:underline break-words">
          ecommercmkssouza@gmail.com
        </a>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
        <a href="https://wa.me/556181808187" className="hover:underline">
          +55 (61) 981808187
        </a>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Política</h3>
        <ul>
          <li><Link href="/policy" className="hover:underline">Política de privacidade</Link></li>
          <li><Link href="/policy" className="hover:underline">Termos de serviço</Link></li>
          <li><Link href="/policy" className="hover:underline">Entregas</Link></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
    );
  }