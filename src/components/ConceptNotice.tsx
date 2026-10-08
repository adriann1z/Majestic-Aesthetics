import React from 'react';
import { Sparkles, Info, CheckCircle2 } from 'lucide-react';

interface ConceptNoticeProps {
  onOpenChecklist: () => void;
}

export const ConceptNotice: React.FC<ConceptNoticeProps> = ({ onOpenChecklist }) => {
  return (
    <aside 
      aria-label="Client presentation banner"
      className="bg-[#282924] text-[#F9EDF2] text-xs py-2.5 px-4 border-b border-[#3D3E38] relative z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-[#A96883] text-white">
            <Sparkles className="w-3 h-3 text-white" />
            Client Presentation Concept
          </span>
          <p className="text-stone-300">
            Prepared for <strong className="text-white font-medium">Katie Osborne</strong>. Proposed content & expansion areas marked for review.
          </p>
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <button
            onClick={onOpenChecklist}
            className="inline-flex items-center gap-1 text-[#F9EDF2] hover:text-white underline underline-offset-2 transition-colors cursor-pointer text-xs font-medium"
            type="button"
          >
            <Info className="w-3.5 h-3.5 text-[#C08EA1]" />
            View Katie's Verification Checklist
          </button>
        </div>
      </div>
    </aside>
  );
};
