import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const RoiEstimator: React.FC = () => {
  const [investment, setInvestment] = useState(1188000); // Default 1BR price
  
  // Simple Logic for Estimation
  const yearlyRent = investment * 0.08; // 8% yield conservative
  const appreciation = investment * 0.15; // 15% appreciation over 3 years
  const totalRoi5Years = (yearlyRent * 5) + appreciation;

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-amber-500 p-2 rounded-lg text-white">
          <TrendingUp size={24} />
        </div>
        <h3 className="text-xl font-bold">ROI Estimator</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          onClick={() => setInvestment(670000)}
          className={`p-3 rounded-lg text-sm font-medium transition-all ${investment === 670000 ? 'bg-emerald-500 text-white' : 'bg-emerald-900/50 text-emerald-200'}`}
        >
          Studio
        </button>
        <button 
          onClick={() => setInvestment(1188000)}
          className={`p-3 rounded-lg text-sm font-medium transition-all ${investment === 1188000 ? 'bg-emerald-500 text-white' : 'bg-emerald-900/50 text-emerald-200'}`}
        >
          1 Bedroom
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 text-center mb-8">
        <div>
          <div className="text-sm text-emerald-300 mb-1">Est. Yearly Rental</div>
          <div className="text-2xl font-bold text-white">AED {yearlyRent.toLocaleString()}</div>
          <div className="text-xs text-emerald-400 mt-1">~8% Yield</div>
        </div>
        <div>
          <div className="text-sm text-emerald-300 mb-1">Est. Appreciation</div>
          <div className="text-2xl font-bold text-white">AED {appreciation.toLocaleString()}</div>
          <div className="text-xs text-emerald-400 mt-1">By Completion</div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-xl border border-white/10">
        <div className="text-center">
          <div className="text-sm text-white mb-2 uppercase tracking-widest opacity-80">Total Projected Value (5 Years)</div>
          <div className="text-4xl font-bold text-white">AED {(investment + totalRoi5Years).toLocaleString()}</div>
          <div className="text-xs text-emerald-200 mt-2">*Includes rental income & capital gains. Projections only.</div>
        </div>
      </div>
    </div>
  );
};

export default RoiEstimator;