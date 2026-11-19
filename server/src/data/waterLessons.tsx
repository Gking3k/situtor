import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type WaterLesson = {
  id: string;
  lessonNumber: string;
  title: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  duration: string;
  learningObjectives: string[];
  sections: LessonSection[];
  recap: string[];
  quizPath: string;
  quizDescription: string;
  sidebarTip: string;
  sources: { label: string; url: string }[];
  nextLesson?: { title: string; path: string };
  quiz: { description: string; sidebarTip: string; artLabel: string; artCaption: string };
};

const waterSources = [
  { label: 'Federal Ministry of Education — Water (SS1 Chemistry)', url: 'https://inspire.education.gov.ng/lessons/1482/preview' },
  { label: 'USGS Water Science School — Water properties', url: 'https://www.usgs.gov/water-science-school/properties-water' },
  { label: 'USGS Water Science School — Surface water', url: 'https://www.usgs.gov/water-science-school/science/surface-water' },
  { label: 'USGS Water Science School — Groundwater', url: 'https://www.usgs.gov/water-science-school/science/groundwater' },
  { label: 'WHO — Drinking-water', url: 'https://www.who.int/news-room/fact-sheets/detail/drinking-water' },
  { label: 'CDC — Household water treatment', url: 'https://www.cdc.gov/global-water-sanitation-hygiene/about/about-household-water-treatment.html' },
  { label: 'Royal Society of Chemistry — Removing hardness from water', url: 'https://edu.rsc.org/experiments/how-can-hardness-in-water-be-removed/1734.article' },
];

function Note({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'mint' | 'amber' | 'lavender' }) {
  return <aside className={`u7-note u7-note--${tone}`}>{children}</aside>;
}

function PlainWords({ children }: { children: ReactNode }) {
  return <aside className="u9-plain-words"><span>START WITH THE MAIN IDEA</span><div>{children}</div></aside>;
}

