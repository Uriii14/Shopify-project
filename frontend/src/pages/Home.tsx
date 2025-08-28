import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";

const featured = [
  { slug: "mini-tote-aurora", name: "Mini Tote Aurora", price: 149, tag: "new" as const },
  { slug: "crossbody-nova", name: "Crossbody Nova", price: 119, tag: "bestseller" as const },
  { slug: "wallet-prism", name: "Wallet Prism", price: 59 },
  { slug: "cardholder-pixel", name: "Cardholder Pixel", price: 39 },
  { slug: "shoulder-bag-halo", name: "Shoulder Bag Halo", price: 169 },
  { slug: "phone-pouch-lumen", name: "Phone Pouch Lumen", price: 49, tag: "sale" as const },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Nueva Colección
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Descubre las últimas tendencias en moda. Elegancia y estilo para cada ocasión.
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  to="/products"
                  className="inline-block rounded-full border border-black px-4 py-2 text-xs font-medium transition hover:bg-black hover:text-white"
                >
                  Shop Now
                </Link>
                <a
                  href="#featured"
                  className="inline-block rounded-full px-4 py-2 text-xs underline-offset-4 hover:underline"
                >
                  Ver destacados
                </a>
              </div>
              {/* mini-USPs */}
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <li>✓ Envío 24/48h</li>
                <li>✓ Devoluciones 30 días</li>
                <li>✓ Pago seguro</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-gray-100 to-white"></div>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200">
                  <div className="h-full w-full bg-[linear-gradient(135deg,#efefef,#fafafa)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section id="featured" className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-semibold">Productos Destacados</h2>
            <Link to="/products" className="text-xs underline underline-offset-4 hover:no-underline">
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* BANNER SIMPLE */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-black px-4 py-6 text-white md:px-6">
            <div className="grid items-center gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  "Everyday pieces" que combinan con todo
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Materiales seleccionados y diseños atemporales. Hecho para durar.
                </p>
                <Link
                  to="/products"
                  className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-gray-200"
                >
                  Explorar
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-white/10 ring-1 ring-white/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}