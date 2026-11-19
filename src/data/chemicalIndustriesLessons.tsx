import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type ChemicalIndustriesLesson = {
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
  quiz: {
    description: string;
    sidebarTip: string;
    artLabel: string;
    artCaption: string;
  };
};

const sourceLinks = {
  inspire: { label: 'Federal Ministry of Education — SS1 Chemical Industries', url: 'https://inspire.education.gov.ng/lessons/234/preview' },
  nipc: { label: 'Nigerian Investment Promotion Commission — Manufacturing sectors', url: 'https://m.nipc.gov.ng/sectors/manufacturing' },
  nepza: { label: 'Nigeria Export Processing Zones Authority — Permissible industrial activities', url: 'https://nepza.gov.ng/free-zones' },
  nou: { label: 'National Open University of Nigeria — Chemical Industries course material', url: 'https://nou.edu.ng/coursewarecontent/CHM%20302%20UNEDITED.pdf' },
  fao: { label: 'FAO — Biogas and biomethane', url: 'https://www.fao.org/in-action/global-bioenergy-partnership/programme-of-work/working-areas/biogas/1/' },
  epaAnaerobic: { label: 'US EPA — Basic information about anaerobic digestion', url: 'https://www.epa.gov/anaerobic-digestion/basic-information-about-anaerobic-digestion' },
  epaPrevention: { label: 'US EPA — Learn about pollution prevention', url: 'https://www.epa.gov/p2/learn-about-pollution-prevention' },
  unep: { label: 'UNEP — Chemical pollution and biodiversity', url: 'https://www.unep.org/en/chemical-pollution-and-biodiversity' },
  epaWaste: { label: 'US EPA — Guide for industrial waste management', url: 'https://www.epa.gov/sites/default/files/2016-03/documents/industrial-waste-guide.pdf' },
  doe: { label: 'US Department of Energy — Biopower and anaerobic digestion', url: 'https://www.energy.gov/cmei/fuels/biopower-energy-heat-and-electricity' },
};

const next = (title: string, path: string) => ({ title, path });
const quizPath = (id: string) => `/lessons/${id}/quiz`;

function Flow({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <div className="u2-flow">
      {steps.map((step, index) => (
        <div className="u2-flow-step" key={step.title}>
          <b>{String(index + 1).padStart(2, '0')}</b>
          <strong>{step.title}</strong>
          <p>{step.detail}</p>
        </div>
      ))}
    </div>
  );
}

function InfoCards({ items }: { items: { title: string; detail: string; example: string; tone?: string }[] }) {
  return (
    <div className="u2-object-grid">
      {items.map((item) => (
        <article className={`u2-object-card ${item.tone ? `u2-object-card--${item.tone}` : ''}`} key={item.title}>
          <span className="u1-card-tag">{item.title.toUpperCase()}</span>
          <p>{item.detail}</p>
          <small>{item.example}</small>
        </article>
      ))}
    </div>
  );
}

