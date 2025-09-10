import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 gradient-red rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📄</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Tu Pedido</h2>
                <div className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {order.length} {order.length === 1 ? 'artículo' : 'artículos'}
                </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 h-80 overflow-y-auto custom-scrollbar space-y-3">
                {order.length === 0 ? (
                    <div className="text-center py-8">
                        <div className="text-4xl mb-2">🍔</div>
                        <p className="text-gray-500">No hay productos en tu pedido</p>
                    </div>
                ) : (
                    order.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 animate-slideIn border border-gray-100"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900 text-sm">
                                            {item.name}
                                        </h4>
                                        <span className="text-gray-600 font-medium text-sm">
                                            {formatCurrency(item.price)}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                                                Cantidad: {item.quantity}
                                            </div>
                                            <div className="text-green-600 font-bold text-sm">
                                                {formatCurrency(item.price * item.quantity)}
                                            </div>
                                        </div>
                                        
                                        <button 
                                            className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                                            onClick={() => removeItem(item.id)}
                                            title="Eliminar producto"
                                        >
                                            <span className="text-sm font-bold">×</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}