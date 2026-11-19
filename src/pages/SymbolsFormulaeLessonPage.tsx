import { Calculator } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getSymbolsFormulaeLesson } from '../data/symbolsFormulaeLessons';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function SymbolsFormulaeLessonPage({ lessonId }: Props) {
  const lesson = getSymbolsFormulaeLesson(lessonId);
  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="05"
      unitTitle="Symbols, Formulae and Equations"
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
      sidebarHelpText="Write down what each symbol, subscript, coefficient and quantity represents. For numerical questions, show every stage of the calculation and keep units visible."
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
      artwork={<Calculator size={42} strokeWidth={1.5} />}
      heroClassName="unit-five-lesson-hero"
      artworkClassName="unit-five-hero-art"
    />
  );
}
