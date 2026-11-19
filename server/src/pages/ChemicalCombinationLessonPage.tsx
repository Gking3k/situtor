import { Atom } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getChemicalCombinationLesson } from '../data/chemicalCombinationLessons';
import './unit-six-lessons.css';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function ChemicalCombinationLessonPage({ lessonId }: Props) {
  const lesson = getChemicalCombinationLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="06"
      unitTitle="Chemical Combination"
      lessonNumber={lesson.lessonNumber}
      lessonTitle={lesson.title}
      titleLead={lesson.titleLead}
      titleAccent={lesson.titleAccent}
      summary={lesson.summary}
      duration={lesson.duration}
      learningObjectives={lesson.learningObjectives}
      sections={lesson.sections}
      recap={lesson.recap}
      quizPath={lesson.quizPath}
      quizDescription={lesson.quizDescription}
      quizQuestionCount={12}
      sidebarTip={lesson.sidebarTip}
      sidebarHelpText="Work from the particles: identify the element, count its outer electrons, and show each transfer, shared pair or particle movement clearly."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Atom size={42} strokeWidth={1.5} />}
      heroClassName="unit-six-lesson-hero"
      artworkClassName="unit-six-hero-art"
    />
  );
}
