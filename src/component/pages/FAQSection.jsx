import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQSection = () => {
  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center mb-5">Find answers to common questions about our services.</p>

        <div className="accordion" id="faqAccordion">
          {faqItems.map((item, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded={i === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${i}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${i}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: '🕒 How long does it take to complete a project?',
    answer: 'Depending on complexity, most projects are delivered within 2–6 weeks.'
  },
  {
    question: '📱 Do you build apps for both Android and iOS?',
    answer: 'Yes! We build cross-platform apps using modern frameworks like React Native and Flutter.'
  },
  {
    question: '🔐 Do you sign NDAs or keep client information confidential?',
    answer: 'Absolutely. We take privacy seriously and can sign an NDA before discussing project details.'
  },
  {
    question: '🧾 Will I receive the full source code after project delivery?',
    answer: 'Yes. We always deliver 100% of the source code upon completion and payment.'
  },
  {
    question: '🔄 What if I need updates or changes after the project is done?',
    answer: 'We offer maintenance packages or can work hourly for changes. Let’s stay connected!'
  }
];

export default FAQSection;
