import { Atom } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getHydrocarbonsLesson } from '../data/hydrocarbonsLessons';
import './unit-eleven-lessons.css';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function HydrocarbonsLessonPage({ lessonId }: Props) {
  const lesson = getHydrocarbonsLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="11"
      unitTitle="Hydrocarbons"
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
      sidebarHelpText="Read the structure before naming or classifying a hydrocarbon. For equations, identify the reaction type, explain each formula and count every atom on both sides."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Atom size={42} strokeWidth={1.5} />}
      heroClassName="u11-lesson-hero"
      artworkClassName="u11-hero-art"
      pageClassName="u11-curriculum-lesson-page"
    />
  );
}