function FormulaPanel({ title, formula, variables, steps }: { title: string; formula: ReactNode; variables: ReactNode; steps: { label: string; body: ReactNode }[] }) {
  return <div className="u7-formula-panel u9-formula-panel"><span className="u7-eyebrow">{title}</span><div className="u7-formula-panel__formula">{formula}</div><div className="u7-formula-panel__variables">{variables}</div><ol>{steps.map((step, index) => <li key={step.label}><strong>{index + 1}. {step.label}</strong><span>{step.body}</span></li>)}</ol></div>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u7-table-wrap"><table className="u7-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function WaterSourcesDiagram() {
  return <div className="u9-diagram-card" role="group" aria-label="Detailed cross-section showing wells, boreholes, rainfall, surface water, springs, the water table and an aquifer">
    <div className="u9-diagram-viewport u9-diagram-viewport--detailed" tabIndex={0} role="group" aria-label="Detailed groundwater cross-section; scroll horizontally on a narrow screen">
      <svg viewBox="0 0 1240 760" role="img" aria-labelledby="u9-sources-title u9-sources-desc">
        <title id="u9-sources-title">Water sources and how groundwater is stored and replenished</title>
        <desc id="u9-sources-desc">A cross-section identifies a lined dug well, a deeper cased borehole, rainfall, surface runoff into a river, infiltration and groundwater recharge, the unsaturated zone, water table, saturated zone and aquifer, and a spring where groundwater emerges. The water level in an unpumped well is shown near the local water table.</desc>
        <defs>
          <linearGradient id="u9-source-soil" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#dfcba8"/><stop offset="1" stopColor="#c8ae86"/></linearGradient>
          <marker id="u9-source-arrow" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto"><path d="M1 1 L14 8 L1 15 L4.5 8 Z" fill="#287da3"/></marker>
          <marker id="u9-source-flow-arrow" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto"><path d="M1 1 L14 8 L1 15 L4.5 8 Z" fill="#398eae"/></marker>
        </defs>
        <rect x="12" y="12" width="1216" height="736" rx="22" fill="#f8fbfd" stroke="#d8e6ee" strokeWidth="2"/>
        <text x="620" y="48" textAnchor="middle" fontSize="25" fontWeight="900" fill="#2b607a">WATER SOURCES AND GROUNDWATER</text>
        <text x="620" y="73" textAnchor="middle" fontSize="16" fill="#58788c">How rain replenishes surface water and underground water stores</text>

        {/* Source information cards */}
        <g>
          <rect x="42" y="94" width="260" height="108" rx="15" fill="#ffffff" stroke="#cbdfe9" strokeWidth="2"/>
          <text x="172" y="126" textAnchor="middle" fontSize="21" fontWeight="900" fill="#2b607a">WELL</text>
          <text x="172" y="153" textAnchor="middle" fontSize="16" fill="#496c80">A relatively wide dug opening,</text>
          <text x="172" y="176" textAnchor="middle" fontSize="16" fill="#496c80">usually lined for support</text>
          <path d="M172 202 L172 286" stroke="#718da0" strokeWidth="2.5" fill="none"/>
          <circle cx="172" cy="286" r="4" fill="#718da0"/>

          <rect x="326" y="94" width="260" height="108" rx="15" fill="#ffffff" stroke="#cbdfe9" strokeWidth="2"/>
          <text x="456" y="126" textAnchor="middle" fontSize="21" fontWeight="900" fill="#2b607a">BOREHOLE</text>
          <text x="456" y="153" textAnchor="middle" fontSize="16" fill="#496c80">A narrow drilled shaft that</text>
          <text x="456" y="176" textAnchor="middle" fontSize="16" fill="#496c80">can reach a deeper aquifer</text>
          <path d="M456 202 L420 356" stroke="#718da0" strokeWidth="2.5" fill="none"/>
          <circle cx="420" cy="356" r="4" fill="#718da0"/>

          <rect x="610" y="94" width="260" height="108" rx="15" fill="#ffffff" stroke="#cbdfe9" strokeWidth="2"/>
          <text x="740" y="126" textAnchor="middle" fontSize="21" fontWeight="900" fill="#2b607a">RAINFALL</text>
          <text x="740" y="153" textAnchor="middle" fontSize="16" fill="#496c80">Precipitation replenishes rivers;</text>
          <text x="740" y="176" textAnchor="middle" fontSize="16" fill="#496c80">some water enters the ground</text>
          <path d="M740 202 L740 248" stroke="#718da0" strokeWidth="2.5" fill="none"/>
          <circle cx="740" cy="248" r="4" fill="#718da0"/>

          <rect x="894" y="94" width="304" height="108" rx="15" fill="#ffffff" stroke="#cbdfe9" strokeWidth="2"/>
          <text x="1046" y="126" textAnchor="middle" fontSize="21" fontWeight="900" fill="#2b607a">RIVER / LAKE</text>
          <text x="1046" y="153" textAnchor="middle" fontSize="16" fill="#496c80">Surface water collected in a</text>
          <text x="1046" y="176" textAnchor="middle" fontSize="16" fill="#496c80">channel or natural basin</text>
          <path d="M1046 202 L945 350" stroke="#718da0" strokeWidth="2.5" fill="none"/>
          <circle cx="1046" cy="280" r="4" fill="#718da0"/>
        </g>

        {/* Ground profile and aquifer */}
        <path d="M28 350 C132 292 220 315 320 350 C420 390 505 350 605 326 C705 302 790 322 865 355 C945 389 1030 372 1092 342 C1140 320 1172 320 1212 304 L1212 710 L28 710Z" fill="url(#u9-source-soil)"/>
        <path d="M28 350 C132 292 220 315 320 350 C420 390 505 350 605 326 C705 302 790 322 865 355 C945 389 1030 372 1092 342 C1140 320 1172 320 1212 304" fill="none" stroke="#668b63" strokeWidth="10" strokeLinecap="round"/>
        {/* Saturated material below the water table */}
        <path d="M28 526 C175 500 284 535 420 522 C570 508 670 537 820 520 C930 508 1015 476 1080 414 C1128 370 1175 344 1212 342 L1212 710 L28 710Z" fill="#a9cfdf" opacity=".93"/>
        <path d="M28 526 C175 500 284 535 420 522 C570 508 670 537 820 520 C930 508 1015 476 1080 414 C1128 370 1175 344 1212 342" fill="none" stroke="#438eae" strokeWidth="5" strokeDasharray="14 9"/>

        {/* Ground zones */}
        <rect x="430" y="390" width="245" height="54" rx="12" fill="#f8f3e9" stroke="#cdb892" strokeWidth="2"/>
        <text x="552" y="413" textAnchor="middle" fontSize="18" fontWeight="900" fill="#765a36">UNSATURATED ZONE</text>
        <text x="552" y="433" textAnchor="middle" fontSize="14" fill="#765f43">Pore spaces contain air and water</text>
        <rect x="60" y="610" width="350" height="70" rx="13" fill="#eff8fc" stroke="#82b6ca" strokeWidth="2"/>
        <text x="235" y="638" textAnchor="middle" fontSize="19" fontWeight="900" fill="#245d7a">SATURATED ZONE — AQUIFER</text>
        <text x="235" y="661" textAnchor="middle" fontSize="15" fill="#315d76">Pores and cracks are filled with groundwater</text>

        {/* Well: water level corresponds to nearby water table */}
        <g>
          <path d="M128 350 L128 526 M205 350 L205 526" stroke="#66523f" strokeWidth="7" fill="none"/>
          <path d="M128 350 L128 288 L205 288 L205 350" fill="#9b8065" stroke="#66523f" strokeWidth="6"/>
          <path d="M118 287 H215" stroke="#66523f" strokeWidth="11" strokeLinecap="round"/>
          <path d="M166 287 V261 M150 261 H182" stroke="#66523f" strokeWidth="7" fill="none"/>
          <path d="M132 516 Q166 508 201 516 L201 538 Q166 548 132 538Z" fill="#71b8d5" opacity=".94"/>
          <path d="M132 516 Q166 508 201 516" stroke="#2e83a7" strokeWidth="4" fill="none"/>
          <rect x="220" y="438" width="180" height="58" rx="10" fill="#eff8fc" stroke="#9bc8d9" strokeWidth="2"/>
          <text x="310" y="461" textAnchor="middle" fontSize="15" fontWeight="900" fill="#245d7a">WELL WATER LEVEL</text>
          <text x="310" y="482" textAnchor="middle" fontSize="13" fill="#45677d">Unpumped level follows</text>
          <text x="310" y="498" textAnchor="middle" fontSize="13" fill="#45677d">the water table nearby</text>
          <path d="M225 480 L199 516" stroke="#607d91" strokeWidth="2.5" fill="none"/>
        </g>

        {/* Borehole: casing and screened lower section */}
        <g>
          <path d="M420 375 V674" stroke="#405c70" strokeWidth="17" fill="none"/>
          <path d="M420 375 V674" stroke="#d8edf4" strokeWidth="8" fill="none"/>
          <path d="M410 374 H430 M410 674 H430" stroke="#405c70" strokeWidth="7"/>
          <path d="M412 620 V670 M428 620 V670" stroke="#405c70" strokeWidth="4"/>
          <path d="M411 630 H429 M411 642 H429 M411 654 H429" stroke="#8fc6da" strokeWidth="3"/>
          <path d="M432 602 L478 585" stroke="#607d91" strokeWidth="2.5" fill="none"/>
          <text x="485" y="582" fontSize="15" fontWeight="800" fill="#245d7a">CASING / SCREEN</text>
          <text x="485" y="603" fontSize="14" fill="#45677d">Casing supports the hole; slots let water enter</text>
        </g>

        {/* Rain, runoff, infiltration and recharge */}
        <g>
          <path d="M750 250 V310 M800 250 V315 M850 250 V322" stroke="#4c9bbd" strokeWidth="5" strokeLinecap="round" fill="none" markerEnd="url(#u9-source-arrow)"/>
          <text x="750" y="230" fontSize="15" fontWeight="800" fill="#2b7699">RAIN</text>
          <path d="M760 348 C800 360 830 368 865 374" stroke="#398eae" strokeWidth="5" strokeDasharray="9 7" fill="none" markerEnd="url(#u9-source-flow-arrow)"/>
          
          <path d="M700 352 C700 410 710 475 720 552" stroke="#287da3" strokeWidth="5" strokeDasharray="10 8" fill="none" markerEnd="url(#u9-source-arrow)"/>
          <text x="735" y="454" fontSize="17" fontWeight="900" fill="#245d7a">INFILTRATION / RECHARGE</text>
          <text x="735" y="476" fontSize="14" fill="#45677d">Water soaks through soil</text>
          <text x="735" y="496" fontSize="14" fill="#45677d">and reaches the saturated zone</text>
          <path d="M760 655 C820 642 870 620 920 590" stroke="#398eae" strokeWidth="5" strokeDasharray="10 8" fill="none" markerEnd="url(#u9-source-flow-arrow)"/>
          <text x="760" y="690" fontSize="14" fontWeight="800" fill="#245d7a">Groundwater flow</text>
        </g>

        {/* River / lake and spring */}
        <g>
          <path d="M890 352 Q955 330 1020 352 L1020 401 Q955 382 890 402Z" fill="#75b8d6" stroke="#347f9f" strokeWidth="4"/>
          <path d="M900 363 Q955 347 1010 363" stroke="#d9f1f8" strokeWidth="3" fill="none"/>
          <text x="955" y="390" textAnchor="middle" fontSize="15" fontWeight="900" fill="#245d7a">RIVER / LAKE</text>
          <path d="M1122 368 C1150 360 1175 340 1200 321" stroke="#347f9f" strokeWidth="7" fill="none" strokeLinecap="round" markerEnd="url(#u9-source-flow-arrow)"/>
          <rect x="1030" y="230" width="165" height="66" rx="11" fill="#eff8fc" stroke="#9bc8d9" strokeWidth="2"/>
          <text x="1112" y="255" textAnchor="middle" fontSize="18" fontWeight="900" fill="#245d7a">SPRING</text>
          <text x="1112" y="277" textAnchor="middle" fontSize="14" fill="#45677d">Groundwater emerges</text>
          <path d="M1112 296 L1143 354" stroke="#607d91" strokeWidth="2.5" fill="none"/>
        </g>

        {/* Water table label, with a leader to the dashed boundary */}
        <rect x="960" y="555" width="230" height="62" rx="11" fill="#eff8fc" stroke="#8ebed1" strokeWidth="2"/>
        <text x="1075" y="580" textAnchor="middle" fontSize="18" fontWeight="900" fill="#245d7a">WATER TABLE</text>
        <text x="1075" y="601" textAnchor="middle" fontSize="14" fill="#315d76">Top of the saturated zone</text>
        <path d="M1000 555 L970 507" stroke="#607d91" strokeWidth="2.5" fill="none"/>
      </svg>
    </div>
    <p className="u9-caption">Rain can flow over the land into rivers and lakes (surface runoff), or soak through the unsaturated zone to recharge an aquifer. The water table marks the top of the saturated zone. Wells and boreholes reach groundwater; a spring forms where groundwater naturally comes out at the surface. A source still needs protection and testing before its water is considered safe.</p>
  </div>;
}

function WaterMoleculeDiagram() {
  return <div className="u9-diagram-card" role="group" aria-label="Water molecule diagram showing two hydrogen atoms bonded to one oxygen atom in a bent polar molecule">
    <div className="u9-diagram-viewport" tabIndex={0} role="group" aria-label="Diagram; scroll horizontally on a narrow screen if needed">
    <svg viewBox="0 0 960 500" role="img" aria-labelledby="u9-molecule-title u9-molecule-desc">
      <title id="u9-molecule-title">The structure and polarity of a water molecule</title>
      <desc id="u9-molecule-desc">One oxygen atom is joined to two hydrogen atoms by covalent bonds. The molecule is bent, with an H-O-H angle of about 104.5 degrees. Oxygen has a partial negative charge, delta minus, and each hydrogen has a partial positive charge, delta plus.</desc>
      <rect x="12" y="12" width="936" height="476" rx="20" fill="#f8fbfd" stroke="#d8e6ee"/>
      <text x="480" y="56" textAnchor="middle" fontSize="24" fontWeight="900" fill="#315d76">WATER IS A BENT, POLAR MOLECULE</text>
      <text x="480" y="88" textAnchor="middle" fontSize="17" fontWeight="700" fill="#52758b">H–O–H bond angle: about 104.5°</text>

      <path d="M480 315 L345 205 M480 315 L615 205" stroke="#5c8198" strokeWidth="18" strokeLinecap="round"/>
      <path d="M411 270 Q480 207 549 270" fill="none" stroke="#4d91b5" strokeWidth="4" strokeDasharray="8 7"/>
      <text x="480" y="220" textAnchor="middle" fontSize="15" fontWeight="800" fill="#397f9f">BOND ANGLE</text>

      <circle cx="480" cy="324" r="70" fill="#d95749" stroke="#a93e35" strokeWidth="4"/>
      <circle cx="345" cy="205" r="47" fill="#e8f3fa" stroke="#4d91b5" strokeWidth="4"/>
      <circle cx="615" cy="205" r="47" fill="#e8f3fa" stroke="#4d91b5" strokeWidth="4"/>
      <text x="480" y="350" textAnchor="middle" fontSize="38" fontWeight="900" fill="#ffffff">O</text>
      <text x="345" y="216" textAnchor="middle" fontSize="31" fontWeight="900" fill="#2c627e">H</text>
      <text x="615" y="216" textAnchor="middle" fontSize="31" fontWeight="900" fill="#2c627e">H</text>
      <text x="480" y="295" textAnchor="middle" fontSize="22" fontWeight="900" fill="#ffffff">δ-</text>

      <rect x="286" y="119" width="118" height="34" rx="11" fill="#e7f3f8" stroke="#b7d6e4"/>
      <rect x="556" y="119" width="118" height="34" rx="11" fill="#e7f3f8" stroke="#b7d6e4"/>
      <text x="345" y="142" textAnchor="middle" fontSize="19" fontWeight="900" fill="#286783">δ+  H end</text>
      <text x="615" y="142" textAnchor="middle" fontSize="19" fontWeight="900" fill="#286783">δ+  H end</text>

      <path d="M551 324 H691" stroke="#a93e35" strokeWidth="3" fill="none"/>
      <rect x="691" y="289" width="214" height="70" rx="12" fill="#fff1ef" stroke="#e3a49b" strokeWidth="2"/>
      <text x="798" y="317" textAnchor="middle" fontSize="18" fontWeight="900" fill="#9f3c34">δ-  OXYGEN END</text>
      <text x="798" y="340" textAnchor="middle" fontSize="14" fontWeight="700" fill="#9f3c34">partial negative</text>

      <text x="480" y="431" textAnchor="middle" fontSize="18" fontWeight="800" fill="#315d76">Oxygen attracts the shared electrons more strongly than hydrogen.</text>
      <rect x="68" y="448" width="824" height="28" rx="9" fill="#e7f3f8"/>
      <text x="480" y="468" textAnchor="middle" fontSize="15" fontWeight="700" fill="#315d76">δ means “partial”: these are not full positive or negative ionic charges.</text>
    </svg>
    </div>
    <p className="u9-caption">Each O–H bond is a shared pair of electrons. Oxygen attracts the shared electrons more strongly, so oxygen is slightly negative (δ-) and each hydrogen is slightly positive (δ+). This uneven charge distribution makes water polar.</p>
  </div>;
}

function HardnessTestDiagram() {
  return <div className="u9-diagram-card" role="group" tabIndex={0} aria-label="Comparison of soft water and hard water in a soap test">
    <svg viewBox="0 0 900 380" role="img" aria-labelledby="u9-hardness-title u9-hardness-desc">
      <title id="u9-hardness-title">Soap test: soft water forms lather more easily than hard water</title>
      <desc id="u9-hardness-desc">Two labelled test tubes show soft water with a large layer of bubbles and hard water with less lather and solid scum at the surface. Calcium and magnesium ions in hard water react with soap.</desc>
      <rect x="14" y="14" width="872" height="350" rx="20" fill="#f8fbfd" stroke="#d8e6ee"/>
      <text x="245" y="52" textAnchor="middle" fontSize="22" fontWeight="900" fill="#2b617c">SOFT WATER</text><text x="655" y="52" textAnchor="middle" fontSize="22" fontWeight="900" fill="#2b617c">HARD WATER</text>
      <path d="M130 90 L145 290 Q245 320 345 290 L360 90" fill="#fff" stroke="#6d91a5" strokeWidth="6"/><path d="M145 198 L151 286 Q245 310 339 286 L345 198Z" fill="#bde2ef"/><g fill="#e7f7fb" stroke="#4c9ab7" strokeWidth="2"><circle cx="185" cy="156" r="19"/><circle cx="214" cy="131" r="22"/><circle cx="248" cy="150" r="25"/><circle cx="282" cy="128" r="20"/><circle cx="311" cy="158" r="18"/><circle cx="229" cy="181" r="15"/><circle cx="275" cy="184" r="15"/></g>
      <path d="M540 90 L555 290 Q655 320 755 290 L770 90" fill="#fff" stroke="#6d91a5" strokeWidth="6"/><path d="M555 198 L561 286 Q655 310 749 286 L755 198Z" fill="#bde2ef"/><g fill="#e7f7fb" stroke="#4c9ab7" strokeWidth="2"><circle cx="595" cy="169" r="14"/><circle cx="625" cy="154" r="12"/><circle cx="678" cy="170" r="13"/></g><path d="M557 198 Q655 181 753 198" fill="none" stroke="#d4a444" strokeWidth="8" strokeDasharray="12 7"/>
      <text x="245" y="337" textAnchor="middle" fontSize="17" fill="#2e735d" fontWeight="800">Many bubbles · lathers readily</text><text x="655" y="337" textAnchor="middle" fontSize="17" fill="#9a6a24" fontWeight="800">Little lather · soap scum forms</text>
      <text x="655" y="82" textAnchor="middle" fontSize="13" fill="#8a672f">Calcium / magnesium soap</text>
    </svg>
    <p className="u9-caption">For a fair comparison, use equal water volumes and the same soap solution, then shake each sample in the same way. This is a teacher-guided comparison; do not drink test samples.</p>
  </div>;
}

function TreatmentPlantDiagram() {
  const stages = [
    ['1','SCREEN','Large rubbish is trapped'],['2','COAGULATE','Fine dirt clumps together'],['3','SETTLE','Heavy flocs sink'],['4','FILTER','Remaining particles are removed'],['5','DISINFECT','Germs are inactivated'],['6','STORE','Treated water is protected'],
  ];
  return <div className="u9-diagram-card u9-diagram-card--scroll" role="group" tabIndex={0} aria-label="Six stages in a typical municipal water treatment process">
    <svg viewBox="0 0 1040 400" role="img" aria-labelledby="u9-treatment-title u9-treatment-desc">
      <title id="u9-treatment-title">A simplified water treatment plant</title><desc id="u9-treatment-desc">Water passes through screening, coagulation, sedimentation, filtration, disinfection and protected storage. The stages remove different kinds of contamination; no single stage does everything.</desc>
      <rect x="10" y="10" width="1020" height="380" rx="20" fill="#f8fbfd" stroke="#d8e6ee"/>
      {stages.map(([num,title,description],index)=>{const x=24+index*168;return <g key={num}>
        <rect x={x} y="70" width="146" height="245" rx="15" fill={index%2===0?'#eef7fb':'#f1f8f4'} stroke="#cbdfe9" strokeWidth="2"/>
        <circle cx={x+73} cy="38" r="22" fill="#287e9e"/><text x={x+73} y="45" textAnchor="middle" fontSize="19" fill="white" fontWeight="900">{num}</text>
        {index===0&&<g stroke="#4b839b" strokeWidth="5"><path d={`M${x+42} 125 L${x+102} 185 M${x+102} 125 L${x+42} 185`}/><path d={`M${x+42} 205 L${x+102} 205`}/></g>}
        {index===1&&<g><path d={`M${x+34} 140 Q${x+73} 110 ${x+112} 140 L${x+106} 205 Q${x+73} 228 ${x+40} 205Z`} fill="#b8dbea" stroke="#4b839b" strokeWidth="3"/><g fill="#d3a84d"><circle cx={x+58} cy="157" r="7"/><circle cx={x+78} cy="170" r="8"/><circle cx={x+94} cy="151" r="7"/></g></g>}
        {index===2&&<g><path d={`M${x+34} 135 H${x+112} L${x+102} 208 Q${x+73} 229 ${x+44} 208Z`} fill="#c5e3ee" stroke="#4b839b" strokeWidth="3"/><path d={`M${x+44} 194 Q${x+73} 180 ${x+102} 194`} stroke="#b58b43" strokeWidth="8" fill="none"/></g>}
        {index===3&&<g><path d={`M${x+34} 135 H${x+112} V205 H${x+34}Z`} fill="#d7ecf3" stroke="#4b839b" strokeWidth="3"/><path d={`M${x+34} 174 H${x+112}`} stroke="#a77a45" strokeWidth="15"/><path d={`M${x+34} 190 H${x+112}`} stroke="#8b9e78" strokeWidth="8"/></g>}
        {index===4&&<g><path d={`M${x+73} 117 V175`} stroke="#4d9d80" strokeWidth="6"/><path d={`M${x+59} 160 L${x+73} 177 L${x+87} 160`} stroke="#4d9d80" strokeWidth="5" fill="none"/><path d={`M${x+42} 192 H${x+104}`} stroke="#4d9d80" strokeWidth="4"/><circle cx={x+73} cy="213" r="15" fill="#d6eee2" stroke="#4d9d80" strokeWidth="3"/></g>}
        {index===5&&<g><path d={`M${x+42} 135 H${x+104} V207 Q${x+73} 225 ${x+42} 207Z`} fill="#b5dce9" stroke="#4b839b" strokeWidth="3"/><path d={`M${x+73} 108 V132`} stroke="#4b839b" strokeWidth="4"/><path d={`M${x+62} 119 L${x+73} 133 L${x+84} 119`} fill="none" stroke="#4b839b" strokeWidth="4"/></g>}
        <text x={x+73} y="257" textAnchor="middle" fontSize="16" fontWeight="900" fill="#28566e">{title}</text><text x={x+73} y="279" textAnchor="middle" fontSize="14" fill="#4f6f82">{description.split(' ').slice(0,3).join(' ')}</text><text x={x+73} y="296" textAnchor="middle" fontSize="14" fill="#4f6f82">{description.split(' ').slice(3).join(' ')}</text>
        {index<5&&<><path d={`M${x+148} 185 H${x+164}`} stroke="#2b819e" strokeWidth="4"/><path d={`M${x+156} 176 L${x+166} 185 L${x+156} 194`} stroke="#2b819e" strokeWidth="4" fill="none"/></>}
      </g>})}
      <text x="520" y="360" textAnchor="middle" fontSize="16" fill="#315c73" fontWeight="700">The exact process varies with the source water and the quality standard required.</text>
    </svg>
    <p className="u9-caption">Screening and filtration mainly remove physical material; coagulation and settling remove fine suspended particles; disinfection targets disease-causing microorganisms. Water must still be monitored and stored safely.</p>
  </div>;
}

function PollutionDiagram() {
  return <div className="u9-diagram-card" role="group" aria-label="Water pollution diagram showing farm runoff, sewage and industrial pollution entering a river and possibly groundwater">
    <div className="u9-diagram-viewport" tabIndex={0} role="group" aria-label="Diagram; scroll horizontally on a narrow screen if needed">
    <svg viewBox="0 0 1100 620" role="img" aria-labelledby="u9-pollution-title u9-pollution-desc">
      <title id="u9-pollution-title">How pollution can reach rivers and groundwater</title>
      <desc id="u9-pollution-desc">Three separate source panels show farm runoff, sewage and industrial discharge. Arrows show rain washing pollutants from the land into a river. Another path shows pollutants seeping through soil towards groundwater. The diagram is a teaching model, not a measurement of a real site.</desc>
      <defs><marker id="u9-pollution-arrow" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto"><path d="M1 1 L12 7 L1 13 Z" fill="#a66e3c"/></marker></defs>
      <rect x="12" y="12" width="1076" height="596" rx="22" fill="#f8fbfd" stroke="#d8e6ee"/>
      <g>
        <rect x="45" y="48" width="310" height="142" rx="16" fill="#eef7ed" stroke="#9dbf9b" strokeWidth="2"/>
        <text x="200" y="82" textAnchor="middle" fontSize="21" fontWeight="900" fill="#315d47">FARM RUNOFF</text>
        <path d="M92 135 L126 100 L160 135 M178 135 L212 100 L246 135" stroke="#6f9867" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <text x="200" y="168" textAnchor="middle" fontSize="16" fill="#426a54">Fertiliser · pesticides · soil</text>
        <rect x="395" y="48" width="310" height="142" rx="16" fill="#f9f1e9" stroke="#d8b68c" strokeWidth="2"/>
        <text x="550" y="82" textAnchor="middle" fontSize="21" fontWeight="900" fill="#7b5434">SEWAGE</text>
        <path d="M465 112 H635 M480 112 V145 M620 112 V145 M465 145 H635" stroke="#9a795c" strokeWidth="6" fill="none"/>
        <text x="550" y="168" textAnchor="middle" fontSize="16" fill="#7b5434">Human and animal waste</text>
        <rect x="745" y="48" width="310" height="142" rx="16" fill="#f1f3f7" stroke="#b9c4d2" strokeWidth="2"/>
        <text x="900" y="82" textAnchor="middle" fontSize="21" fontWeight="900" fill="#405c70">INDUSTRY</text>
        <path d="M815 145 V115 H850 V145 M865 145 V94 H900 V145 M915 145 V123 H950 V145" fill="#9eabb8" stroke="#637b8a" strokeWidth="3"/>
        <text x="900" y="168" textAnchor="middle" fontSize="16" fill="#405c70">Chemicals · oils · metals</text>
      </g>
      <path d="M28 335 C160 270 280 300 390 329 C505 359 610 315 720 300 C845 283 955 325 1072 280 L1072 476 L28 476Z" fill="#d8c39e"/>
      <path d="M28 335 C160 270 280 300 390 329 C505 359 610 315 720 300 C845 283 955 325 1072 280" fill="none" stroke="#68885e" strokeWidth="9"/>
      <path d="M28 420 C165 389 280 428 390 424 C510 420 625 385 740 402 C865 422 965 433 1072 393 L1072 482 L28 482Z" fill="#56a7c5"/>
      <path d="M28 420 C165 389 280 428 390 424 C510 420 625 385 740 402 C865 422 965 433 1072 393" fill="none" stroke="#d8f0f7" strokeWidth="13"/>
      <rect x="420" y="432" width="260" height="36" rx="12" fill="#eff9fc" stroke="#a6d0df"/>
      <text x="550" y="456" textAnchor="middle" fontSize="18" fontWeight="900" fill="#245d7a">RIVER / SURFACE WATER</text>
      <path d="M28 500 C180 478 300 505 430 498 C590 490 680 510 815 495 C930 482 1010 500 1072 492 L1072 584 L28 584Z" fill="#a9cfdf" opacity=".9"/>
      <path d="M28 500 C180 478 300 505 430 498 C590 490 680 510 815 495 C930 482 1010 500 1072 492" fill="none" stroke="#438eae" strokeWidth="5" strokeDasharray="13 9"/>
      <g aria-label="Pollution pathways">
        <path d="M200 193 L275 304" stroke="#b17c34" strokeWidth="5" strokeDasharray="10 8" fill="none" markerEnd="url(#u9-pollution-arrow)"/>
        <path d="M550 193 L550 332" stroke="#a7654a" strokeWidth="5" strokeDasharray="10 8" fill="none" markerEnd="url(#u9-pollution-arrow)"/>
        <path d="M900 193 L825 297" stroke="#a7654a" strokeWidth="5" strokeDasharray="10 8" fill="none" markerEnd="url(#u9-pollution-arrow)"/>
        <path d="M770 294 C758 350 768 430 790 510" stroke="#a7654a" strokeWidth="5" strokeDasharray="10 8" fill="none" markerEnd="url(#u9-pollution-arrow)"/>
      </g>
      <text x="75" y="540" fontSize="20" fontWeight="900" fill="#245d7a">GROUNDWATER</text>
      <text x="75" y="566" fontSize="16" fill="#315d76">Some pollutants can seep through soil into underground water.</text>
      <text x="810" y="550" fontSize="15" fontWeight="800" fill="#245d7a">Water table</text>
      <text x="810" y="573" fontSize="14" fill="#315d76">Upper level of saturated ground</text>
    </svg>
    </div>
    <p className="u9-caption">Rain can wash fertilisers, soil, sewage and industrial chemicals from land into rivers. Some contaminants can also seep through soil into groundwater. Contamination may be invisible, so clear-looking water is not proof that it is safe to drink.</p>
  </div>;
}

function DistillationDiagram() {
  return <div className="u9-diagram-card" role="group" aria-label="Detailed simple-distillation apparatus with labelled thermometer, distillation flask, vapour tube, water-cooled condenser, coolant connections and receiver">
    <div className="u9-diagram-viewport u9-diagram-viewport--detailed" tabIndex={0} role="group" aria-label="Detailed simple-distillation apparatus; scroll horizontally on a narrow screen">
      <svg viewBox="0 0 1400 820" role="img" aria-labelledby="u9-distil-title u9-distil-desc">
        <title id="u9-distil-title">Simple distillation: separating pure water from dissolved, non-volatile substances</title>
        <desc id="u9-distil-desc">Impure water is heated in a distillation flask. A thermometer measures the vapour temperature at the still head. Water vapour travels through the delivery tube and inner tube of a sloping Liebig condenser. Cooling water enters the outer jacket through the lower connection at the receiver end and leaves through the upper connection at the flask end, flowing opposite to the vapour. The vapour condenses and runs into a receiving flask as distillate. Non-volatile dissolved substances remain in the boiling flask. The apparatus is open to the atmosphere and must never be sealed while heated.</desc>
        <defs>
          <marker id="u9-distil-water-arrow" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto"><path d="M1 1 L14 8 L1 15 L4.5 8 Z" fill="#2488b2"/></marker>
          <marker id="u9-distil-vapour-arrow" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto"><path d="M1 1 L14 8 L1 15 L4.5 8 Z" fill="#d66f45"/></marker>
          <marker id="u9-distil-leader-dot" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="5" refY="5"><circle cx="5" cy="5" r="4" fill="#6a8799"/></marker>
        </defs>
        <rect x="12" y="12" width="1376" height="796" rx="22" fill="#f8fbfd" stroke="#d8e6ee" strokeWidth="2"/>
        <text x="700" y="52" textAnchor="middle" fontSize="26" fontWeight="900" fill="#2b607a">SIMPLE DISTILLATION OF IMPURE WATER</text>
        <text x="700" y="78" textAnchor="middle" fontSize="16" fill="#58788c">The water evaporates, condenses, and is collected separately from non-volatile impurities</text>

        {/* Apparatus area */}
        <rect x="32" y="102" width="950" height="650" rx="18" fill="#ffffff" stroke="#d3e3eb" strokeWidth="2"/>
        <text x="487" y="137" textAnchor="middle" fontSize="19" fontWeight="900" fill="#315d76">APPARATUS AND FLOW PATH</text>

        {/* Distillation flask and still head */}
        <g>
          <path d="M135 350 L135 487 C135 536 185 575 270 575 C355 575 405 536 405 487 L405 350 C405 308 372 278 333 278 H207 C168 278 135 308 135 350Z" fill="#ffffff" stroke="#5f8298" strokeWidth="7"/>
          <path d="M145 462 Q270 441 395 462 L395 488 C395 535 347 563 270 563 C193 563 145 535 145 488Z" fill="#8dc4db"/>
          <circle cx="210" cy="520" r="8" fill="#a47b41"/><circle cx="268" cy="537" r="8" fill="#a47b41"/><circle cx="328" cy="519" r="8" fill="#a47b41"/>
          <text x="270" y="493" textAnchor="middle" fontSize="16" fontWeight="800" fill="#245d7a">Impure water</text>
          <path d="M226 278 V228 H316 V278" stroke="#5f8298" strokeWidth="9" fill="none"/>
          <rect x="218" y="216" width="106" height="18" rx="6" fill="#647f91"/>
          {/* Thermometer in the still head */}
          <path d="M270 132 V300" stroke="#425b6b" strokeWidth="5" strokeLinecap="round"/>
          <circle cx="270" cy="301" r="9" fill="#d96c4a" stroke="#9f4937" strokeWidth="2"/>
          <path d="M253 213 H287" stroke="#425b6b" strokeWidth="5"/>
          {/* Vapour delivery side arm */}
          <path d="M316 260 H430 V300 H495" stroke="#5f8298" strokeWidth="17" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
          <path d="M328 260 H424 V300 H490" stroke="#d9edf4" strokeWidth="6" fill="none" strokeLinejoin="round"/>
          <path d="M356 260 H424 V300 H490" stroke="#d66f45" strokeWidth="4" strokeDasharray="9 6" fill="none" markerEnd="url(#u9-distil-vapour-arrow)"/>
          {/* Non-volatile solute stays in flask */}
          {/* Heat source */}
          <path d="M220 626 C192 602 220 590 230 577 C244 594 251 609 238 626 M286 626 C274 604 299 589 309 577 C326 600 333 613 305 626" fill="#f3a34f" stroke="#d77d42" strokeWidth="3"/>
          <rect x="190" y="626" width="153" height="14" rx="5" fill="#647f91"/>
          <path d="M204 640 L188 666 M329 640 L345 666 M187 666 H346" stroke="#647f91" strokeWidth="6" fill="none" strokeLinecap="round"/>
          <rect x="250" y="642" width="34" height="40" rx="5" fill="#70899a" stroke="#506b7d" strokeWidth="2"/>
          <rect x="232" y="682" width="70" height="8" rx="4" fill="#506b7d"/>
          <text x="267" y="706" textAnchor="middle" fontSize="15" fontWeight="900" fill="#9a5e2e">BUNSEN BURNER / GENTLE HEAT</text>
          {/* Number markers */}
          <g fontSize="17" fontWeight="900" textAnchor="middle" fill="#ffffff">
            <circle cx="370" cy="520" r="18" fill="#247d9e"/><text x="370" y="526">1</text>
            <circle cx="300" cy="167" r="18" fill="#247d9e"/><text x="300" y="173">2</text>
            <circle cx="455" cy="245" r="18" fill="#247d9e"/><text x="455" y="251">3</text>
            <circle cx="700" cy="390" r="18" fill="#247d9e"/><text x="700" y="396">4</text>
            <circle cx="785" cy="500" r="18" fill="#247d9e"/><text x="785" y="506">5</text>
            <circle cx="545" cy="240" r="18" fill="#247d9e"/><text x="545" y="246">6</text>
            <circle cx="880" cy="620" r="18" fill="#247d9e"/><text x="880" y="626">7</text>
            <circle cx="370" cy="650" r="18" fill="#247d9e"/><text x="370" y="656">8</text>
          </g>
        </g>

        {/* Liebig condenser: outer water jacket and inner vapour tube */}
        <g>
          <path d="M490 300 L812 448" stroke="#5f8298" strokeWidth="92" strokeLinecap="round" fill="none"/>
          <path d="M490 300 L812 448" stroke="#dceff6" strokeWidth="78" strokeLinecap="round" fill="none"/>
          <path d="M490 300 L812 448" stroke="#5f8298" strokeWidth="19" strokeLinecap="round" fill="none"/>
          {/* Vapour moves through the inner tube from the boiling flask toward the receiver. */}
          
          <text x="610" y="280" fontSize="15" fontWeight="900" fill="#9d4e35">WATER VAPOUR</text>
          {/* Coolant connections: in at lower (receiver) end; out at upper (flask) end */}
          <path d="M500 256 L500 214" stroke="#5f8298" strokeWidth="15" strokeLinecap="round" fill="none"/>
          <path d="M500 242 L500 204" stroke="#2488b2" strokeWidth="5" fill="none" markerEnd="url(#u9-distil-water-arrow)"/>
          <path d="M820 475 L820 520" stroke="#5f8298" strokeWidth="15" strokeLinecap="round" fill="none"/>
          <path d="M820 520 L820 485" stroke="#2488b2" strokeWidth="5" fill="none" markerEnd="url(#u9-distil-water-arrow)"/>
          {/* Coolant moves through jacket in opposite direction to vapour */}
          <path d="M790 435 L540 320" stroke="#2488b2" strokeWidth="5" strokeLinecap="round" fill="none" markerEnd="url(#u9-distil-water-arrow)"/>
          
          {/* Condensate outlet into receiver */}
          <path d="M812 448 L850 480 L900 548" stroke="#5f8298" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          
          
        </g>

        {/* Receiving flask */}
        <g>
          <path d="M855 535 L855 615 C855 665 879 688 915 688 C951 688 975 665 975 615 L975 535" fill="#ffffff" stroke="#5f8298" strokeWidth="7"/>
          <path d="M863 635 Q915 649 967 635 L967 642 C967 670 945 680 915 680 C885 680 863 670 863 642Z" fill="#8dc4db"/>
          <text x="900" y="706" textAnchor="middle" fontSize="15" fontWeight="900" fill="#315d76">DISTILLED WATER</text>
          <path d="M862 620 L855 620" stroke="#607d91" strokeWidth="2.5" fill="none"/>
        </g>
        {/* Red dashed arrow is drawn last so the outlet tube cannot hide the flow direction. */}
        <path d="M530 319 L812 448 L850 480 L900 530" stroke="#d66f45" strokeWidth="5" strokeLinecap="round" strokeDasharray="9 7" fill="none" markerEnd="url(#u9-distil-vapour-arrow)"/>

        {/* Visible numbered callouts for the condenser and receiver (drawn above the glassware). */}
        <g fontSize="17" fontWeight="900" textAnchor="middle" fill="#ffffff">
          <circle cx="720" cy="360" r="18" fill="#247d9e"/><text x="720" y="366">4</text>
          <circle cx="835" cy="626" r="18" fill="#247d9e"/><text x="835" y="632">7</text>
        </g>
        {/* Clarifying diagram notes */}
        <rect x="52" y="716" width="855" height="26" rx="8" fill="#fff8ef" stroke="#e8c8a7"/>
        <text x="479" y="734" textAnchor="middle" fontSize="13" fontWeight="700" fill="#80572f">Keep the apparatus open to the atmosphere. Heat gently and do not allow the flask to boil dry.</text>

        {/* Parts guide panel */}
        <rect x="985" y="102" width="383" height="650" rx="18" fill="#ffffff" stroke="#d3e3eb" strokeWidth="2"/>
        <text x="1176" y="141" textAnchor="middle" fontSize="20" fontWeight="900" fill="#315d76">PARTS AND THEIR JOBS</text>
        <g fontSize="16" fill="#405f73">
          <circle cx="1027" cy="190" r="17" fill="#247d9e"/><text x="1027" y="196" textAnchor="middle" fontWeight="900" fill="white">1</text>
          <text x="1059" y="186" fontSize="17" fontWeight="900" fill="#2b607a">Distillation flask</text><text x="1059" y="209">Holds the impure-water mixture.</text><text x="1059" y="229">Non-volatile solutes stay behind.</text>

          <circle cx="1027" cy="262" r="17" fill="#247d9e"/><text x="1027" y="268" textAnchor="middle" fontWeight="900" fill="white">2</text>
          <text x="1059" y="258" fontSize="17" fontWeight="900" fill="#2b607a">Thermometer</text><text x="1059" y="281">Measures vapour temperature;</text><text x="1059" y="301">bulb sits level with the side arm.</text>

          <circle cx="1027" cy="346" r="17" fill="#247d9e"/><text x="1027" y="352" textAnchor="middle" fontWeight="900" fill="white">3</text>
          <text x="1059" y="342" fontSize="17" fontWeight="900" fill="#2b607a">Delivery tube</text><text x="1059" y="365">Carries vapour into the condenser.</text>

          <circle cx="1027" cy="418" r="17" fill="#247d9e"/><text x="1027" y="424" textAnchor="middle" fontWeight="900" fill="white">4</text>
          <text x="1059" y="414" fontSize="17" fontWeight="900" fill="#2b607a">Liebig condenser</text><text x="1059" y="437">Inner tube carries vapour; outer</text><text x="1059" y="457">jacket carries cooling water.</text>

          <circle cx="1027" cy="500" r="17" fill="#247d9e"/><text x="1027" y="506" textAnchor="middle" fontWeight="900" fill="white">5</text>
          <text x="1059" y="496" fontSize="17" fontWeight="900" fill="#2b607a">Cooling-water inlet</text><text x="1059" y="519">Water enters at the lower end.</text>

          <circle cx="1027" cy="572" r="17" fill="#247d9e"/><text x="1027" y="578" textAnchor="middle" fontWeight="900" fill="white">6</text>
          <text x="1059" y="568" fontSize="17" fontWeight="900" fill="#2b607a">Cooling-water outlet</text><text x="1059" y="591">Water leaves at the upper end.</text>

          <circle cx="1027" cy="644" r="17" fill="#247d9e"/><text x="1027" y="650" textAnchor="middle" fontWeight="900" fill="white">7</text>
          <text x="1059" y="640" fontSize="17" fontWeight="900" fill="#2b607a">Receiving flask</text><text x="1059" y="663">Collects the condensed distillate.</text>

          <circle cx="1027" cy="710" r="17" fill="#247d9e"/><text x="1027" y="716" textAnchor="middle" fontWeight="900" fill="white">8</text>
          <text x="1059" y="706" fontSize="17" fontWeight="900" fill="#2b607a">Heat source</text><text x="1059" y="729">Provides energy for evaporation.</text>
        </g>
        <rect x="1005" y="765" width="354" height="28" rx="8" fill="#edf7fb" stroke="#b7d6e4"/>
        <text x="1182" y="784" textAnchor="middle" fontSize="13" fontWeight="800" fill="#286783">Coolant flows opposite to the vapour.</text>
      </svg>
    </div>
    <p className="u9-caption">The thermometer measures the temperature of the vapour. Vapour travels through the inner tube of the condenser and becomes liquid again. Cooling water enters the outer jacket at the lower end and leaves at the upper end, flowing opposite to the vapour so the jacket stays full. Non-volatile dissolved substances remain in the boiling flask. Never seal heated apparatus.</p>
  </div>;
}

function WaterCompositionDiagram() {
  return <div className="u9-diagram-card" role="group" aria-label="Electrolysis of water produces two hydrogen molecules for every oxygen molecule">
    <svg viewBox="0 0 1000 390" role="img" aria-labelledby="u9-electrolysis-title u9-electrolysis-desc">
      <title id="u9-electrolysis-title">Electrolysis shows water contains hydrogen and oxygen</title>
      <desc id="u9-electrolysis-desc">Two water molecules, each with one oxygen atom bonded to two hydrogen atoms, are separated by electrical energy into two hydrogen molecules and one oxygen molecule. This gives a hydrogen-to-oxygen gas ratio of two to one.</desc>
      <rect x="12" y="12" width="976" height="366" rx="20" fill="#f8fbfd" stroke="#d8e6ee"/>
      <rect x="36" y="56" width="360" height="250" rx="16" fill="#edf7fb" stroke="#9fc6d8" strokeWidth="2"/>
      <text x="216" y="88" textAnchor="middle" fontSize="19" fontWeight="900" fill="#2e6079">BEFORE: WATER MOLECULES</text>
      <g stroke="#66889d" strokeWidth="9" strokeLinecap="round"><path d="M150 182 L112 132 M150 182 L188 132 M284 182 L246 132 M284 182 L322 132"/></g>
      <g fill="#d95749" stroke="#a93e35" strokeWidth="2"><circle cx="150" cy="182" r="30"/><circle cx="284" cy="182" r="30"/></g>
      <g fill="#e8f3fa" stroke="#4d91b5" strokeWidth="3"><circle cx="112" cy="132" r="21"/><circle cx="188" cy="132" r="21"/><circle cx="246" cy="132" r="21"/><circle cx="322" cy="132" r="21"/></g>
      <g fontSize="19" fontWeight="900" textAnchor="middle"><text x="150" y="189" fill="white">O</text><text x="284" y="189" fill="white">O</text><text x="112" y="139" fill="#2c627e">H</text><text x="188" y="139" fill="#2c627e">H</text><text x="246" y="139" fill="#2c627e">H</text><text x="322" y="139" fill="#2c627e">H</text></g>
      <text x="216" y="252" textAnchor="middle" fontSize="15" fill="#315d76">Each molecule contains 2 H atoms + 1 O atom</text>
      <path d="M420 175 H475 M461 161 L477 175 L461 189" stroke="#397f9b" strokeWidth="5" fill="none"/>
      <path d="M510 116 L488 169 H519 L495 229 L549 158 H518 L540 116Z" fill="#e8b64d" stroke="#a77a2e" strokeWidth="2"/>
      <text x="519" y="258" textAnchor="middle" fontSize="16" fontWeight="800" fill="#876324">ELECTRICAL</text><text x="519" y="278" textAnchor="middle" fontSize="16" fontWeight="800" fill="#876324">ENERGY</text>
      <path d="M563 175 H605 M591 161 L607 175 L591 189" stroke="#397f9b" strokeWidth="5" fill="none"/>
      <rect x="628" y="56" width="336" height="250" rx="16" fill="#f7fbf8" stroke="#b9d9ca" strokeWidth="2"/>
      <text x="796" y="88" textAnchor="middle" fontSize="19" fontWeight="900" fill="#2e6b55">AFTER: GASES FORMED</text>
      <g fill="#e8f3fa" stroke="#4d91b5" strokeWidth="3"><circle cx="720" cy="145" r="22"/><circle cx="766" cy="145" r="22"/><circle cx="720" cy="219" r="22"/><circle cx="766" cy="219" r="22"/></g>
      <g fill="#d95749" stroke="#a93e35" strokeWidth="3"><circle cx="864" cy="182" r="22"/><circle cx="910" cy="182" r="22"/></g>
      <g fontSize="17" fontWeight="900" textAnchor="middle"><text x="720" y="151" fill="#2c627e">H</text><text x="766" y="151" fill="#2c627e">H</text><text x="720" y="225" fill="#2c627e">H</text><text x="766" y="225" fill="#2c627e">H</text><text x="864" y="188" fill="white">O</text><text x="910" y="188" fill="white">O</text></g>
      <text x="743" y="270" textAnchor="middle" fontSize="16" fontWeight="800" fill="#2e6079">2 H₂ molecules</text><text x="887" y="270" textAnchor="middle" fontSize="16" fontWeight="800" fill="#8a5636">1 O₂ molecule</text>
      <text x="390" y="344" textAnchor="end" fontSize="22" fontWeight="900" fill="#315d76">2H₂O(l)</text><path d="M420 337 H478 M465 324 L480 337 L465 350" stroke="#315d76" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/><text x="510" y="344" textAnchor="start" fontSize="22" fontWeight="900" fill="#315d76">2H₂(g) + O₂(g)</text>
    </svg>
    <p className="u9-caption">Each red circle represents oxygen; each blue circle represents hydrogen. The particle model shows the 2:1 molecule ratio from the balanced equation. At the same temperature and pressure, the gas-volume ratio is also 2:1.</p>
  </div>;
}

export const waterLessons: WaterLesson[] = [
  {
    id: 'sources-and-types-of-water', lessonNumber: '01', title: 'Sources and types of water', titleLead: 'Where does', titleAccent: 'water come from?', duration: '14–18 min',
    summary: 'Identify natural water sources, compare freshwater and seawater, and understand why water from nature is not automatically safe to drink.',
    learningObjectives: ['Name major natural sources of water and explain how they are formed or replenished.', 'Distinguish surface water from groundwater.', 'Compare freshwater, seawater, soft water, hard water, pure water and potable water.', 'Explain why water should be protected, treated and tested before drinking.'],
    sections: [
      { id: 'water-meaning-source', label: 'Water around us', kicker: 'Start with familiar examples', title: 'Water reaches us through different natural sources', content: <><PlainWords>Water is found in rain, rivers, lakes, ponds, underground rocks and oceans. People collect it from these sources for homes, farms and industries. The source tells us where the water came from; it does not automatically tell us whether it is safe to drink.</PlainWords><p>Water moves continuously through the environment. The Sun warms water at the surface and some changes into water vapour. The vapour cools and forms clouds. Water returns to the ground as rain, then flows over land or soaks into the soil. This movement is called the <b>water cycle</b>.</p><WaterSourcesDiagram/><DataTable headers={['Source','How it forms or is collected','Important point']} rows={[[<b>Rainwater</b>,'Water that falls from clouds as precipitation.','Can collect dust, smoke or germs from the air and roof surfaces.'],[<b>Rivers and streams</b>,'Flowing surface water supplied by rain, springs and runoff.','Can receive soil, sewage and farm runoff.'],[<b>Lakes and ponds</b>,'Water collected in natural or artificial depressions.','Still water can collect algae and pollutants.'],[<b>Wells and boreholes</b>,'Groundwater reached by digging or drilling.','Protected groundwater may be cleaner, but it still needs testing.'],[<b>Springs</b>,'Groundwater that naturally reaches the land surface.','May be collected locally; protection from nearby waste is important.'],[<b>Seas and oceans</b>,'Large bodies of saline water.','Contains much dissolved salt; needs desalination before drinking.']]}/></> },
      { id: 'surface-groundwater', label: 'Surface and groundwater', kicker: 'Two broad natural groups', title: 'Some water is above ground; some is stored below it', content: <><p><b>Surface water</b> is water found on the Earth's surface, such as rivers, streams, lakes and reservoirs. It is easy to access in many places, but it can be exposed to human activity, animal waste and runoff.</p><p><b>Groundwater</b> is water held in the small spaces and cracks within soil and rocks. Rainwater can soak into the ground and gradually add to underground water stores. A rock or sediment layer that can store and transmit useful amounts of groundwater is called an <b>aquifer</b>.</p><ul className="u7-bullet-list"><li>A <b>well</b> is usually a dug or shallow opening that reaches groundwater.</li><li>A <b>borehole</b> is drilled to reach water-bearing layers deeper underground.</li><li>A <b>spring</b> occurs where groundwater flows naturally out at the surface.</li></ul><Note tone="mint">Do not assume all groundwater is safe. Poorly sealed wells, damaged boreholes, nearby latrines, fuel leaks or naturally occurring minerals can affect groundwater quality.</Note></> },
      { id: 'types-and-terms', label: 'Types and key terms', kicker: 'Words that must not be confused', title: 'Freshwater, hard water, pure water and potable water mean different things', content: <><DataTable headers={['Term','Meaning','Example or clue']} rows={[[<b>Freshwater</b>,'Water with a relatively low concentration of dissolved salts.','Many rivers, lakes and groundwater sources.'],[<b>Seawater</b>,'Water containing a much higher concentration of dissolved salts.','Ocean water.'],[<b>Soft water</b>,'Water containing little calcium and magnesium ions that cause hardness.','Usually forms lather readily with soap.'],[<b>Hard water</b>,'Water containing dissolved calcium and/or magnesium ions at levels that cause hardness.','Often forms soap scum and scale.'],[<b>Pure water</b>,'Water made up almost entirely of H₂O, with dissolved substances removed.','Distilled water in a suitable clean container.'],[<b>Potable water</b>,'Water that is safe to drink according to appropriate health standards.','Properly treated and monitored drinking water.']]}/><p><b>Pure and potable are not identical.</b> Pure water has almost no dissolved substances. Potable water may contain small, controlled amounts of dissolved minerals, but must meet safety requirements. A sample can look clear and still contain harmful microorganisms or chemicals.</p><Note tone="amber">Never identify drinking-water safety by taste, smell or appearance alone. Water safety requires suitable treatment, protected storage and testing.</Note></> },
      { id: 'source-protection', label: 'Protecting sources', kicker: 'Why source management matters', title: 'Keeping pollution away is easier than removing every pollutant later', content: <><p>Water sources should be protected from sewage, animal waste, rubbish, oil, pesticides, fertilisers and industrial chemicals. Wells should be covered and built away from possible sources of faecal contamination. Rivers and reservoirs need catchment protection, controlled waste disposal and regular monitoring.</p><p>Communities also need reliable sanitation and drainage. When waste enters a river or seeps through soil, it can affect people and ecosystems far from the original source.</p><Note tone="blue">Remember: a natural source is only the starting point. Before water is supplied for drinking, its quality must be checked and appropriate treatment must be selected.</Note></> },
    ],
    recap: ['Water comes from rain, surface water, groundwater and saline seas or oceans.', 'Surface water is above ground; groundwater is stored in soil and rock.', 'Freshwater does not automatically mean potable water.', 'Pure water and potable water are different ideas.', 'Protecting a water source reduces the risk of contamination.'],
    quizPath: '/lessons/sources-and-types-of-water/quiz', quizDescription: 'Check your understanding of water sources, the water cycle and important water-quality terms.', sidebarTip: 'For each source, ask two questions: where did the water come from, and what might have entered it?', sources: waterSources,
    quiz: { description: 'A 12-question check on natural sources, surface water, groundwater and safe-water vocabulary.', sidebarTip: 'Do not mix up freshwater, soft water, pure water and potable water.', artLabel: 'Water sources', artCaption: 'Rain, surface water and groundwater are connected.' },
    nextLesson: { title: 'Properties and uses of water', path: '/lessons/properties-and-uses-of-water' },
  },
  {
    id: 'properties-and-uses-of-water', lessonNumber: '02', title: 'Properties and uses of water', titleLead: 'What makes', titleAccent: 'water special?', duration: '16–20 min',
    summary: 'Explore the formula and shape of a water molecule, its important physical properties, and how these properties make water useful in everyday life.',
    learningObjectives: ['Interpret the formula H₂O and describe the shape and polarity of a water molecule.', 'State important physical properties of water using correct conditions and units.', 'Explain why water dissolves many ionic and polar substances.', 'Connect selected properties of water to its uses in homes, agriculture, transport and industry.'],
    sections: [
      { id: 'water-formula-structure', label: 'Formula and structure', kicker: 'A tiny molecule with a big effect', title: 'Each water molecule contains two hydrogen atoms and one oxygen atom', content: <><PlainWords>The formula H₂O tells us what is in one water molecule: two hydrogen atoms joined to one oxygen atom. The atoms share electrons. They do not sit in a straight line; the molecule is bent.</PlainWords><WaterMoleculeDiagram/><FormulaPanel title="Reading the formula H₂O" formula={<span>H<sub>2</sub>O</span>} variables={<>H = hydrogen; O = oxygen; the small subscript 2 applies only to H. There is no written subscript after O, so it means one oxygen atom.</>} steps={[{label:'Read the symbols',body:'H represents hydrogen and O represents oxygen.'},{label:'Read the subscript',body:'The small 2 after H means two hydrogen atoms.'},{label:'Count oxygen',body:'O has no subscript, so one oxygen atom is present.'},{label:'State the ratio',body:'Each water molecule has H:O = 2:1.'}]}/><p>Oxygen attracts the shared electrons more strongly than hydrogen. This makes the oxygen end slightly negative (δ-) and the hydrogen ends slightly positive (δ+). This uneven charge distribution makes water a <b>polar molecule</b>. The partial charges are not the same as full ionic charges.</p></> },
      { id: 'physical-properties', label: 'Physical properties', kicker: 'How pure water behaves', title: 'Water has measurable properties that help us identify and use it', content: <><DataTable headers={['Property','Description for pure water','Why it matters']} rows={[[<b>Appearance</b>,'Colourless, transparent, odourless and tasteless in small, clean samples.','Useful as a reference; appearance alone cannot prove safety.'],[<b>Freezing point</b>,'About 0 °C at standard atmospheric pressure.','Water freezes to form ice.'],[<b>Boiling point</b>,'About 100 °C at standard atmospheric pressure.','Water changes to steam; boiling point changes with pressure.'],[<b>Density</b>,'About 1.00 g cm⁻³ near 4 °C; maximum density is around 4 °C.','Ice is less dense than liquid water and floats.'],[<b>Solvent ability</b>,'Dissolves many ionic and polar substances.','Carries dissolved materials in living systems and industry.'],[<b>Specific heat capacity</b>,'Relatively high compared with many common liquids.','Water warms and cools relatively slowly.'],[<b>Surface tension</b>,'Relatively high because water molecules attract one another.','Helps form droplets and supports some small insects.']]}/><Note tone="blue">The values 0 °C and 100 °C assume approximately standard atmospheric pressure. At high altitude or in a pressure cooker, the boiling point is different.</Note></> },
      { id: 'solvent-and-cohesion', label: 'Solvent and surface', kicker: 'How water interacts', title: 'Polarity helps water dissolve many substances and cling to surfaces', content: <><p>A <b>solvent</b> is the substance that dissolves another substance. Water is often called a good or versatile solvent because its polar molecules can attract many ions and polar molecules. For example, when common salt dissolves, water molecules attract and surround sodium and chloride ions.</p><p>Water does not dissolve everything. Oil and many non-polar substances do not mix easily with water. So the phrase “universal solvent” is an informal nickname, not a literal scientific rule.</p><div className="u9-concept-grid"><article><strong>Cohesion</strong><p>Water molecules attract other water molecules. This contributes to surface tension.</p></article><article><strong>Adhesion</strong><p>Water molecules are attracted to other surfaces. This helps water spread on clean glass.</p></article><article><strong>Capillary action</strong><p>Water can rise through narrow spaces when adhesion and cohesion act together, as in thin plant vessels and paper.</p></article></div></> },
      { id: 'uses-of-water', label: 'Uses of water', kicker: 'Link properties to real life', title: 'The properties of water explain why it is useful in so many activities', content: <><DataTable headers={['Use','Property or feature that helps','Example']} rows={[[<b>Drinking and body functions</b>,'Water is a liquid solvent and a major component of body fluids.','Transport of dissolved nutrients and waste.'],[<b>Washing</b>,'Water flows over surfaces and dissolves many dirt components.','Bathing, laundry and cleaning.'],[<b>Agriculture</b>,'Liquid water can move through soil and be absorbed by roots.','Irrigation and livestock care.'],[<b>Cooling</b>,'High specific heat capacity allows water to absorb much heat with a smaller temperature rise.','Radiators and industrial cooling systems.'],[<b>Transport</b>,'Liquid water can support boats and ships; ice floats on water.','Rivers, lakes and sea routes.'],[<b>Industry</b>,'Water is used as a solvent, coolant, cleaning agent and raw material.','Food processing, manufacturing and steam generation.'],[<b>Hydroelectric power</b>,'Moving or falling water transfers energy to turbines.','Dams and hydroelectric stations.']]}/><Note tone="mint">Water is valuable because its properties suit many jobs. But the quality required depends on the use: water for cooling, laboratory work and drinking may need different standards.</Note></> },
    ],
    recap: ['A water molecule is H₂O: two hydrogen atoms and one oxygen atom.', 'Water is bent and polar because electrons are shared unequally.', 'Pure water freezes near 0 °C and boils near 100 °C at standard pressure.', 'Water dissolves many ionic and polar substances, but not everything.', 'Cohesion, adhesion, solvent ability and high specific heat help explain water’s uses.'],
    quizPath: '/lessons/properties-and-uses-of-water/quiz', quizDescription: 'Apply the water molecule, physical properties and uses to everyday and scientific examples.', sidebarTip: 'Always state the conditions attached to a physical constant, especially pressure for boiling point.', sources: waterSources,
    quiz: { description: 'A 12-question check on H₂O, polarity, water properties and real-life applications.', sidebarTip: 'Connect each use to the property that makes it possible.', artLabel: 'Water molecule', artCaption: 'A bent, polar molecule made from hydrogen and oxygen.' },
    nextLesson: { title: 'Hardness and treatment of water', path: '/lessons/water-hardness-and-treatment' },
  },
  {
    id: 'water-hardness-and-treatment', lessonNumber: '03', title: 'Hardness and treatment of water', titleLead: 'Why does water', titleAccent: 'become hard?', duration: '18–22 min',
    summary: 'Find out what causes hard water, how soap reveals hardness, how temporary and permanent hardness differ, and how water is treated for public supply.',
    learningObjectives: ['Distinguish hard water from soft water using a soap test.', 'Explain the roles of calcium and magnesium ions in hardness.', 'Compare temporary and permanent hardness and describe how each can be reduced.', 'Explain the main stages of a typical water-treatment process.', 'Distinguish softening water from disinfecting it.'],
    sections: [
      { id: 'what-hardness-means', label: 'What hardness means', kicker: 'Dissolved minerals', title: 'Hard water contains calcium and magnesium ions', content: <><PlainWords>Some water contains dissolved minerals picked up as it passes through soil and rocks. If it contains enough calcium ions (Ca²⁺) or magnesium ions (Mg²⁺), it is called hard water. These ions interfere with soap, so soap does not form lather easily.</PlainWords><p>Soft water contains much lower levels of the ions responsible for hardness. Hardness is not the same as dirtiness: a clear water sample may be hard, and hard water is not automatically unsafe to drink.</p><HardnessTestDiagram/><p>The soap test is a simple comparison. Put equal volumes of each sample into clean labelled test tubes. Add the same amount of soap solution, stopper and shake each tube in the same way. Soft water usually forms lather more readily. Hard water may form a cloudy deposit called <b>scum</b>.</p></> },
      { id: 'types-hardness', label: 'Two types of hardness', kicker: 'What dissolved salt is present?', title: 'Temporary and permanent hardness are caused by different dissolved salts', content: <><DataTable headers={['Type','Main cause','Can boiling remove it?']} rows={[[<b>Temporary hardness</b>,'Dissolved calcium and magnesium hydrogencarbonates.','Boiling can remove much of it by causing insoluble material to form.'],[<b>Permanent hardness</b>,'Commonly dissolved calcium or magnesium sulfates and chlorides.','Ordinary boiling does not remove it. Other softening methods are needed.']]}/><p>“Temporary” does not mean the water is only hard for a short time by itself. It means the hardness can be removed by boiling. “Permanent” means boiling alone does not remove that hardness.</p><Note tone="amber">The real chemistry can be more complex when both calcium and magnesium compounds are present. The equations below show common school-level examples, not every possible water sample.</Note></> },
      { id: 'soap-equation', label: 'Why soap forms scum', kicker: 'Follow the particles', title: 'Calcium ions can react with soap to form an insoluble solid', content: <><p>Many soaps contain sodium salts of long-chain fatty acids. In water, they can form soap ions. Calcium ions in hard water react with these ions to form calcium soap, which does not dissolve well. This solid is the scum.</p><FormulaPanel title="Example equation for soap scum" formula={<span>2C<sub>17</sub>H<sub>35</sub>COONa(aq) + CaCl<sub>2</sub>(aq) → (C<sub>17</sub>H<sub>35</sub>COO)<sub>2</sub>Ca(s) + 2NaCl(aq)</span>} variables={<>Sodium stearate is used as a model soap; CaCl₂ represents a dissolved calcium salt. (aq) means dissolved in water; (s) means a solid has formed.</>} steps={[{label:'Identify the calcium ion',body:'CaCl₂ separates into Ca²⁺ and 2Cl⁻ ions in water.'},{label:'Identify the soap ion',body:'Each sodium stearate formula unit supplies one stearate ion, C₁₇H₃₅COO⁻.'},{label:'Balance the charges',body:'One Ca²⁺ needs two negatively charged stearate ions to make a neutral calcium soap.'},{label:'Read the products',body:'The calcium soap forms an insoluble solid (scum); sodium chloride remains dissolved.'}]}/><Note tone="blue">The equation shows why hard water wastes soap: some soap is used up making scum before a good lather can form.</Note></> },
      { id: 'removing-hardness', label: 'Removing hardness', kicker: 'Choose the method', title: 'Boiling removes temporary hardness; other methods are needed for permanent hardness', content: <><h3>1. Boiling: temporary hardness</h3><p>When calcium hydrogencarbonate solution is heated, it decomposes and forms solid calcium carbonate, carbon dioxide and water. The solid can then be separated from the water.</p><FormulaPanel title="Removal of temporary hardness by boiling" formula={<span>Ca(HCO<sub>3</sub>)<sub>2</sub>(aq) → CaCO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)</span>} variables={<>Ca = calcium; HCO₃ = hydrogencarbonate; (aq) = dissolved; (s) = solid; (g) = gas; (l) = liquid.</>} steps={[{label:'Start with dissolved calcium hydrogencarbonate',body:'The calcium and hydrogencarbonate ions are in the water.'},{label:'Heat the water',body:'Heating causes the hydrogencarbonate to break down.'},{label:'A solid forms',body:'Calcium carbonate is poorly soluble and forms a deposit called limescale.'},{label:'Separate the solid',body:'Allow the solid to settle, then filter or otherwise separate it from the water.'}]}/><h3>2. Washing soda: permanent hardness</h3><p>Washing soda is sodium carbonate, Na₂CO₃. It supplies carbonate ions that can combine with calcium ions to form insoluble calcium carbonate. The precipitate is then removed.</p><FormulaPanel title="Example: removing calcium sulfate hardness" formula={<span>CaSO<sub>4</sub>(aq) + Na<sub>2</sub>CO<sub>3</sub>(aq) → CaCO<sub>3</sub>(s) + Na<sub>2</sub>SO<sub>4</sub>(aq)</span>} variables={<>The calcium ion becomes part of solid calcium carbonate. Sodium sulfate remains dissolved in the water.</>} steps={[{label:'Identify the hardness ion',body:'The dissolved calcium sulfate supplies Ca²⁺ ions.'},{label:'Add sodium carbonate',body:'Na₂CO₃ supplies CO₃²⁻ ions.'},{label:'Form the precipitate',body:'Ca²⁺ and CO₃²⁻ combine in a 1:1 ratio to form CaCO₃(s).'}, {label:'Remove the solid',body:'Filter off the calcium carbonate. The remaining solution contains sodium sulfate.'}]}/><h3>3. Ion exchange</h3><p>Water passes through a material called an ion-exchange resin. The resin holds calcium and magnesium ions and releases sodium ions instead. This reduces hardness. The resin must be regenerated according to the equipment instructions when its capacity is used up.</p><FormulaPanel title="Simplified ion-exchange equation" formula={<span>2R–Na + Ca<sup>2+</sup> → R<sub>2</sub>–Ca + 2Na<sup>+</sup></span>} variables={<>R represents the resin. R–Na is resin holding sodium; R₂–Ca is resin holding calcium.</>} steps={[{label:'Hard water enters',body:'It contains dissolved calcium ions.'},{label:'The resin captures calcium',body:'The resin binds one Ca²⁺ ion.'},{label:'Sodium enters the water',body:'Two Na⁺ ions are released to balance the charge.'},{label:'Softened water leaves',body:'The calcium level is reduced, so hardness is reduced.'}]}/><DataTable headers={['Method','Main use','Key idea']} rows={[[<b>Boiling</b>,'Temporary hardness','Hydrogencarbonates decompose and an insoluble solid forms.'],[<b>Washing soda</b>,'Many forms of permanent hardness','Carbonate ions precipitate calcium or magnesium ions.'],[<b>Ion exchange</b>,'Temporary and permanent hardness','Calcium and magnesium are exchanged for sodium ions.'],[<b>Distillation</b>,'Dissolved salts and many non-volatile substances','Water evaporates, then condenses; many dissolved materials remain behind.']]}/></> },
      { id: 'water-treatment', label: 'Treating water for supply', kicker: 'From source to tap', title: 'A treatment plant uses several stages because different problems need different solutions', content: <><p>Water collected from a river, reservoir or groundwater source may contain leaves, sand, fine suspended particles and microorganisms. A typical treatment plant uses several steps. The exact process depends on the source and the quality required.</p><TreatmentPlantDiagram/><ol className="u9-step-list"><li><b>Screening:</b> bars or screens trap large objects such as leaves, sticks and rubbish.</li><li><b>Coagulation and flocculation:</b> a suitable coagulant, often an aluminium-based treatment chemical, helps very fine suspended particles join into larger clumps called flocs.</li><li><b>Sedimentation:</b> the flocs settle to the bottom and are removed as sludge.</li><li><b>Filtration:</b> water passes through filter media, commonly layers of sand and gravel, to remove remaining particles.</li><li><b>Disinfection:</b> an approved method such as chlorination or ultraviolet treatment is used to inactivate disease-causing microorganisms.</li><li><b>Storage and distribution:</b> treated water is kept in clean protected tanks and delivered through a maintained system.</li></ol><Note tone="amber">Softening and disinfection are different. Removing calcium and magnesium ions reduces hardness; it does not automatically kill germs. Boiling or chlorination can reduce microbial risk, but neither removes fuel, heavy metals or every dissolved chemical. Treatment must match the contaminant.</Note></> },
    ],
    recap: ['Hard water contains calcium and/or magnesium ions; soft water contains much less of them.', 'Temporary hardness is commonly caused by hydrogencarbonates and can be reduced by boiling.', 'Permanent hardness is commonly caused by sulfates or chlorides and is not removed by ordinary boiling.', 'Calcium ions react with soap to form scum.', 'Washing soda and ion exchange can reduce hardness.', 'Water treatment uses several stages; softening is not the same as disinfection.'],
    quizPath: '/lessons/water-hardness-and-treatment/quiz', quizDescription: 'Use equations, diagrams and treatment stages to explain how hard water is identified and softened.', sidebarTip: 'When you see a treatment method, ask what it removes: large rubbish, suspended particles, dissolved hardness ions or microorganisms.', sources: waterSources,
    quiz: { description: 'A 12-question assessment on hard water, soap scum, softening methods and public water treatment.', sidebarTip: 'Be able to tell temporary hardness from permanent hardness and select a suitable treatment.', artLabel: 'Water treatment', artCaption: 'Different stages solve different water-quality problems.' },
    nextLesson: { title: 'Water pollution and purity', path: '/lessons/water-pollution-and-purity' },
  },
  {
    id: 'water-pollution-and-purity', lessonNumber: '04', title: 'Water pollution and purity', titleLead: 'When water', titleAccent: 'becomes polluted', duration: '16–20 min',
    summary: 'Identify common pollutants, trace how they enter water, understand their effects, and explain why clear-looking water is not always safe.',
    learningObjectives: ['Define water pollution and classify common pollutants.', 'Explain how human activities introduce pollutants into water sources.', 'Describe effects of microbial, chemical and physical pollution.', 'Distinguish visual cleanliness, purity and potability.', 'Suggest practical ways to prevent pollution and protect water quality.'],
    sections: [
      { id: 'pollution-meaning', label: 'What pollution means', kicker: 'The main idea', title: 'Water is polluted when harmful substances or organisms make its quality worse', content: <><PlainWords>Water pollution happens when waste or other unwanted material enters water and makes it harmful or less suitable for people, animals, plants or other uses. The pollutant may be visible, like rubbish, or invisible, like bacteria or dissolved chemicals.</PlainWords><p>A pollutant is any substance or organism that causes pollution. The effect depends on what entered the water, how much is present, how long exposure lasts and how the water is used.</p><PollutionDiagram/></> },
      { id: 'pollutant-types', label: 'Types of pollutants', kicker: 'Group the problem', title: 'Different pollutants create different risks', content: <><DataTable headers={['Type','Examples','Possible effects']} rows={[[<b>Biological / microbial</b>,'Disease-causing bacteria, viruses, protozoa and parasites from faecal waste.','Can spread diarrhoea, cholera, typhoid and other infections.'],[<b>Organic waste</b>,'Sewage, food-processing waste and animal manure.','Microorganisms break down waste and may use up dissolved oxygen.'],[<b>Nutrients</b>,'Nitrates and phosphates from fertilisers, detergents and sewage.','Can cause excessive algae growth and eutrophication.'],[<b>Toxic chemicals</b>,'Some pesticides, solvents and industrial chemicals.','May poison organisms or cause long-term health effects.'],[<b>Heavy metals</b>,'Lead, mercury, cadmium and other metals from some industrial or mining sources.','Can accumulate in organisms and cause serious harm.'],[<b>Physical pollutants</b>,'Silt, plastic, suspended solids and hot-water discharge.','Can block light, damage habitats or change water temperature.'],[<b>Petroleum pollutants</b>,'Oil and fuel leaks or spills.','Can coat organisms, damage habitats and make water unsuitable for use.']]}/><Note tone="blue">One water sample can contain more than one type of pollutant. A single treatment method may not remove them all.</Note></> },
      { id: 'effects-of-pollution', label: 'Effects of pollution', kicker: 'Follow the consequences', title: 'Polluted water can harm health, ecosystems and local livelihoods', content: <><h3>1. Human health</h3><p>Water contaminated by faecal waste can carry disease-causing microorganisms. Chemical contaminants may also create risks, sometimes after repeated or long-term exposure. The type of risk depends on the contaminant and its concentration.</p><h3>2. Aquatic life</h3><p>Excess nutrients can cause rapid growth of algae. When large amounts of algae die, microorganisms decompose them and use dissolved oxygen. The oxygen level may fall so low that fish and other aquatic animals struggle or die. This process is part of <b>eutrophication</b>.</p><h3>3. Communities and the economy</h3><p>Polluted water can make fishing, farming, recreation and water supply more difficult. Communities may have to spend more money on treatment or travel farther to find a safer source.</p><div className="u9-concept-grid"><article><strong>Visible warning signs</strong><p>Unusual colour, floating waste, oil film, excessive algae or a strange smell should raise concern.</p></article><article><strong>Invisible risks</strong><p>Some pathogens and dissolved chemicals cannot be seen, smelled or tasted.</p></article></div></> },
      { id: 'purity-and-potability', label: 'Purity and safety', kicker: 'Do not rely on appearance', title: 'Clear water is not necessarily pure or safe to drink', content: <><p><b>Pure water</b> is almost entirely H₂O. <b>Potable water</b> is water that is safe to drink under the relevant health standards. Drinking water may contain small amounts of harmless dissolved minerals, but harmful microorganisms and dangerous chemical levels must be controlled.</p><p>Water-quality checks can include physical observations, chemical tests and microbiological tests. A laboratory may measure pH, turbidity, dissolved substances and indicator organisms such as <i>E. coli</i>. A visual check alone is not enough.</p><DataTable headers={['Observation or test','What it can tell us','What it cannot prove by itself']} rows={[[<b>Colour / turbidity</b>,'Whether suspended material or unusual colour is present.','Clear water is not guaranteed germ-free.'],[<b>Odour</b>,'May indicate some contaminants or treatment issues.','No smell does not prove water is safe.'],[<b>pH</b>,'Whether water is acidic, near neutral or alkaline.','A suitable pH does not rule out pathogens or toxic chemicals.'],[<b>Microbial testing</b>,'Can detect indicator organisms or specific pathogens.','A single result does not assess every chemical contaminant.'],[<b>Chemical analysis</b>,'Can measure selected dissolved chemicals and metals.','Only the substances tested are assessed.']]}/><Note tone="amber">Never taste unknown water or drink a sample just because it looks clean. Follow public-health advice and use a verified safe supply.</Note></> },
      { id: 'prevent-pollution', label: 'Prevention', kicker: 'Protect water before it is polluted', title: 'Good sanitation, waste control and source protection reduce contamination', content: <><ul className="u9-check-list"><li>Dispose of sewage and refuse through safe, approved systems; never dump them into rivers or drains that lead to water sources.</li><li>Store fuel, oil, pesticides and industrial chemicals securely, away from wells and waterways.</li><li>Use fertilisers responsibly and reduce farm runoff through suitable soil and drainage management.</li><li>Protect wells and boreholes with sound covers, raised aprons and drainage that carries dirty water away.</li><li>Maintain treatment plants, water pipes and storage tanks so treated water is not contaminated again.</li><li>Monitor water quality and report spills, unusual discharges or damaged water infrastructure.</li></ul><Note tone="mint">Pollution prevention works best when households, farmers, industries, communities and government agencies all manage waste responsibly.</Note></> },
    ],
    recap: ['Water pollution occurs when harmful materials or organisms reduce water quality.', 'Pollutants may be microbial, organic, nutrient-based, chemical, physical or petroleum-based.', 'Faecal contamination can spread disease; excess nutrients can reduce oxygen in water.', 'Clear, odourless water is not automatically safe.', 'Potable water must meet health-based safety requirements.', 'Source protection and proper waste management prevent pollution.'],
    quizPath: '/lessons/water-pollution-and-purity/quiz', quizDescription: 'Apply what you have learned about pollutant sources, water-quality evidence and prevention.', sidebarTip: 'For every pollutant, identify its source, route into water, possible effect and a sensible prevention measure.', sources: waterSources,
    quiz: { description: 'A 12-question check on pollutant types, their effects, water safety and prevention.', sidebarTip: 'Remember that appearance, pH and smell alone cannot prove drinking-water safety.', artLabel: 'Water pollution', artCaption: 'Pollutants can enter water from farms, homes and industry.' },
    nextLesson: { title: 'Laboratory preparation of water', path: '/lessons/laboratory-preparation-of-water' },
  },
  {
    id: 'laboratory-preparation-of-water', lessonNumber: '05', title: 'Laboratory preparation of water', titleLead: 'How can we', titleAccent: 'prepare water?', duration: '18–22 min',
    summary: 'Understand how water can be formed from hydrogen and oxygen, how pure water is obtained by distillation, and how chemists test for the presence of water.',
    learningObjectives: ['Write and explain the balanced equation for forming water from hydrogen and oxygen.', 'Explain the electrolysis equation and the 2:1 hydrogen-to-oxygen gas ratio.', 'Describe simple distillation and label its main apparatus.', 'Explain why dissolved non-volatile substances remain in the distillation flask.', 'Describe a chemical test for water and state the key laboratory precautions.'],
    sections: [
      { id: 'water-formation', label: 'Forming water', kicker: 'Chemical combination', title: 'Hydrogen and oxygen can react to form water', content: <><PlainWords>Water can be made by a chemical reaction between hydrogen gas and oxygen gas. The atoms rearrange and join in groups of two hydrogen atoms and one oxygen atom. The product is water.</PlainWords><FormulaPanel title="Word equation" formula={<span>hydrogen + oxygen → water</span>} variables={<>The arrow means “react to form”. The substances on the left are reactants; the substance on the right is the product.</>} steps={[{label:'Write the formulae',body:'Hydrogen gas is H₂, oxygen gas is O₂, and water is H₂O.'},{label:'Start with the unbalanced equation',body:'H₂ + O₂ → H₂O.'},{label:'Balance oxygen first',body:'There are two oxygen atoms on the left but one on the right. Put 2 before H₂O.'},{label:'Balance hydrogen',body:'There are now four hydrogen atoms on the right. Put 2 before H₂.'},{label:'Check every atom',body:'Left: 4 H and 2 O. Right: 4 H and 2 O. The equation is balanced.'}]}/><FormulaPanel title="Balanced chemical equation" formula={<span>2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(l)</span>} variables={<>The coefficient 2 means two molecules or two moles. The subscript 2 is part of the formula. (g) = gas; (l) = liquid.</>} steps={[{label:'Count the reactants',body:'2H₂ contains 2 × 2 = 4 hydrogen atoms. O₂ contains 2 oxygen atoms.'},{label:'Count the products',body:'2H₂O contains 2 × 2 = 4 hydrogen atoms and 2 × 1 = 2 oxygen atoms.'},{label:'Compare both sides',body:'Four hydrogen atoms and two oxygen atoms appear on each side.'},{label:'Interpret the reaction',body:'Hydrogen and oxygen are chemically combined to make a new substance, water.'}]}/><Note tone="amber">Hydrogen–oxygen mixtures can ignite violently or explode. This reaction is included to explain the chemistry. It must never be attempted by students as a home or unsupervised activity; any demonstration is for a trained teacher using an approved, controlled procedure.</Note></> },
      { id: 'electrolysis-water', label: 'Breaking water apart', kicker: 'A reverse chemical change', title: 'Electricity can decompose water into hydrogen and oxygen', content: <><p><b>Electrolysis</b> uses electrical energy to make a compound break down into simpler substances. In water electrolysis, hydrogen gas forms at the negative electrode (cathode) and oxygen gas forms at the positive electrode (anode), under suitable conditions.</p><WaterCompositionDiagram/><FormulaPanel title="Electrolysis equation" formula={<span>2H<sub>2</sub>O(l) → 2H<sub>2</sub>(g) + O<sub>2</sub>(g)</span>} variables={<>The arrow points from water to the products. Electricity supplies the energy for the decomposition. The equation is balanced: four H atoms and two O atoms are on each side.</>} steps={[{label:'Start with two water molecules',body:'2H₂O contains four hydrogen atoms and two oxygen atoms.'},{label:'Hydrogen atoms form hydrogen gas',body:'Four H atoms pair up to make two H₂ molecules.'},{label:'Oxygen atoms form oxygen gas',body:'Two O atoms pair up to make one O₂ molecule.'},{label:'Compare gas amounts',body:'The equation gives 2 moles of hydrogen for every 1 mole of oxygen.'}]}/><p>At the same temperature and pressure, equal numbers of moles of gases occupy equal volumes. Therefore, the volume of hydrogen collected is twice the volume of oxygen. This is a ratio of <b>2:1</b>, not a statement that water contains twice as much hydrogen by mass.</p></> },
      { id: 'distillation-pure-water', label: 'Obtaining pure water', kicker: 'Physical separation', title: 'Simple distillation separates water from dissolved substances', content: <><p>Natural water often contains dissolved salts and other materials. If the dissolved material does not evaporate with the water under the conditions used, distillation can separate it from the water.</p><p><b>Distillation</b> involves two changes of state: liquid water is heated to form water vapour, then the vapour is cooled so it condenses back to liquid water. The collected liquid is called the <b>distillate</b>.</p><DistillationDiagram/><ol className="u9-step-list"><li>Place the sample in a suitable distillation flask. Do not fill the flask completely.</li><li>Heat the sample gently using an approved laboratory heat source.</li><li>Water vapour travels from the flask into the condenser.</li><li>Cold water enters the condenser at the lower connection and leaves at the upper connection. This keeps the jacket full of cooling water.</li><li>The vapour loses heat, condenses and flows into the receiving flask as distillate.</li><li>Many non-volatile dissolved substances remain in the original flask.</li></ol><Note tone="blue">Distillation is a physical separation, not a chemical reaction. It does not turn other substances into water; it separates water that was already present in the sample.</Note></> },
      { id: 'test-for-water', label: 'Testing for water', kicker: 'A chemical test', title: 'Anhydrous copper(II) sulfate changes colour when it meets water', content: <><p>Anhydrous copper(II) sulfate is a white solid. When water is added, it forms hydrated copper(II) sulfate, which is blue. This colour change can be used as a test for the presence of water.</p><DataTable headers={['Before the test','After water is added','Meaning']} rows={[[<b>White anhydrous CuSO₄</b>,<b>Blue hydrated CuSO₄</b>,'Water is present in the tested sample.']]}/><FormulaPanel title="Hydration equation" formula={<span>CuSO<sub>4</sub>(s) + 5H<sub>2</sub>O(l) → CuSO<sub>4</sub>·5H<sub>2</sub>O(s)</span>} variables={<>CuSO₄ = anhydrous copper(II) sulfate; 5H₂O = five water molecules; the dot indicates water of crystallisation in the hydrated crystal.</>} steps={[{label:'Read the starting substance',body:'CuSO₄(s) is white anhydrous copper(II) sulfate.'},{label:'Read the water coefficient',body:'The 5 before H₂O means five water molecules are included for each formula unit in the hydrate.'},{label:'Read the product',body:'CuSO₄·5H₂O(s) is blue hydrated copper(II) sulfate.'},{label:'State the observation',body:'A white sample turns blue when it becomes hydrated, indicating water was present.'}]}/><Note tone="amber">Copper(II) sulfate is harmful if swallowed and can irritate skin or eyes. This test is a teacher-supervised laboratory demonstration. Do not touch or taste the chemicals.</Note></> },
      { id: 'lab-safety-errors', label: 'Safety and common errors', kicker: 'Work carefully', title: 'Good laboratory work depends on correct apparatus and safe handling', content: <><ul className="u9-check-list"><li>Wear eye protection and follow the teacher’s instructions.</li><li>Use heat-resistant apparatus and a stable support when heating liquids.</li><li>Never seal a heated distillation system; pressure must not build up in the apparatus.</li><li>Keep condenser water flowing from the lower connection to the upper connection.</li><li>Do not heat a flask to dryness unless the approved experiment specifically requires it and the teacher directs it.</li><li>Keep chemicals away from the mouth and eyes; wash hands after practical work.</li></ul><DataTable headers={['Common mistake','Correct understanding']} rows={[[ 'Calling distillation a chemical preparation of water.','Distillation is a physical method for separating water from other substances.'],['Saying that a clear sample is pure water.','Dissolved salts and some harmful contaminants may be invisible.'],['Forgetting to balance 2H₂ + O₂ → H₂O.','The balanced equation is 2H₂ + O₂ → 2H₂O.'],['Placing condenser water inlet at the top only.','Cooling water should enter at the lower connection and leave at the upper connection.'],['Assuming boiling removes every pollutant.','Boiling can kill many germs but does not remove dissolved toxic chemicals.']]}/></> },
    ],
    recap: ['Water forms when hydrogen and oxygen combine: 2H₂ + O₂ → 2H₂O.', 'Electrolysis decomposes water: 2H₂O → 2H₂ + O₂.', 'The gas-volume ratio hydrogen:oxygen is 2:1 at the same temperature and pressure.', 'Distillation evaporates and condenses water to separate it from many non-volatile dissolved substances.', 'Anhydrous copper(II) sulfate changes from white to blue when hydrated.', 'Practical work must be carried out with suitable apparatus and teacher-approved safety controls.'],
    quizPath: '/lessons/laboratory-preparation-of-water/quiz', quizDescription: 'Interpret water equations, distillation apparatus, observations and laboratory safety.', sidebarTip: 'For every equation, explain the formulae and coefficients, then count atoms on both sides to check the balance.', sources: waterSources,
    quiz: { description: 'A 12-question check on water formation, electrolysis, distillation and the water test.', sidebarTip: 'Remember: distillation separates; electrolysis decomposes; synthesis forms water.', artLabel: 'Preparing and testing water', artCaption: 'Use equations and apparatus diagrams to explain each process.' },
  },
];

export const getWaterLesson = (id: string): WaterLesson | undefined => waterLessons.find((lesson) => lesson.id === id);
