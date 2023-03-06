import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import { API_FAQ } from '../constants';
import FaqShimmer from './FaqShimmer';

const Faq = () => {
  const [visibleSection, setVisibleSection] = useState('');
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    const data = await fetch(API_FAQ);
    const json = await data.json();
    setFaqData(json?.data?.issues?.data);
  };

  return (
    <div className="pt-10 pl-10 bg-blue-400">
      <div className="bg-white p-10">
        <h2 className="font-bold text-2xl mb-5">FAQs</h2>

        {!faqData ? (
          <FaqShimmer />
        ) : (
          faqData.map((faq) => (
            <Accordion
              key={faq.id}
              isVisible={visibleSection === faq.id}
              title={faq.title}
              description={faq.description}
              setIsVisible={() =>
                setVisibleSection(visibleSection === faq.id ? '' : faq.id)
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Faq;
