import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);
    
    return (
        <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">💳</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Resumen del Pedido</h2>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Subtotal:</span>
                    <span className="text-xl font-bold text-gray-900">
                        {formatCurrency(subtotalAmount)}
                    </span>
                </div>
                
                {/* Línea separadora */}
                <div className="border-t border-gray-200"></div>
                
                {/* Propina */}
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600 font-medium">Propina</span>
                        {tip > 0 && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                                {(tip * 100).toFixed(0)}%
                            </span>
                        )}
                    </div>
                    <span className="text-lg font-semibold text-gray-700">
                        {formatCurrency(tipAmount)}
                    </span>
                </div>
                
                {/* Línea separadora */}
                <div className="border-t border-gray-300"></div>
                
                {/* Total */}
                <div className="flex justify-between items-center py-3 bg-white rounded-lg px-4 shadow-sm">
                    <span className="text-xl font-bold text-gray-900">Total a Pagar:</span>
                    <span className="text-2xl font-bold text-red-600">
                        {formatCurrency(totalAmount)}
                    </span>
                </div>
            </div>
            
            {/* Botón de pedido */}
            <button 
                className={`mt-6 w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    totalAmount === 0 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'gradient-green text-white hover:shadow-xl transform hover:-translate-y-1 active:scale-95'
                }`}
                onClick={placeOrder}
                disabled={totalAmount === 0}
            >
                <span>🎉</span>
                <span>
                    {totalAmount === 0 ? 'Carrito Vacío' : 'Realizar Pedido'}
                </span>
                {totalAmount > 0 && <span>🚀</span>}
            </button>
            
            {/* Información adicional */}
            {totalAmount > 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 text-blue-700">
                        <span>ℹ️</span>
                        <span className="text-sm font-medium">
                            Tu pedido estará listo en 15-20 minutos
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}