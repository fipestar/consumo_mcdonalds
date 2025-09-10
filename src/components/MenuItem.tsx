import type { MenuItem } from "../types";
import { formatCurrency } from "../helpers";
import { useState } from "react";

type MenuItemProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void;
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover group overflow-hidden">
      {/* Imagen del producto */}
      <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden">
        {!imageError ? (
          <img 
            src={`/img/Elemento_${item.id.toString().padStart(2, '0')}.png`}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="gradient-mc w-full h-full flex items-center justify-center">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              🍔
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          NUEVO
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
          {item.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-red-600">
            {formatCurrency(item.price)}
          </span>
          <div className="flex items-center text-yellow-400">
            <span className="text-sm">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        
        <button
          className="w-full gradient-red text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 group"
          onClick={() => addItem(item)}
        >
          <span>Agregar al Carrito</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">🛒</span>
        </button>
      </div>
    </div>
  )
}
