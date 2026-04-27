import React, { useState } from "react";
import { CheckCircle2, Globe } from "lucide-react";

const LeadForm = ({ context }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with your backend
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center animate-in fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h4 className="text-xl font-bold text-emerald-900 mb-2">Thank You!</h4>
        <p className="text-stone-600 mb-6">
          Our property consultant will contact you shortly via WhatsApp or Phone.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-emerald-700 font-medium hover:underline"
          type="button"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
            <div style={{paddingBottom:"15px;"}} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
            I am an
          </label>
          <select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 outline-none text-stone-600">
            <option>Investor</option>
            <option>End User</option>
            <option>Agent</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
            Budget
          </label>
          <select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 outline-none text-stone-600">
            <option>AED 670k - 1M</option>
            <option>AED 1M - 2M</option>
            <option>AED 2M+</option>
          </select>
        </div>
      </div>

      <div style={{paddingBottom:"15px;"}}>
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
          Full Name
        </label>
        <input
          required
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
            Country
          </label>
          <div className="relative">
            <Globe size={16} className="absolute left-3 top-3.5 text-stone-400" />
            <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none text-stone-600">
              <option>UK</option>
              <option>UAE</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Europe</option>
              <option>Singapore</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
            Phone
          </label>
          <input
            required
            type="tel"
            placeholder="+44 7700 900000"
            className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
          Email
        </label>
        <input
          required
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20 mt-2"
      >
        {context === "Hero" ? "Get Floor Plans & Prices" : "Submit Enquiry"}
      </button>

      <p className="text-xs text-stone-400 text-center mt-2">Your data is secure. No spam.</p>
    </form>
  );
};

export default LeadForm;
