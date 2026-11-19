import { ArrowUpRight, Bug, Lightbulb, MessageCircle, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const feedbackTypes = [
  { icon: MessageCircle, title: 'General feedback', text: 'Tell us what feels helpful or what could be better.' },
  { icon: Bug, title: 'Report a problem', text: 'Let us know if something looks confusing or does not work.' },
  { icon: Lightbulb, title: 'Suggest a topic', text: 'Share a science topic you would like to learn about.' },
];

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero inner-hero--compact">
        <div className="container inner-hero__content">
          <span className="eyebrow"><span className="eyebrow__mark"/>LET'S HEAR FROM YOU</span>
          <h1>Good ideas start<br/><span>with a conversation.</span></h1>
          <p>Found something confusing? Have an idea for a topic? Your feedback will help us make Si Tutor more useful.</p>
        </div>
      </section>
      <section className="section-space inner-content-section">
        <div className="container contact-layout">
          <div><SectionHeading eyebrow="WHAT CAN YOU SHARE?" title="Every useful note helps." description="Choose the kind of feedback you'd like to send. The feedback form will be connected before the public launch."/><div className="feedback-type-list">{feedbackTypes.map(({ icon: Icon, title, text }) => <article key={title}><span><Icon size={20}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
          <aside className="contact-placeholder"><div className="contact-placeholder__icon"><MessagesSquare size={25}/></div><span className="eyebrow">FEEDBACK CHANNEL</span><h2>We're making room for your voice.</h2><p>The feedback form and message delivery will be connected during the supporting-features stage. We haven't enabled submissions yet, so your message won't disappear into an unmonitored form.</p><Link to="/faqs" className="text-link">Visit the FAQs in the meantime <ArrowUpRight size={15}/></Link></aside>
        </div>
      </section>
    </main>
  );
}
