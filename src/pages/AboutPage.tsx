import { ArrowUpRight, Eye, Heart, Lightbulb, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero inner-hero--compact">
        <div className="container inner-hero__content">
          <span className="eyebrow"><span className="eyebrow__mark"/>A LITTLE ABOUT US</span>
          <h1>Learning should feel<br/><span>like discovery.</span></h1>
          <p>Si Tutor is being built around a simple idea: difficult science concepts become less intimidating when they're explained with clarity, care and a little creativity.</p>
        </div>
      </section>
      <section className="section-space inner-content-section">
        <div className="container about-intro-grid">
          <div className="about-manifesto"><span className="about-manifesto__asterisk">✳</span><p>We don't want to give you more notes to memorise. We want to help you understand <em>what the notes are actually saying.</em></p></div>
          <div className="about-copy"><SectionHeading eyebrow="THE IDEA" title="Make the complicated feel approachable."/><p>From atoms and molecules to the patterns that shape the natural world, science is full of ideas worth being curious about. But when explanations feel too dense or disconnected from everyday life, learning can become frustrating.</p><p>Si Tutor is being designed to bring ideas closer: clear explanations, relevant examples, visual learning and opportunities to practise. We are beginning with Chemistry and will grow carefully from there.</p><Link className="text-link" to="/explore">Explore the first collection <ArrowUpRight size={16}/></Link></div>
        </div>
      </section>
      <section className="section-space about-values-section">
        <div className="container"><SectionHeading eyebrow="WHAT WE BELIEVE" title="A few things we'll keep coming back to." description="These principles guide how we plan lessons and design the learning experience." centered/><div className="value-grid"><article><span className="value-icon value-icon--mint"><Lightbulb/></span><h3>Clarity first</h3><p>Start with the simplest useful explanation, then build towards the deeper detail.</p></article><article><span className="value-icon value-icon--lavender"><Eye/></span><h3>Make ideas visible</h3><p>Use diagrams and examples that help learners picture what is happening.</p></article><article><span className="value-icon value-icon--yellow"><Heart/></span><h3>Learn without intimidation</h3><p>Make room for questions, mistakes and another try.</p></article><article><span className="value-icon value-icon--blue"><Sparkles/></span><h3>Keep improving</h3><p>Listen to learners and improve content based on what helps them most.</p></article></div></div>
      </section>
    </main>
  );
}
