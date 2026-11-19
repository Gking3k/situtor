import { Gauge } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getGasLawsLesson } from '../data/gasLawsLessons';
import './unit-seven-lessons.css';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function GasLawsLessonPage({ lessonId }: Props) {
  const lesson = getGasLawsLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="07"
      unitTitle="Gas Laws"
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
      sidebarHelpText="For every gas-law problem, identify what is constant, convert temperature to kelvin, keep units consistent, and show each rearrangement step."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Gauge size={42} strokeWidth={1.5} />}
      heroClassName="u7-lesson-hero"
      artworkClassName="u7-hero-art"
    />
  );
}
