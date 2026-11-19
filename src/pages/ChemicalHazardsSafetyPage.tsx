import UnitOneLessonLayout from '../components/UnitOneLessonLayout';

export default function ChemicalHazardsSafetyPage() {
  return (
    <UnitOneLessonLayout
      lessonNumber="03"
      lessonTitle="Chemical hazards & safety"
      titleLead="Chemicals,"
      titleAccent="safety and our environment."
      summary="Chemicals make many parts of modern life possible, but some can cause harm when people or the environment are exposed in unsafe ways. Learn to recognise hazards and reduce risks."
      duration="25–30 min"
      learningObjectives={[
        'Distinguish a chemical hazard from the risk of harm and identify common routes of exposure.',
        'Describe examples of poisoning, burns, irritation, corrosion and pollution.',
        'Explain harmful effects associated with misuse of drugs and other chemicals.',
        'State important rules for safe chemical handling in a school laboratory and at home.',
        'Suggest ways to reduce chemical pollution and protect the environment.',
      ]}
      sections={[
        {
          id: 'hazard-risk-exposure', label: 'Hazard, risk and exposure', kicker: 'RECOGNISE THE DANGER', title: 'What makes a chemical hazardous?',
          content: <>
            <p>A <strong>chemical hazard</strong> is a property of a substance that can cause harm. <strong>Risk</strong> describes the chance that harm will occur under particular conditions. Risk depends on the substance, how much is involved, how a person is exposed and how long the exposure lasts.</p>
            <div className="u1-compare-grid">
              <article><span className="u1-card-tag">HAZARD</span><h3>What could cause harm?</h3><p>A strong corrosive cleaner can damage skin or eyes. Its ability to cause burns is a hazard.</p></article>
              <article><span className="u1-card-tag">RISK</span><h3>How likely is harm here?</h3><p>The risk changes with concentration, amount, exposure route, time, ventilation and the safety controls used.</p></article>
            </div>
            <h3>How can chemicals enter the body?</h3>
            <div className="u1-exposure-list">
              <div><strong>Inhalation</strong><p>Breathing in gases, vapours, dusts, fumes or mists.</p></div>
              <div><strong>Ingestion</strong><p>Swallowing a substance, often through contaminated hands, food or drink.</p></div>
              <div><strong>Skin or eye contact</strong><p>A substance touches skin or the eyes; some chemicals can irritate, burn or be absorbed.</p></div>
              <div><strong>Injection or puncture</strong><p>A substance enters through a puncture wound, such as an injury involving contaminated sharps.</p></div>
            </div>
            <p>The effect of an exposure can depend on dose, concentration, route and duration. Never assume that a substance is safe just because a small amount looks harmless.</p>
          </>,
        },
        {
          id: 'harmful-effects', label: 'Harmful effects', kicker: 'WHEN CHEMICALS CAUSE HARM', title: 'Examples of adverse effects',
          content: <>
            <div className="u1-effect-grid">
              <article><span className="u1-effect-number">01</span><h3>Poisoning</h3><p>Some substances can interfere with normal body functions when swallowed, inhaled or absorbed. Effects depend on the substance and exposure and may be mild or severe.</p></article>
              <article><span className="u1-effect-number">02</span><h3>Burns and irritation</h3><p>Corrosive substances, including some strong acids and alkalis, can damage skin and eyes. Other substances can irritate the skin or respiratory system.</p></article>
              <article><span className="u1-effect-number">03</span><h3>Drug misuse and abuse</h3><p>Using medicines or psychoactive substances outside safe medical directions can harm health. Misuse may lead to poisoning, dependence, impaired judgement and wider social difficulties.</p></article>
              <article><span className="u1-effect-number">04</span><h3>Corrosion</h3><p>Corrosion is the gradual deterioration of a material, often a metal, through chemical or electrochemical reactions with its surroundings. It can weaken structures and equipment.</p></article>
              <article><span className="u1-effect-number">05</span><h3>Pollution</h3><p>Harmful chemicals released into air, water or soil can affect people, plants, animals and ecosystems. Some pollutants remain in the environment for a long time.</p></article>
            </div>
            <div className="lesson-insight lesson-insight--yellow"><span>!</span><div><strong>Medicines are chemicals too</strong><p>Medicines can be useful when prescribed or used according to appropriate directions. Taking someone else’s medicine, taking too much or using a medicine for a non-medical purpose can be dangerous. Ask a qualified health professional when unsure.</p></div></div>
          </>,
        },
        {
          id: 'types-of-hazards', label: 'Types of chemical hazards', kicker: 'READ BEFORE YOU USE', title: 'Common hazard types and labels',
          content: <>
            <p>Substances may have more than one hazard. Product labels and safety information communicate the precautions needed. In a laboratory, read the label and follow the teacher’s instructions before using any chemical.</p>
            <div className="u1-hazard-list">
              <div><strong>Toxic or harmful</strong><p>May cause harmful effects if swallowed, inhaled or absorbed.</p><span>Follow exposure and handling instructions.</span></div>
              <div><strong>Corrosive</strong><p>Can damage metals and cause serious skin or eye burns.</p><span>Use only with the specified protective equipment and supervision.</span></div>
              <div><strong>Irritant or sensitising</strong><p>May irritate skin, eyes or airways, or cause an allergic response.</p><span>Avoid contact and use suitable controls.</span></div>
              <div><strong>Flammable</strong><p>Can catch fire easily under suitable conditions.</p><span>Keep away from flames, sparks and heat as directed.</span></div>
              <div><strong>Oxidising or reactive</strong><p>May intensify a fire or react dangerously with incompatible materials.</p><span>Never mix chemicals unless an authorised procedure specifically requires it.</span></div>
              <div><strong>Environmental hazard</strong><p>May harm aquatic life or other parts of the environment.</p><span>Use the approved waste and disposal procedure.</span></div>
            </div>
            <p>For detailed workplace or laboratory information, a chemical’s <strong>Safety Data Sheet (SDS)</strong> provides information about hazards, handling, storage, first aid, accidental release and disposal.</p>
          </>,
        },
        {
          id: 'laboratory-safety', label: 'Laboratory safety rules', kicker: 'SAFE PRACTICE', title: 'How can we work safely?',
          content: <>
            <p>Safety is a shared responsibility. Follow the teacher’s instructions and your school’s laboratory rules. Do not carry out an experiment unless it has been authorised and supervised.</p>
            <div className="u1-safety-checklist">
              {[
                'Wear the protective equipment specified for the activity, such as suitable eye protection, a laboratory coat or apron and gloves when required.',
                'Tie back long hair, secure loose clothing and wear closed shoes in the laboratory.',
                'Read labels before handling chemicals and use only the amount and method instructed by the teacher.',
                'Never taste chemicals, never pipette by mouth and never sniff a substance directly.',
                'Do not eat, drink, chew gum or apply cosmetics in the laboratory.',
                'Keep the work area tidy; report spills, broken glass and damaged equipment immediately.',
                'Never mix chemicals or household cleaning products unless a trained teacher has specifically authorised the procedure.',
                'Wash hands after practical work and use the correct, teacher-approved waste container.',
              ].map((rule) => <div key={rule}><CheckBadge />{rule}</div>)}
            </div>
            <div className="lesson-insight lesson-insight--mint"><span>✓</span><div><strong>Remember</strong><p>Never mix bleach with acids, ammonia or other cleaners. Dangerous gases or reactions can result. Keep household products in their original labelled containers and follow their instructions.</p></div></div>
          </>,
        },
        {
          id: 'environmental-effects', label: 'Environmental effects', kicker: 'BEYOND THE LABORATORY', title: 'How can chemical pollution affect the environment?',
          content: <>
            <p>Chemical pollution happens when harmful substances enter the environment in amounts or places where they can cause damage. Pollution can come from poorly managed industrial waste, fuel spills, agricultural chemicals, household waste or unsafe disposal of products.</p>
            <div className="u1-environment-grid">
              <article><h3>Air</h3><p>Smoke, gases and fine particles can reduce air quality and affect breathing. Some emissions also contribute to acid deposition and climate change.</p></article>
              <article><h3>Water</h3><p>Oil, untreated waste, excess nutrients and toxic substances can contaminate rivers, lakes and groundwater, harming aquatic organisms and limiting safe uses.</p></article>
              <article><h3>Soil</h3><p>Some chemicals can reduce soil quality, harm soil organisms, enter crops or move from soil into groundwater.</p></article>
              <article><h3>Living things</h3><p>Exposure can affect the health, growth or reproduction of plants and animals. Contaminants may move through food chains.</p></article>
            </div>
            <h3>Ways to reduce harm</h3>
            <ul className="u1-simple-list"><li>Treat industrial and domestic wastewater appropriately before release.</li><li>Store, transport and use chemicals according to safety instructions.</li><li>Use agricultural chemicals only as recommended and prevent unnecessary runoff.</li><li>Reduce, reuse and recycle suitable materials, and send hazardous waste to approved collection or treatment routes.</li><li>Monitor air, water and soil so pollution can be identified and addressed.</li></ul>
          </>,
        },
        {
          id: 'responding-to-an-incident', label: 'What to do in an incident', kicker: 'ACT SAFELY', title: 'What should you do if exposure occurs?',
          content: <>
            <p>If a chemical spills, splashes onto someone or is swallowed or inhaled, do not hide the incident or try an improvised remedy.</p>
            <div className="u1-response-steps">
              <div><b>1</b><div><strong>Stop and alert</strong><p>Warn people nearby and tell the teacher or laboratory supervisor immediately.</p></div></div>
              <div><b>2</b><div><strong>Follow the emergency procedure</strong><p>Use the school’s emergency plan and the chemical’s safety information. Do not handle an unknown spill yourself.</p></div></div>
              <div><b>3</b><div><strong>Get appropriate help</strong><p>For exposure or injury, seek prompt help from trained first-aiders and medical services. Provide the product label or safety information if it is safe to do so.</p></div></div>
              <div><b>4</b><div><strong>Do not improvise</strong><p>Do not induce vomiting, apply neutralising chemicals to skin, or return to a contaminated area without authorisation.</p></div></div>
            </div>
            <p>For a skin or eye splash, follow the laboratory’s immediate rinsing procedure and get adult and medical assistance without delay. The correct response depends on the substance and the exposure.</p>
          </>,
        },
      ]}
      recap={[
        'A hazard is something that can cause harm; risk is the chance of harm under particular conditions.',
        'Chemicals may enter the body through inhalation, ingestion, skin or eye contact, or puncture.',
        'Adverse effects include poisoning, burns, irritation, drug misuse, corrosion and pollution.',
        'Labels and Safety Data Sheets communicate chemical hazards and safe handling information.',
        'Follow laboratory rules, use specified protective equipment and never taste or directly sniff chemicals.',
        'Preventing pollution protects air, water, soil, plants, animals and human health.',
      ]}
      quizPath="/lessons/chemical-effects-and-safety/quiz"
      quizDescription="Try ten questions on chemical hazards, routes of exposure, safe laboratory behaviour and environmental effects."
      sidebarTip="When you see a chemical product, think: what is the hazard, how could exposure happen, and what control prevents it?"
      sources={[
        { label: 'Federal Ministry of Education — SS1 Introduction to Chemistry', url: 'https://inspire.education.gov.ng/lessons/8863/preview' },
        { label: 'CDC / NIOSH — Chemical Hazards and Routes of Exposure', url: 'https://www.cdc.gov/niosh/learning/safetyculturehc/module-2/5.html' },
        { label: 'Royal Society of Chemistry — Working Safely in the Laboratory', url: 'https://edu.rsc.org/resources/the-interactive-lab-primer-working-safely/2264.article' },
        { label: 'National Academies — Prudent Practices in the Laboratory', url: 'https://www.ncbi.nlm.nih.gov/books/NBK55872/' },
      ]}
      nextLesson={{ title: 'The scientific method', path: '/lessons/scientific-method' }}
    />
  );
}

function CheckBadge() {
  return <span className="u1-safety-check" aria-hidden="true">✓</span>;
}
