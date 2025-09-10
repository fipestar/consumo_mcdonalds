import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%',
    emoji: '😊'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%',
    emoji: '😍'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%',
    emoji: '🤩'
  },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return(
        <div>
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 gradient-mc rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Propina</h3>
            </div>

            <div className="space-y-3">
                {tipOptions.map(tipOption => (
                    <label 
                        key={tipOption.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            tipOption.value === tip 
                                ? 'border-red-500 bg-red-50 shadow-md' 
                                : 'border-gray-200 bg-white hover:border-red-200 hover:bg-red-50'
                        }`}
                    >
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">{tipOption.emoji}</span>
                            <div>
                                <span className="font-semibold text-gray-900">{tipOption.label}</span>
                                <p className="text-sm text-gray-500">
                                    {tipOption.value === 0.10 && 'Servicio básico'}
                                    {tipOption.value === 0.20 && 'Buen servicio'}
                                    {tipOption.value === 0.50 && 'Excelente servicio'}
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <input 
                                type="radio"
                                id={tipOption.id}
                                name="tip"
                                value={tipOption.value}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOption.value === tip}
                                className="sr-only"
                            />
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                tipOption.value === tip 
                                    ? 'border-red-500 bg-red-500' 
                                    : 'border-gray-300'
                            }`}>
                                {tipOption.value === tip && (
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                )}
                            </div>
                        </div>
                    </label>
                ))}
                
                {/* Opción sin propina */}
                <label 
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        tip === 0 
                            ? 'border-gray-500 bg-gray-50 shadow-md' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">😐</span>
                        <div>
                            <span className="font-semibold text-gray-900">Sin propina</span>
                            <p className="text-sm text-gray-500">No agregar propina</p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <input 
                            type="radio"
                            name="tip"
                            value={0}
                            onChange={e => setTip(+e.target.value)}
                            checked={tip === 0}
                            className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            tip === 0 
                                ? 'border-gray-500 bg-gray-500' 
                                : 'border-gray-300'
                        }`}>
                            {tip === 0 && (
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}