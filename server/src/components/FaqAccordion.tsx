import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItemData[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-answer-${index}`;
        return (
          <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.question}>
            <h3>
              <button
                className="faq-item__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-item__chevron"><ChevronDown size={18} /></span>
              </button>
            </h3>
            <div className="faq-item__panel" id={panelId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
