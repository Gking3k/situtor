import { FlaskConical } from 'lucide-react';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getAcidsBasesSaltsLesson } from '../data/acidsBasesSaltsLessons';
import './unit-seven-lessons.css';
import './unit-eight-lessons.css';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };
export default function AcidsBasesSaltsLessonPage({ lessonId }: Props) {
  const lesson = getAcidsBasesSaltsLesson(lessonId);
  if (!lesson) return <NotFoundPage />;
  return <CurriculumLessonLayout
    unitNumber="08" unitTitle="Acids, Bases and Salts"
    lessonNumber={lesson.lessonNumber} lessonTitle={lesson.title}
    titleLead={lesson.titleLead} titleAccent={lesson.titleAccent}
    summary={lesson.summary} duration={lesson.duration}
    learningObjectives={lesson.learningObjectives} sections={lesson.sections}
    recap={lesson.recap} quizPath={lesson.quizPath} quizDescription={lesson.quizDescription}
    quizQuestionCount={12} sidebarTip={lesson.sidebarTip}
    sidebarHelpText="Break every chemical equation into reactants, products, formulae, coefficients and state symbols. For calculations, write the known values, choose the relationship, substitute one step at a time and include units."
    sources={lesson.sources} nextLesson={lesson.nextLesson}
    artwork={<FlaskConical size={42} strokeWidth={1.5} />}
    heroClassName="u8-lesson-hero" artworkClassName="u8-hero-art" pageClassName="u8-curriculum-lesson-page"
  />;
}
