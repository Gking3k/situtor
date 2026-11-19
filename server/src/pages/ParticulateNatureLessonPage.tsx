import { Atom } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getParticulateNatureLesson } from '../data/particulateNatureLessons';
import NotFoundPage from './NotFoundPage';

export default function ParticulateNatureLessonPage({ lessonId }: { lessonId: string }) {
  const lesson = getParticulateNatureLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="04"
      unitTitle="Particulate Nature of Matter"
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
      sidebarHelpText="Build each explanation from the particles: identify what is present, count carefully, and distinguish what changes from what remains the same."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Atom size={42} strokeWidth={1.5} />}
      heroClassName="unit-four-lesson-hero"
      artworkClassName="unit-four-hero-art"
    />
  );
}
