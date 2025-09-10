import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import  useOrder  from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
       {/* Header mejorado con diseño McDonald's */}
       <header className="gradient-mc shadow-lg sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-6 py-4">
           <div className="flex items-center justify-center">
             <div className="flex items-center space-x-3">
               <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                 <span className="text-white font-bold text-xl">M</span>
               </div>
               <div>
                 <h1 className="text-3xl font-bold text-gray-900">McDonald's</h1>
                 <p className="text-gray-700 text-sm font-medium">Sistema de Pedidos</p>
               </div>
             </div>
           </div>
         </div>
       </header>

       {/* Main content con mejor spacing y diseño */}
       <main className="max-w-7xl mx-auto px-6 py-8">
         <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Sección del menú mejorada */}
           <div className="lg:col-span-2 space-y-6 animate-slideIn">
             <div className="bg-white rounded-2xl shadow-lg p-6">
               <div className="flex items-center space-x-3 mb-6">
                 <div className="w-8 h-8 gradient-red rounded-lg flex items-center justify-center">
                   <span className="text-white font-bold">🍔</span>
                 </div>
                 <h2 className="text-2xl font-bold text-gray-900">Nuestro Menú</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {menuItems.map((item, index) => (
                   <div 
                     key={item.id} 
                     className="animate-slideIn"
                     style={{animationDelay: `${index * 0.1}s`}}
                   >
                     <MenuItem
                       item={item}
                       addItem={addItem}
                     />
                   </div>
                 ))}
               </div>
             </div>
           </div>
           
           {/* Sidebar del pedido mejorado */}
           <div className="lg:col-span-1 space-y-6 animate-slideIn" style={{animationDelay: '0.3s'}}>
             {order.length > 0 ? (
               <div className="space-y-6">
                 {/* Contenido del pedido */}
                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                   <OrderContents 
                     order={order} 
                     removeItem={removeItem}
                   />
                 </div>

                 {/* Formulario de propina */}
                 <div className="bg-white rounded-2xl shadow-lg p-6">
                   <TipPercentageForm
                     setTip={setTip}
                     tip={tip}
                   />
                 </div>

                 {/* Totales */}
                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                   <OrderTotals
                     order={order}
                     tip={tip}
                     placeOrder={placeOrder}
                   />
                 </div>
               </div>
             ) : (
               <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                 <div className="w-20 h-20 mx-auto mb-4 gradient-mc rounded-full flex items-center justify-center animate-pulse-custom">
                   <span className="text-3xl">🛒</span>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h3>
                 <p className="text-gray-500">Selecciona algunos deliciosos productos del menú para comenzar tu pedido</p>
               </div>
             )}
           </div>
         </div>
       </main>

       {/* Footer opcional */}
       <footer className="bg-gray-900 text-white py-8 mt-16">
         <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-gray-400">© 2025 McDonald's - Sistema de Pedidos</p>
         </div>
       </footer>
    </div>
  );
}

export default App;
