import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <main className="not-found-page"><div className="not-found-card"><span className="not-found-icon"><Compass size={30}/></span><span className="eyebrow">404 · WRONG TURN</span><h1>This page wandered<br/>off to explore.</h1><p>We couldn't find the page you were looking for. Let's get you back to somewhere useful.</p><Link className="button button--primary" to="/"><ArrowLeft size={16}/> Back to home</Link></div></main>;
}
