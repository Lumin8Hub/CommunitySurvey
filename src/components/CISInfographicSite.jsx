import {
  BarChart3,
  BookOpen,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  HeartHandshake,
  Mail,
  Megaphone,
  Network,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const navItems = [
  { href: "#findings", label: "Findings" },
  { href: "#safety", label: "Safety" },
  { href: "#institutions", label: "Institutions" },
  { href: "#path-forward", label: "Path forward" },
  { href: "#action", label: "Take action" },
];

const heroStats = [
  { value: "1,400+", label: "voices of Jewish Canadians from coast to coast", tone: "blue" },
  { value: "92.5%", label: "feel more concerned and less safe over the last 24 months", tone: "coral" },
  { value: "90.2%", label: "say the community was ill prepared for the aftermath of 10/7", tone: "gold" },
  { value: "93.6%", label: "say recognizably Jewish people and institutions need enhanced security", tone: "sky" },
];

const pillars = [
  {
    title: "Clarity",
    copy: "A national snapshot of Jewish life in Canada, grounded in community input of our shared lived experience.",
    icon: BarChart3,
  },
  {
    title: "Community impact",
    copy: "A stronger pipeline from donors to doers supporting collaborative, meaningful action towards shared goals.",
    icon: Users,
  },
  {
    title: "Accountability",
    copy: "Year-over-year impartial tracking of priorities, resource allocations and impact, showcasing community satisfaction and ROI through tangible outcomes.",
    icon: Target,
  },
];

const cities = ["Toronto", "Montreal", "Vancouver", "Winnipeg", "Calgary", "Ottawa", "London", "Halifax"];

const sexParticipation = [
  { label: "Female", value: 67.2, color: "#e99ab8" },
  { label: "Male", value: 31.3, color: "#1f6fff" },
  { label: "Prefer not to say", value: 1.5, color: "#9bc7ff" },
];

const ageDemographics = [
  ["20–24", 0.5],
  ["25–29", 0.5],
  ["30–34", 2.9],
  ["35–39", 3.3],
  ["40–44", 9.8],
  ["45–49", 8.1],
  ["50–54", 9.8],
  ["55–59", 12.0],
  ["60–64", 11.2],
  ["65–69", 14.4],
  ["70–74", 9.8],
  ["75–79", 8.9],
  ["80–84", 4.1],
  ["85–89", 1.2],
  ["90+", 0.2],
  ["No answer", 3.3],
];

const priorities = [
  ["Safety", "The highest-ranked need across the community."],
  ["Antisemitism", "More effective methods for combatting antisemitism."],
  ["Youth engagement", "Future resilience depends on younger community members."],
  ["Community mobilization", "People want faster, broader, more coordinated action."],
  ["Training & education", "Practical tools, readiness, and empowerment."],
  ["Advocacy & lobbying", "Focused influence with policy makers and institutions."],
  ["PR / communications", "Clearer public messaging and stronger visibility."],
  ["Policy & research", "Evidence to guide smarter long-term strategy."],
];

const safetyStats = [
  {
    label: "The Jewish community was well prepared for the antisemitic threats post 10/7.",
    value: 90.2,
    response: "Disagree",
    caption: "Despite decades spent and hundreds of millions raised to combat antisemitism, only 3.6% agreed the community was well prepared.",
  },
  {
    label: "I feel more concerned and less safe as a Jew in Canada.",
    value: 92.5,
    response: "Agree",
    caption: "A near-consensus signal of heightened vulnerability after October 7.",
  },
];

const wordClouds = [
  {
    title: "Antisemitism / lived experience",
    image: "assets/wordclouds/wordcloud-01-antisemitism-lived-experience.png",
    alt: "Word cloud emphasizing unsafe, fear, harassment, protests, anxiety, vandalism, graffiti, online hate, intimidation, and threats.",
    terms: [
      ["unsafe", 100],
      ["fear", 92],
      ["harassment", 88],
      ["protests", 78],
      ["anxiety", 74],
      ["vandalism", 70],
      ["graffiti", 64],
      ["online hate", 62],
      ["intimidation", 60],
      ["threats", 58],
      ["discrimination", 56],
      ["isolation", 54],
      ["trauma", 52],
      ["lost friendships", 50],
      ["workplace discrimination", 47],
      ["campus hostility", 45],
      ["synagogue vandalism", 44],
      ["public harassment", 42],
      ["mental health", 40],
    ],
  },
  {
    title: "Current approach / how we improve",
    image: "assets/wordclouds/wordcloud-02-current-approach-how-we-improve.png",
    alt: "Word cloud emphasizing coordinate the ecosystem, transparent communication, resource allocation, balanced leadership, accountability, measurable outcomes, fund grassroots, and security preparedness.",
    terms: [
      ["coordinate the ecosystem", 100],
      ["transparent communication", 94],
      ["resource allocation", 90],
      ["balanced leadership", 86],
      ["accountability", 82],
      ["measurable outcomes", 80],
      ["fund grassroots", 76],
      ["security preparedness", 72],
      ["communication strategy", 68],
      ["integrated approach", 66],
      ["donor guidance", 62],
      ["visible impact", 60],
      ["community safety", 58],
      ["role clarity", 56],
    ],
  },
  {
    title: "Hope / collective fighting spirit",
    image: "assets/wordclouds/wordcloud-03-hope-future.png",
    alt: "Word cloud emphasizing overcome threats, future generations, gratitude, grassroots critical role, meaning and purpose, growing stronger, united with allies, and empowered initiatives.",
    terms: [
      ["overcome threats", 100],
      ["future generations", 94],
      ["gratitude", 88],
      ["grassroots critical role", 84],
      ["meaning and purpose", 80],
      ["growing stronger", 76],
      ["united with allies", 72],
      ["empowered initiatives", 68],
      ["fighting spirit", 66],
      ["long history", 62],
      ["community resilience", 60],
      ["safer future", 56],
    ],
  },
];

const identityPressures = [
  {
    label: "I can show my Jewish identity in public without fear",
    primary: 63,
    secondary: 18.8,
    primaryLabel: "Disagree",
    secondaryLabel: "agree",
    tone: "coral",
  },
  {
    label: "Jewish symbols in public spaces are likely to be targeted for vandalism",
    primary: 84.6,
    secondary: 5.4,
    primaryLabel: "Agree",
    secondaryLabel: "disagree",
    tone: "blue",
  },
  {
    label: "Recognizably Jewish individuals and institutions require enhanced security",
    primary: 93.6,
    secondary: 1.5,
    primaryLabel: "Agree",
    secondaryLabel: "disagree",
    tone: "blue",
  },
  {
    label: "We must immediately improve security in Jewish community settings",
    primary: 89.6,
    secondary: 3.3,
    primaryLabel: "Agree",
    secondaryLabel: "disagree",
    tone: "gold",
  },
];

const organizations = [
  { name: "B’nai Brith Canada", unsatisfied: 17.4, neutral: 16.2, satisfied: 60.4, unknown: 6 },
  { name: "Friends of Simon Wiesenthal Center", unsatisfied: 20, neutral: 23.8, satisfied: 43.2, unknown: 13 },
  { name: "The Abraham Global Peace Initiative (AGPI)", unsatisfied: 16.2, neutral: 24.4, satisfied: 28.8, unknown: 30.6 },
  { name: "Jewish Security Network (JSN)", unsatisfied: 21.6, neutral: 21, satisfied: 30.6, unknown: 26.8 },
  { name: "Canadian Jewish Political Affairs Committee (CJPAC)", unsatisfied: 24.6, neutral: 25.8, satisfied: 31, unknown: 18.6 },
  { name: "Centre for Israel & Jewish Affairs (CIJA)", unsatisfied: 32.8, neutral: 17.4, satisfied: 43, unknown: 6.8 },
  { name: "UJA Federation", unsatisfied: 35.8, neutral: 18.8, satisfied: 38.8, unknown: 6.6 },
];

const comparisonScores = [
  ["Policy & legislation", 29.7, 70.3],
  ["Media coverage", 41, 59],
  ["Community safety", 47.5, 52.5],
  ["Education-system support", 52.6, 47.4],
  ["Community mobilization", 57.1, 42.9],
  ["Supportive public opinion", 58.9, 41.1],
  ["Unity & belonging", 67.3, 32.7],
];

const strengthCards = [
  ["Legacy strengths", "Policy, legislation & media coverage"],
  ["Grassroots strengths", "Mobilization, belonging, public energy, community responsiveness."],
  ["Shared mandate", "Safety, education, transparency, coordination, advocacy infrastructure and measurable outcomes."],
];

const pathForward = [
  [
    "Measure annually",
    "Institutionalize the Lions of Judah Community Impact Study as an annual benchmark—tracking year-over-year progress and delivering clear, actionable insight across critical performance areas.",
    BarChart3,
  ],
  [
    "Coordinate the ecosystem",
    "Define and align roles across legacy institutions, grassroots groups, donors, and volunteers—grounded in demonstrated strengths and capabilities, not just stated intentions.",
    Network,
  ],
  [
    "Fund visible impact",
    "Equip donors with high-quality, decision-grade data—enabling capital to flow toward initiatives that demonstrate measurable outcomes, not just activity.",
    HeartHandshake,
  ],
  [
    "Mobilize advocates",
    "Develop and scale a robust pipeline of trained community responders and leaders—ready to act, represent, and strengthen the community in all arenas and at every level.",
    Megaphone,
  ],
  [
    "Improve transparency",
    "Communicate priorities, resource allocation, and outcomes in clear, accessible language—rebuilding community confidence through consistent visibility and accountability.",
    FileText,
  ],
];

const lojCards = [
  {
    title: "Protect",
    subtitle: "Safety Infrastructure & Preparedness",
    icon: Shield,
    bullets: [
      "Security Capability Built — Supported the establishment of a dedicated licensed, trained and insured security agency (JFORCE).",
      "National Framework Launched — Developed and implemented the Community Safety Council of Canada to establish, achieve and maintain improved community safety.",
      "Community Protection Expanded — Rolled out Bubble Zone protections across 5 Ontario cities.",
    ],
  },
  {
    title: "Empower",
    subtitle: "Training & Community Resilience",
    icon: Sparkles,
    bullets: [
      "National Training Platform — Built a scalable skills and preparedness education portal.",
      "1,200+ Graduates Trained — Delivered Magen Academy programs across multiple disciplines.",
      "Grassroots Program Expansion — Partnering to expand practical safety training across Canada.",
    ],
  },
  {
    title: "Amplify",
    subtitle: "Advocacy, Awareness & Coordination",
    icon: Megaphone,
    bullets: [
      "Public Awareness Tool Built — Created BubbleZones.ca for community education and adoption.",
      "Widespread Organizational Access — Enabled hundreds of faith-based organizations to access protective frameworks.",
      "Strategic Communications Initiative — Advancing a coordinated critical communications strategy (AMP Initiative).",
    ],
  },
];

const formMailto = "mailto:hello@lionsofjudah.org?subject=Community%20Impact%20Study%20interest";

function SectionHeader({ eyebrow, title, copy, id }) {
  return (
    <div className="cis-section-header" id={id}>
      <p className="cis-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function StatCard({ stat }) {
  return (
    <div className={`cis-stat-card cis-stat-${stat.tone}`}>
      <strong>{stat.value}</strong>
      <span>{stat.label}</span>
    </div>
  );
}

function MetricBar({ value, label, response, caption }) {
  return (
    <article className="cis-metric-bar">
      <div>
        <h3>{label}</h3>
        <p>{caption}</p>
      </div>
      <div className="cis-bar-shell" aria-label={`${value}% ${response}`}>
        <span style={{ width: `${value}%` }} />
        <strong>
          {value}% {response}
        </strong>
      </div>
    </article>
  );
}

function DemographicBar({ item }) {
  return (
    <div className="cis-demo-bar-row">
      <div>
        <span>{item.label}</span>
        <strong>{item.value}%</strong>
      </div>
      <div className="cis-demo-bar-shell" aria-label={`${item.label}: ${item.value}%`}>
        <span style={{ width: `${item.value}%`, background: item.color }} />
      </div>
    </div>
  );
}

function AgeBar({ label, value }) {
  return (
    <div className="cis-age-row">
      <span>{label}</span>
      <div className="cis-age-bar-shell" aria-label={`${label}: ${value}%`}>
        <i style={{ width: `${Math.max(value * 6, 3)}%` }} />
      </div>
      <strong>{value.toFixed(1)}%</strong>
    </div>
  );
}

function WordCloudCard({ cloud }) {
  return (
    <article className="cis-word-card">
      <div className="cis-word-card-copy">
        <h3>{cloud.title}</h3>
        <p>{cloud.alt}</p>
      </div>
      <img src={assetPath(cloud.image)} alt={cloud.alt} loading="lazy" />
      <ul aria-label={`${cloud.title} weighted terms`}>
        {cloud.terms.map(([term, weight]) => (
          <li key={term} style={{ fontSize: `${0.82 + weight / 120}rem` }}>
            {term}
          </li>
        ))}
      </ul>
    </article>
  );
}

function IdentityGauge({ item }) {
  return (
    <article className="cis-gauge-card">
      <div className="cis-gauge-heading">
        <h3>{item.label}</h3>
        <strong>
          {item.primary}% <span>{item.primaryLabel}</span>
        </strong>
      </div>
      <div className={`cis-gauge cis-gauge-${item.tone}`}>
        <span style={{ width: `${item.primary}%` }} />
      </div>
      <p>
        <strong>{item.primary}%</strong> {item.primaryLabel.toLowerCase()}; <strong>{item.secondary}%</strong>{" "}
        {item.secondaryLabel}.
      </p>
    </article>
  );
}

function OrganizationBar({ org }) {
  return (
    <article className="cis-org-row">
      <div className="cis-org-title">
        <h3>{org.name}</h3>
        <p>
          {org.satisfied}% satisfied · {org.unsatisfied}% not satisfied · {org.unknown}% don’t know
        </p>
      </div>
      <div className="cis-stacked-bar" aria-label={`${org.name} satisfaction distribution`}>
        <span className="cis-unsatisfied" style={{ width: `${org.unsatisfied}%` }} />
        <span className="cis-neutral" style={{ width: `${org.neutral}%` }} />
        <span className="cis-satisfied" style={{ width: `${org.satisfied}%` }} />
        <span className="cis-unknown" style={{ width: `${org.unknown}%` }} />
      </div>
    </article>
  );
}

function ComparisonBar({ row }) {
  const [label, grassroots, legacy] = row;

  return (
    <article className="cis-comparison-row">
      <h3>{label}</h3>
      <div className="cis-comparison-bar">
        <span className="cis-grassroots" style={{ width: `${grassroots}%` }}>
          {grassroots}%
        </span>
        <span className="cis-legacy" style={{ width: `${legacy}%` }}>
          {legacy}%
        </span>
      </div>
    </article>
  );
}

function CanadaMap() {
  const pins = [
    "cis-pin-vancouver",
    "cis-pin-calgary",
    "cis-pin-winnipeg",
    "cis-pin-toronto",
    "cis-pin-ottawa",
    "cis-pin-montreal",
    "cis-pin-halifax",
  ];

  return (
    <div className="cis-map-card" aria-label="Canada participation map with major centres marked by blue Jewish stars">
      <div className="cis-map-outline" aria-hidden="true">CANADA</div>
      {pins.map((pin) => (
        <div className={`cis-map-star ${pin}`} key={pin} aria-hidden="true">✡</div>
      ))}
    </div>
  );
}

function LeadCaptureForm() {
  return (
    <form className="cis-lead-form" action={formMailto} method="post" encType="text/plain">
      <div className="cis-form-grid">
        <label>
          First Name
          <input name="first-name" autoComplete="given-name" required />
        </label>
        <label>
          Last Name
          <input name="last-name" autoComplete="family-name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Contact #
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="cis-form-full">
          Organization <span>(optional)</span>
          <input name="organization" autoComplete="organization" />
        </label>
      </div>
      <fieldset>
        <legend>Options of interest</legend>
        <label>
          <input type="checkbox" name="interest" value="Sign up for next year's study" />
          Sign up for next year’s study
        </label>
        <label>
          <input type="checkbox" name="interest" value="Request the full report" />
          Request the full report
        </label>
      </fieldset>
      <label className="cis-question-field">
        Submit questions for next year
        <textarea name="questions" rows="4" />
      </label>
      <p className="cis-form-note">
        Form integration can be connected to a CRM or hosted form provider; this draft uses an email fallback to hello@lionsofjudah.org.
      </p>
      <button type="submit" className="cis-button cis-button-primary">
        Submit interest <ChevronRight size={18} />
      </button>
    </form>
  );
}

export default function CISInfographicSite() {
  return (
    <main className="cis-site">
      <header className="cis-nav">
        <a href="#top" className="cis-brand" aria-label="Community Impact Report home">
          <img src={assetPath("assets/logos/loj-logo.png")} alt="" aria-hidden="true" />
          <span>Community Impact Report</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="cis-hero" id="top">
        <div className="cis-hero-grid">
          <div className="cis-hero-copy">
            <p className="cis-eyebrow">CIS-2025-26 Executive Report</p>
            <h1 className="cis-visually-hidden">Community Impact Report 2025-26</h1>
            <img
              className="cis-hero-logo"
              src={assetPath("assets/logos/cir-logo.png")}
              alt="2025-26 Community Impact Report"
            />
            <p className="cis-hero-slogan">What Gets Measured… Gets Improved.</p>
            <p className="cis-hero-intro">
              A national snapshot of Jewish Canadian’s priorities, institutional trust, safety and community resilience.
            </p>
            <div className="cis-hero-actions">
              <a href="#action" className="cis-button cis-button-primary">
                Take action <ChevronRight size={18} />
              </a>
              <a href="#findings" className="cis-button cis-button-secondary">
                Explore findings <ExternalLink size={17} />
              </a>
            </div>
          </div>
          <div className="cis-hero-panel">
            <img src={assetPath("assets/logos/loj-logo.png")} alt="Lions of Judah" />
            <strong>Protect. Empower. Amplify.</strong>
            <span>Independent community study conducted with Logos Insights.</span>
          </div>
        </div>
        <div className="cis-stat-grid">
          {heroStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      <section className="cis-section cis-intro">
        <SectionHeader
          eyebrow="Why this matters"
          title="From anecdotes to evidence, from concern to coordinated action."
          copy="The Lions of Judah 2025-26 Community Impact Report underscores the importance of this moment as Jewish Canada finds itself at a crucial crossroads: heightened antisemitism, strained institutional capacity, and a community asking for clearer priorities, visible results, and shared accountability."
          id="findings"
        />
        <p className="cis-section-lede">
          Achieving these critical goals requires impartial, data driven analysis of the challenges we face. For the 2025-26 Community Impact Study, LOJ engaged Logos Insights, a professional research firm specializing in analyzing campaign impact for multi-national organizations and NGOs.
        </p>
        <div className="cis-card-grid cis-three">
          {pillars.map(({ title, copy, icon: Icon }) => (
            <article className="cis-icon-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cis-section cis-audience">
        <SectionHeader
          eyebrow="Our national voice"
          title="A broad grassroots consultation of major Jewish centres across Canada."
          copy="Data driven, professionally conducted and designed to empower."
        />
        <div className="cis-map-grid">
          <CanadaMap />
          <div className="cis-audience-panel">
            <h3>Major cities represented</h3>
            <div className="cis-chip-grid">
              {cities.map((city) => (
                <span key={city}>{city}</span>
              ))}
            </div>
            <div className="cis-demo-chart">
              <h4>Participation by gender</h4>
              {sexParticipation.map((item) => (
                <DemographicBar item={item} key={item.label} />
              ))}
            </div>
            <div className="cis-age-chart">
              <h4>Age demographics</h4>
              {ageDemographics.map(([label, value]) => (
                <AgeBar key={label} label={label} value={value} />
              ))}
            </div>
            <a className="cis-button cis-button-secondary cis-analytics-button" href="mailto:hello@lionsofjudah.org?subject=Deeper%20Community%20Analytics%20Request">
              Request deeper community analytics
            </a>
          </div>
        </div>
      </section>

      <section className="cis-section cis-priorities">
        <SectionHeader
          eyebrow="Community agenda"
          title="The clearest priority is safety."
          copy="Respondents ranked immediate safety and more effective methods for combatting antisemitism ahead of broader advocacy, communications, and research needs."
        />
        <div className="cis-priority-list">
          {priorities.map(([title, copy], index) => (
            <article key={title} className="cis-priority-item" style={{ "--rank": index }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cis-section cis-safety" id="safety">
        <SectionHeader
          eyebrow="Lived experience"
          title="The safety signal is stark."
          copy="The strongest findings show a community that feels less safe and underprepared for the threats it has faced."
        />
        <div className="cis-metric-grid">
          {safetyStats.map((stat) => (
            <MetricBar key={stat.label} {...stat} />
          ))}
        </div>
        <p className="cis-callout">
          A near-consensus signal of heightened vulnerability after October 7 demonstrates a continued widespread sense of vulnerability across the community. Despite significant efforts to enhance safety and security through community-led and volunteer-driven initiatives, many individuals still do not feel meaningfully more secure. This gap between effort and perceived impact highlights the need for continued evaluation, coordination, and evolution in how community safety is approached.
        </p>
      </section>

      <section className="cis-section cis-word-clouds">
        <SectionHeader
          eyebrow="The language of lived experience"
          title="Community sentiment in respondents’ own words."
          copy="Three word clouds draw from the deeper-analysis material: antisemitism, the current approach to Jewish life concerns, and sentiments of hope for the future."
        />
        <div className="cis-word-grid">
          {wordClouds.map((cloud) => (
            <WordCloudCard cloud={cloud} key={cloud.title} />
          ))}
        </div>
      </section>

      <section className="cis-section cis-identity">
        <SectionHeader
          eyebrow="Jewish identity in public"
          title="Threat perception is changing everyday visibility."
          copy="The report points to pressure on recognizably Jewish symbols, institutions, individuals, and ordinary expressions of Jewish identity."
        />
        <div className="cis-gauge-grid">
          {identityPressures.map((item) => (
            <IdentityGauge item={item} key={item.label} />
          ))}
        </div>
      </section>

      <section className="cis-section cis-institutions" id="institutions">
        <SectionHeader
          eyebrow="Institutional satisfaction"
          title="Confidence is mixed, and visibility gaps matter."
          copy="The data compares community-reported satisfaction with named organizations. This should be read as perception data, not an institutional audit."
        />
        <div className="cis-legend">
          <span><i className="cis-unsatisfied" /> Not satisfied</span>
          <span><i className="cis-neutral" /> Indifferent</span>
          <span><i className="cis-satisfied" /> Satisfied</span>
          <span><i className="cis-unknown" /> Don’t know</span>
        </div>
        <div className="cis-org-list">
          {organizations.map((org) => (
            <OrganizationBar org={org} key={org.name} />
          ))}
        </div>
        <div className="cis-callout cis-expanded-callout">
          <p>B’nai Brith Canada reflects the highest levels of reported satisfaction in this dataset, while UJA Federation registers comparatively higher levels of dissatisfaction.</p>
          <p>Notably, the proportion of “don’t know” responses across several organizations points to a broader clarity and communication gap, where community members may lack sufficient visibility into mandates, activities, and measurable outcomes to form an informed assessment.</p>
          <p>Taken together, the finding that statistically significant portions of respondents are unable to confidently evaluate satisfaction underscores an opportunity for more transparent communication, clearer articulation of mandate, and demonstrable community impact.</p>
        </div>
      </section>

      <section className="cis-section cis-comparison">
        <SectionHeader
          eyebrow="On-the-ground impact: legacy and grassroots"
          title="The opportunity is complementary strength, not a zero-sum competition."
          copy="Weighted scores show legacy organizations perceived as stronger in formal policy and media work, while grassroots efforts are perceived as stronger in mobilization, public opinion, unity, and belonging."
        />
        <div className="cis-comparison-legend">
          <span className="cis-grassroots-label">Grassroots perceived stronger</span>
          <span className="cis-legacy-label">Legacy perceived stronger</span>
        </div>
        <div className="cis-comparison-list">
          {comparisonScores.map((row) => (
            <ComparisonBar row={row} key={row[0]} />
          ))}
        </div>
        <div className="cis-strength-grid">
          {strengthCards.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="cis-callout cis-expanded-callout">
          <p>Community feedback reflects a clear and complementary division of strengths: legacy organizations are perceived to be more effective in formal channels such as policy, legislation, and media engagement, while grassroots efforts are driving mobilization, public sentiment, unity, and real-time community responsiveness.</p>
          <p>The greatest immediate opportunity for meaningful impact lies not in competition, but in alignment where each operates within its strengths while contributing to a shared mandate of safety, education, transparency, coordination, advocacy infrastructure, and measurable outcomes.</p>
        </div>
      </section>

      <section className="cis-section cis-path" id="path-forward">
        <SectionHeader
          eyebrow="Path forward"
          title="Turn the findings into measurable community action."
          copy="This marks the completion of Stage One of the Lions of Judah 2025-26 Community Impact Report, delivering a clear, community-grounded understanding of where things stand today."
        />
        <div className="cis-path-intro">
          <p>While the findings surface real concerns, they also reveal something equally important: a strong foundation of commitment, capability, and untapped alignment across the ecosystem. The path forward is not only viable, it is actionable and essential.</p>
          <p>In Stage Two, LOJ will translate these insights into practical frameworks, coordinated strategies, and measurable actions designed to strengthen community safety, improve transparency, and unlock the full potential of both legacy institutions and grassroots efforts.</p>
        </div>
        <div className="cis-card-grid cis-path-grid">
          {pathForward.map(([title, copy, Icon]) => (
            <article className="cis-action-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cis-section cis-loj">
        <SectionHeader
          eyebrow="Introducing the Lions of Judah (LOJ)"
          title="A community think tank… with teeth."
          copy="Established to meet the evolving needs of the diaspora Jewish community in a post October 7 reality, LOJ performs as a think tank, conducting rigorous, ground-level research to establish goals, identify strengths, expose critical gaps, and align resources and efforts to have greatest impact."
        />
        <p className="cis-loj-lede">By surfacing critical, real community insights—LOJ is uniquely positioned not just as a research body, but as a grassroots solutions accelerator driving towards a safer, stronger, and more coordinated Jewish Canada.</p>
        <div className="cis-loj-work">
          <p className="cis-eyebrow">Our Work: Legacy Intended. Sustainable Solutions in Action.</p>
          <h3>Ready to meet the challenges of today; capable of evolving to address the needs of tomorrow.</h3>
        </div>
        <div className="cis-card-grid cis-three">
          {lojCards.map(({ title, subtitle, bullets, icon: Icon }) => (
            <article className="cis-loj-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <strong>{subtitle}</strong>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cis-section cis-cta" id="action">
        <div>
          <p className="cis-eyebrow">Calls to action</p>
          <h2>Help shape the next year of community impact.</h2>
          <p>Join the next study, submit questions, collaborate, or read the methodology behind the Lions of Judah 2025-26 Community Impact Study.</p>
          <div className="cis-cta-links">
            <a href="https://lionsofjudah.org/support-loj" target="_blank" rel="noreferrer">Support or collaborate <ExternalLink size={15} /></a>
            <a href="https://lionsofjudah.org/research-statement-methods" target="_blank" rel="noreferrer">Read the methodology <BookOpen size={15} /></a>
            <a href="https://lionsofjudah.org" target="_blank" rel="noreferrer">Learn more about LOJ <ExternalLink size={15} /></a>
            <a href="mailto:hello@lionsofjudah.org"><Mail size={15} /> hello@lionsofjudah.org</a>
          </div>
        </div>
        <LeadCaptureForm />
      </section>

      <footer className="cis-footer">
        <div>
          <strong>Community Impact Report 2025-26</strong>
          <p>The 2025-26 Community Impact Study, Report and Strategic Guidance were commissioned by the Lions of Judah and supported by thousands of community members who shared perspectives on safety, advocacy, education, communal structures, lived experiences, concerns, and aspirations.</p>
          <p>The Lions of Judah express deep gratitude to professionals, volunteers, organizational partners, and contributors: AK, BC, C, CG, DF, DS, DW, LG, MR, & TMG.</p>
        </div>
        <div className="cis-footer-legal">
          <p>© 2026 Lions of Judah Org. All rights reserved. Content is intellectual property of Lions of Judah, partners, or affiliates unless otherwise stated.</p>
          <p>Permission is granted to reference or share excerpts for non-commercial purposes with clear attribution. No commercial reproduction, modification, or distribution without prior written consent.</p>
          <a href="mailto:hello@lionsofjudah.org"><Mail size={16} /> hello@lionsofjudah.org</a>
          <a href="https://lionsofjudah.org/research-statement-methods" target="_blank" rel="noreferrer"><Download size={16} /> Research methods</a>
        </div>
      </footer>
    </main>
  );
}
