import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type GasLawsLesson = {
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

function Note({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'mint' | 'amber' | 'lavender' }) {
  return <aside className={`u7-note u7-note--${tone}`}>{children}</aside>;
}

function FormulaPanel({ title, formula, variables, steps }: { title: string; formula: ReactNode; variables: ReactNode; steps: { label: string; body: ReactNode }[] }) {
  return (
    <div className="u7-formula-panel">
      <span className="u7-eyebrow">{title}</span>
      <div className="u7-formula-panel__formula">{formula}</div>
      <div className="u7-formula-panel__variables">{variables}</div>
      <ol>{steps.map((step, index) => <li key={step.label}><strong>{index + 1}. {step.label}</strong><span>{step.body}</span></li>)}</ol>
    </div>
  );
}

function WorkedExample({ title, given, method, answer }: { title: string; given: ReactNode; method: ReactNode[]; answer: ReactNode }) {
  return (
    <div className="u7-worked-example">
      <div className="u7-worked-example__head"><span className="u7-eyebrow">WORKED EXAMPLE</span><h3>{title}</h3></div>
      <div className="u7-worked-example__given"><strong>Given</strong><div>{given}</div></div>
      <ol>{method.map((step, index) => <li key={index}><span>{index + 1}</span><div>{step}</div></li>)}</ol>
      <div className="u7-worked-example__answer"><strong>Final answer</strong><div>{answer}</div></div>
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u7-table-wrap"><table className="u7-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={`${i}-${j}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function BoyleDiagram() {
  return (
    <div className="u7-diagram-card" role="group" aria-label="Boyle's law diagram showing a gas compressed to half its volume while pressure doubles at constant temperature">
      <svg viewBox="0 0 900 360" role="img" aria-labelledby="u7-boyle-title u7-boyle-desc">
        <title id="u7-boyle-title">Boyle's law: pressure increases as volume decreases</title>
        <desc id="u7-boyle-desc">Two sealed gas syringes contain the same number of particles at the same temperature. The second syringe has half the volume and twice the pressure. A graph shows the inverse pressure-volume curve.</desc>
        <rect x="18" y="16" width="405" height="320" rx="18" fill="#f0f7fc" stroke="#c9ddec" />
        <rect x="477" y="16" width="405" height="320" rx="18" fill="#f2faf5" stroke="#cbe7d7" />
        <text x="220" y="47" textAnchor="middle" fill="#27516b" fontSize="17" fontWeight="800">BEFORE COMPRESSION</text>
        <text x="678" y="47" textAnchor="middle" fill="#28644f" fontSize="17" fontWeight="800">AFTER COMPRESSION</text>
        <rect x="77" y="104" width="280" height="92" rx="12" fill="#fff" stroke="#6f9ab5" strokeWidth="3" />
        <rect x="357" y="104" width="23" height="92" rx="4" fill="#dbeaf4" stroke="#6f9ab5" strokeWidth="3" />
        <rect x="535" y="104" width="140" height="92" rx="12" fill="#fff" stroke="#5d9e84" strokeWidth="3" />
        <rect x="675" y="104" width="23" height="92" rx="4" fill="#d7eee2" stroke="#5d9e84" strokeWidth="3" />
        <g fill="#4d91b5" stroke="#2b6485" strokeWidth="1.5">
          <circle cx="119" cy="134" r="8"/><circle cx="169" cy="134" r="8"/><circle cx="219" cy="134" r="8"/><circle cx="269" cy="134" r="8"/><circle cx="319" cy="134" r="8"/>
          <circle cx="119" cy="166" r="8"/><circle cx="169" cy="166" r="8"/><circle cx="219" cy="166" r="8"/><circle cx="269" cy="166" r="8"/><circle cx="319" cy="166" r="8"/>
          <circle cx="550" cy="134" r="8"/><circle cx="575" cy="134" r="8"/><circle cx="600" cy="134" r="8"/><circle cx="625" cy="134" r="8"/><circle cx="650" cy="134" r="8"/>
          <circle cx="550" cy="166" r="8"/><circle cx="575" cy="166" r="8"/><circle cx="600" cy="166" r="8"/><circle cx="625" cy="166" r="8"/><circle cx="650" cy="166" r="8"/>
        </g>
        <path d="M365 89 V210" stroke="#426a84" strokeWidth="7" strokeLinecap="round"/><path d="M683 89 V210" stroke="#426a84" strokeWidth="7" strokeLinecap="round"/>
        <text x="220" y="232" textAnchor="middle" fill="#49657c" fontSize="14">Larger volume · lower pressure</text>
        <text x="678" y="232" textAnchor="middle" fill="#49657c" fontSize="14">Half the volume · twice the pressure</text>
        <rect x="103" y="257" width="234" height="48" rx="10" fill="#fff" stroke="#d7e4ed"/><text x="220" y="286" textAnchor="middle" fill="#244a66" fontSize="17" fontWeight="800">V = 600 cm³ · P = 100 kPa</text>
        <rect x="542" y="257" width="272" height="48" rx="10" fill="#fff" stroke="#cfe4d8"/><text x="678" y="286" textAnchor="middle" fill="#245b48" fontSize="17" fontWeight="800">V = 300 cm³ · P = 200 kPa</text>
        <path d="M426 149 H464" stroke="#2e7d98" strokeWidth="3"/><path d="M455 140 L466 149 L455 158" fill="none" stroke="#2e7d98" strokeWidth="3"/>
      </svg>
      <p className="u7-caption">The same gas sample is shown before and after compression. Particle number and temperature stay fixed; reducing volume increases pressure.</p>
    </div>
  );
}

function BoyleGraphDiagram() {
  return (
    <div className="u7-diagram-card u7-diagram-card--fit" role="group" aria-label="Pressure against volume graph for Boyle’s law. The curve falls as volume increases.">
      <svg viewBox="0 0 820 350" role="img" aria-labelledby="u7-boyle-graph-title u7-boyle-graph-desc">
        <title id="u7-boyle-graph-title">Boyle’s law pressure–volume graph</title>
        <desc id="u7-boyle-graph-desc">A smooth inverse curve falls from high pressure at low volume to low pressure at high volume. Pressure is on the vertical axis and volume is on the horizontal axis. Low and high volume are labelled below the horizontal axis.</desc>
        <rect x="16" y="14" width="788" height="322" rx="16" fill="#fbfdff" stroke="#dce7ef" />
        <path d="M112 54 V256 H748" stroke="#4a6d83" strokeWidth="2.5" fill="none" />
        <path d="M130 72 C178 111 221 145 296 174 C374 204 500 225 718 241" stroke="#2c839b" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="94" y="43" textAnchor="end" fontSize="13" fill="#31566f" fontWeight="700">Pressure</text>
        <text x="94" y="66" textAnchor="end" fontSize="13" fill="#31566f" fontWeight="700">High P</text>
        <text x="720" y="229" fontSize="13" fill="#31566f" fontWeight="700">Low P</text>
        <path d="M175 256 V263 M676 256 V263" stroke="#4a6d83" strokeWidth="1.5" />
        <text x="175" y="281" textAnchor="middle" fontSize="12" fill="#718498">Low V</text>
        <text x="676" y="281" textAnchor="middle" fontSize="12" fill="#718498">High V</text>
        <text x="430" y="316" textAnchor="middle" fontSize="14" fill="#31566f" fontWeight="700">Volume</text>
      </svg>
      <p className="u7-caption">A pressure–volume graph for Boyle’s law is a downward-curving inverse relationship, not a straight line. At constant temperature, increasing volume decreases pressure. This is a schematic graph, not experimental data.</p>
    </div>
  );
}

function CharlesDiagram() {
  return (
    <div className="u7-diagram-card" role="group" aria-label="Charles's law diagram with a gas syringe and a labelled volume-versus-Kelvin-temperature graph">
      <svg viewBox="0 0 900 420" role="img" aria-labelledby="u7-charles-title u7-charles-desc">
        <title id="u7-charles-title">Charles's law: gas volume increases in direct proportion to Kelvin temperature</title>
        <desc id="u7-charles-desc">At constant pressure, the same amount of warmer gas occupies a larger volume. The graph plots volume in cubic centimetres against temperature in kelvin, with illustrative points at 100, 200 and 300 units on both axes. The straight line passes through the origin.</desc>
        <rect x="18" y="16" width="350" height="388" rx="18" fill="#f2f8fc" stroke="#cddfea"/>
        <text x="193" y="48" textAnchor="middle" fontSize="17" fontWeight="800" fill="#27516b">GAS AT TWO TEMPERATURES</text>
        <text x="111" y="91" textAnchor="middle" fontSize="14" fill="#536d81">Cooler gas</text>
        <rect x="54" y="119" width="118" height="78" rx="10" fill="#fff" stroke="#6f9ab5" strokeWidth="3"/><rect x="172" y="119" width="14" height="78" fill="#dceaf4" stroke="#6f9ab5" strokeWidth="2"/>
        <path d="M179 105 V211" stroke="#426a84" strokeWidth="6" strokeLinecap="round"/>
        <g fill="#4d91b5"><circle cx="78" cy="145" r="6"/><circle cx="110" cy="145" r="6"/><circle cx="142" cy="145" r="6"/><circle cx="78" cy="174" r="6"/><circle cx="110" cy="174" r="6"/><circle cx="142" cy="174" r="6"/></g>
        <text x="111" y="232" textAnchor="middle" fontSize="13" fill="#536d81">Smaller volume</text>
        <text x="271" y="91" textAnchor="middle" fontSize="14" fill="#536d81">Warmer gas</text>
        <rect x="193" y="119" width="150" height="78" rx="10" fill="#fff" stroke="#5d9e84" strokeWidth="3"/><rect x="343" y="119" width="14" height="78" fill="#d7eee2" stroke="#5d9e84" strokeWidth="2"/>
        <path d="M350 105 V211" stroke="#4d8c74" strokeWidth="6" strokeLinecap="round"/>
        <g fill="#58a58a"><circle cx="218" cy="145" r="6"/><circle cx="268" cy="145" r="6"/><circle cx="318" cy="145" r="6"/><circle cx="218" cy="174" r="6"/><circle cx="268" cy="174" r="6"/><circle cx="318" cy="174" r="6"/></g>
        <text x="268" y="232" textAnchor="middle" fontSize="13" fill="#536d81">Larger volume</text>
        <text x="193" y="283" textAnchor="middle" fontSize="14" fontWeight="700" fill="#244a66">Pressure remains constant</text>
        <text x="193" y="310" textAnchor="middle" fontSize="12" fill="#667d90">Same gas sample · same amount</text>
        <path d="M400 190 H430" stroke="#2e7d98" strokeWidth="3"/><path d="M421 181 L432 190 L421 199" stroke="#2e7d98" strokeWidth="3" fill="none"/>

        <rect x="462" y="16" width="420" height="388" rx="18" fill="#fff" stroke="#dce7ef"/>
        <text x="672" y="48" textAnchor="middle" fontSize="17" fontWeight="800" fill="#27516b">VOLUME AGAINST KELVIN TEMPERATURE</text>
        <text x="495" y="203" textAnchor="middle" fontSize="12" fill="#536d81" fontWeight="700" transform="rotate(-90 495 203)">Volume (cm³)</text>

        <g stroke="#e8eef3" strokeWidth="1">
          <path d="M548 236 H842 M548 169 H842 M548 103 H842"/>
          <path d="M646 103 V302 M744 103 V302"/>
        </g>
        <path d="M548 94 V302 H842" stroke="#496b82" strokeWidth="2.5" fill="none"/>
        <g stroke="#496b82" strokeWidth="1.5">
          <path d="M542 302 H548 M542 236 H548 M542 169 H548 M542 103 H548"/>
          <path d="M548 302 V308 M646 302 V308 M744 302 V308 M842 302 V308"/>
        </g>
        <g fontSize="11" fill="#536d81">
          <text x="535" y="306" textAnchor="end">0</text>
          <text x="535" y="240" textAnchor="end">100</text>
          <text x="535" y="173" textAnchor="end">200</text>
          <text x="535" y="107" textAnchor="end">300</text>
          <text x="548" y="324" textAnchor="middle">0</text>
          <text x="646" y="324" textAnchor="middle">100</text>
          <text x="744" y="324" textAnchor="middle">200</text>
          <text x="842" y="324" textAnchor="middle">300</text>
        </g>
        <path d="M548 302 L842 103" stroke="#2c839b" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <g fill="#2c839b" stroke="#fff" strokeWidth="2">
          <circle cx="646" cy="236" r="6.5"/><circle cx="744" cy="169" r="6.5"/><circle cx="842" cy="103" r="6.5"/>
        </g>
        <text x="695" y="353" textAnchor="middle" fontSize="13" fill="#31566f" fontWeight="700">Temperature (K)</text>
        <text x="672" y="381" textAnchor="middle" fontSize="10.5" fill="#71879a">Illustrative values · constant pressure and amount of gas</text>
      </svg>
      <p className="u7-caption">At constant pressure, volume is directly proportional to absolute temperature. For example, doubling the Kelvin temperature doubles the volume of a fixed amount of gas, provided it behaves approximately ideally. The plotted values are illustrative, not experimental data; the line’s extension to 0 K is a theoretical extrapolation because real gases liquefy before reaching that temperature.</p>
    </div>
  );
}

function CombinedLawDiagram() {
  return (
    <div className="u7-diagram-card u7-diagram-card--fit" role="group" aria-label="Combined gas law with initial and final states and the relationship between pressure, volume and temperature">
      <svg viewBox="0 0 860 300" role="img" aria-labelledby="u7-combined-title u7-combined-desc">
        <title id="u7-combined-title">Combined gas law compares an initial and final gas state</title>
        <desc id="u7-combined-desc">Two boxes show the same fixed amount of gas before and after changes in pressure, volume and Kelvin temperature. The equation relates all three variables.</desc>
        <rect x="18" y="18" width="365" height="205" rx="16" fill="#f0f7fc" stroke="#cbdfea"/><rect x="477" y="18" width="365" height="205" rx="16" fill="#f2faf5" stroke="#cbe7d7"/>
        <text x="200" y="49" textAnchor="middle" fontSize="17" fontWeight="800" fill="#27516b">INITIAL STATE</text><text x="660" y="49" textAnchor="middle" fontSize="17" fontWeight="800" fill="#28644f">FINAL STATE</text>
        <rect x="95" y="76" width="210" height="70" rx="12" fill="#fff" stroke="#6f9ab5" strokeWidth="3"/><path d="M285 65 V157" stroke="#426a84" strokeWidth="6" strokeLinecap="round"/>
        <g fill="#4d91b5"><circle cx="132" cy="99" r="6"/><circle cx="172" cy="99" r="6"/><circle cx="212" cy="99" r="6"/><circle cx="252" cy="99" r="6"/><circle cx="132" cy="124" r="6"/><circle cx="172" cy="124" r="6"/><circle cx="212" cy="124" r="6"/><circle cx="252" cy="124" r="6"/></g>
        <rect x="550" y="76" width="210" height="70" rx="12" fill="#fff" stroke="#5d9e84" strokeWidth="3"/><path d="M740 65 V157" stroke="#4d8c74" strokeWidth="6" strokeLinecap="round"/>
        <g fill="#58a58a"><circle cx="582" cy="99" r="6"/><circle cx="622" cy="99" r="6"/><circle cx="662" cy="99" r="6"/><circle cx="702" cy="99" r="6"/><circle cx="582" cy="124" r="6"/><circle cx="622" cy="124" r="6"/><circle cx="662" cy="124" r="6"/><circle cx="702" cy="124" r="6"/></g>
        <text x="200" y="176" textAnchor="middle" fontSize="13" fill="#536d81">P₁ · V₁ · T₁</text><text x="660" y="176" textAnchor="middle" fontSize="13" fill="#536d81">P₂ · V₂ · T₂</text>
        <path d="M400 111 H458" stroke="#2e7d98" strokeWidth="3"/><path d="M448 102 L460 111 L448 120" stroke="#2e7d98" strokeWidth="3" fill="none"/>
        <rect x="134" y="242" width="592" height="43" rx="12" fill="#edf5fa" stroke="#d7e5ee"/><text x="430" y="270" textAnchor="middle" fontSize="21" fontWeight="800" fill="#244a66">P₁V₁ / T₁ = P₂V₂ / T₂</text>
      </svg>
      <p className="u7-caption">The combined gas law compares two states of the same fixed amount of gas. Temperature must be expressed in kelvin.</p>
    </div>
  );
}

function GasMixtureDiagram() {
  return (
    <div className="u7-diagram-card u7-diagram-card--fit" role="group" aria-label="Dalton's law diagram showing nitrogen, oxygen and other gases contributing to total pressure">
      <svg viewBox="0 0 860 310" role="img" aria-labelledby="u7-mixture-title u7-mixture-desc">
        <title id="u7-mixture-title">Partial pressures add to give total pressure</title>
        <desc id="u7-mixture-desc">A container has three gas species. Each species contributes a partial pressure, and all partial pressures add to the total pressure. A separate strip shows a gas equation volume ratio example.</desc>
        <rect x="20" y="18" width="495" height="265" rx="18" fill="#f6f9fc" stroke="#d9e5ee"/><text x="267" y="48" textAnchor="middle" fill="#27516b" fontSize="17" fontWeight="800">MIXTURE OF GASES IN ONE CONTAINER</text>
        <rect x="76" y="74" width="380" height="135" rx="18" fill="#fff" stroke="#7898ad" strokeWidth="3"/>
        <g fill="#4d91b5" stroke="#2c6688"><circle cx="126" cy="112" r="9"/><circle cx="190" cy="162" r="9"/><circle cx="261" cy="111" r="9"/><circle cx="334" cy="160" r="9"/></g>
        <g fill="#de9254" stroke="#a96c35"><circle cx="157" cy="162" r="9"/><circle cx="230" cy="139" r="9"/><circle cx="299" cy="179" r="9"/><circle cx="389" cy="115" r="9"/></g>
        <g fill="#60a589" stroke="#39765d"><circle cx="357" cy="103" r="8"/><circle cx="410" cy="176" r="8"/></g>
        <g fontSize="11" fill="#536d81">
          <circle cx="112" cy="235" r="5" fill="#4d91b5" stroke="#2c6688"/><text x="124" y="239">Nitrogen (N₂)</text>
          <circle cx="260" cy="235" r="5" fill="#de9254" stroke="#a96c35"/><text x="272" y="239">Oxygen (O₂)</text>
          <circle cx="385" cy="235" r="5" fill="#60a589" stroke="#39765d"/><text x="397" y="239">Other gases</text>
        </g>
        <text x="267" y="268" textAnchor="middle" fontSize="17" fontWeight="800" fill="#244a66">Ptotal = P₁ + P₂ + P₃</text>
        <rect x="548" y="18" width="292" height="265" rx="18" fill="#f2faf5" stroke="#cbe7d7"/><text x="694" y="48" textAnchor="middle" fill="#28644f" fontSize="17" fontWeight="800">ILLUSTRATIVE PRESSURES</text>
        <g fontSize="14" fill="#425f72"><text x="578" y="94">Nitrogen</text><text x="807" y="94" textAnchor="end" fontWeight="700">78 kPa</text><text x="578" y="134">Oxygen</text><text x="807" y="134" textAnchor="end" fontWeight="700">21 kPa</text><text x="578" y="174">Other gases</text><text x="807" y="174" textAnchor="end" fontWeight="700">1 kPa</text></g>
        <path d="M577 190 H810" stroke="#d4e6dc" strokeWidth="2"/><text x="694" y="226" textAnchor="middle" fontSize="13" fill="#28644f">Total pressure</text><text x="694" y="258" textAnchor="middle" fontSize="24" fontWeight="800" fill="#245b48">100 kPa</text>
      </svg>
      <p className="u7-caption">The numbers are illustrative. In a non-reacting ideal-gas mixture, the total pressure is the sum of the partial pressures.</p>
    </div>
  );
}

function MoleVolumeDiagram() {
  return (
    <div className="u7-diagram-card u7-diagram-card--fit" role="group" aria-label="One mole of an ideal gas occupying about 22.4 cubic decimetres at zero degrees Celsius and one atmosphere">
      <svg viewBox="0 0 860 280" role="img" aria-labelledby="u7-mole-title u7-mole-desc">
        <title id="u7-mole-title">Molar volume at the school STP convention</title>
        <desc id="u7-mole-desc">A gas container represents one mole, equal to 6.022 times ten to the twenty-third specified entities. At 273.15 kelvin and one atmosphere, an ideal gas occupies approximately 22.4 cubic decimetres.</desc>
        <rect x="20" y="18" width="300" height="230" rx="18" fill="#f0f7fc" stroke="#cbdfea"/><text x="170" y="50" textAnchor="middle" fontSize="17" fontWeight="800" fill="#27516b">AMOUNT OF GAS</text>
        <rect x="82" y="79" width="176" height="105" rx="16" fill="#fff" stroke="#6f9ab5" strokeWidth="3"/>
        {Array.from({ length: 18 }, (_, index) => <circle key={index} cx={105 + (index % 6) * 25} cy={101 + Math.floor(index / 6) * 27} r="5.5" fill="#4d91b5"/>)}
        <text x="170" y="211" textAnchor="middle" fontSize="22" fontWeight="800" fill="#244a66">1 mol</text>
        <text x="170" y="232" textAnchor="middle" fontSize="12" fill="#536d81">6.022 × 10²³ entities</text>
        <path d="M347 130 H395" stroke="#2e7d98" strokeWidth="3"/><path d="M385 121 L397 130 L385 139" stroke="#2e7d98" strokeWidth="3" fill="none"/>
        <rect x="424" y="18" width="416" height="230" rx="18" fill="#f2faf5" stroke="#cbe7d7"/><text x="632" y="50" textAnchor="middle" fontSize="17" fontWeight="800" fill="#28644f">SCHOOL STP CONVENTION</text>
        <text x="632" y="105" textAnchor="middle" fontSize="28" fontWeight="800" fill="#245b48">22.4 dm³ mol⁻¹</text>
        <text x="632" y="137" textAnchor="middle" fontSize="14" fill="#496c5d">273.15 K (0 °C) · 1 atm</text>
        <path d="M486 163 H778" stroke="#c7e2d4" strokeWidth="2"/><text x="632" y="193" textAnchor="middle" fontSize="13" fill="#536d81">For an ideal gas at these specified conditions</text><text x="632" y="218" textAnchor="middle" fontSize="13" fill="#536d81">Always state the temperature and pressure convention.</text>
      </svg>
      <p className="u7-caption">The particle dots are symbolic, not a literal drawing of 6.022 × 10²³ particles. The 22.4 dm³ value uses the common school STP convention of 0 °C and 1 atm.</p>
    </div>
  );
}

function IdealGrahamDiagram() {
  return (
    <div className="u7-diagram-card" role="group" aria-label="Ideal gas variables and Graham's law diffusion comparison">
      <svg viewBox="0 0 900 390" role="img" aria-labelledby="u7-ideal-title u7-ideal-desc">
        <title id="u7-ideal-title">Ideal gas equation and Graham's law</title>
        <desc id="u7-ideal-desc">The upper panel identifies pressure, volume, amount and temperature around a gas sample and displays PV equals nRT. The lower panel shows ammonia and hydrogen chloride diffusing from opposite ends of a tube, meeting closer to the hydrogen chloride end because ammonia diffuses faster.</desc>
        <rect x="18" y="16" width="864" height="202" rx="18" fill="#f3f8fc" stroke="#d3e2ec"/>
        <text x="450" y="44" textAnchor="middle" fontSize="17" fontWeight="800" fill="#27516b">FOUR MEASURED GAS VARIABLES</text>
        <rect x="354" y="61" width="192" height="76" rx="13" fill="#fff" stroke="#6e99b2" strokeWidth="3"/>
        <g fill="#4d91b5" stroke="#2b6485" strokeWidth="1">
          <circle cx="380" cy="83" r="5"/><circle cx="419" cy="113" r="5"/><circle cx="450" cy="82" r="5"/><circle cx="483" cy="112" r="5"/><circle cx="520" cy="84" r="5"/>
        </g>
        <text x="450" y="157" textAnchor="middle" fontSize="13" fontWeight="700" fill="#536d81">Amount n (mol) · Volume V</text>
        <text x="450" y="190" textAnchor="middle" fontSize="22" fontWeight="800" fill="#244a66">PV = nRT</text>
        <rect x="62" y="82" width="190" height="40" rx="10" fill="#e7f2f9" stroke="#c8ddea"/>
        <text x="157" y="107" textAnchor="middle" fontSize="15" fontWeight="700" fill="#2f617b">Pressure P</text>
        <rect x="648" y="82" width="190" height="40" rx="10" fill="#eaf6ef" stroke="#cce4d5"/>
        <text x="743" y="107" textAnchor="middle" fontSize="15" fontWeight="700" fill="#28644f">Temperature T (K)</text>
        <text x="450" y="244" textAnchor="middle" fontSize="16" fontWeight="800" fill="#27516b">GRAHAM'S LAW · DIFFUSION TUBE</text>
        <rect x="95" y="260" width="710" height="55" rx="26" fill="#fff" stroke="#819db0" strokeWidth="3"/>
        <rect x="98" y="263" width="235" height="49" rx="22" fill="#eaf5fb"/>
        <rect x="567" y="263" width="235" height="49" rx="22" fill="#fff1e7"/>
        <path d="M128 287 H490" stroke="#2c8ba5" strokeWidth="3" strokeDasharray="8 7"/>
        <path d="M480 278 L493 287 L480 296" fill="none" stroke="#2c8ba5" strokeWidth="3"/>
        <path d="M772 287 H515" stroke="#c07a43" strokeWidth="3" strokeDasharray="8 7"/>
        <path d="M525 278 L512 287 L525 296" fill="none" stroke="#c07a43" strokeWidth="3"/>
        <g fill="#2c8ba5"><circle cx="145" cy="275" r="4"/><circle cx="185" cy="299" r="4"/><circle cx="234" cy="276" r="4"/></g>
        <g fill="#c07a43"><circle cx="755" cy="275" r="4"/><circle cx="715" cy="299" r="4"/><circle cx="675" cy="276" r="4"/></g>
        <path d="M500 253 V324" stroke="#9ab0bf" strokeWidth="2" strokeDasharray="4 4"/>
        <text x="160" y="347" textAnchor="middle" fontSize="13" fill="#2b718f" fontWeight="700">NH₃ diffuses faster</text>
        <text x="740" y="347" textAnchor="middle" fontSize="13" fill="#9b6337" fontWeight="700">HCl diffuses more slowly</text>
        <text x="450" y="374" textAnchor="middle" fontSize="12" fill="#61788b">The meeting point is closer to the slower, heavier HCl end.</text>
      </svg>
      <p className="u7-caption">The upper panel identifies the four variables in PV = nRT. The lower panel compares diffusion rates using Graham's law.</p>
    </div>
  );
}

const gasSources = [
  { label: 'Federal Ministry of Education — SS1 Gas Laws', url: 'https://inspire.education.gov.ng/lessons/1226/preview' },
  { label: 'OpenStax Chemistry — Gas laws and ideal gas equation', url: 'https://openstax.org/books/chemistry/pages/9-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law' },
  { label: 'OpenStax Chemistry — Gas mixtures and Dalton’s law', url: 'https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions' },
  { label: 'OpenStax Chemistry — Effusion and diffusion (Graham’s law)', url: 'https://openstax.org/books/chemistry/pages/9-4-effusion-and-diffusion-of-gases' },
  { label: 'NOU — General Chemistry: Dalton, Graham, Avogadro and Gay-Lussac laws', url: 'https://nou.edu.ng/coursewarecontent/SED%20122.pdf' },
];
const moleSources = [...gasSources, { label: 'BIPM — SI unit: mole', url: 'https://www.bipm.org/en/si-base-units/mole' }, { label: 'IUPAC — Avogadro constant', url: 'https://goldbook.iupac.org/terms/view/A00543' }];

export const gasLawsLessons: GasLawsLesson[] = [
  {
    id: 'boyles-law', lessonNumber: '01', title: 'Boyle’s law', titleLead: 'Boyle’s', titleAccent: 'law', duration: '12–15 min',
    summary: 'Understand how pressure and volume change together when the temperature and amount of a gas remain constant.',
    learningObjectives: ['State Boyle’s law in words and symbols.', 'Explain why pressure rises when a fixed gas sample is compressed.', 'Use P₁V₁ = P₂V₂ to solve numerical problems.', 'Interpret a pressure–volume graph and check whether an answer is reasonable.'],
    sections: [
      { id: 'what-pressure-means', label: 'Pressure and volume', kicker: 'Start with the particles', title: 'What do pressure and volume mean?', content: <><p><b>Volume</b> is the space occupied by a gas. It is commonly measured in cubic centimetres (cm³), cubic decimetres (dm³) or litres (L). Remember that 1 dm³ = 1 L and 1 dm³ = 1,000 cm³.</p><p><b>Pressure</b> describes how much force acts on each unit of area. Gas particles move randomly and collide with the walls of their container. These collisions produce gas pressure. Common units are pascal (Pa), kilopascal (kPa) and atmosphere (atm).</p><Note>When a gas is compressed into a smaller space without removing particles, the particles hit the walls more frequently. This increases the pressure.</Note></> },
      { id: 'state-the-law', label: 'State Boyle’s law', kicker: 'The relationship', title: 'Pressure and volume are inversely proportional', content: <><p>Boyle’s law states: <b>for a fixed mass of gas at constant temperature, its volume is inversely proportional to its pressure.</b></p><p>Inversely proportional means that when one quantity increases, the other decreases in a predictable way. If pressure doubles, volume becomes half. If pressure becomes three times as large, volume becomes one-third, provided temperature and amount stay constant.</p><FormulaPanel title="Boyle’s law" formula={<span>P × V = constant &nbsp; or &nbsp; P₁V₁ = P₂V₂</span>} variables={<><b>P</b> = pressure; <b>V</b> = volume; subscripts 1 and 2 mean the initial and final states.</>} steps={[{label:'Keep temperature fixed',body:'The gas sample must not be heated or cooled during the comparison.'},{label:'Keep the amount fixed',body:'The same gas sample is compared; no gas should enter or leave.'},{label:'Multiply pressure by volume',body:'The product P × V has the same value before and after the change.'}]}/><BoyleDiagram/><BoyleGraphDiagram/><p>A graph of pressure against volume is a downward-curving line called a <b>hyperbola</b>. A graph of pressure against 1/volume is a straight line. Do not expect the P–V graph itself to be straight.</p></> },
      { id: 'worked-boyle', label: 'Worked calculation', kicker: 'Solve it carefully', title: 'Use the Boyle’s law equation step by step', content: <><WorkedExample title="A gas is compressed to half its original volume" given={<p>A gas occupies <b>600 cm³</b> at <b>100 kPa</b>. It is compressed to <b>300 cm³</b> at constant temperature. Find its new pressure.</p>} method={[<>Write the equation: <b>P₁V₁ = P₂V₂</b>.</>,<>Substitute the known values: <b>100 × 600 = P₂ × 300</b>.</>,<>Divide both sides by 300: <b>P₂ = (100 × 600) ÷ 300</b>.</>,<>Calculate: <b>P₂ = 60,000 ÷ 300 = 200 kPa</b>.</>]} answer={<><b>200 kPa.</b> The volume has halved, so pressure has doubled. This agrees with Boyle’s law.</>}/><Note tone="mint">Units check: both volumes are in cm³ and both pressures use kPa. The volume units cancel from the ratio, leaving pressure in kPa.</Note></> },
      { id: 'applications-and-limits', label: 'Applications and limits', kicker: 'Connect the idea', title: 'Where can Boyle’s law be seen?', content: <><ul className="u7-bullet-list"><li><b>Breathing:</b> when the chest cavity expands, lung volume increases and the pressure inside the lungs falls slightly, allowing air to enter.</li><li><b>Syringes:</b> pulling the plunger increases the space inside and lowers the pressure; pushing it decreases the space and raises the pressure.</li><li><b>Scuba diving:</b> gas volume changes with pressure as a diver moves to different depths. Real diving safety involves additional gas and physiological effects, so the simple law is not a complete safety guide.</li></ul><p>Real gases do not behave perfectly ideally under every condition. Boyle’s law is a useful approximation, especially when the gas is not at very high pressure or very low temperature.</p></> },
    ],
    recap: ['Boyle’s law applies to a fixed amount of gas at constant temperature.', 'Pressure and volume are inversely proportional.', 'Use P₁V₁ = P₂V₂ and keep units consistent.', 'If volume falls, pressure rises; if volume rises, pressure falls.'],
    quizPath: '/lessons/boyles-law/quiz', quizDescription: 'Twelve questions test inverse relationships, graph interpretation, calculations and common mistakes.', sidebarTip: 'Before calculating, identify what remains constant. Boyle’s law requires constant temperature and a fixed amount of gas.', sources: gasSources,
    quiz: { description: 'Apply Boyle’s law to pressure, volume, graphs and multi-step calculations.', sidebarTip: 'Write the known values with their units before rearranging P₁V₁ = P₂V₂.', artLabel: 'Pressure and volume', artCaption: 'Compressing the same gas sample changes its pressure.' },
    nextLesson: { title: 'Charles’ law', path: '/lessons/charles-law' },
  },
  {
    id: 'charles-law', lessonNumber: '02', title: 'Charles’ law', titleLead: 'Charles’', titleAccent: 'law', duration: '13–16 min',
    summary: 'Discover why a gas expands when heated at constant pressure, and why gas-law temperature must be measured in kelvin.',
    learningObjectives: ['State Charles’ law and identify its constant conditions.', 'Convert temperatures from degrees Celsius to kelvin.', 'Use V₁/T₁ = V₂/T₂ in calculations.', 'Interpret a volume–temperature graph.'],
    sections: [
      { id: 'temperature-scales', label: 'Celsius and kelvin', kicker: 'A crucial first step', title: 'Why do gas laws use kelvin?', content: <><p>Temperature in degrees Celsius (°C) is familiar in daily life, but gas-law calculations use the <b>kelvin scale (K)</b>. Kelvin starts at absolute zero, the theoretical lowest temperature at which a system has its minimum thermal energy.</p><FormulaPanel title="Convert Celsius to kelvin" formula={<span>T(K) = θ(°C) + 273.15</span>} variables={<><b>T</b> is temperature in kelvin; <b>θ</b> is the Celsius temperature. Kelvin is written K, not °K.</>} steps={[{label:'Take the Celsius reading',body:'For example, 27 °C.'},{label:'Add 273.15',body:'27 + 273.15 = 300.15.'},{label:'Write the kelvin result',body:'T = 300.15 K, often rounded to 300 K for a school calculation.'}]}/><Note tone="amber">Never substitute a Celsius value directly into a gas-law ratio. Convert every temperature to kelvin first. A negative Celsius temperature can still be a positive kelvin temperature.</Note></> },
      { id: 'charles-relationship', label: 'State Charles’ law', kicker: 'The relationship', title: 'Volume increases with absolute temperature', content: <><p>Charles’ law states: <b>the volume of a fixed amount of gas is directly proportional to its absolute temperature when pressure remains constant.</b></p><p>Directly proportional means that both quantities change in the same direction by the same factor. If the kelvin temperature doubles, the volume doubles, provided pressure and amount stay constant.</p><FormulaPanel title="Charles’ law" formula={<span>V ∝ T &nbsp; and &nbsp; V₁/T₁ = V₂/T₂</span>} variables={<><b>V</b> = volume; <b>T</b> = absolute temperature in kelvin; 1 and 2 identify the two states.</>} steps={[{label:'Check the conditions',body:'Pressure and amount of gas must remain constant.'},{label:'Convert both temperatures',body:'Change °C to K before putting values into the formula.'},{label:'Compare volume per kelvin',body:'V/T has the same value before and after the change.'}]}/><CharlesDiagram/></> },
      { id: 'worked-charles', label: 'Worked calculation', kicker: 'Solve it carefully', title: 'Calculate a new gas volume', content: <><WorkedExample title="A gas is warmed at constant pressure" given={<p>A gas has a volume of <b>250 cm³</b> at <b>27 °C</b>. It is warmed to <b>87 °C</b> at the same pressure. Find its new volume.</p>} method={[<>Convert the first temperature: <b>27 + 273 = 300 K</b> (school rounding).</>,<>Convert the second temperature: <b>87 + 273 = 360 K</b>.</>,<>Write Charles’ law: <b>V₁/T₁ = V₂/T₂</b>.</>,<>Rearrange: <b>V₂ = V₁ × T₂ ÷ T₁</b>.</>,<>Substitute: <b>V₂ = 250 × 360 ÷ 300 = 300 cm³</b>.</>]} answer={<><b>300 cm³.</b> The kelvin temperature increased by a factor of 360/300 = 1.2, so the volume also increased by a factor of 1.2.</>}/><Note tone="mint">The final volume is larger than the starting volume because the gas was heated while pressure stayed constant. This is a useful sense-check.</Note></> },
      { id: 'graph-and-examples', label: 'Graph and applications', kicker: 'Read the pattern', title: 'What does the graph show?', content: <><p>A graph of volume against temperature in kelvin is a straight line through the origin for an ideal-gas model. The line shows direct proportionality. If the horizontal axis is Celsius instead, the line does not pass through 0 °C; extrapolation approaches zero volume near −273.15 °C for the ideal model.</p><p>Examples include a flexible balloon expanding when warmed and contracting when cooled. A rigid container cannot expand freely, so heating it affects pressure instead; that is a different constant-volume relationship.</p></> },
    ],
    recap: ['Charles’ law applies at constant pressure for a fixed amount of gas.', 'Volume is directly proportional to temperature in kelvin.', 'Convert °C to K using K = °C + 273.15.', 'Use V₁/T₁ = V₂/T₂ and rearrange before substituting.'],
    quizPath: '/lessons/charles-law/quiz', quizDescription: 'Practise Kelvin conversions, direct proportionality, graph reading and volume calculations.', sidebarTip: 'Convert both temperatures to kelvin before using Charles’ law. A correct formula with Celsius values gives a wrong result.', sources: gasSources,
    quiz: { description: 'Test Kelvin conversions, graph reasoning and Charles’ law calculations.', sidebarTip: 'Write the temperature in K beside each state before substituting into the formula.', artLabel: 'Temperature and volume', artCaption: 'At constant pressure, warmer gas occupies more volume.' },
    nextLesson: { title: 'General and combined gas relationships', path: '/lessons/combined-gas-law' },
  },
  {
    id: 'combined-gas-law', lessonNumber: '03', title: 'General and combined gas relationships', titleLead: 'General and', titleAccent: 'combined gas laws', duration: '15–18 min',
    summary: 'Combine pressure, volume and temperature relationships when more than one gas condition changes.',
    learningObjectives: ['Explain the combined gas law and its constant amount condition.', 'Use P₁V₁/T₁ = P₂V₂/T₂.', 'Apply the pressure–temperature relationship at constant volume.', 'Rearrange a gas equation to find an unknown variable.'],
    sections: [
      { id: 'why-combine', label: 'Why combine gas laws?', kicker: 'Three variables together', title: 'Real problems may change more than one condition', content: <><p>Boyle’s law compares pressure and volume when temperature is constant. Charles’ law compares volume and temperature when pressure is constant. In many problems, however, pressure, volume and temperature all change between an initial state and a final state.</p><p>For the same fixed amount of gas, the general gas relationship is that <b>PV/T remains constant</b>. It combines the simpler gas laws into one equation.</p><CombinedLawDiagram/></> },
      { id: 'combined-formula', label: 'Combined gas equation', kicker: 'The formula', title: 'Compare the initial and final states', content: <><FormulaPanel title="Combined gas law" formula={<span>P₁V₁/T₁ = P₂V₂/T₂</span>} variables={<><b>P</b> = pressure; <b>V</b> = volume; <b>T</b> = kelvin temperature. Subscript 1 = initial state; subscript 2 = final state.</>} steps={[{label:'Keep the amount fixed',body:'The same number of moles is present before and after.'},{label:'Convert temperatures to kelvin',body:'Do this before substituting. Never use Celsius in this equation.'},{label:'Use matching units',body:'Use the same pressure unit on both sides and the same volume unit on both sides.'},{label:'Rearrange for the unknown',body:'Multiply or divide both sides by the required quantities, then substitute.'}]}/><Note tone="amber">The combined gas law does not include a change in the amount of gas. If n changes or you need to calculate n, use the ideal gas equation PV = nRT.</Note></> },
      { id: 'pressure-temperature', label: 'Pressure and temperature', kicker: 'Constant-volume relationship', title: 'Heating a gas in a rigid container raises its pressure', content: <><p>When volume and amount are fixed, pressure is directly proportional to absolute temperature. This relationship is often called the pressure law or Amontons’ law; some school texts also call it Gay-Lussac’s pressure law.</p><FormulaPanel title="Pressure–temperature law" formula={<span>P₁/T₁ = P₂/T₂</span>} variables={<><b>P</b> = pressure; <b>T</b> = temperature in kelvin. Volume and amount remain constant.</>} steps={[{label:'Identify a rigid sealed container',body:'A fixed volume means the gas cannot expand.'},{label:'Convert temperatures to kelvin',body:'Use K = °C + 273.15.'},{label:'Compare pressure per kelvin',body:'P/T stays constant for the same amount of gas at fixed volume.'}]}/><WorkedExample title="Pressure of a heated gas" given={<p>A sealed rigid container has a pressure of <b>100 kPa</b> at <b>300 K</b>. It is heated to <b>360 K</b>. Find the new pressure.</p>} method={[<>Use <b>P₁/T₁ = P₂/T₂</b>.</>,<>Rearrange: <b>P₂ = P₁ × T₂ ÷ T₁</b>.</>,<>Substitute: <b>P₂ = 100 × 360 ÷ 300</b>.</>,<>Calculate: <b>P₂ = 120 kPa</b>.</>]} answer={<><b>120 kPa.</b> Temperature rose by 20%, so pressure rises by 20% at constant volume.</>}/></> },
      { id: 'common-errors', label: 'Common errors', kicker: 'Check your method', title: 'Avoid these calculation mistakes', content: <><ul className="u7-bullet-list"><li>Using Celsius instead of kelvin.</li><li>Putting the final value in the initial position, or mixing up state 1 and state 2.</li><li>Changing pressure units on only one side of an equation.</li><li>Using the combined gas law when the amount of gas changes.</li><li>Forgetting to include units in the final answer.</li></ul><Note tone="mint">A good answer should make physical sense: for example, if a fixed-volume gas is heated, its pressure should rise, not fall.</Note></> },
    ],
    recap: ['The combined gas law is used for the same fixed amount of gas.', 'P₁V₁/T₁ = P₂V₂/T₂.', 'All temperatures must be in kelvin.', 'At constant volume, P₁/T₁ = P₂/T₂.', 'If the amount changes, use PV = nRT instead.'],
    quizPath: '/lessons/combined-gas-law/quiz', quizDescription: 'Apply combined gas relationships to multi-variable situations and pressure–temperature calculations.', sidebarTip: 'Label initial values with subscript 1 and final values with subscript 2. Then rearrange for the unknown before calculating.', sources: gasSources,
    quiz: { description: 'Solve combined gas-law and constant-volume pressure–temperature problems.', sidebarTip: 'A rigid container means volume is constant. A sealed container means the amount of gas is constant.', artLabel: 'Changing gas states', artCaption: 'Compare initial and final pressure, volume and temperature.' },
    nextLesson: { title: 'Dalton’s, Gay-Lussac’s and Avogadro’s laws', path: '/lessons/partial-pressure-and-gas-laws' },
  },
  {
    id: 'partial-pressure-and-gas-laws', lessonNumber: '04', title: 'Dalton’s law, Gay-Lussac’s law and Avogadro’s law', titleLead: 'Other important', titleAccent: 'gas relationships', duration: '16–20 min',
    summary: 'Understand how gas mixtures create total pressure, how reacting gas volumes relate, and how pressure can depend on temperature.',
    learningObjectives: ['Calculate total or partial pressure using Dalton’s law.', 'State Gay-Lussac’s law of combining volumes and use gas-volume ratios.', 'Distinguish the pressure–temperature law from the law of combining volumes.', 'Use Avogadro’s law to compare gas volumes and mole amounts.'],
    sections: [
      { id: 'dalton-partial-pressure', label: 'Dalton’s law', kicker: 'Mixtures of gases', title: 'Each gas contributes to the total pressure', content: <><p>A gas mixture can contain more than one gas in the same container. Each gas contributes a share of the total pressure. That share is called its <b>partial pressure</b>.</p><p>Dalton’s law of partial pressures states that the total pressure of a mixture of non-reacting gases is the sum of the partial pressures of the individual gases.</p><FormulaPanel title="Dalton’s law" formula={<span>P<sub>total</sub> = P<sub>1</sub> + P<sub>2</sub> + P<sub>3</sub> + …</span>} variables={<><b>Ptotal</b> = total pressure; <b>P₁, P₂, P₃</b> = partial pressures of each gas.</>} steps={[{label:'List each gas pressure',body:'Use the pressure contributed by each gas in the mixture.'},{label:'Add the pressures',body:'The total pressure is the sum of all the partial pressures.'},{label:'Rearrange if one is missing',body:'Unknown partial pressure = total pressure − the sum of the known partial pressures.'}]}/><GasMixtureDiagram/><WorkedExample title="Find a missing partial pressure" given={<p>A mixture has a total pressure of <b>101 kPa</b>. Nitrogen contributes <b>78 kPa</b> and oxygen contributes <b>21 kPa</b>. Find the pressure due to the remaining gases.</p>} method={[<>Write: <b>Ptotal = PN₂ + PO₂ + Prest</b>.</>,<>Rearrange: <b>Prest = 101 − 78 − 21</b>.</>,<>Calculate: <b>Prest = 2 kPa</b>.</>]} answer={<><b>2 kPa.</b> Check: 78 + 21 + 2 = 101 kPa.</>}/></> },
      { id: 'gay-lussac-combining', label: 'Gay-Lussac’s combining volumes', kicker: 'Gas reaction ratios', title: 'Reacting gases combine in simple volume ratios', content: <><p>Gay-Lussac’s law of combining volumes states that when gases react, the volumes of the reacting gases and gaseous products are in simple whole-number ratios, provided all volumes are measured at the same temperature and pressure.</p><p>The ratios come from the coefficients in a balanced chemical equation.</p><div className="u7-equation-card"><span className="u7-eyebrow">BALANCED EQUATION</span><strong>N₂(g) + 3H₂(g) → 2NH₃(g)</strong><div className="u7-equation-ratio"><span>1 volume</span><span>3 volumes</span><span>2 volumes</span></div></div><p>This means 100 cm³ of nitrogen reacts with 300 cm³ of hydrogen to produce 200 cm³ of ammonia gas, if the reaction goes to completion and the volumes are measured at the same temperature and pressure.</p><Note tone="amber">Only compare gas volumes at the same temperature and pressure. A solid or liquid product is not included in the gas-volume ratio.</Note></> },
      { id: 'gay-lussac-pressure', label: 'Pressure–temperature law', kicker: 'A different gas relationship', title: 'Do not confuse the two laws named after Gay-Lussac', content: <><p>Some school resources use the name <b>Gay-Lussac’s law</b> for the pressure–temperature relationship at fixed volume. Other resources call it Amontons’ law or the pressure law. It states that pressure is directly proportional to kelvin temperature for a fixed amount of gas at constant volume.</p><p>This is not the same statement as Gay-Lussac’s <b>law of combining volumes</b>. In this course we name the two separately so you can recognise both forms in school materials.</p><FormulaPanel title="Pressure law (fixed volume)" formula={<span>P₁/T₁ = P₂/T₂</span>} variables={<><b>P</b> = pressure; <b>T</b> = temperature in kelvin. Keep volume and amount constant.</>} steps={[{label:'Check that volume is fixed',body:'The gas must be in a rigid container.'},{label:'Convert temperatures',body:'Use kelvin, not Celsius.'},{label:'Compare the two states',body:'Pressure changes in the same ratio as absolute temperature.'}]}/></> },
      { id: 'avogadro-law', label: 'Avogadro’s law', kicker: 'Volume and amount', title: 'More gas particles occupy more volume at the same conditions', content: <><p>Avogadro’s law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. For a gas at constant temperature and pressure, volume is directly proportional to the number of moles.</p><FormulaPanel title="Avogadro’s law" formula={<span>V ∝ n &nbsp; and &nbsp; V₁/n₁ = V₂/n₂</span>} variables={<><b>V</b> = volume; <b>n</b> = amount of gas in moles.</>} steps={[{label:'Keep temperature and pressure fixed',body:'Only the amount of gas is being compared.'},{label:'Compare volume per mole',body:'V/n remains constant under these conditions.'},{label:'Use a ratio',body:'If the amount doubles, the volume doubles.'}]}/><WorkedExample title="Find the volume after adding more gas" given={<p>At the same temperature and pressure, 0.50 mol of a gas occupies 12 dm³. What volume will 1.25 mol occupy?</p>} method={[<>Use <b>V₁/n₁ = V₂/n₂</b>.</>,<>Rearrange: <b>V₂ = V₁ × n₂ ÷ n₁</b>.</>,<>Substitute: <b>V₂ = 12 × 1.25 ÷ 0.50</b>.</>,<>Calculate: <b>V₂ = 30 dm³</b>.</>]} answer={<><b>30 dm³.</b> The amount becomes 2.5 times larger, so the volume also becomes 2.5 times larger.</>}/></> },
    ],
    recap: ['Dalton’s law adds the partial pressures of non-reacting gases.', 'Gay-Lussac’s law of combining volumes uses balanced equation coefficients for gases at the same T and P.', 'The pressure–temperature law uses P/T at constant volume.', 'Avogadro’s law says V is directly proportional to n at fixed T and P.'],
    quizPath: '/lessons/partial-pressure-and-gas-laws/quiz', quizDescription: 'Test partial-pressure calculations, gas-volume ratios and the differences between related gas laws.', sidebarTip: 'Read the conditions in the question carefully. “Constant volume”, “same T and P” and “gas mixture” point to different relationships.', sources: [...gasSources, { label: 'OpenStax Chemistry — Dalton’s law and gas-volume ratios', url: 'https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions' }],
    quiz: { description: 'Reason through gas mixtures, reacting gas-volume ratios and Avogadro relationships.', sidebarTip: 'For gas-volume reaction ratios, use coefficients only when all gas volumes are compared at the same temperature and pressure.', artLabel: 'Gas mixtures', artCaption: 'Each gas contributes to total pressure.' },
    nextLesson: { title: 'The mole, Avogadro constant and molar volume', path: '/lessons/mole-and-molar-volume' },
  },
  {
    id: 'mole-and-molar-volume', lessonNumber: '05', title: 'The mole, Avogadro constant and molar volume', titleLead: 'The mole and', titleAccent: 'molar volume', duration: '15–18 min',
    summary: 'Connect the number of gas particles to amount of substance and the volume occupied by one mole under stated conditions.',
    learningObjectives: ['Define the mole and state the Avogadro constant.', 'Calculate particles from moles and moles from particle number.', 'Use the molar volume of an ideal gas at stated conditions.', 'Convert between cm³ and dm³ correctly.'],
    sections: [
      { id: 'what-is-mole', label: 'What is a mole?', kicker: 'Counting tiny particles', title: 'A mole is a fixed counting amount', content: <><p>Atoms and molecules are too small to count one by one in an ordinary sample. Chemists use the <b>mole</b> (symbol mol) as a counting unit, just as a dozen means 12 items.</p><p>One mole contains exactly <b>6.02214076 × 10²³</b> specified entities. This number is the <b>Avogadro constant</b>, written N<sub>A</sub>. Always state what is being counted: atoms, molecules, ions or another specified particle.</p><FormulaPanel title="Number of particles and amount" formula={<span>N = n × N<sub>A</sub> &nbsp; and &nbsp; n = N/N<sub>A</sub></span>} variables={<><b>N</b> = number of entities; <b>n</b> = amount in mol; <b>N<sub>A</sub></b> = 6.02214076 × 10²³ mol⁻¹.</>} steps={[{label:'Identify the particle',body:'Decide whether the question counts atoms, molecules, ions or another entity.'},{label:'Use the correct direction',body:'Multiply moles by Nₐ to find particles; divide particles by Nₐ to find moles.'},{label:'Keep the unit',body:'Amount of substance is measured in mol.'}]}/><MoleVolumeDiagram/></> },
      { id: 'mole-calculations', label: 'Mole calculations', kicker: 'Count by calculation', title: 'Convert between moles and particles', content: <><WorkedExample title="Find the number of molecules in 0.25 mol of oxygen" given={<p>Amount of oxygen molecules: <b>n = 0.25 mol</b>. Avogadro constant: <b>Nₐ = 6.022 × 10²³ mol⁻¹</b>.</p>} method={[<>Use <b>N = n × Nₐ</b>.</>,<>Substitute: <b>N = 0.25 × 6.022 × 10²³</b>.</>,<>Multiply: <b>N = 1.5055 × 10²³</b>.</>]} answer={<><b>Approximately 1.51 × 10²³ oxygen molecules.</b> The word “molecules” matters because O₂ is a molecular gas.</>}/><Note tone="amber">If a question asks for oxygen atoms rather than oxygen molecules, remember that each O₂ molecule contains two oxygen atoms. You would multiply the molecule count by two.</Note></> },
      { id: 'molar-volume', label: 'Molar volume', kicker: 'Volume per mole', title: 'A mole of gas occupies a characteristic volume at stated conditions', content: <><p><b>Molar volume</b> is the volume occupied by one mole of a substance at a specified temperature and pressure. For an ideal gas at 273.15 K (0 °C) and 1 atmosphere, the molar volume is approximately <b>22.4 dm³ mol⁻¹</b>. This is the common school STP convention.</p><p>Be careful: the modern IUPAC standard pressure is 1 bar, not 1 atmosphere. At 273.15 K and 1 bar, the ideal-gas molar volume is approximately 22.71 dm³ mol⁻¹. Always use the conditions specified by your question or textbook; do not mix the two conventions.</p><FormulaPanel title="Molar-volume relationship at stated conditions" formula={<span>V = n × V<sub>m</sub> &nbsp; and &nbsp; n = V/V<sub>m</sub></span>} variables={<><b>V</b> = gas volume; <b>n</b> = amount in mol; <b>V<sub>m</sub></b> = molar volume at the stated T and P.</>} steps={[{label:'Check the conditions',body:'The value 22.4 dm³ mol⁻¹ uses 0 °C and 1 atm.'},{label:'Use consistent volume units',body:'Convert cm³ to dm³ by dividing by 1,000 if using molar volume in dm³ mol⁻¹.'},{label:'Multiply or divide',body:'Multiply moles by molar volume to find volume; divide volume by molar volume to find moles.'}]}/><WorkedExample title="Find the volume of 0.50 mol at school STP" given={<p>Amount = <b>0.50 mol</b>; molar volume = <b>22.4 dm³ mol⁻¹</b> at 273.15 K and 1 atm.</p>} method={[<>Use <b>V = n × Vₘ</b>.</>,<>Substitute: <b>V = 0.50 × 22.4</b>.</>,<>Multiply: <b>V = 11.2 dm³</b>.</>]} answer={<><b>11.2 dm³</b> at the specified school STP conditions.</>}/></> },
      { id: 'volume-conversions', label: 'Volume conversions', kicker: 'Handle units correctly', title: 'Convert volume before substituting', content: <><DataTable headers={['Conversion','What to do','Example']} rows={[[<b>cm³ to dm³</b>,'Divide by 1,000','500 cm³ = 0.500 dm³'],[<b>dm³ to cm³</b>,'Multiply by 1,000','2.4 dm³ = 2,400 cm³'],[<b>dm³ and litres</b>,'Same numerical value','1.5 dm³ = 1.5 L']]}/><p>Do not mix a volume in cm³ with a molar volume in dm³ mol⁻¹ without converting first. Unit conversion is part of the calculation, not an optional final step.</p></> },
    ],
    recap: ['One mole contains exactly 6.02214076 × 10²³ specified entities.', 'N = n × Nₐ and n = N/Nₐ.', 'Molar volume depends on the temperature and pressure stated.', 'The school STP value 22.4 dm³ mol⁻¹ uses 0 °C and 1 atm.', 'Convert cm³ and dm³ before substituting into a formula.'],
    quizPath: '/lessons/mole-and-molar-volume/quiz', quizDescription: 'Practise Avogadro-constant calculations, molar-volume problems and volume conversions.', sidebarTip: 'State the entity being counted and the temperature/pressure convention before using Avogadro constant or molar volume.', sources: moleSources,
    quiz: { description: 'Calculate moles, particles and gas volumes using stated standard conditions.', sidebarTip: 'Do not use 22.4 dm³ mol⁻¹ unless the question uses 0 °C and 1 atm or explicitly adopts the school STP convention.', artLabel: 'Mole and particles', artCaption: 'A mole counts a fixed number of specified entities.' },
    nextLesson: { title: 'Ideal gas equation and Graham’s law', path: '/lessons/ideal-gas-and-graham-law' },
  },
  {
    id: 'ideal-gas-and-graham-law', lessonNumber: '06', title: 'Ideal gas equation and Graham’s law', titleLead: 'Ideal gas equation', titleAccent: 'and Graham’s law', duration: '17–20 min',
    summary: 'Use pressure, volume, amount and temperature together, then compare how quickly gases diffuse or escape through a tiny opening.',
    learningObjectives: ['State and interpret PV = nRT.', 'Choose an appropriate value and unit for R.', 'Rearrange the ideal gas equation to calculate an unknown.', 'Apply Graham’s law to compare gas diffusion rates.'],
    sections: [
      { id: 'ideal-model', label: 'Ideal gas model', kicker: 'A useful scientific model', title: 'What does ideal gas mean?', content: <><p>An <b>ideal gas</b> is a model in which particles are treated as having negligible volume and no intermolecular attraction, and collisions are elastic. Real gases are not perfectly ideal, but many behave approximately ideally at relatively low pressure and moderate or high temperature.</p><p>The ideal gas equation combines the relationships between pressure, volume, amount and absolute temperature.</p><FormulaPanel title="Ideal gas equation" formula={<span>PV = nRT</span>} variables={<><b>P</b> = pressure; <b>V</b> = volume; <b>n</b> = amount in mol; <b>R</b> = gas constant; <b>T</b> = temperature in kelvin.</>} steps={[{label:'Write all known values',body:'Include units for pressure, volume, amount and temperature.'},{label:'Choose a matching R value',body:'For P in kPa and V in dm³, use R = 8.314 kPa dm³ mol⁻¹ K⁻¹.'},{label:'Rearrange for the unknown',body:'For example, V = nRT/P or n = PV/RT.'},{label:'Substitute and calculate',body:'Keep units consistent and include the unit in the answer.'}]}/><Note tone="amber">Common gas constant values include 8.314 kPa dm³ mol⁻¹ K⁻¹ and 0.08206 L atm mol⁻¹ K⁻¹. Choose the value that matches the pressure and volume units in the question.</Note><IdealGrahamDiagram/></> },
      { id: 'ideal-worked', label: 'Ideal gas calculation', kicker: 'Rearrange and solve', title: 'Find the volume using PV = nRT', content: <><WorkedExample title="Calculate the volume of a gas sample" given={<p>A sample contains <b>0.50 mol</b> of gas at <b>100 kPa</b> and <b>300 K</b>. Find its volume. Use <b>R = 8.314 kPa dm³ mol⁻¹ K⁻¹</b>.</p>} method={[<>Start with <b>PV = nRT</b>.</>,<>Make V the subject by dividing both sides by P: <b>V = nRT/P</b>.</>,<>Substitute: <b>V = (0.50 × 8.314 × 300) ÷ 100</b>.</>,<>Calculate the top: 0.50 × 8.314 × 300 = <b>1,247.1</b>.</>,<>Divide by 100: <b>V = 12.471 dm³</b>.</>]} answer={<><b>12.5 dm³</b> to three significant figures.</>}/><p>Check the size: half a mole at about room temperature and around one atmosphere should occupy a volume of this order, so the answer is reasonable.</p></> },
      { id: 'grahams-law', label: 'Graham’s law', kicker: 'Diffusion and molar mass', title: 'Lighter gases usually diffuse faster', content: <><p><b>Diffusion</b> is the net spreading of particles from a region of higher concentration to a region of lower concentration. <b>Effusion</b> is the escape of gas particles through a very small opening. Graham’s law compares rates of diffusion or effusion under the same conditions.</p><p>The rate is inversely proportional to the square root of the molar mass. A gas with a smaller molar mass generally moves through a given process faster than a heavier gas.</p><FormulaPanel title="Graham’s law" formula={<span>r₁/r₂ = √(M₂/M₁)</span>} variables={<><b>r₁ and r₂</b> = rates of gas 1 and gas 2; <b>M₁ and M₂</b> = their molar masses. Notice the masses are reversed inside the fraction.</>} steps={[{label:'Identify the two gases',body:'Write their formulae and calculate or look up their molar masses.'},{label:'Choose which rate is on top',body:'If the question asks “how many times faster is A than B?”, put rA on the left.'},{label:'Put the other gas mass on top inside the root',body:'For rA/rB, use √(MB/MA). This inverse arrangement is important.'},{label:'Take the square root',body:'Calculate the mass ratio first, then its square root.'}]}/><WorkedExample title="Compare ammonia and hydrogen chloride" given={<p>Molar mass of NH₃ = <b>17 g mol⁻¹</b>. Molar mass of HCl = <b>36.5 g mol⁻¹</b>. Compare their diffusion rates.</p>} method={[<>Write <b>rNH₃/rHCl = √(MHCl/MNH₃)</b>.</>,<>Substitute: <b>√(36.5/17)</b>.</>,<>Divide: 36.5 ÷ 17 ≈ <b>2.147</b>.</>,<>Take the square root: √2.147 ≈ <b>1.47</b>.</>]} answer={<><b>Ammonia diffuses about 1.47 times as fast as hydrogen chloride</b> under the same conditions.</>}/></> },
      { id: 'limits-ideal', label: 'Model limitations', kicker: 'Know when it works', title: 'Real gases can deviate from the ideal model', content: <><p>At high pressure, gas particles are forced closer together, so their own volume becomes more important. At low temperature, particles move more slowly and intermolecular attractions become more noticeable. Under these conditions, real gases may deviate from ideal-gas predictions.</p><p>For many school calculations, the ideal gas equation is an accurate and useful approximation. Always use the model and conditions specified in the question.</p><Note tone="mint">The ideal gas equation does not mean that a real gas is made of particles with no size. It is a simplified model that works well under suitable conditions.</Note></> },
    ],
    recap: ['PV = nRT connects P, V, n and T.', 'Use kelvin and choose R to match the pressure and volume units.', 'An ideal gas is a model; real gases approximate it best under suitable conditions.', 'Graham’s law uses the square root of the inverse molar-mass ratio.', 'A lower molar mass generally means a faster diffusion or effusion rate.'],
    quizPath: '/lessons/ideal-gas-and-graham-law/quiz', quizDescription: 'Apply the ideal gas equation and compare diffusion rates using Graham’s law.', sidebarTip: 'For PV = nRT, write the units before choosing R. For Graham’s law, put the other gas’s molar mass in the numerator under the square root.', sources: [...gasSources, { label: 'IUPAC — Ideal gas', url: 'https://goldbook.iupac.org/terms/view/I02935' }],
    quiz: { description: 'Solve ideal-gas calculations and compare the diffusion rates of gases with different molar masses.', sidebarTip: 'Do not mix atm with the kPa version of R. Convert first or select the matching constant.', artLabel: 'PV = nRT', artCaption: 'Four gas variables are linked by one equation.' },
    nextLesson: { title: 'Gas-law calculations', path: '/lessons/gas-law-calculations' },
  },
  {
    id: 'gas-law-calculations', lessonNumber: '07', title: 'Gas-law calculations', titleLead: 'Gas-law', titleAccent: 'calculations', duration: '18–22 min',
    summary: 'Bring the gas laws together and learn a reliable method for selecting equations, converting units and checking numerical answers.',
    learningObjectives: ['Identify the correct gas law from the quantities held constant.', 'Convert Celsius to kelvin and cm³ to dm³.', 'Rearrange equations before substituting values.', 'Solve multi-step gas-law and gas-reaction calculations and check their answers.'],
    sections: [
      { id: 'choose-law', label: 'Choose the correct law', kicker: 'Read the conditions first', title: 'The constant conditions tell you which equation to use', content: <><DataTable headers={['What changes?','What stays constant?','Use this relationship']} rows={[[<b>Pressure and volume</b>,'Temperature and amount','Boyle: P₁V₁ = P₂V₂'],[<b>Volume and temperature</b>,'Pressure and amount','Charles: V₁/T₁ = V₂/T₂'],[<b>Pressure and temperature</b>,'Volume and amount','Pressure law: P₁/T₁ = P₂/T₂'],[<b>P, V and T</b>,'Amount of gas','Combined: P₁V₁/T₁ = P₂V₂/T₂'],[<b>Pressure, volume, n and T</b>,'No pair needs to be fixed','Ideal gas: PV = nRT'],[<b>Gas mixture pressures</b>,'Non-reacting mixture','Dalton: Ptotal = ΣPᵢ']]}/><p>Do not select a formula just because it contains the letter in the question. Look at the conditions: constant temperature, constant pressure, constant volume, fixed amount or gas mixture.</p></> },
      { id: 'calculation-routine', label: 'A reliable routine', kicker: 'Use the same method every time', title: 'Seven steps reduce avoidable mistakes', content: <div className="u7-step-grid">{[{title:'Write the given values',body:'List each number with its symbol and unit.'},{title:'Identify the unknown',body:'Write exactly what the question asks you to find.'},{title:'Choose the law',body:'Use the conditions to select the relationship.'},{title:'Convert units',body:'Change Celsius to kelvin and make units consistent.'},{title:'Rearrange first',body:'Make the required variable the subject before inserting numbers.'},{title:'Substitute and calculate',body:'Show each line so another person can follow your method.'},{title:'Check the answer',body:'Check the unit, significant figures and whether the direction of change makes sense.'}].map((item,index)=><article key={item.title}><span>{index+1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div> },
      { id: 'multi-step-example', label: 'Multi-step example', kicker: 'Combined law in practice', title: 'A gas is compressed and heated', content: <><WorkedExample title="Calculate the final volume" given={<p>A gas occupies <b>2.40 dm³</b> at <b>100 kPa</b> and <b>27 °C</b>. It is moved to a condition of <b>120 kPa</b> and <b>87 °C</b>. Find the final volume, assuming the amount of gas is unchanged.</p>} method={[<>Convert temperatures: <b>T₁ = 27 + 273 = 300 K</b>; <b>T₂ = 87 + 273 = 360 K</b>.</>,<>Use the combined law: <b>P₁V₁/T₁ = P₂V₂/T₂</b>.</>,<>Rearrange for final volume: <b>V₂ = P₁V₁T₂ ÷ (T₁P₂)</b>.</>,<>Substitute: <b>V₂ = (100 × 2.40 × 360) ÷ (300 × 120)</b>.</>,<>Calculate: <b>V₂ = 86,400 ÷ 36,000 = 2.40 dm³</b>.</>]} answer={<><b>2.40 dm³.</b> The pressure and kelvin temperature increased by the same factor (1.2), so their effects on volume cancel in this example.</>}/></> },
      { id: 'gas-stoichiometry', label: 'Gas reaction calculations', kicker: 'Use the equation coefficients', title: 'Gas volume ratios can come from balanced equations', content: <><p>When gases react at the same temperature and pressure, their volume ratios match the coefficients in the balanced equation. For example:</p><div className="u7-equation-card"><span className="u7-eyebrow">GAS-VOLUME RATIO</span><strong>2CO(g) + O₂(g) → 2CO₂(g)</strong><div className="u7-equation-ratio"><span>2 volumes CO</span><span>1 volume O₂</span><span>2 volumes CO₂</span></div></div><p>If 50 cm³ of carbon monoxide reacts completely, it needs 25 cm³ of oxygen and can produce 50 cm³ of carbon dioxide, provided all gas volumes are measured at the same temperature and pressure.</p><Note tone="amber">The coefficient ratio applies to gas volumes only when the gases are at the same temperature and pressure. It does not state that equal masses of the gases are involved.</Note></> },
      { id: 'common-errors-check', label: 'Final checks', kicker: 'Before submitting', title: 'Check units, rounding and physical meaning', content: <><ul className="u7-bullet-list"><li>Temperatures in a gas-law ratio must be in kelvin.</li><li>Do not mix kPa and atm on opposite sides of one equation.</li><li>Do not mix cm³ and dm³ without conversion.</li><li>Keep enough calculator digits during working; round only the final answer sensibly.</li><li>For Graham’s law, remember the molar masses are reversed inside the square root.</li><li>For a question about gases collected over water, subtract water-vapour pressure from total pressure when the problem requires dry-gas pressure.</li></ul><p>A numerical answer is not complete without a unit and a brief check of whether it makes sense.</p></> },
    ],
    recap: ['Identify the variables and constants before selecting a gas law.', 'Convert all Celsius temperatures to kelvin.', 'Use consistent pressure and volume units.', 'Rearrange the formula before substituting.', 'Show working, units and a final reasonableness check.'],
    quizPath: '/lessons/gas-law-calculations/quiz', quizDescription: 'A mixed assessment combining Boyle, Charles, combined and ideal gas laws, partial pressures, molar volume and diffusion.', sidebarTip: 'Set out every calculation as Given → Required → Formula → Rearrangement → Substitution → Answer with unit.', sources: gasSources,
    quiz: { description: 'A challenging mixed test of all major gas-law calculations and equation selection.', sidebarTip: 'Choose the equation from the conditions, not from a memorised keyword alone.', artLabel: 'Gas-law problem solving', artCaption: 'Identify, convert, rearrange, calculate and check.' },
  },
];

export const getGasLawsLesson = (id: string): GasLawsLesson | undefined => gasLawsLessons.find((lesson) => lesson.id === id);
