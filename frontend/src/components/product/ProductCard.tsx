import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";

type Props = {
  slug: string;
  name: string;
  price: number;
  image?: string;
  tag?: "new" | "bestseller" | "sale";
};

export default function ProductCard({ slug, name, price, image, tag }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/product/${slug}`}
      className="group block"
      aria-label={`View ${name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
        {/* etiqueta */}
        {tag && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-black/85 px-2 py-1 text-xs font-medium text-white">
            {tag === "new" ? "New" : tag === "bestseller" ? "Bestseller" : "Sale"}
          </span>
        )}
        
        {/* Botón de favorito - visible en hover O si está marcado como favorito */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute bottom-3 left-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none ${
            isFavorite 
              ? "opacity-100" 
              : "opacity-0 group-hover:opacity-100"
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={16} 
            className={`transition-colors duration-200 ${
              isFavorite 
                ? "fill-red-500 text-red-500" 
                : "text-gray-700 hover:text-red-500"
            }`}
          />
        </button>

        {/* imagen (placeholder si no hay) */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#efefef,#fafafa)]" />
        )}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="max-w-[75%] truncate font-medium">{name}</span>
        <span className="font-semibold">{price.toFixed(0)}€</span>
      </div>
    </Link>
  );
}