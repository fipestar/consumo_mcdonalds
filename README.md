# 🍔 McDonald's Order System

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-7.1.4-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.13-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
</div>

<div align="center">
  <h3>🚀 Simulador interactivo de pedidos de McDonald's desarrollado con React + TypeScript</h3>
  <p>Un proyecto de aprendizaje que demuestra el manejo de estado, componentes reutilizables y diseño responsivo</p>
</div>

---

## 📋 Descripción del Proyecto

**McDonald's Order System** es una aplicación web interactiva que simula el sistema de pedidos del famoso restaurante de comida rápida. Desarrollada como proyecto de aprendizaje en **React + TypeScript**, la aplicación permite a los usuarios navegar por un menú completo, agregar productos al carrito, calcular propinas y gestionar pedidos de forma intuitiva con una interfaz moderna y responsiva.

## ✨ Características Principales

### 🛍️ **Sistema de Pedidos Completo**
- ✅ Navegación por menú con imágenes reales de productos
- ✅ Carrito de compras con gestión de cantidades
- ✅ Cálculo automático de subtotales y totales
- ✅ Sistema de propinas con opciones predefinidas
- ✅ Eliminación individual de productos

### 🎨 **Diseño y UX**
- ✅ Interfaz inspirada en el branding de McDonald's
- ✅ Diseño responsivo (Mobile-first)
- ✅ Animaciones suaves y micro-interacciones
- ✅ Estados de carga y feedback visual
- ✅ Scrollbars personalizados

### 🔧 **Características Técnicas**
- ✅ Componentes reutilizables y modulares
- ✅ Gestión de estado sin librerías externas
- ✅ Optimización de performance con `useMemo`
- ✅ Manejo robusto de errores
- ✅ Type safety completo con TypeScript

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.3.1 | Framework de UI con Hooks |
| **TypeScript** | 5.6.2 | Tipado estático y type safety |
| **Vite** | 7.1.4 | Build tool y dev server |
| **Tailwind CSS** | 3.4.13 | Framework CSS utility-first |
| **ESLint** | 9.11.1 | Linting y calidad de código |

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── MenuItem.tsx     # Card de producto individual
│   ├── OrderContents.tsx # Lista de productos en el carrito
│   ├── OrderTotals.tsx  # Resumen de totales y botón de pedido
│   └── TipPercentageForm.tsx # Formulario de selección de propina
├── data/
│   └── db.ts           # Base de datos simulada del menú
├── helpers/
│   └── index.ts        # Funciones utilitarias (formatCurrency)
├── hooks/
│   └── useOrder.ts     # Hook personalizado para lógica de pedidos
├── types/
│   └── index.ts        # Definiciones de tipos TypeScript
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada de la aplicación
└── index.css          # Estilos globales y personalizados
```

## 🚀 Instalación y Uso

### **Prerrequisitos**
- Node.js 20.19+ o 22.12+
- npm o yarn

### **1. Clonar el repositorio**
```bash
git clone https://github.com/fipestar/consumo_mcdonalds.git
cd consumo_mcdonalds
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Ejecutar en modo desarrollo**
```bash
npm run dev
```

### **4. Abrir en el navegador**
```
http://localhost:5173
```

### **5. Compilar para producción**
```bash
npm run build
```

## 🎯 Conceptos Técnicos Implementados

### **React Hooks & State Management**
```typescript
// Hook personalizado para lógica de pedidos
const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  
  const addItem = useCallback((item: MenuItem) => {
    // Lógica inmutable de actualización
  }, []);
};
```

### **Performance Optimization**
```typescript
// Memoización de cálculos costosos
const subtotalAmount = useMemo(() => 
  order.reduce((total, item) => 
    total + (item.quantity * item.price), 0
  ), [order]
);
```

### **TypeScript Type Safety**
```typescript
interface OrderItem extends MenuItem {
  quantity: number;
}

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}
```

### **Error Handling**
```typescript
// Manejo graceful de errores de imágenes
const [imageError, setImageError] = useState(false);

<img 
  src={`/img/Elemento_${item.id.toString().padStart(2, '0')}.png`}
  onError={() => setImageError(true)}
/>
```

## 📱 Demo y Screenshots

### 🖥️ Vista Desktop
La aplicación presenta un layout de 3 columnas con el menú principal y el carrito de pedidos

### 📱 Vista Mobile
Diseño completamente responsivo que se adapta a dispositivos móviles con navegación táctil optimizada

### ⚡ Características Destacadas
- **Animaciones fluidas**: Transiciones suaves en hover y estados de carga
- **Feedback visual**: Estados de éxito, error y carga para mejor UX
- **Accesibilidad**: Contraste adecuado y navegación por teclado
- **Performance**: Carga rápida y renderizado optimizado

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Compila para producción
npm run preview      # Preview de build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🎓 Aprendizajes y Skills Demostrados

### **React & TypeScript**
- ✅ Functional Components con Hooks
- ✅ Custom Hooks para lógica reutilizable
- ✅ Props drilling y component composition
- ✅ Conditional rendering y list rendering
- ✅ Type safety completo con interfaces

### **State Management**
- ✅ useState para estado local
- ✅ useMemo para optimización de performance
- ✅ useCallback para memoización de funciones
- ✅ Lifting state up pattern

### **Modern CSS & Design**
- ✅ Tailwind CSS utility classes
- ✅ CSS Grid y Flexbox
- ✅ Responsive design (Mobile-first)
- ✅ CSS animations y transitions
- ✅ Custom scrollbars

### **Performance & Best Practices**
- ✅ Code splitting con Vite
- ✅ Lazy loading de imágenes
- ✅ Optimización de re-renders
- ✅ Error boundaries y fallbacks
- ✅ Accessibility considerations

## 🔍 Detalles de Implementación

### **Gestión de Estado**
El proyecto utiliza un hook personalizado `useOrder` que centraliza toda la lógica del carrito:
- Agregar productos con acumulación de cantidades
- Eliminar productos individuales
- Cálculo de totales en tiempo real
- Gestión de propinas

### **Optimización de Performance**
- **useMemo**: Para cálculos costosos de subtotales y totales
- **Renderizado condicional**: Evita renders innecesarios
- **Lazy loading**: Imágenes con fallback automático

### **Diseño Responsivo**
- **Mobile-first**: Diseño que prioriza dispositivos móviles
- **Grid adaptativo**: Layout que se reorganiza según el tamaño de pantalla
- **Touch-friendly**: Botones y elementos optimizados para touch

## 🤝 Contribuciones

Este es un proyecto de aprendizaje personal, pero las sugerencias y mejoras son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Juan David Barbosa** - [fipestar](https://github.com/fipestar)

---

<div align="center">
  <p>⭐ Si este proyecto te ayudó en tu aprendizaje, ¡considera darle una estrella! ⭐</p>
  <p>Hecho con ❤️ y mucho ☕ por Juan David Barbosa</p>
</div>


