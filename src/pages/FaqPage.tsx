import { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, CircleHelp, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

const groups = [
  {
    title: 'Getting started',
    icon: Sparkles,
    items: [
      { question: 'What exactly is Si Tutor?', answer: 'Si Tutor is a science-learning platform being created to make difficult topics easier to understand through clear explanations, useful visuals and opportunities to practise what you learn.' },
      { question: 'Who is Si Tutor being created for?', answer: 'The first collection is being planned for senior secondary school students. We are starting with SS1 Chemistry and intend to expand the learning library as the platform develops.' },
      { question: 'Which subjects are available right now?', answer: 'Chemistry is the first subject being prepared. Other science subjects may be added in later releases after we learn what students find most useful.' },
    ],
  },
  {
    title: 'Lessons and learning',
    icon: BookOpen,
    items: [
      { question: 'How will the lessons be different from ordinary notes?', answer: 'The learning approach combines straightforward explanations, relatable examples, visual aids and short practice activities. The aim is to help learners understand ideas rather than simply memorise paragraphs.' },
      { question: 'Will each topic have a quiz?', answer: 'That is part of the first-version plan. Topic quizzes are being designed to help learners check their understanding and see explanations after submitting their answers.' },
      { question: 'Can I retake a quiz?', answer: 'Quiz retry is planned for the first learning experience. The final quiz behaviour will be confirmed when the quiz feature is implemented and tested.' },
      { question: 'Are the lessons aligned with the Nigerian curriculum?', answer: 'The first collection is being planned around senior secondary Chemistry learning areas in Nigeria. Content is being checked against curriculum materials and reliable scientific references before publication.' },
    ],
  },
  {
    title: 'Access and support',
    icon: ShieldCheck,
    items: [
      { question: 'Will I need to create an account?', answer: 'The first version is being designed so learners can explore lessons without creating an account. This may evolve if future features make student accounts useful.' },
      { question: 'Will Si Tutor be free?', answer: 'The access and pricing model has not been finalised. Any free or paid content arrangements will be clearly explained before the platform launches publicly.' },
      { question: 'What if I find an error in a lesson?', answer: 'We want learners to tell us when an explanation is unclear or something appears incorrect. A feedback route is planned so content issues can be reviewed.' },
      { question: 'Can I suggest a topic?', answer: 'Yes. Topic suggestions are welcome and will help guide future content planning. The feedback page is part of the planned first release.' },
    ],
  },
];

export default function FaqPage() {
  const [query, setQuery] = useState('');
  const flattened = useMemo(() => groups.map((group) => ({ ...group, items: group.items.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(query.toLowerCase().trim())) })).filter((group) => group.items.length > 0), [query]);
  const count = flattened.reduce((total, group) => total + group.items.length, 0);

  return (
    <main className="inner-page">
      <section className="inner-hero inner-hero--compact">
        <div className="container inner-hero__content">
          <span className="eyebrow"><span className="eyebrow__mark"/>HERE TO HELP</span>
          <h1>A few things<br/><span>you might be wondering.</span></h1>
          <p>New here? That's a good place to be. Find answers about Si Tutor, the lessons and how the platform is taking shape.</p>
          <label className="faq-search"><Search size={18}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a question..." aria-label="Search frequently asked questions"/><kbd>/</kbd></label>
        </div>
      </section>
      <section className="section-space inner-content-section">
        <div className="container faq-page-layout">
          <aside className="faq-side-note"><div className="faq-side-note__icon"><CircleHelp size={23}/></div><h2>Curiosity is always welcome.</h2><p>Can't find what you're looking for? Send us a question and we'll work on making the answer clear.</p><Link className="text-link" to="/contact">Get in touch <ArrowUpRight size={15}/></Link></aside>
          <div className="faq-main-content">
            {count === 0 ? <div className="empty-search"><Search size={22}/><h2>No matching questions yet</h2><p>Try a different word or browse the sections below.</p><button className="text-link" type="button" onClick={() => setQuery('')}>Clear search</button></div> : flattened.map((group) => {
              const Icon = group.icon;
              return <section className="faq-group" key={group.title}><div className="faq-group__heading"><span><Icon size={17}/></span><h2>{group.title}</h2><small>{group.items.length} questions</small></div><FaqAccordion items={group.items}/></section>;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
