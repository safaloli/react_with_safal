import React, {useId} from "react";

function InputBox({ 
    label,
    amount,
    onAmountChange, 
    onCurrencyChange, 
    currencyOptions = [],
    selectedCurrency
    }) {
    
    const amountInputId = useId();
    return (
        <div className="input-box bg-white text-black p-6 text-sm flex align-center gap-4 shadow-sm rounded-2xl">
            <div className="w-full flex flex-col gap-4 justify-center">
                <label htmlFor={amountInputId}>
                    {label}
                </label>
                <input 
                    id={amountInputId}
                    type="number" 
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                    className="text-black p-2 px-4 shadow-sm rounded-2xl outline-none border-none"
                />
            </div>

            <div className="w-full flex flex-col gap-4 text black">
                <label>Currency Type</label>
                <select 
                    className="bg-gray-200 p-2 px-4 shadow-sm rounded-2xl"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    { 
                        currencyOptions.map((option) => (
                            <option
                                key={option}
                                value={option}
                                >
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div> 
    )
}

export default InputBox;