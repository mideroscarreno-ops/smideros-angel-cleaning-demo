import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { FaqItem } from '../data/content';

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[#1C2B43]/12 border-y border-[#1C2B43]/12">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-1">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full py-5 flex items-center justify-between gap-6 text-left cursor-pointer group"
            >
              <span className="font-serif text-xl sm:text-2xl font-medium text-[#1C2B43] group-hover:text-[#1C2B43]/80 transition-colors">
                {item.question}
              </span>
              <span className="w-8 h-8 rounded-full border border-[#1C2B43]/15 flex items-center justify-center shrink-0 text-[#1C2B43] group-hover:border-[#C7A878] transition-colors">
                {isOpen ? (
                  <Minus className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Plus className="w-4 h-4" aria-hidden="true" />
                )}
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${item.id}`}
                className="pb-6 pr-8 text-sm sm:text-base text-[#343B43] leading-relaxed max-w-3xl"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
