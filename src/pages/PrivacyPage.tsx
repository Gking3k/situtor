import { ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function PrivacyPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero inner-hero--compact">
        <div className="container inner-hero__content">
          <span className="eyebrow"><span className="eyebrow__mark" />YOUR PRIVACY MATTERS</span>
          <h1>Clear about what<br /><span>we collect and why.</span></h1>
          <p>This is a pre-launch privacy overview, not the final legal privacy notice. A complete policy will be published before student accounts, analytics or feedback features are opened to the public.</p>
        </div>
      </section>
      <section className="section-space inner-content-section">
        <div className="container privacy-content">
          <div className="privacy-callout">
            <ShieldCheck size={22} />
            <p><strong>Development status:</strong> Student registration is being developed and tested. Do not submit personal information through a public deployment until Si Tutor announces that account registration is officially available.</p>
          </div>
          <SectionHeading eyebrow="PLANNED PRIVACY APPROACH" title="Collect only what is useful." />
          <h2>Student accounts</h2>
          <p>The student-account system is being tested locally. Registration collects a student's full name and email address, together with a password. Passwords are hashed by the server before storage; the original password is not stored in the student profile table. Email verification and sign-in have been implemented for development testing. Password recovery has been implemented for local development. The full student dashboard, the final retention and deletion rules, and production email delivery still need to be completed and reviewed before public launch.</p>
          <h2>Website analytics</h2>
          <p>Si Tutor does not currently connect an analytics provider. Any analytics will be configured and disclosed before public use.</p>
          <h2>Feedback</h2>
          <p>A feedback process is planned. Before enabling it, we will explain what information it collects, how messages are handled and how users can contact the platform.</p>
          <h2>Questions</h2>
          <p>This page is a pre-launch overview and is not a substitute for the final privacy notice. The complete policy, including retention, deletion, contact and applicable legal information, must be reviewed and published before public launch.</p>
        </div>
      </section>
    </main>
  );
}
