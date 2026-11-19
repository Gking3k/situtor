import { Atom } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getCarbonCompoundsLesson } from '../data/carbonCompoundsLessons';
import './unit-seven-lessons.css';
import './unit-ten-lessons.css';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function CarbonCompoundsLessonPage({ lessonId }: Props) {
  const lesson = getCarbonCompoundsLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="10"
      unitTitle="Carbon and Its Compounds"
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
      sidebarHelpText="Build each idea from the structure of the atoms. For chemical equations, identify every reactant and product, explain the symbols and state labels, then count atoms on both sides. For industrial processes, follow the steps in order and distinguish separation from chemical change."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Atom size={42} strokeWidth={1.5} />}
      heroClassName="u7-lesson-hero u10-lesson-hero"
      artworkClassName="u7-hero-art u10-hero-art"
      pageClassName="u10-curriculum-lesson-page"
    />
  );
}