const lessons: ChemicalIndustriesLesson[] = [
  {
    id: 'industrial-raw-materials',
    lessonNumber: '01',
    title: 'Raw materials, sources and products',
    titleLead: 'From raw materials',
    titleAccent: 'to useful products',
    summary: 'Discover the materials industries begin with, the processes they use, and the products and by-products they make.',
    duration: '18–22 min',
    learningObjectives: [
      'Define raw material, product, by-product and industrial process.',
      'Classify common industrial raw materials by their sources.',
      'Match selected Nigerian industries with their inputs and outputs.',
      'Explain why quality, availability and steady supply of raw materials matter.',
    ],
    sections: [
      {
        id: 'what-are-industrial-raw-materials', label: 'Industrial raw materials', kicker: 'START WITH THE INPUTS', title: 'What are industrial raw materials?',
        content: <>
          <p>A <strong>raw material</strong> is a starting material used to make a product. An industry may use a natural resource directly, or it may first process that resource into another material before manufacturing its final product.</p>
          <p>For example, limestone is quarried and processed as an input for cement manufacture. Crude oil is processed in a refinery to obtain useful fractions and other materials that can become fuels or feedstocks for further manufacturing.</p>
          <div className="u2-note"><strong>Important distinction:</strong> Raw material does not always mean a material that has never been processed. A factory may buy a processed chemical or metal and use it as its own raw material.</div>
        </>,
      },
      {
        id: 'sources-of-raw-materials', label: 'Sources of raw materials', kicker: 'WHERE INPUTS COME FROM', title: 'Where do industries get their raw materials?',
        content: <>
          <InfoCards items={[
            { title: 'Minerals and rocks', detail: 'Obtained by mining or quarrying. They can supply metals, salts and materials for building products.', example: 'Limestone and clay for cement; mineral ores for metal production.', tone: 'blue' },
            { title: 'Fossil resources', detail: 'Crude oil, natural gas and coal are extracted from geological deposits and processed into fuels and chemical feedstocks.', example: 'Crude oil for refinery products and petrochemical feedstocks.', tone: 'yellow' },
            { title: 'Agricultural materials', detail: 'Crops, plant oils, starches, fibres and animal-derived materials can be processed into food, chemicals and consumer products.', example: 'Cassava starch, palm oil, sugarcane and cotton.', tone: 'mint' },
            { title: 'Air and water', detail: 'These are important industrial inputs. Air supplies gases such as nitrogen and oxygen; water is used in processing, cleaning and cooling.', example: 'Nitrogen from air is used with hydrogen to make ammonia.', tone: 'lavender' },
            { title: 'Recycled materials', detail: 'Some industries use recovered materials as inputs, reducing demand for newly extracted resources.', example: 'Recovered glass cullet used in glass manufacture; recycled metals in metal production.', tone: 'peach' },
            { title: 'Biological resources', detail: 'Microorganisms, enzymes and organic residues can be used in biological manufacturing and waste-to-resource processes.', example: 'Yeast in fermentation; organic waste in biogas production.', tone: 'mint' },
          ]} />
          <p>Industries choose inputs based on the product required, the material's composition and quality, its cost, how much is available, and how reliably it can be supplied.</p>
        </>,
      },
      {
        id: 'selecting-industrial-raw-materials', label: 'Selecting raw materials', kicker: 'CHECKING THE INPUTS', title: 'How does an industry choose its raw materials?',
        content: <>
          <p>An industry must select raw materials that are suitable for the product and the manufacturing process. Availability alone is not enough: the material must meet quality requirements and be practical and safe to use.</p>
          <InfoCards items={[
            { title: 'Composition and quality', detail: 'The material must contain the substances needed for the process and meet the required specification. Unwanted impurities can affect reactions, product quality or equipment.', example: 'Limestone used in cement manufacture is assessed for its chemical composition.', tone: 'blue' },
            { title: 'Availability and steady supply', detail: 'A factory needs enough suitable material, delivered reliably, so production can continue without avoidable interruption.', example: 'A cement plant needs a dependable supply of limestone, clay and fuel.', tone: 'mint' },
            { title: 'Cost and transport', detail: 'Purchase price is only one part of the cost. Processing, storage and transportation also affect whether an input is practical.', example: 'A raw material from a distant source may cost more to transport.', tone: 'yellow' },
            { title: 'Safety and environmental impact', detail: 'Industries must consider hazards during extraction, transport, storage and processing, as well as the effects on people and the environment.', example: 'Dust from quarrying and handling powdered materials needs suitable control.', tone: 'lavender' },
          ]} />
          <div className="u2-note"><strong>Key point:</strong> The best raw material is not necessarily the cheapest or easiest to obtain. Industries consider quality, supply, total cost, safety and environmental effects together.</div>
        </>,
      },
      {
        id: 'products-and-byproducts', label: 'Products and by-products', kicker: 'FOLLOW THE OUTPUTS', title: 'Products, by-products and waste are not the same thing',
        content: <>
          <p>The <strong>main product</strong> is what the process is primarily designed to make. A <strong>by-product</strong> is an additional material formed during the process that may also have useful value. <strong>Waste</strong> is material that the process does not use as a product or recover as a useful by-product and that must be safely managed.</p>
          <div className="u2-table-wrap"><table className="u2-table"><thead><tr><th>Industry example</th><th>Input</th><th>Main product</th><th>Other output or note</th></tr></thead><tbody>
            <tr><td>Cement manufacture</td><td>Limestone, clay and other materials</td><td>Cement</td><td>Dust and kiln gases require control; not every emission is a useful by-product.</td></tr>
            <tr><td>Soap manufacture</td><td>Oils or fats and an alkali</td><td>Soap</td><td>Glycerol is also formed during saponification and can be recovered.</td></tr>
            <tr><td>Crude-oil refining</td><td>Crude oil</td><td>Several fuel and material fractions</td><td>Some recovered sulphur can be used as a feedstock for other chemical manufacture.</td></tr>
            <tr><td>Biogas production</td><td>Organic waste or manure</td><td>Biogas</td><td>Digestate remains and may be used as a soil amendment when properly managed.</td></tr>
          </tbody></table></div>
          <div className="u2-note">A by-product is not automatically harmless. It must still be assessed, handled, stored and used safely. If it cannot be safely recovered, it may need treatment as waste.</div>
        </>,
      },
      {
        id: 'from-input-to-product', label: 'From input to product', kicker: 'PUT THE IDEAS TOGETHER', title: 'How raw materials become products',
        content: <>
          <p>Most industrial production can be described as a sequence. The exact steps differ from one factory to another, but the overall idea is the same.</p>
          <Flow steps={[
            { title: 'Select inputs', detail: 'Choose suitable raw materials and check their quality.' },
            { title: 'Process', detail: 'Use physical operations, chemical reactions or both.' },
            { title: 'Separate and finish', detail: 'Purify, shape, package or prepare the product.' },
            { title: 'Check outputs', detail: 'Test product quality and manage by-products and waste.' },
          ]} />
          <p>Factories must control conditions such as temperature, pressure, concentration, flow rate and reaction time where these affect product quality or safety. Workers also monitor equipment and test samples before products are released.</p>
        </>,
      },
    ],
    recap: [
      'Raw materials are the starting inputs used to make products; they may be natural, processed or recovered.',
      'Industries obtain raw materials from minerals, fossil resources, agriculture, air, water, biological materials and recycling.',
      'The main product is the desired output; a by-product is a secondary useful output, while waste requires safe management.',
      'Industrial processes need measured inputs, controlled conditions and quality checks—not guesswork.',
    ],
    quizPath: quizPath('industrial-raw-materials'),
    quizDescription: 'Ten questions on industrial inputs, sources, products, by-products and the stages of manufacturing.',
    sidebarTip: 'When you study an industry, ask: what goes in, what happens to it, what comes out, and what must be managed safely?',
    sources: [sourceLinks.inspire, sourceLinks.nipc, sourceLinks.nou, sourceLinks.epaAnaerobic],
    nextLesson: next('Types of chemical industries', '/lessons/types-of-chemical-industries'),
    quiz: { description: 'Ten questions on raw materials, industrial sources, products, by-products and basic manufacturing flow. There is no timer.', sidebarTip: 'Track each example from its input to its main output. Do not confuse a useful by-product with an uncontrolled waste stream.', artLabel: 'INPUT → OUTPUT', artCaption: 'industrial process' },
  },
  {
    id: 'types-of-chemical-industries',
    lessonNumber: '02',
    title: 'Types of chemical industries',
    titleLead: 'Different industries,',
    titleAccent: 'different products',
    summary: 'Explore how chemical industries are grouped by the materials they make, their scale and the needs they serve.',
    duration: '17–20 min',
    learningObjectives: [
      'Explain what a chemical industry does.',
      'Identify major types of chemical industries using their products.',
      'Distinguish introductory heavy or bulk chemical production from fine or specialised chemical production.',
      'Give examples of industrial sectors found in or relevant to Nigeria.',
    ],
    sections: [
      { id: 'chemical-industry-meaning', label: 'What is a chemical industry?', kicker: 'THE BIG PICTURE', title: 'What makes an industry a chemical industry?', content: <>
        <p>A <strong>chemical industry</strong> is an industrial activity that makes, processes or formulates chemical substances and materials on a commercial scale. It may transform natural resources into basic chemicals, or use chemicals and other materials to make products used by households, farms, hospitals and other industries.</p>
        <p>Not every factory makes a single pure chemical. A factory producing soap, paint, cement, fertiliser, medicine or plastics may involve several ingredients, operations and quality checks. Chemistry helps workers understand the materials and control the processes.</p>
        <div className="u2-note">The term “chemical industry” can be used broadly. In this unit, we include industries that manufacture chemicals and many material or consumer products through important chemical or chemical-engineering processes.</div>
      </> },
      { id: 'industries-by-product', label: 'Industries by product', kicker: 'WHAT DO THEY MAKE?', title: 'Common types of chemical industries', content: <>
        <InfoCards items={[
          { title: 'Petroleum and petrochemicals', detail: 'Process crude oil or natural gas into fuels and chemical feedstocks used to make other materials.', example: 'Refinery fuels, polymers and plastics feedstocks.', tone: 'yellow' },
          { title: 'Fertiliser and agrochemicals', detail: 'Make or formulate nutrients and crop-protection products used in agriculture.', example: 'Nitrogen, phosphate and compound fertilisers.', tone: 'mint' },
          { title: 'Cement and building materials', detail: 'Process minerals and other inputs into materials for construction.', example: 'Cement, glass, ceramics and related materials.', tone: 'blue' },
          { title: 'Pharmaceuticals', detail: 'Manufacture and formulate medicines and related products under strict quality controls.', example: 'Tablets, capsules, syrups and active ingredients.', tone: 'lavender' },
          { title: 'Soaps, detergents and cosmetics', detail: 'Use oils, surfactants, fragrances and other ingredients to make cleaning and personal-care products.', example: 'Laundry soap, liquid detergent and creams.', tone: 'peach' },
          { title: 'Food and agro-processing', detail: 'Process agricultural materials and use chemistry to preserve, separate, ferment or improve food products.', example: 'Starch, vegetable oil, beverages and packaged foods.', tone: 'mint' },
        ]} />
        <p>These groups overlap. A large company may operate more than one production line, and a chemical produced by one industry may become a raw material for another.</p>
      </> },
      { id: 'heavy-and-fine-chemicals', label: 'Heavy and fine chemicals', kicker: 'A USEFUL CLASSIFICATION', title: 'Heavy or bulk chemicals and fine chemicals', content: <>
        <p>One introductory way to classify chemical production is by the scale and nature of the materials produced. The terms are useful, but not every textbook or industry uses the boundaries in exactly the same way.</p>
        <div className="u2-comparison">
          <article><span className="u1-card-tag">LARGE-SCALE / BULK</span><h3>Heavy or bulk chemicals</h3><p>Usually produced in very large quantities. They are often basic industrial chemicals used as raw materials by other factories.</p><small>Examples include sulphuric acid, ammonia, sodium hydroxide and chlorine.</small></article>
          <article><span className="u1-card-tag">SPECIALISED / HIGH-PURITY</span><h3>Fine chemicals</h3><p>Often produced in smaller quantities with carefully controlled composition or purity for particular uses.</p><small>Examples may include specialised pharmaceutical intermediates, laboratory reagents and high-purity ingredients.</small></article>
        </div>
        <p>Do not interpret “heavy” as meaning that the chemical itself must be physically heavy or dangerous. The classification mainly refers to large-volume basic production, not simply to the weight of a container.</p>
      </> },
      { id: 'nigerian-examples', label: 'Nigerian examples', kicker: 'CONNECT TO YOUR ENVIRONMENT', title: 'Chemical industries in Nigeria', content: <>
        <p>Nigeria has industrial activity and investment opportunities across cement and building materials, petrochemicals and plastics, pharmaceuticals and chemical manufacturing, food processing, textiles and other manufacturing sectors.</p>
        <div className="u2-table-wrap"><table className="u2-table"><thead><tr><th>Sector</th><th>Typical inputs</th><th>Examples of outputs</th><th>Who uses them?</th></tr></thead><tbody>
          <tr><td>Cement and building materials</td><td>Limestone, clay and additives</td><td>Cement and related building materials</td><td>Builders and construction firms</td></tr>
          <tr><td>Petrochemicals and plastics</td><td>Petroleum or natural-gas-derived feedstocks</td><td>Plastic resins and chemical feedstocks</td><td>Packaging, household goods and manufacturers</td></tr>
          <tr><td>Fertiliser</td><td>Nitrogen compounds, phosphate and potassium-containing materials</td><td>Fertiliser products and blends</td><td>Farmers and agricultural suppliers</td></tr>
          <tr><td>Pharmaceuticals</td><td>Active ingredients and carefully selected excipients</td><td>Medicines and health products</td><td>Hospitals, pharmacies and patients</td></tr>
          <tr><td>Food processing</td><td>Crops, oils, water and approved processing ingredients</td><td>Flour, starch, oils, drinks and packaged foods</td><td>Households, retailers and food businesses</td></tr>
        </tbody></table></div>
        <p>These are sector examples, not a list of every company in Nigeria or a guarantee that all listed inputs are sourced locally. Some manufacturers import certain raw materials or intermediate products.</p>
      </> },
      { id: 'how-industries-connect', label: 'How industries connect', kicker: 'INDUSTRIAL LINKS', title: 'One industry can supply another', content: <>
        <p>Industries are linked. A refinery can supply petrochemical feedstocks; a petrochemical plant can supply polymer materials; another factory can turn those materials into packaging. A fertiliser producer supplies agriculture, while farms supply crops to food-processing industries.</p>
        <Flow steps={[
          { title: 'Resource producer', detail: 'Extracts or prepares an initial material.' },
          { title: 'Chemical processor', detail: 'Converts it into a chemical or material feedstock.' },
          { title: 'Product manufacturer', detail: 'Turns the feedstock into a useful product.' },
          { title: 'User or market', detail: 'Households, farms, hospitals or other businesses use it.' },
        ]} />
        <p>This network is sometimes called an industrial value chain. A change in one part—such as a shortage of a raw material, transport disruption or energy-price increase—can affect other producers too.</p>
      </> },
    ],
    recap: ['Chemical industries make or process chemical substances and materials on a commercial scale.', 'Industries can be grouped by the products they make, such as petrochemicals, fertilisers, pharmaceuticals, cement, soaps and food products.', 'Heavy or bulk chemicals are commonly made in very large volumes; fine chemicals are often specialised and produced in smaller quantities.', 'Industrial sectors are connected through supply chains, and some raw materials are imported while others may be sourced locally.'],
    quizPath: quizPath('types-of-chemical-industries'), quizDescription: 'Ten questions on chemical-industry categories, heavy and fine chemicals, and industrial links.', sidebarTip: 'Classify an industry by asking what it makes, who uses the product, and whether it supplies another factory.', sources: [sourceLinks.inspire, sourceLinks.nipc, sourceLinks.nepza, sourceLinks.nou],
    nextLesson: next('Industrial location and economic importance', '/lessons/industrial-location-and-importance'),
    quiz: { description: 'Ten questions on the meaning, types, scale and products of chemical industries. There is no timer.', sidebarTip: 'Look for the product and production scale before choosing an industry category.', artLabel: 'INDUSTRY TYPES', artCaption: 'products and sectors' },
  },
  {
    id: 'industrial-location-and-importance', lessonNumber: '03', title: 'Industrial location and economic importance', titleLead: 'Why factories', titleAccent: 'are built where they are', summary: 'Investigate the factors that influence factory locations and how industries affect people and the Nigerian economy.', duration: '18–22 min',
    learningObjectives: ['List important factors that influence where an industry is located.', 'Explain how chemical industries affect individuals, communities and the national economy.', 'Recognise that industrial benefits and costs may be shared unevenly.', 'Carry out a safe observation of an industry or industrial product in the locality.'],
    sections: [
      { id: 'meaning-of-industrial-location', label: 'Industrial location', kicker: 'CHOOSING A SITE', title: 'What is industrial location?', content: <>
        <p><strong>Industrial location</strong> is the place where a factory or industrial activity is established. A company does not choose a site only because the land looks attractive. It considers whether the location can support production safely, reliably and at a reasonable cost.</p>
        <p>Different industries need different things. A cement plant may benefit from being near large deposits of limestone and clay. A food-processing plant may prefer access to farms, clean water, roads and customers. A pharmaceutical plant needs reliable utilities, skilled staff and strict quality-control systems.</p>
      </> },
      { id: 'location-factors', label: 'Location factors', kicker: 'WHAT DOES A FACTORY NEED?', title: 'Factors that influence industrial location', content: <>
        <InfoCards items={[
          { title: 'Raw materials', detail: 'Being near bulky, perishable or difficult-to-transport inputs can reduce transport costs and supply delays.', example: 'A plant using limestone may locate near suitable limestone deposits.', tone: 'blue' },
          { title: 'Power and water', detail: 'Many factories need reliable electricity, fuel, process water and cooling water.', example: 'An industry with energy-intensive equipment needs a dependable power supply.', tone: 'yellow' },
          { title: 'Transport and infrastructure', detail: 'Roads, railways, ports, storage and telecommunications help move inputs, products and information.', example: 'A factory that imports equipment may value access to a port and good roads.', tone: 'lavender' },
          { title: 'Workers and skills', detail: 'Industries need employees with the right technical, operational, scientific and management skills.', example: 'A pharmaceutical manufacturer needs trained staff and quality-control expertise.', tone: 'mint' },
          { title: 'Markets', detail: 'Being near customers can reduce delivery time and costs, especially for bulky or perishable products.', example: 'A beverage plant may consider access to large consumer markets.', tone: 'peach' },
          { title: 'Safety, regulation and environment', detail: 'A site must be suitable for safe operations, meet legal requirements and manage its effects on nearby communities and ecosystems.', example: 'A plant needs space and systems for safe storage, emissions control and waste treatment.', tone: 'blue' },
        ]} />
        <p>Other considerations include land cost, access to finance, security, taxes, nearby suppliers and the availability of industrial estates or supporting services. No single factor decides every location.</p>
      </> },
      { id: 'importance-to-people', label: 'Importance to individuals', kicker: 'EVERYDAY BENEFITS', title: 'How industries affect individuals and communities', content: <>
        <div className="u2-object-grid">
          <article className="u2-object-card u2-object-card--mint"><span className="u1-card-tag">GOODS AND SERVICES</span><p>Industries make or supply products people use, including medicines, fertilisers, cement, soap, plastics, fuels and processed foods.</p></article>
          <article className="u2-object-card u2-object-card--blue"><span className="u1-card-tag">JOBS AND SKILLS</span><p>Factories and their suppliers create work in production, maintenance, laboratories, transport, sales, engineering and safety.</p></article>
          <article className="u2-object-card u2-object-card--yellow"><span className="u1-card-tag">LOCAL BUSINESS</span><p>Transporters, repairers, caterers, packaging suppliers and other small businesses may serve an industrial site.</p></article>
          <article className="u2-object-card u2-object-card--lavender"><span className="u1-card-tag">INFRASTRUCTURE</span><p>Industrial development may encourage investment in roads, electricity, water and training, although benefits depend on planning and implementation.</p></article>
        </div>
        <p>Industrial activity can also bring challenges such as traffic, noise, pressure on water supplies or pollution. Communities should be included in decisions that may affect their health, livelihoods and environment.</p>
      </> },
      { id: 'importance-to-nigeria', label: 'Importance to Nigeria', kicker: 'NATIONAL ECONOMY', title: 'Why chemical industries matter to Nigeria', content: <>
        <ul className="u1-simple-list">
          <li><strong>Local production:</strong> manufacturing can make useful goods within the country and reduce dependence on imported finished products where local production is competitive.</li>
          <li><strong>Supply to other sectors:</strong> fertilisers support agriculture; cement supports construction; petrochemical feedstocks support plastics and other manufacturing.</li>
          <li><strong>Employment and training:</strong> industries need workers and can develop technical skills and experience.</li>
          <li><strong>Trade and exports:</strong> competitive products may be sold to other countries, earning export revenue.</li>
          <li><strong>Government revenue:</strong> lawful business activity can contribute through taxes, duties, fees and other public revenue.</li>
          <li><strong>Technology and investment:</strong> manufacturing can encourage research, equipment investment, supplier development and industrial know-how.</li>
        </ul>
        <div className="u2-note">An industry does not automatically benefit every person or region equally. The scale of national benefit depends on productivity, local supply chains, wages, environmental management, taxes and responsible regulation.</div>
      </> },
      { id: 'local-industry-observation', label: 'Local industry observation', kicker: 'A SAFE LEARNING ACTIVITY', title: 'Become an industrial detective', content: <>
        <p>Look around your home, school, market or community and identify products that may have come from chemical or related manufacturing. You do not need to enter a factory. A package label, a public company website or a teacher-provided photograph can be enough evidence for this activity.</p>
        <div className="u2-visit-check"><strong>Record these details for one product or industry:</strong><ul>
          <li>What product is made, processed or sold?</li><li>What raw materials might be needed?</li><li>Who uses the product?</li><li>What jobs or supporting businesses may be involved?</li><li>What environmental issue would the producer need to control?</li>
        </ul></div>
        <p>When a school organises an industrial excursion, follow the teacher's instructions, stay in authorised visitor areas and do not touch equipment, samples or chemicals.</p>
      </> },
    ],
    recap: ['Industrial location means the place where a factory is established.', 'Raw materials, power, water, transport, labour, markets, land, safety and environmental rules all influence location.', 'Industries supply useful goods, create jobs, support other sectors and may contribute to trade and government revenue.', 'Industrial benefits must be balanced with community wellbeing and environmental responsibility.', 'Local industry observations should use safe, reliable information and authorised visits only.'],
    quizPath: quizPath('industrial-location-and-importance'), quizDescription: 'Ten questions on industrial location factors, community effects and national economic importance.', sidebarTip: 'For any proposed factory site, test the location against its materials, utilities, workers, customers, transport and environmental responsibilities.', sources: [sourceLinks.inspire, sourceLinks.nipc, sourceLinks.nepza, sourceLinks.nou],
    nextLesson: next('Biotechnology and biogas', '/lessons/biotechnology-and-biogas'),
    quiz: { description: 'Ten questions on industrial site selection, benefits, challenges and the Nigerian economy. There is no timer.', sidebarTip: 'Remember that industrial development has both benefits and responsibilities. A balanced answer considers people, the economy and the environment.', artLabel: 'SITE + PEOPLE', artCaption: 'industry and community' },
  },
  {
    id: 'biotechnology-and-biogas', lessonNumber: '04', title: 'Biotechnology and biogas', titleLead: 'Using living systems', titleAccent: 'to make useful products', summary: 'Learn how microorganisms and biological processes support manufacturing, waste treatment and renewable energy.', duration: '18–22 min',
    learningObjectives: ['Define biotechnology at an introductory level.', 'Explain how microorganisms or enzymes are used in industrial production.', 'Describe the stages of anaerobic digestion and biogas formation.', 'Identify the uses and safety considerations of biogas and digestate.'],
    sections: [
      { id: 'what-is-biotechnology', label: 'Biotechnology', kicker: 'LIVING SYSTEMS AT WORK', title: 'What is biotechnology?', content: <>
        <p><strong>Biotechnology</strong> is the use of living organisms, cells or biological components—such as enzymes—to make useful products or carry out useful processes. It connects biology with chemistry, engineering and other sciences.</p>
        <p>Some microorganisms can change raw materials into new substances. Enzymes can speed up particular reactions. Industries use these biological abilities under controlled conditions to produce food ingredients, medicines, fuels and other products, or to treat certain waste streams.</p>
      </> },
      { id: 'industrial-biotechnology-examples', label: 'Industrial applications', kicker: 'WHERE IT IS USED', title: 'How biotechnology supports industry', content: <>
        <InfoCards items={[
          { title: 'Food fermentation', detail: 'Selected microorganisms convert sugars and other materials into substances that affect food flavour, texture or preservation.', example: 'Yeast is used in bread making; bacteria are used in some fermented foods.', tone: 'yellow' },
          { title: 'Medicines and health products', detail: 'Microorganisms or cells can be used to make selected medicines, enzymes and biological products in carefully controlled facilities.', example: 'Some antibiotics and therapeutic products are made using biological production systems.', tone: 'blue' },
          { title: 'Industrial enzymes', detail: 'Enzymes help specific reactions happen more efficiently and can work in food, textile, detergent and other processes.', example: 'Enzymes may help break down starches or proteins in selected processes.', tone: 'mint' },
          { title: 'Waste treatment and energy', detail: 'Microorganisms can break down organic waste. Some systems collect the gases produced and use them as an energy source.', example: 'Anaerobic digestion can produce biogas and nutrient-rich digestate.', tone: 'lavender' },
        ]} />
        <p>Biotechnology does not mean that every industrial process is biological. A factory may combine biological steps with ordinary chemical reactions and physical separation operations.</p>
      </> },
      { id: 'fermentation-example', label: 'Fermentation', kicker: 'A FAMILIAR BIOPROCESS', title: 'Fermentation: microorganisms transform materials', content: <>
        <p>In one familiar type of fermentation, yeast uses sugars under suitable low-oxygen conditions and produces ethanol and carbon dioxide. This process is relevant to bread making and some beverage or biofuel production. Different microorganisms and conditions produce different fermentation products.</p>
        <div className="u2-equation-card"><span className="u1-card-tag">SIMPLIFIED GLUCOSE FERMENTATION</span><strong>C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂</strong><p>Glucose → ethanol + carbon dioxide (in yeast fermentation under suitable conditions)</p></div>
        <p>The equation is a simplified representation of alcoholic fermentation. It does not mean that all biotechnology produces ethanol, or that all fermentation follows this exact pathway.</p>
      </> },
      { id: 'biogas-anaerobic-digestion', label: 'Anaerobic digestion', kicker: 'TURNING ORGANIC WASTE INTO RESOURCES', title: 'How is biogas produced?', content: <>
        <p><strong>Biogas</strong> is a mixture of gases made when microorganisms break down organic materials in the absence of oxygen. The process is called <strong>anaerobic digestion</strong> and normally takes place in a sealed system called a digester.</p>
        <Flow steps={[
          { title: 'Collect feedstock', detail: 'Gather suitable manure, food waste or crop residues.' },
          { title: 'Feed a digester', detail: 'Place the organic material in a sealed, oxygen-free tank.' },
          { title: 'Microbes break it down', detail: 'Microorganisms decompose the material under controlled conditions.' },
          { title: 'Capture the outputs', detail: 'Collect biogas and remove the remaining digestate for safe management.' },
        ]} />
        <p>Biogas is mainly methane and carbon dioxide, with small amounts of other gases such as water vapour and sometimes hydrogen sulphide. Its exact composition depends on the feedstock and process conditions.</p>
      </> },
      { id: 'biogas-uses-and-safety', label: 'Uses and safety', kicker: 'USEFUL OUTPUTS, CAREFUL CONTROL', title: 'What can biogas and digestate be used for?', content: <>
        <div className="u2-comparison"><article><span className="u1-card-tag">GAS OUTPUT</span><h3>Biogas</h3><p>When properly collected, cleaned and used in suitable equipment, biogas can provide heat, cooking energy or electricity.</p><small>Methane is combustible; gas systems need proper design and operation.</small></article><article><span className="u1-card-tag">MATERIAL OUTPUT</span><h3>Digestate</h3><p>The remaining material after digestion may contain nutrients and can sometimes be used as a soil amendment or fertiliser after appropriate treatment and assessment.</p><small>It must be managed safely; it is not automatically safe to apply to every crop or location.</small></article></div>
        <div className="u2-safety"><strong>Safety note:</strong> Biogas systems are not suitable for unsupervised school experiments. Methane can burn or explode when mixed with air, and hydrogen sulphide can be toxic. Never open, build, ignite or test a gas digester without trained supervision and proper safety controls.</div>
      </> },
    ],
    recap: ['Biotechnology uses organisms, cells or biological components such as enzymes for useful purposes.', 'Fermentation is one example of industrial biotechnology; yeast can convert glucose into ethanol and carbon dioxide.', 'Anaerobic digestion is the breakdown of organic material by microorganisms without oxygen.', 'Biogas is mainly methane and carbon dioxide; digestate is the material left after digestion.', 'Biogas can be useful energy, but methane and hydrogen sulphide require proper safety controls.'],
    quizPath: quizPath('biotechnology-and-biogas'), quizDescription: 'Ten questions on biotechnology, fermentation, anaerobic digestion, biogas and safe use.', sidebarTip: 'Keep the key difference in mind: fermentation uses microorganisms to transform materials; anaerobic digestion is a particular oxygen-free breakdown process that can produce biogas.', sources: [sourceLinks.inspire, sourceLinks.fao, sourceLinks.epaAnaerobic, sourceLinks.doe],
    nextLesson: next('Chemical industries and the environment', '/lessons/industry-and-environment'),
    quiz: { description: 'Ten questions on biotechnology, fermentation, biogas production and safe handling. There is no timer.', sidebarTip: 'Remember the role of microorganisms, the absence of oxygen in anaerobic digestion, and the two useful outputs.', artLabel: 'BIO + PROCESS', artCaption: 'biotechnology' },
  },
  {
    id: 'industry-and-environment', lessonNumber: '05', title: 'Chemical industries and the environment', titleLead: 'Industry and the', titleAccent: 'environment', summary: 'Understand how industrial activity can affect air, water, land and communities—and how these effects can be reduced.', duration: '19–23 min',
    learningObjectives: ['Identify common environmental problems associated with industrial activity.', 'Explain how industrial pollution can affect people and ecosystems.', 'Suggest practical ways to prevent or control pollution.', 'Describe how a community or student can observe industrial environmental responsibility safely.'],
    sections: [
      { id: 'industry-and-environment-link', label: 'Industry and environment', kicker: 'BENEFITS NEED RESPONSIBILITY', title: 'Why must industries protect the environment?', content: <>
        <p>Industries provide materials, products, jobs and services. At the same time, extracting raw materials, using energy and water, transporting goods and manufacturing products can place pressure on the environment if activities are poorly managed.</p>
        <p>Environmental protection is therefore part of responsible industrial operation. It helps protect human health, water supplies, soil, wildlife and the resources that communities and industries depend on.</p>
      </> },
      { id: 'environmental-problems', label: 'Environmental problems', kicker: 'WHAT CAN GO WRONG?', title: 'Common environmental effects of industry', content: <>
        <div className="u2-pollution-grid">
          <article><strong>Air pollution</strong><p>Dust, smoke, fumes or gases from fuel burning and industrial processes may reduce air quality and harm health.</p></article>
          <article><strong>Water pollution</strong><p>Untreated or poorly controlled wastewater may carry chemicals, oils, acids, alkalis, suspended solids or excess nutrients into water bodies.</p></article>
          <article><strong>Land and soil contamination</strong><p>Leaks, spills, poorly managed chemicals and dumped waste may contaminate land and affect plants, animals or groundwater.</p></article>
          <article><strong>Noise and heat</strong><p>Heavy machinery, transport and some industrial operations can create noise or release heat that affects nearby communities and environments.</p></article>
          <article><strong>Resource depletion</strong><p>High use of water, energy, minerals and fossil resources can put pressure on natural resources, especially when use is inefficient.</p></article>
          <article><strong>Climate and ecosystem effects</strong><p>Greenhouse-gas emissions and chemical pollution can contribute to climate change, acidification, habitat damage and biodiversity loss.</p></article>
        </div>
        <p>The type and seriousness of an impact depend on the substance, amount released, route of exposure, location, duration and controls in place. Not every factory produces every type of pollution.</p>
      </> },
      { id: 'preventing-pollution', label: 'Preventing and controlling pollution', kicker: 'SOLUTIONS', title: 'How can industries reduce environmental harm?', content: <>
        <p>The strongest approach is often to prevent pollution before it is created. When prevention is not enough, materials may be reused or recycled, and remaining waste or emissions must be treated and managed safely.</p>
        <div className="u2-step-list">
          <article><b>01</b><div><h3>Reduce at the source</h3><p>Improve processes, use materials efficiently, prevent leaks and select less hazardous inputs where suitable.</p></div></article>
          <article><b>02</b><div><h3>Reuse and recycle</h3><p>Recover water, solvents, heat, packaging or process materials where technically and safely possible.</p></div></article>
          <article><b>03</b><div><h3>Treat wastewater and emissions</h3><p>Use appropriate treatment systems, filters, scrubbers or other control equipment before releases.</p></div></article>
          <article><b>04</b><div><h3>Handle waste responsibly</h3><p>Separate, label, store, transport and dispose of hazardous and non-hazardous wastes according to applicable requirements.</p></div></article>
          <article><b>05</b><div><h3>Monitor and improve</h3><p>Measure emissions and discharges, maintain equipment, train workers and respond to incidents.</p></div></article>
        </div>
        <div className="u2-note">Pollution prevention is different from treating pollution after it has already been produced. Preventing waste at its source can reduce environmental harm and operating costs.</div>
      </> },
      { id: 'environmental-management', label: 'Environmental management', kicker: 'PLANNING BEFORE PRODUCTION', title: 'Planning, rules and community responsibility', content: <>
        <p>Industries should assess likely environmental effects before starting or expanding projects. Environmental assessment, appropriate permits, pollution-control plans, emergency procedures and regular monitoring help identify problems before they become serious.</p>
        <p>Communities also need clear information and channels for reporting concerns. Good environmental management is not just a public-relations statement; it requires working controls, records, inspections and corrective action.</p>
        <InfoCards items={[
          { title: 'Before construction', detail: 'Study the proposed site, likely impacts, nearby communities, water sources and sensitive ecosystems.', example: 'Plan safe distances, drainage and waste-management systems.', tone: 'blue' },
          { title: 'During operation', detail: 'Maintain equipment, train workers, monitor pollution and keep clear records.', example: 'Check wastewater-treatment performance and emissions-control equipment.', tone: 'mint' },
          { title: 'When incidents occur', detail: 'Stop or contain the source where safe, notify responsible personnel and follow emergency procedures.', example: 'A trained response team manages a spill using the approved site plan.', tone: 'yellow' },
          { title: 'After closure', detail: 'Decommission facilities safely and restore or manage affected land as required.', example: 'Remove hazards and monitor any area requiring remediation.', tone: 'lavender' },
        ]} />
      </> },
      { id: 'community-check', label: 'Community observation', kicker: 'WHAT CAN YOU DO?', title: 'A simple environmental observation checklist', content: <>
        <p>For a class discussion, use publicly available information, a teacher-approved visit or an observation from a safe public location. Do not enter an industrial site without permission or approach waste outlets, storage tanks or operating equipment.</p>
        <div className="u2-visit-check"><strong>Questions to guide your observation:</strong><ul>
          <li>What product does the industry make?</li><li>What raw materials, water or energy might it need?</li><li>What kinds of waste or emissions might be associated with the process?</li><li>What treatment or pollution-control systems are visible or described in reliable information?</li><li>How could the industry communicate with and protect nearby residents?</li>
        </ul></div>
        <div className="u2-safety"><strong>Remember:</strong> Never touch unknown liquids, dust, waste or containers. Do not smell industrial discharges to identify them. Report any suspected danger to a teacher or responsible adult instead.</div>
      </> },
    ],
    recap: ['Industrial activity can affect air, water, land, noise levels, resources, climate and ecosystems.', 'The seriousness of an impact depends on the material, amount, exposure, location and duration.', 'Preventing pollution at its source is generally preferable to dealing with it after release.', 'Reuse, recycling, treatment, monitoring, safe waste handling and environmental assessment all have roles.', 'Students should observe industries only from authorised or safe locations and never handle unknown materials.'],
    quizPath: quizPath('industry-and-environment'), quizDescription: 'Ten questions on industrial environmental effects, pollution prevention, treatment and community responsibility.', sidebarTip: 'For every environmental problem, identify the source, the route by which it reaches people or nature, and one realistic control.', sources: [sourceLinks.inspire, sourceLinks.epaPrevention, sourceLinks.epaWaste, sourceLinks.unep],
    quiz: { description: 'Ten questions on industrial pollution, environmental management and practical prevention measures. There is no timer.', sidebarTip: 'Choose solutions that match the pollution source. Prevention at source, treatment and responsible monitoring play different roles.', artLabel: 'INDUSTRY + EARTH', artCaption: 'environmental care' },
  },
];

export const chemicalIndustriesLessons = lessons;
export const getChemicalIndustriesLesson = (id: string | undefined) => lessons.find((lesson) => lesson.id === id);

export type LessonContentNode = ReactNode;
