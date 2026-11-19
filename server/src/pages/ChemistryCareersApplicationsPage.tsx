import UnitOneLessonLayout from '../components/UnitOneLessonLayout';

export default function ChemistryCareersApplicationsPage() {
  return (
    <UnitOneLessonLayout
      lessonNumber="02"
      lessonTitle="Careers & applications"
      titleLead="Chemistry in"
      titleAccent="careers and life."
      summary="Chemistry is more than a school subject. It creates ways to understand materials, solve practical problems and build careers that serve people and communities."
      duration="20–25 min"
      learningObjectives={[
        'Identify careers that use chemistry and describe what people in those roles do.',
        'Explain applications of chemistry in health, agriculture, food, water, energy and industry.',
        'Connect chemistry-related work to examples in Nigeria.',
        'Recognise that different careers require different education, training and professional qualifications.',
      ]}
      sections={[
        {
          id: 'careers-that-use-chemistry', label: 'Careers that use chemistry', kicker: 'MORE THAN ONE CAREER PATH', title: 'Who works with chemistry?',
          content: <>
            <p>Chemistry opens several career pathways. Some professionals study substances in laboratories; others design manufacturing processes, check products, teach, protect the environment or use chemical knowledge in healthcare and agriculture.</p>
            <div className="u1-card-grid">
              <article className="u1-info-card u1-info-card--mint"><span className="u1-card-tag">RESEARCH & TESTING</span><h3>Chemist / research scientist</h3><p>Studies substances, investigates reactions, develops materials and answers scientific questions through experiments and analysis.</p></article>
              <article className="u1-info-card u1-info-card--blue"><span className="u1-card-tag">LABORATORY ANALYSIS</span><h3>Analytical chemist</h3><p>Identifies what is present in a sample and measures how much is present—for example, in water, food, medicines or industrial materials.</p></article>
              <article className="u1-info-card u1-info-card--yellow"><span className="u1-card-tag">PROCESS & INDUSTRY</span><h3>Chemical engineer</h3><p>Applies chemistry, physics and mathematics to design and improve processes that make products safely and efficiently on a large scale.</p></article>
              <article className="u1-info-card u1-info-card--lavender"><span className="u1-card-tag">MEDICINES</span><h3>Pharmacist / pharmaceutical scientist</h3><p>Pharmacists are trained medicine professionals who support safe medicine use. Pharmaceutical scientists research, formulate, test and improve medicines.</p></article>
              <article className="u1-info-card u1-info-card--peach"><span className="u1-card-tag">FOOD & AGRICULTURE</span><h3>Food or agricultural scientist</h3><p>Studies food composition, nutrition, processing and quality, or investigates soils, nutrients and agricultural materials.</p></article>
              <article className="u1-info-card u1-info-card--mint"><span className="u1-card-tag">ENVIRONMENT</span><h3>Environmental chemist</h3><p>Measures and studies chemicals in air, water and soil, assesses possible effects and helps develop ways to reduce contamination.</p></article>
              <article className="u1-info-card u1-info-card--blue"><span className="u1-card-tag">EVIDENCE</span><h3>Forensic scientist</h3><p>Uses laboratory methods to examine evidence such as unknown materials, residues, fibres or substances collected during an investigation.</p></article>
              <article className="u1-info-card u1-info-card--yellow"><span className="u1-card-tag">EDUCATION</span><h3>Chemistry teacher / lecturer</h3><p>Helps learners understand chemistry, carries out or supervises practical work and may contribute to research and curriculum development.</p></article>
              <article className="u1-info-card u1-info-card--lavender"><span className="u1-card-tag">HEALTH TESTING</span><h3>Medical laboratory scientist</h3><p>Uses laboratory science to analyse patient samples and produce results that help healthcare teams assess health conditions. This role requires its own professional training.</p></article>
            </div>
            <div className="lesson-insight lesson-insight--blue"><span>i</span><div><strong>Important career distinction</strong><p>A chemist, chemical engineer, pharmacist and medical laboratory scientist do different jobs and follow different training routes. Studying chemistry is useful, but it does not by itself qualify someone to practise a regulated profession.</p></div></div>
          </>,
        },
        {
          id: 'where-chemistry-professionals-work', label: 'Workplaces', kicker: 'WHERE THE WORK HAPPENS', title: 'Where can chemistry-related professionals work?',
          content: <>
            <p>Chemistry-related professionals work in many settings. A person may work indoors in a laboratory, outdoors collecting samples, in a factory monitoring production, in a school, or in an office reviewing scientific information.</p>
            <div className="u1-workplace-list">
              <div><strong>Schools and universities</strong><p>Teaching, laboratory demonstrations and scientific research.</p></div>
              <div><strong>Hospitals and diagnostic laboratories</strong><p>Testing samples, checking materials and supporting health services.</p></div>
              <div><strong>Factories and production sites</strong><p>Product development, process monitoring, quality control and worker safety.</p></div>
              <div><strong>Government and regulatory agencies</strong><p>Monitoring standards, food and water quality, pollution and compliance.</p></div>
              <div><strong>Farms and food companies</strong><p>Soil analysis, crop inputs, food processing, packaging and quality assurance.</p></div>
              <div><strong>Research organisations and consultancies</strong><p>Investigating new materials, solving technical problems and advising organisations.</p></div>
            </div>
          </>,
        },
        {
          id: 'applications-of-chemistry', label: 'Applications of chemistry', kicker: 'CHEMISTRY AT WORK', title: 'How is chemistry applied?',
          content: <>
            <p>An application is a practical use of knowledge. Chemistry helps people understand and improve materials and processes used every day.</p>
            <div className="u1-application-grid">
              <article><span>01</span><h3>Health and medicine</h3><p>Developing and testing medicines, analysing body samples, making medical materials and checking product quality.</p></article>
              <article><span>02</span><h3>Agriculture</h3><p>Testing soil, studying plant nutrients, developing fertilisers and using crop-protection chemicals responsibly.</p></article>
              <article><span>03</span><h3>Food and nutrition</h3><p>Understanding food composition, fermentation, preservation, packaging, flavour and contamination.</p></article>
              <article><span>04</span><h3>Water and sanitation</h3><p>Testing water quality, monitoring contaminants and supporting suitable water-treatment processes.</p></article>
              <article><span>05</span><h3>Energy and transport</h3><p>Making and improving fuels, lubricants, batteries and materials used in energy technologies.</p></article>
              <article><span>06</span><h3>Construction and materials</h3><p>Producing and testing cement, glass, ceramics, paints, metals, plastics and textiles.</p></article>
              <article><span>07</span><h3>Environment</h3><p>Measuring pollution, studying how substances move through the environment and developing cleaner processes.</p></article>
              <article><span>08</span><h3>Household products</h3><p>Formulating soaps, detergents, disinfectants, cosmetics and cleaning products, with attention to safe use.</p></article>
            </div>
          </>,
        },
        {
          id: 'chemistry-in-nigeria', label: 'Chemistry in Nigeria', kicker: 'LOCAL EXAMPLES', title: 'Where can you see chemistry in Nigeria?',
          content: <>
            <p>Chemistry is relevant to many parts of Nigeria’s economy and public life. The examples below show how chemical knowledge supports useful products and services.</p>
            <div className="u1-example-panel">
              <div><strong>Food processing</strong><p>Understanding fermentation, acidity, food composition and preservation in products such as yoghurt, garri, fruit drinks and packaged foods.</p></div>
              <div><strong>Agriculture and fertiliser</strong><p>Testing soil and understanding nutrients to help farmers make informed decisions about crop production.</p></div>
              <div><strong>Water treatment</strong><p>Checking water properties and monitoring treatment so that water supplied for homes and communities meets required quality standards.</p></div>
              <div><strong>Petroleum and petrochemicals</strong><p>Testing crude oil and petroleum products, refining feedstocks and producing useful materials and fuels.</p></div>
              <div><strong>Cement and construction materials</strong><p>Controlling raw-material composition and product quality during the manufacture of cement, ceramics and other building materials.</p></div>
              <div><strong>Pharmaceutical and consumer goods</strong><p>Developing and testing medicines, soaps, detergents, paints and personal-care products.</p></div>
            </div>
            <div className="lesson-insight lesson-insight--mint"><span>✦</span><div><strong>Think locally</strong><p>Look around your community: a water-treatment plant, food-processing business, pharmacy, farm-input supplier or building-material factory may all use chemistry in different ways.</p></div></div>
          </>,
        },
        {
          id: 'skills-and-preparation', label: 'Skills and preparation', kicker: 'BUILDING A PATH', title: 'What skills are useful?',
          content: <>
            <p>People who work with chemistry need more than the ability to memorise facts. Useful skills include careful observation, numeracy, accurate measurement, logical thinking, problem-solving, clear communication, teamwork and respect for safety and evidence.</p>
            <div className="u1-skill-chips"><span>Observation</span><span>Mathematics</span><span>Measurement</span><span>Problem-solving</span><span>Communication</span><span>Teamwork</span><span>Digital skills</span><span>Ethical practice</span></div>
            <p>Different careers require different qualifications. Some laboratory and technical roles begin with vocational or technical training; professional roles such as pharmacist, chemical engineer or medical laboratory scientist require approved courses, supervised training and, where applicable, professional registration.</p>
          </>,
        },
      ]}
      recap={[
        'Chemistry supports many careers, including research, analysis, engineering, healthcare, food science, agriculture, environmental work and education.',
        'Chemistry-related professionals work in laboratories, hospitals, industries, schools, farms, government agencies and research organisations.',
        'Applications include medicines, food, fertilisers, water treatment, energy, building materials and environmental monitoring.',
        'Chemistry is relevant to Nigerian sectors such as food processing, agriculture, petroleum, water treatment, cement and manufacturing.',
        'Different jobs require different qualifications; a chemistry background alone does not qualify someone for every profession.',
      ]}
      quizPath="/lessons/chemistry-careers-and-applications/quiz"
      quizDescription="Try ten questions on chemistry careers, workplaces and practical applications. Your score and explanations appear after submission."
      sidebarTip="When you read about a career, identify the problem the person solves, the tools they use and the training the role requires."
      sources={[
        { label: 'Federal Ministry of Education — SS1 Introduction to Chemistry', url: 'https://inspire.education.gov.ng/lessons/8863/preview' },
        { label: 'American Chemical Society — Careers and the Chemical Sciences', url: 'https://www.acs.org/careers/chemical-sciences.html' },
        { label: 'American Chemical Society — Fields of Specialization', url: 'https://www.acs.org/careers/chemical-sciences/fields.html' },
        { label: 'American Chemical Society — Analytical Chemistry', url: 'https://www.acs.org/careers/chemical-sciences/areas/analytical-chemistry.html' },
      ]}
      nextLesson={{ title: 'Chemical hazards, safety and environmental effects', path: '/lessons/chemical-effects-and-safety' }}
    />
  );
}
