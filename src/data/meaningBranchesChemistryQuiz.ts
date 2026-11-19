import type { QuizQuestion } from './atomsIonsMoleculesQuiz';

/** Ten original SS1 questions for Unit 01, Lesson 01. */
export const meaningBranchesChemistryQuiz: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Meaning of chemistry',
    prompt: 'Which statement best describes chemistry?',
    choices: [
      'The study of planets and stars only',
      'The study of the composition, structure, properties and changes of matter',
      'The study of living things only',
      'The study of forces and motion only',
    ],
    answerIndex: 1,
    explanation:
      'Chemistry investigates what matter is made of, how its parts are arranged, the properties it has, and the changes it can undergo.',
  },
  {
    id: 2,
    topic: 'Matter',
    prompt: 'Which of the following is an example of matter?',
    choices: ['A thought', 'A shadow', 'Water in a bottle', 'The number seven'],
    answerIndex: 2,
    explanation:
      'Water has mass and occupies space, so it is matter. Thoughts, shadows and numbers are not material substances.',
  },
  {
    id: 3,
    topic: 'Branches of chemistry',
    prompt: 'Which branch identifies the substances present in a sample and measures how much is present?',
    choices: ['Analytical chemistry', 'Organic chemistry', 'Biochemistry', 'Physical chemistry'],
    answerIndex: 0,
    explanation:
      'Analytical chemistry identifies the components of a sample and determines their amounts. It is useful in testing water, food and medicines.',
  },
  {
    id: 4,
    topic: 'Branches of chemistry',
    prompt: 'The study of most carbon-containing compounds is mainly the concern of…',
    choices: ['Inorganic chemistry', 'Organic chemistry', 'Analytical chemistry', 'Nuclear physics'],
    answerIndex: 1,
    explanation:
      'Organic chemistry studies the structures, properties and reactions of carbon-containing compounds, including many fuels, plastics and medicines.',
  },
  {
    id: 5,
    topic: 'Branches of chemistry',
    prompt: 'Which branch focuses on chemical processes in living organisms?',
    choices: ['Physical chemistry', 'Inorganic chemistry', 'Biochemistry', 'Analytical chemistry'],
    answerIndex: 2,
    explanation:
      'Biochemistry studies substances and chemical processes in living things, such as digestion, metabolism and the action of enzymes.',
  },
  {
    id: 6,
    topic: 'Branches of chemistry',
    prompt: 'A scientist investigating the energy changes and speed of a chemical reaction is working mainly in…',
    choices: ['Physical chemistry', 'Organic chemistry', 'Biochemistry', 'Inorganic chemistry'],
    answerIndex: 0,
    explanation:
      'Physical chemistry uses ideas about energy, particles and rates to explain how chemical systems behave and how reactions occur.',
  },
  {
    id: 7,
    topic: 'Branches of chemistry',
    prompt: 'Which subject is most closely associated with the study of metals, minerals and many salts?',
    choices: ['Organic chemistry', 'Inorganic chemistry', 'Biochemistry', 'Analytical chemistry'],
    answerIndex: 1,
    explanation:
      'Inorganic chemistry studies metals, minerals, salts and many other substances that are not classified as organic compounds.',
  },
  {
    id: 8,
    topic: 'Importance of chemistry',
    prompt: 'How can chemistry help agriculture?',
    choices: [
      'By replacing the need to understand soil',
      'By helping analyse soil and develop suitable fertilisers',
      'By making every pesticide harmless',
      'By ensuring crops never experience disease',
    ],
    answerIndex: 1,
    explanation:
      'Chemical analysis can help determine soil composition, while chemistry supports the development and responsible use of fertilisers and crop-protection products.',
  },
  {
    id: 9,
    topic: 'Importance of chemistry',
    prompt: 'Which example shows chemistry contributing to public health?',
    choices: [
      'Testing the quality of drinking water',
      'Predicting the result of a football match',
      'Drawing a map of a mountain',
      'Measuring the distance to the Moon',
    ],
    answerIndex: 0,
    explanation:
      'Chemical testing helps identify substances in water. Chemistry also contributes to making and checking medicines and medical materials.',
  },
  {
    id: 10,
    topic: 'Chemistry in everyday life',
    prompt: 'Why is chemistry often called a central science?',
    choices: [
      'It replaces all other sciences',
      'It is concerned only with laboratory experiments',
      'It connects with many fields, including biology, medicine, agriculture and materials science',
      'It studies only substances made in factories',
    ],
    answerIndex: 2,
    explanation:
      'Chemistry connects with many other fields because living things, medicines, food, materials, energy systems and the environment all involve matter and its changes.',
  },
];
