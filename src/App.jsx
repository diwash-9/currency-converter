import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between py-16 px-6 font-sans text-gray-900">
      <main className="max-w-md mx-auto w-full p-8 rounded-lg shadow-md border border-gray-200">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-1">Currency Converter</h1>
          <p className="text-sm text-gray-600">
            Simple, fast and accurate currency conversion.
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
          aria-label="Currency conversion form"
        >
          <div>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(val) => setAmount(val)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              aria-label="Swap currencies"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              ↕ Swap
            </button>
          </div>

          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </main>

      <footer className="text-center text-gray-500 text-xs mt-12 select-none">
        &copy; {new Date().getFullYear()} Devraj Khatiwada. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
