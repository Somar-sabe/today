import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const PaymentCalculator: React.FC = () => {
  const [price, setPrice] = useState(670000);
  
  // Logic: 20% Down, 1% Monthly, 40% Post
  // Note: 60/40 Split. 20% + (X months * 1%) = 60%. Remaining 40% post.
  const downPayment = price * 0.20;
  const monthlyInstallment = price * 0.01;
  const postHandover = price * 0.40;
  
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-500 p-2 rounded-lg text-white">
          <Calculator size={24} />
        </div>
        <h3 className="text-xl font-bold">Payment Plan Calculator</h3>
      </div>

      <div className="mb-8">
        <label className="block text-sm text-emerald-200 mb-2">Property Value (AED)</label>
        <input 
          type="range" 
          min="670000" 
          max="3000000" 
          step="10000"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="w-full h-2 bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-400 mb-4"
        />
        <div className="text-3xl font-bold text-white">AED {price.toLocaleString()}</div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-emerald-900/50 rounded-xl border border-emerald-800">
          <div>
            <div className="text-sm text-emerald-300 font-medium">Down Payment (20%)</div>
            <div className="text-xs text-emerald-400">Immediate</div>
          </div>
          <div className="text-xl font-bold">AED {downPayment.toLocaleString()}</div>
        </div>

        <div className="flex justify-between items-center p-4 bg-emerald-800 rounded-xl border border-emerald-600 shadow-lg shadow-emerald-900/50">
          <div>
            <div className="text-sm text-white font-medium flex items-center gap-2">Monthly Installment (1%)</div>
            <div className="text-xs text-emerald-200">During Construction</div>
          </div>
          <div className="text-2xl font-bold text-white">AED {monthlyInstallment.toLocaleString()}</div>
        </div>

        <div className="flex justify-between items-center p-4 bg-emerald-900/50 rounded-xl border border-emerald-800">
          <div>
            <div className="text-sm text-emerald-300 font-medium">Post-Handover (40%)</div>
            <div className="text-xs text-emerald-400">Over 3 Years</div>
          </div>
          <div className="text-xl font-bold">AED {postHandover.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;