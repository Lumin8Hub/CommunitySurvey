import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const insertionPoints = [
  { key: "outlook", selector: ".cis-safety", position: "after" },
  { key: "spirit", selector: ".cis-word-clouds", position: "after" },
  { key: "priorityPerformance", selector: ".cis-comparison", position: "before" },
  { key: "leadership", selector: ".cis-institutions", position: "after" },
  { key: "funding", selector: ".cis-comparison", position: "after" },
  { key: "actionReadiness", selector: ".cis-path", position: "after" },
];

const outlookStats = [
  ["The next generation will experience more antisemitism", 72.9, "Agree", "coral"],
  ["Adversaries are overwhelming community capacity", 67.7, "Agree", "coral"],
  ["The Jewish people will overcome today's threats", 53.4, "Agree", "blue"],
  ["United with allies, the community is stronger than opponents", 48.5, "Agree", "blue"],
  ["Dangers will shrink in the coming years", 69.7, "Disagree", "gold"],
];

const priorityPerformance = [
  ["Security preparedness", "Highest urgency", "Low confidence", "90.2% disagreed that the community was well prepared after October 7."],
  ["Public communications", "High priority", "Low to moderate", "Respondents call for clearer strategy, visibility, and measurable outcomes."],
  ["Community mobilization", "High priority", "Grassroots advantage", "Grassroots groups are perceived as stronger at mobilizing the community."],
  ["Policy and legislation", "Important formal channel", "Legacy advantage", "Legacy organizations are perceived as stronger in policy and legislation."],
  ["Unity and belonging", "High resilience value", "Grassroots advantage", "Grassroots efforts lead the weighted impact score for unity and belonging."],
  ["Transparency and allocation", "Structural priority", "Unresolved gap", "The report links funding disparity to questions of efficiency and impact."],
];

const institutionRatings = [
  ["B'nai Brith Canada", 9.4, 8.0, 16.2, 32.4, 28.0, 6.0],
  ["Friends of Simon Wiesenthal Center", 12.2, 7.8, 23.8, 24.0, 19.2, 13.0],
  ["The Abraham Global Peace Initiative (AGPI)", 10.2, 6.0, 24.4, 17.0, 11.8, 30.6],
  ["Jewish Security Network (JSN)", 17.2, 4.4, 21.0, 20.6, 10.0, 26.8],
  ["Canadian Jewish Political Affairs Committee (CJPAC)", 16.2, 8.4, 25.8, 23.4, 7.6, 18.6],
  ["Centre for Israel & Jewish Affairs (CIJA)", 23.8, 9.0, 17.4, 29.8, 13.2, 6.8],
  ["UJA Federation", 24.4, 11.4, 18.8, 26.2, 12.6, 6.6],
];

const rawComparisonScores = [
  ["Improves policies & legislation", 12.3, 8.1, 23.8, 10.7, 33.3, 11.9],
  ["Wins favorable media coverage", 11.5, 12.9, 28.5, 10.1, 20.8, 16.2],
  ["Improves community safety", 18.8, 7.7, 31.7, 8.9, 20.6, 12.3],
  ["Wins support in the education system", 21.0, 9.3, 25.0, 8.1, 19.0, 17.6],
  ["Effectively mobilizes the Jewish community", 16.2, 11.3, 43.2, 7.5, 12.7, 9.1],
  ["Wins supportive public opinion", 14.9, 15.0, 36.6, 6.7, 12.3, 14.5],
  ["Increases Jewish community unity & belonging", 17.2, 9.9, 51.5, 5.0, 8.3, 8.1],
];

const fundingDisparity = [
  ["Legacy get nearly all funding; grassroots almost none", 34.7],
  ["Legacy get much more funding; grassroots far less", 44.9],
  ["Both receive an equal share", 1.1],
  ["Grassroots get much more; legacy far less", 0.2],
  ["Grassroots get nearly all funding; legacy almost none", 0.2],
  ["No answer", 18.9],
];

const leadershipThemes = [
  ["Internal cohesion", "Support for grassroots received particularly low ratings, while trust and collaboration earned only moderate marks."],
  ["External relations", "Satisfaction was low to moderately low, especially for relationships with influential institutions, allies, and public brand communications."],
  ["Offense", "Confronting threats and holding adversaries accountable drew moderately low satisfaction."],
  ["Defense", "Defensive actions were somewhat stronger, hovering closer to neutral than other leadership roles."],
  ["Innovation", "Respondents reported fairly low satisfaction with the development of new strategies for the current threat environment."],
];

