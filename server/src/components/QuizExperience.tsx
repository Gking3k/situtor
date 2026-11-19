import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  XCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { QuizQuestion } from '../data/atomsIonsMoleculesQuiz';
import '../pages/quiz.css';

const optionLetters = ['A', 'B', 'C', 'D'];

type QuizExperienceProps = {
  questions: QuizQuestion[];
  lessonPath: string;
  lessonTitle: string;
  description: string;
  sidebarTip: string;
  artLabel?: string;
  artCaption?: string;
};

function getResultMessage(score: number, total: number) {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  if (percentage >= 90) {
    return { title: 'Excellent work!', detail: 'You have a strong grasp of the key ideas in this lesson. Keep that understanding growing.' };
  }
  if (percentage >= 70) {
    return { title: 'Good progress!', detail: 'You understand most of the ideas. Review the explanations below to strengthen the details.' };
  }
  if (percentage >= 50) {
    return { title: 'You are getting there.', detail: 'A few ideas may need another look. Use the answer explanations as a guide, then try again.' };
  }
  return { title: 'This is a starting point.', detail: 'Revisit the lesson at your own pace. Understanding grows with practice, and you can retake this quiz whenever you are ready.' };
}

export default function QuizExperience({ questions, lessonPath, lessonTitle, description, sidebarTip, artLabel, artCaption }: QuizExperienceProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [incompleteMessage, setIncompleteMessage] = useState('');

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const score = questions.reduce((total, question) => total + (answers[question.id] === question.answerIndex ? 1 : 0), 0);
  const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;
  const resultMessage = getResultMessage(score, totalQuestions);

  const handleAnswer = (questionId: number, choiceIndex: number) => {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionId]: choiceIndex }));
    setIncompleteMessage('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (answeredCount < totalQuestions) {
      const unanswered = questions.find((question) => answers[question.id] === undefined);
      setIncompleteMessage(`You have answered ${answeredCount} of ${totalQuestions} questions. Complete the remaining ${totalQuestions - answeredCount} before submitting.`);
      if (unanswered) {
        document.getElementById(`quiz-question-${unanswered.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    setSubmitted(true);
    setIncompleteMessage('');
    requestAnimationFrame(() => document.getElementById('quiz-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setIncompleteMessage('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="quiz-page">
      <section className="quiz-hero">
        <div className="container quiz-hero__inner">
          <Link to={lessonPath} className="quiz-back-link"><ArrowLeft size={15} /> Back to lesson</Link>
          <div className="quiz-hero__content">
            <div>
              <span className="quiz-eyebrow"><Sparkles size={14} /> YOUR KNOWLEDGE CHECK</span>
              <h1>Put your learning <span>to the test.</span></h1>
              <p>{description}</p>
              <div className="quiz-hero__meta">
                <span><BookOpen size={15} /> SS1 Chemistry</span>
                <span><Target size={15} /> {totalQuestions} questions</span>
                <span><CircleHelp size={15} /> Explanations after submission</span>
              </div>
            </div>
            <div className="quiz-hero-art" aria-hidden="true">
              <div className="quiz-hero-art__orbit quiz-hero-art__orbit--one" />
              <div className="quiz-hero-art__orbit quiz-hero-art__orbit--two" />
              <div className="quiz-hero-art__core"><span /><span /><span /></div>
              <div className="quiz-hero-art__note">{artLabel ?? (lessonTitle === 'Dalton’s Atomic Theory' ? 'A + B' : 'Na⁺')} <small>{artCaption ?? (lessonTitle === 'Dalton’s Atomic Theory' ? 'atomic model' : '+1 charge')}</small></div>
              <div className="quiz-hero-art__spark">✦</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container quiz-layout">
        <div className="quiz-main-column">
          {submitted ? (
            <section className="quiz-results" id="quiz-results" aria-live="polite">
              <div className="quiz-results__icon"><Trophy size={25} /></div>
              <span className="quiz-section-kicker">YOUR QUIZ RESULTS</span>
              <h2>{resultMessage.title}</h2>
              <p>{resultMessage.detail}</p>
              <div className="quiz-score-panel">
                <div className="quiz-score-panel__score"><strong>{score}</strong><span>out of {totalQuestions}</span></div>
                <div className="quiz-score-panel__copy">
                  <strong>{percentage}%</strong><span>Overall score</span>
                  <div className="quiz-score-panel__track"><span style={{ width: `${percentage}%` }} /></div>
                </div>
              </div>
              <div className="quiz-results__actions">
                <button type="button" className="button button--primary" onClick={handleRetry}><RotateCcw size={16} /> Try again</button>
                <Link to={lessonPath} className="button button--outline"><BookOpen size={16} /> Review the lesson</Link>
              </div>
            </section>
          ) : (
            <div className="quiz-instructions">
              <div><span className="quiz-section-kicker">BEFORE YOU BEGIN</span><h2>Choose the best answer for each question.</h2><p>Your score and explanations will appear after you submit. You can change an answer at any time before then.</p></div>
              <span className="quiz-instructions__pill">No timer · No pressure</span>
            </div>
          )}

          {submitted ? (
            <section className="quiz-review" aria-labelledby="quiz-review-title">
              <div className="quiz-review__heading"><div><span className="quiz-section-kicker">LEARN FROM EVERY ANSWER</span><h2 id="quiz-review-title">Answer review</h2></div><span>{totalQuestions} questions reviewed</span></div>
              <div className="quiz-question-list quiz-question-list--review">
                {questions.map((question) => {
                  const selected = answers[question.id];
                  const isCorrect = selected === question.answerIndex;
                  return (
                    <article className={`quiz-question-card quiz-question-card--review ${isCorrect ? 'is-correct' : 'is-incorrect'}`} key={question.id}>
                      <div className="quiz-question-card__top"><span className="quiz-question-number">QUESTION {String(question.id).padStart(2, '0')}</span><span className="quiz-topic-pill">{question.topic}</span></div>
                      <h3>{question.prompt}</h3>
                      <div className="quiz-review-answer">
                        <div className={isCorrect ? 'quiz-review-answer__status is-correct' : 'quiz-review-answer__status is-incorrect'}>
                          {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}{isCorrect ? 'Correct answer' : 'Not quite — review this one'}
                        </div>
                        {!isCorrect && selected !== undefined && <p><strong>Your answer:</strong> {question.choices[selected]}</p>}
                        <p><strong>Correct answer:</strong> {optionLetters[question.answerIndex]}. {question.choices[question.answerIndex]}</p>
                      </div>
                      <div className="quiz-explanation"><span><Sparkles size={15} /> Why?</span><p>{question.explanation}</p></div>
                    </article>
                  );
                })}
              </div>
              <div className="quiz-review__bottom"><Link to={lessonPath} className="text-link"><ArrowLeft size={15} /> Back to the lesson</Link><button type="button" className="button button--primary button--small" onClick={handleRetry}><RotateCcw size={14} /> Retake quiz</button></div>
            </section>
          ) : (
            <form className="quiz-form" onSubmit={handleSubmit}>
              <div className="quiz-question-list">
                {questions.map((question) => (
                  <fieldset
                    className="quiz-question-card"
                    id={`quiz-question-${question.id}`}
                    key={question.id}
                    aria-labelledby={`quiz-question-title-${question.id}`}
                  >
                    <div className="quiz-question-card__header">
                      <div className="quiz-question-card__top">
                        <span className="quiz-question-number">QUESTION {String(question.id).padStart(2, '0')}</span>
                        <span className="quiz-topic-pill">{question.topic}</span>
                      </div>
                      <h3 className="quiz-question-prompt" id={`quiz-question-title-${question.id}`}>{question.prompt}</h3>
                    </div>
                    <div className="quiz-choices">
                      {question.choices.map((choice, choiceIndex) => (
                        <label className={`quiz-choice ${answers[question.id] === choiceIndex ? 'is-selected' : ''}`} key={choice}>
                          <input type="radio" name={`question-${question.id}`} value={choiceIndex} checked={answers[question.id] === choiceIndex} onChange={() => handleAnswer(question.id, choiceIndex)} />
                          <span className="quiz-choice__letter">{optionLetters[choiceIndex]}</span>
                          <span className="quiz-choice__text">{choice}</span>
                          <span className="quiz-choice__indicator" aria-hidden="true" />
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
              {incompleteMessage && <p className="quiz-form-message" role="alert">{incompleteMessage}</p>}
              <div className="quiz-submit-panel">
                <div><strong>Ready to see how you did?</strong><span>Your answers stay on this page and are not saved to an account.</span></div>
                <button type="submit" className="button button--primary">Submit answers <ArrowRight size={16} /></button>
              </div>
            </form>
          )}
        </div>

        <aside className="quiz-progress-sidebar" aria-label="Quiz progress">
          <div className="quiz-progress-card">
            <div className="quiz-progress-card__icon"><Target size={18} /></div>
            <span className="quiz-section-kicker">YOUR PROGRESS</span>
            <strong className="quiz-progress-card__count">{submitted ? totalQuestions : answeredCount}<span> / {totalQuestions}</span></strong>
            <p>{submitted ? 'All questions reviewed.' : 'Questions answered so far.'}</p>
            <div className="quiz-progress-card__track"><span style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} /></div>
            <div className="quiz-progress-card__legend"><span>{submitted ? 'Completed' : 'Answered'}</span><strong>{Math.round((answeredCount / totalQuestions) * 100)}%</strong></div>
          </div>
          <div className="quiz-side-tip"><span><Sparkles size={16} /></span><div><strong>A little reminder</strong><p>{sidebarTip}</p></div></div>
          <Link to={lessonPath} className="quiz-sidebar-link"><ArrowLeft size={14} /> Return to lesson</Link>
        </aside>
      </div>
    </main>
  );
}
