import { Droplets } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getWaterLesson } from '../data/waterLessons';
import './unit-seven-lessons.css';
import './unit-nine-lessons.css';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function WaterLessonPage({ lessonId }: Props) {
  const lesson = getWaterLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="09"
      unitTitle="Water"
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
      sidebarHelpText="Start with the everyday meaning, then learn the scientific term. For each process, follow the stages in order and ask what each stage removes or changes. For every equation, explain the formulae, coefficients and state symbols."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Droplets size={42} strokeWidth={1.5} />}
      heroClassName="u7-lesson-hero u9-lesson-hero"
      artworkClassName="u7-hero-art u9-hero-art"
      pageClassName="u9-curriculum-lesson-page"
    />
  );
}
