import { Filter } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getSeparationTechniquesLesson } from '../data/separationTechniquesLessons';
import NotFoundPage from './NotFoundPage';

export default function SeparationTechniquesLessonPage({ lessonId }: { lessonId: string }) {
  const lesson = getSeparationTechniquesLesson(lessonId);

  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="03"
      unitTitle="Standard Separation Techniques for Mixtures"
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
      sidebarTip={lesson.sidebarTip}
      sidebarHelpText="Choose a separation method by identifying which physical property differs between the components."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Filter size={42} strokeWidth={1.5} />}
      heroClassName="unit-three-lesson-hero"
      artworkClassName="unit-three-hero-art"
    />
  );
}
