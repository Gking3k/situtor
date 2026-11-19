import UnitOneLessonLayout from '../components/UnitOneLessonLayout';

export default function ScientificMethodPage() {
  return (
    <UnitOneLessonLayout
      lessonNumber="04"
      lessonTitle="The scientific method"
      titleLead="How scientists"
      titleAccent="investigate questions."
      summary="Scientific knowledge grows when people ask clear questions, test explanations carefully, examine evidence and share what they find. Learn how to plan a fair investigation."
      duration="25–30 min"
      learningObjectives={[
        'Explain why scientists carry out investigations and describe the main stages of a scientific method.',
        'Distinguish an observation, research question, hypothesis, prediction and conclusion.',
        'Identify independent, dependent and controlled variables in a simple experiment.',
        'Describe how to collect, repeat, organise and interpret data.',
        'Explain why scientific conclusions depend on evidence and can be revised.',
      ]}
      sections={[
        {
          id: 'investigation-and-evidence', label: 'Investigation and evidence', kicker: 'ASKING QUESTIONS', title: 'What is a scientific investigation?',
          content: <>
            <p>A scientific investigation is a careful way of answering a question about the natural world. Scientists use observations, measurements, experiments, comparisons and existing evidence to develop and test explanations.</p>
            <p>There is no single rigid sequence that every scientist must follow. The steps below are a useful school-level guide. In real research, scientists may return to earlier steps when new information or unexpected results appear.</p>
            <div className="lesson-insight lesson-insight--blue"><span>?</span><div><strong>Start with curiosity</strong><p>“Why does this happen?” becomes a useful scientific question when it is clear enough to investigate and collect evidence about.</p></div></div>
          </>,
        },
        {
          id: 'steps-of-scientific-method', label: 'Steps of the method', kicker: 'A PRACTICAL SEQUENCE', title: 'The main stages of a scientific method',
          content: <>
            <div className="u1-method-steps">
              <article><b>01</b><div><h3>Make an observation</h3><p>Notice something and describe it carefully. Example: sugar appears to dissolve faster in warm tea than in cold water.</p></div></article>
              <article><b>02</b><div><h3>Ask a question</h3><p>Turn the observation into a focused question. Example: does water temperature affect the time sugar takes to dissolve?</p></div></article>
              <article><b>03</b><div><h3>Research what is known</h3><p>Read reliable information and identify what is already known. This helps refine the question and plan a suitable test.</p></div></article>
              <article><b>04</b><div><h3>Form a hypothesis</h3><p>Suggest a testable explanation. A hypothesis must be specific enough for evidence to support it or show that it needs changing.</p></div></article>
              <article><b>05</b><div><h3>Make a prediction</h3><p>State what you expect to observe if the hypothesis is correct, often using an “if … then …” sentence.</p></div></article>
              <article><b>06</b><div><h3>Plan and carry out a fair test</h3><p>Choose a safe method, identify variables, keep appropriate conditions the same and collect measurements accurately.</p></div></article>
              <article><b>07</b><div><h3>Record and analyse data</h3><p>Organise observations in a table or graph. Look for patterns, differences, unusual results and possible errors.</p></div></article>
              <article><b>08</b><div><h3>Draw a conclusion and communicate</h3><p>Use the evidence to explain whether the results support the hypothesis. Share the method and results so others can assess or repeat the work.</p></div></article>
            </div>
          </>,
        },
        {
          id: 'hypothesis-and-prediction', label: 'Hypothesis and prediction', kicker: 'A TESTABLE EXPLANATION', title: 'What is the difference?',
          content: <>
            <div className="u1-compare-grid">
              <article><span className="u1-card-tag">HYPOTHESIS</span><h3>A possible explanation</h3><p>“Increasing the temperature of water makes sugar dissolve faster because the water particles move more rapidly and interact with the sugar more often.”</p><small>It proposes why a relationship may occur.</small></article>
              <article><span className="u1-card-tag">PREDICTION</span><h3>An expected result</h3><p>“If equal amounts of sugar are added to equal volumes of water at different temperatures, the warmer water will dissolve the sugar in less time.”</p><small>It states what should happen in the test if the hypothesis is supported.</small></article>
            </div>
            <p>A hypothesis is not a random guess. It should be based on observations or prior knowledge and should be capable of being tested. A result that does not support a hypothesis is still useful evidence.</p>
          </>,
        },
        {
          id: 'variables-and-fair-tests', label: 'Variables and fair tests', kicker: 'MAKE THE TEST FAIR', title: 'What are experimental variables?',
          content: <>
            <p>A <strong>variable</strong> is a factor that can change in an investigation. In a simple fair test, scientists deliberately change one main factor, measure the result and keep other relevant factors the same.</p>
            <div className="u1-variable-grid">
              <article><span>CHANGE</span><h3>Independent variable</h3><p>The factor deliberately changed by the investigator.</p><strong>Example: water temperature.</strong></article>
              <article><span>MEASURE</span><h3>Dependent variable</h3><p>The factor measured or observed to see how it responds.</p><strong>Example: time taken for sugar to dissolve.</strong></article>
              <article><span>KEEP THE SAME</span><h3>Controlled variables</h3><p>Other relevant factors kept constant for a fair comparison.</p><strong>Example: water volume, sugar mass, stirring method.</strong></article>
            </div>
            <div className="lesson-insight lesson-insight--yellow"><span>!</span><div><strong>Why control variables?</strong><p>If the amount of sugar and water volume also change, it becomes difficult to know whether the measured difference was caused by water temperature.</p></div></div>
          </>,
        },
        {
          id: 'worked-investigation', label: 'Worked investigation', kicker: 'PUT THE STEPS TOGETHER', title: 'Example: does temperature affect dissolving time?',
          content: <>
            <p>Imagine a teacher supervising a class investigation into how water temperature affects the time taken for a fixed amount of sugar to dissolve. This is an example of a physical process called <strong>dissolving</strong>; the sugar does not become a new substance simply because it dissolves.</p>
            <div className="u1-investigation-card">
              <div className="u1-investigation-card__heading"><span>QUESTION</span><strong>Does warmer water dissolve the same mass of sugar faster?</strong></div>
              <div className="u1-investigation-card__grid">
                <div><small>HYPOTHESIS</small><p>Warmer water will dissolve the sugar in less time.</p></div>
                <div><small>INDEPENDENT VARIABLE</small><p>Water temperature.</p></div>
                <div><small>DEPENDENT VARIABLE</small><p>Time taken for the sugar to dissolve.</p></div>
                <div><small>CONTROLLED VARIABLES</small><p>Water volume, sugar mass and grain size, container, and stirring method.</p></div>
              </div>
              <div className="u1-investigation-card__steps"><strong>Plan</strong><ol><li>With the teacher’s approval, prepare equal volumes of water at measured temperatures.</li><li>Add the same mass and type of sugar to each sample.</li><li>Use the same stirring procedure and start timing consistently.</li><li>Record how long each sample takes to dissolve.</li><li>Repeat each condition and compare the results.</li></ol></div>
              <p className="u1-investigation-note">Safety: use teacher-approved warm water and suitable glassware. Do not use boiling water or handle heating equipment without supervision. Follow your school’s laboratory rules.</p>
            </div>
            <p>Before the experiment, prepare a results table with columns for water temperature, trial 1, trial 2, trial 3 and average time. Record actual observations; do not invent or change results to fit the prediction.</p>
          </>,
        },
        {
          id: 'reliable-data-and-conclusions', label: 'Reliable data and conclusions', kicker: 'LET THE EVIDENCE SPEAK', title: 'How do scientists judge results?',
          content: <>
            <p>Careful measurements make results more useful. Scientists should use suitable equipment, read scales correctly, record units, repeat measurements when practical and note anything unusual that may have affected the test.</p>
            <div className="u1-card-grid u1-card-grid--three">
              <article className="u1-info-card u1-info-card--mint"><h3>Accuracy</h3><p>How close a measurement is to the accepted or true value.</p></article>
              <article className="u1-info-card u1-info-card--blue"><h3>Precision</h3><p>How close repeated measurements are to one another.</p></article>
              <article className="u1-info-card u1-info-card--yellow"><h3>Reliability</h3><p>How consistently a method produces similar results when repeated appropriately.</p></article>
            </div>
            <p>A conclusion should answer the original question and refer to the evidence. It may say that the results support a hypothesis, do not support it, or are inconclusive. One experiment does not automatically prove a hypothesis forever. Other scientists may repeat the work, test different conditions or develop a better explanation.</p>
          </>,
        },
      ]}
      recap={[
        'A scientific investigation uses observations and evidence to answer questions about the natural world.',
        'A hypothesis is a testable explanation; a prediction states an expected result if the explanation is supported.',
        'The independent variable is changed, the dependent variable is measured and controlled variables are kept the same where possible.',
        'A fair test changes one main factor while keeping other relevant conditions constant.',
        'Scientists record and analyse data, repeat tests where appropriate and draw conclusions based on evidence.',
        'Scientific explanations can be refined when new evidence becomes available.',
      ]}
      quizPath="/lessons/scientific-method/quiz"
      quizDescription="Try ten questions on scientific investigations, hypotheses, predictions, variables and evidence."
      sidebarTip="When you read an experiment, practise identifying what is changed, what is measured and what must stay the same."
      sources={[
        { label: 'Federal Ministry of Education — SS1 Introduction to Chemistry', url: 'https://inspire.education.gov.ng/lessons/8863/preview' },
        { label: 'Khan Academy — Controlled Experiments', url: 'https://www.khanacademy.org/science/biology/intro-to-biology/science-of-biology/a/experiments-and-observations' },
        { label: 'OpenStax — Scientific Method and Experimental Variables (teacher lab manual)', url: 'https://assets.openstax.org/oscms-prodcms/media/documents/TEACHER_-_AP_Biology_Lab_Manual_Full_JD76Cv7.pdf' },
      ]}
    />
  );
}