const actionConnections = [
  ["Follow news and updates", 81.1],
  ["Participate in events and programs", 62.6],
  ["Donate to initiatives", 56.4],
  ["Fight independently against antisemitism", 49.8],
  ["Volunteer for initiatives", 40.0],
  ["Work in an organization fighting antisemitism", 12.6],
  ["Lead an organization fighting antisemitism", 10.6],
];

const fightingSpirit = [
  ["Future generations will look back with gratitude if we confront antisemitism successfully", 81.3],
  ["Empowered grassroots initiatives will play a critical role", 80.6],
  ["Today's fight is another chapter in Jewish history", 76.0],
  ["Fighting antisemitism contributes to meaning and purpose", 75.8],
  ["Jews are growing stronger as a people", 68.9],
];

const identityDebate = [
  ["Agree", 33.3, "cis-satisfied"],
  ["Disagree", 31.8, "cis-unsatisfied"],
  ["Neutral", 29.3, "cis-neutral"],
  ["Don't know", 5.6, "cis-unknown"],
];

function SectionHeader({ eyebrow, title, copy, id }) {
  return (
    <div className="cis-section-header" id={id}>
      <p className="cis-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function PercentBar({ label, value, suffix = "", className = "" }) {
  return (
    <article className={`cis-addition-row ${className}`}>
      <div>
        <span>{label}</span>
        <strong>{value.toFixed(1)}%{suffix}</strong>
      </div>
      <div className="cis-addition-bar" aria-label={`${label}: ${value}%${suffix}`}>
        <i style={{ width: `${value}%` }} />
      </div>
    </article>
  );
}

function ForwardOutlook() {
  return (
    <section className="cis-section cis-addition cis-outlook" id="outlook">
      <SectionHeader
        eyebrow="Forward outlook"
        title="Concern is high, but resilience remains visible."
        copy="The report's optimism and pessimism items show a community that sees the threat environment worsening while still holding onto collective strength, allyship, and future responsibility."
      />
      <div className="cis-outlook-grid">
        {outlookStats.map(([label, value, response, tone]) => (
          <article className={`cis-outlook-card cis-outlook-${tone}`} key={label}>
            <strong>{value.toFixed(1)}%</strong>
            <h3>{label}</h3>
            <p>{response}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CollectiveSpirit() {
  return (
    <section className="cis-section cis-addition cis-spirit">
      <SectionHeader
        eyebrow="Collective fighting spirit"
        title="Hope is not passive; respondents connect it to action."
        copy="The hope findings show a community that locates resilience in responsibility, grassroots empowerment, meaning, and future generations."
      />
      <div className="cis-spirit-grid">
        <div className="cis-spirit-bars">
          {fightingSpirit.map(([label, value]) => (
            <PercentBar key={label} label={label} value={value} suffix=" agree" />
          ))}
        </div>
        <article className="cis-identity-debate">
          <h3>Jewish identity as public provocation</h3>
          <p>Respondents were more split on making Jewish identity more obvious to provoke discussion or debate.</p>
          {identityDebate.map(([label, value, colorClass]) => (
            <div className="cis-debate-row" key={label}>
              <span>{label}</span>
              <div><i className={colorClass} style={{ width: `${value}%` }} /></div>
              <strong>{value.toFixed(1)}%</strong>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

function PriorityPerformance() {
  return (
    <section className="cis-section cis-addition cis-priority-performance">
      <SectionHeader
        eyebrow="Priority vs performance"
        title="Higher-priority needs show lower confidence in delivery."
        copy="This section reflects respondents with at least some awareness of grassroots and legacy efforts to combat antisemitism. The pattern in the report is a mismatch between what the community considers important and where it sees strong delivery."
      />
      <div className="cis-matrix-grid">
        {priorityPerformance.map(([activity, priority, performance, insight]) => (
          <article className="cis-matrix-card" key={activity}>
            <h3>{activity}</h3>
            <div>
              <span>{priority}</span>
              <strong>{performance}</strong>
            </div>
            <p>{insight}</p>
          </article>
        ))}
      </div>
      <p className="cis-callout">
        The key finding is not simply low satisfaction. It is the inverse relationship: the more important an area is to respondents, the less confidence they report in how legacy organizations are performing there.
      </p>
    </section>
  );
}

function LeadershipSatisfaction() {
  return (
    <section className="cis-section cis-addition cis-leadership">
      <SectionHeader
        eyebrow="Community-wide leadership"
        title="Leadership satisfaction clusters around indifference to dissatisfaction."
        copy="Across broad leadership roles, respondents were not strongly encouraged by current performance. Defense scores were comparatively closer to neutral, while public relations, ally-building, grassroots support, and innovation show clearer gaps."
      />
      <div className="cis-leadership-grid">
        {leadershipThemes.map(([title, copy]) => (
          <article className="cis-leadership-card" key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <details className="cis-rating-details">
        <summary>View full five-point institutional satisfaction data</summary>
        <div className="cis-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Organization</th>
                <th>1. Not satisfied</th>
                <th>2</th>
                <th>3. Indifferent</th>
                <th>4</th>
                <th>5. Extremely satisfied</th>
                <th>Don't know</th>
              </tr>
            </thead>
            <tbody>
              {institutionRatings.map(([name, one, two, three, four, five, unknown]) => (
                <tr key={name}>
                  <th>{name}</th>
                  <td>{one.toFixed(1)}%</td>
                  <td>{two.toFixed(1)}%</td>
                  <td>{three.toFixed(1)}%</td>
                  <td>{four.toFixed(1)}%</td>
                  <td>{five.toFixed(1)}%</td>
                  <td>{unknown.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  );
}

function FundingAndRawData() {
  return (
    <section className="cis-section cis-addition cis-funding">
      <SectionHeader
        eyebrow="Resource allocation"
        title="Funding disparity is part of the impact story."
        copy="A combined 79.6% say large established organizations receive nearly all or much more funding while grassroots efforts receive almost none or far less."
      />
      <div className="cis-funding-grid">
        <article className="cis-funding-feature">
          <strong>79.6%</strong>
          <p>Legacy organizations get nearly all or much more funding while grassroots receive almost none or far less.</p>
        </article>
        <div className="cis-funding-list">
          {fundingDisparity.map(([label, value]) => (
            <PercentBar key={label} label={label} value={value} />
          ))}
        </div>
      </div>
      <details className="cis-rating-details">
        <summary>View raw grassroots vs legacy response data</summary>
        <div className="cis-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Grassroots</th>
                <th>Lean grassroots</th>
                <th>Equal</th>
                <th>Lean legacy</th>
                <th>Legacy</th>
                <th>DK</th>
              </tr>
            </thead>
            <tbody>
              {rawComparisonScores.map(([activity, grassroots, leanGrassroots, equal, leanLegacy, legacy, unknown]) => (
                <tr key={activity}>
                  <th>{activity}</th>
                  <td>{grassroots.toFixed(1)}%</td>
                  <td>{leanGrassroots.toFixed(1)}%</td>
                  <td>{equal.toFixed(1)}%</td>
                  <td>{leanLegacy.toFixed(1)}%</td>
                  <td>{legacy.toFixed(1)}%</td>
                  <td>{unknown.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
      <p className="cis-callout">
        Weighted scores count extreme responses as 2 points and lean responses as 1 point. Equal or near-equal grassroots impact despite major resource disparity suggests an efficiency question: how much more could grassroots initiatives achieve with structure, guidance, and resources?
      </p>
    </section>
  );
}

function ActionReadiness() {
  return (
    <section className="cis-section cis-addition cis-action-readiness">
      <SectionHeader
        eyebrow="Personal connections to action"
        title="The audience is not only concerned; it is reachable and ready."
        copy="Respondents described a wide range of personal roles in the fight against antisemitism, from following news to donating, volunteering, joining events, and taking independent action."
      />
      <div className="cis-action-funnel">
        {actionConnections.map(([label, value]) => (
          <PercentBar key={label} label={label} value={value} suffix=" yes" />
        ))}
      </div>
      <p className="cis-callout">
        The report points toward a more balanced, integrated, and efficient approach to tackling community needs, rather than treating any one organization as the sole voice or solution for the entire community.
      </p>
    </section>
  );
}

const sectionComponents = {
  outlook: <ForwardOutlook />,
  spirit: <CollectiveSpirit />,
  priorityPerformance: <PriorityPerformance />,
  leadership: <LeadershipSatisfaction />,
  funding: <FundingAndRawData />,
  actionReadiness: <ActionReadiness />,
};

export default function ExecutiveReportAdditions() {
  const [targets, setTargets] = useState({});

  useEffect(() => {
    const created = [];
    const nextTargets = {};

    insertionPoints.forEach(({ key, selector, position }) => {
      const reference = document.querySelector(selector);
      if (!reference) return;

      const existing = document.querySelector(`[data-cis-addition-anchor="${key}"]`);
      const anchor = existing || document.createElement("div");
      anchor.dataset.cisAdditionAnchor = key;

      if (!existing) {
        if (position === "before") {
          reference.insertAdjacentElement("beforebegin", anchor);
        } else {
          reference.insertAdjacentElement("afterend", anchor);
        }
        created.push(anchor);
      }

      nextTargets[key] = anchor;
    });

    setTargets(nextTargets);

    return () => {
      created.forEach((anchor) => anchor.remove());
    };
  }, []);

  return Object.entries(targets).map(([key, target]) => createPortal(sectionComponents[key], target));
}
