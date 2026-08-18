export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  scripture?: { ref: string; text: string };
  body: string[];
  keyPoints: string[];
  action?: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  theme: "biblical" | "legal" | "practice";
  lessons: Lesson[];
}

export const COURSE_TITLE = "Kingdom Marketing";
export const COURSE_SUBTITLE =
  "A 7-module training for Christian businesses on marketing that is faithful, lawful, and effective.";
export const COURSE_PRICE_CENTS = 24900;
export const COURSE_PRICE_LABEL = "$249";

export const modules: Module[] = [
  {
    id: 1,
    slug: "foundations",
    title: "Foundations: Marketing as Stewardship",
    tagline: "Why promotion is a trust, not a tactic",
    description:
      "Reframe marketing from persuasion-for-profit to stewardship of a message, a customer, and a reputation you did not create alone.",
    theme: "biblical",
    lessons: [
      {
        id: "1-1",
        title: "The Marketer as Steward",
        duration: "12 min",
        summary:
          "Every claim you publish spends trust that belongs to your customer, your team, and your witness.",
        scripture: {
          ref: "1 Corinthians 4:2",
          text: "Moreover, it is required of stewards that they be found faithful.",
        },
        body: [
          "A steward manages something owned by someone else. In business, the resources you steward are obvious — capital, inventory, payroll. The resource most marketers overlook is attention. When a customer reads your headline, they hand you a fragment of a finite life. That transaction happens before any money does.",
          "Stewardship reframes the central marketing question. Instead of asking 'what can I say that will convert?', the steward asks 'what is true, useful, and worth the minutes I am asking for?' The second question is harder. It is also the one that builds a business that outlives a campaign.",
          "This does not make marketing passive. Stewards are expected to produce a return. Burying your talent in the ground — refusing to promote good work because promotion feels unspiritual — is presented in Scripture as failure, not humility. The faithful path is vigorous, clear, honest promotion.",
        ],
        keyPoints: [
          "Attention is a resource you borrow, not one you own",
          "Faithfulness and effectiveness are not in tension",
          "Refusing to market good work is not humility",
        ],
        action:
          "Write one sentence describing what a customer receives in exchange for the attention you request. Post it where your team writes copy.",
      },
      {
        id: "1-2",
        title: "The Two Ditches: Hype and Silence",
        duration: "10 min",
        summary:
          "Christian businesses tend to fail in one of two opposite directions. Name yours before you build a strategy.",
        body: [
          "The first ditch is hype: inflated claims, manufactured urgency, testimonials that describe an outcome no ordinary customer will experience. Hype works briefly and then poisons the well — for your company and for every business that shares your convictions.",
          "The second ditch is silence. Owners who fear the first ditch often overcorrect into invisibility, calling it modesty. But a business that nobody can find serves nobody. Its excellence is a private virtue with no public use.",
          "The road between them is specificity. Hype survives on vagueness ('transform your life'). Silence survives on generality ('we do good work'). Precise claims — what you do, for whom, with what measurable result — cannot be inflated easily and cannot be ignored easily.",
        ],
        keyPoints: [
          "Hype and silence are both failures of stewardship",
          "Specificity is the discipline that avoids both",
          "Vague claims are the natural habitat of exaggeration",
        ],
        action:
          "Audit your homepage headline. Replace one abstract benefit with a specific, verifiable one.",
      },
      {
        id: "1-3",
        title: "Defining Your Kingdom Standard",
        duration: "14 min",
        summary: "A written marketing standard you can hold copy against before it ships.",
        body: [
          "Convictions that live only in your head get negotiated away under deadline pressure. A written standard survives the pressure because it was decided in calm conditions.",
          "A workable standard has three parts. First, claims discipline: what evidence must exist before a statement is published. Second, treatment of competitors: what you will and will not say about them. Third, treatment of the vulnerable: which pressure tactics you refuse to use on people in distress, debt, or grief.",
          "Publish the standard. A standard your customers can read is a standard your team will keep, because breaking it now has an audience.",
        ],
        keyPoints: [
          "Write convictions down before deadlines test them",
          "Cover claims, competitors, and vulnerable audiences",
          "Publishing the standard makes it enforceable",
        ],
        action: "Draft a one-page marketing standard and route it to your team for comment.",
      },
    ],
  },
  {
    id: 2,
    slug: "truth-in-message",
    title: "Truth in the Message",
    tagline: "Honest claims that still sell",
    description:
      "Practical techniques for writing copy that is fully accurate and genuinely persuasive — the two are compatible more often than marketers assume.",
    theme: "biblical",
    lessons: [
      {
        id: "2-1",
        title: "Honest Weights and Measures",
        duration: "11 min",
        summary:
          "The oldest commercial ethic in Scripture is about accurate measurement — and it maps directly onto modern claims.",
        scripture: {
          ref: "Proverbs 11:1",
          text: "A false balance is an abomination to the LORD, but a just weight is his delight.",
        },
        body: [
          "Ancient fraud was physical: a merchant carried one set of weights for buying and a lighter set for selling. The deception was invisible to the customer and profitable at scale. Modern equivalents are informational — the asterisk that reverses the headline, the 'from' price that no customer pays, the average that excludes the failures.",
          "The test is not whether a statement is technically defensible. It is whether the impression left in the customer's mind matches reality. Regulators call this the 'net impression' standard, and it is remarkably close to the biblical concern with the heart of a transaction rather than its letter.",
          "Apply the test out loud. Read your ad, then state plainly what a reasonable customer now believes. If that belief is not accurate, the ad is a false balance no matter how careful the footnote.",
        ],
        keyPoints: [
          "Technical accuracy is not the standard; net impression is",
          "Footnotes cannot rescue a misleading headline",
          "Say aloud what the customer now believes, then check it",
        ],
        action:
          "Take your best-performing ad. Write the belief it creates in one sentence, then verify that belief with data.",
      },
      {
        id: "2-2",
        title: "Testimonials Without Distortion",
        duration: "13 min",
        summary: "How to use real customer stories without implying they are typical when they are not.",
        body: [
          "Testimonials are powerful because readers trust peers more than brands. That power is exactly why misuse is costly: an unrepresentative testimonial borrows a stranger's credibility to make a promise you cannot keep.",
          "Three rules keep testimonials honest. Use real customers with verifiable experience. Present outcomes alongside what results customers generally achieve. Disclose any material connection — payment, free product, employment, family relationship — clearly and near the statement itself.",
          "Well-handled testimonials often convert better than polished ones. Specific, modest, slightly imperfect stories read as true because they are.",
        ],
        keyPoints: [
          "Unrepresentative results require generally-expected-results context",
          "Material connections must be disclosed near the claim",
          "Modest specific stories outperform polished superlatives",
        ],
        action: "Review every testimonial on your site for verification, context, and disclosure.",
      },
      {
        id: "2-3",
        title: "Urgency Without Manipulation",
        duration: "12 min",
        summary: "Real deadlines persuade. Fake ones train customers to disbelieve you.",
        body: [
          "Scarcity works because it reflects a real constraint: limited seats, a closing enrollment window, a price that genuinely rises. When the constraint is real, communicating it is a service — the customer needs the information to decide.",
          "Manufactured scarcity is different. A countdown that resets on refresh, an 'only 3 left' counter tied to nothing, a 'final call' repeated monthly. These convert once and erode belief permanently. They also draw regulatory attention as deceptive practices.",
          "The disciplined version: identify the actual constraint in your business, state it exactly, and honor it. If a deadline passes, let it pass. The customer who sees you honor a deadline believes the next one.",
        ],
        keyPoints: [
          "Communicate real constraints; never invent them",
          "Resetting timers and phantom inventory are deceptive practices",
          "Honoring one deadline makes every future deadline credible",
        ],
        action:
          "List every urgency mechanic in your funnel and mark each as real or manufactured. Remove the manufactured ones.",
      },
    ],
  },
  {
    id: 3,
    slug: "ftc-fundamentals",
    title: "FTC Fundamentals",
    tagline: "The rules that govern every US advertisement",
    description:
      "A working knowledge of Section 5, substantiation, and the deception standard — written for business owners, not lawyers.",
    theme: "legal",
    lessons: [
      {
        id: "3-1",
        title: "Section 5 and the Deception Standard",
        duration: "15 min",
        summary:
          "The FTC Act prohibits unfair or deceptive acts in commerce. Here is what that means operationally.",
        body: [
          "Section 5 of the FTC Act is deliberately broad. An act is deceptive when there is a representation, omission, or practice likely to mislead a reasonable consumer, and that misleading element is material — meaning it is likely to affect the purchase decision.",
          "Three things surprise most business owners. First, intent is not required; you can violate the standard while acting in good faith. Second, omissions count — leaving out a fee, a condition, or a limitation can deceive as effectively as a false statement. Third, the 'reasonable consumer' is judged in context, and for products aimed at vulnerable groups, the standard adjusts toward that audience.",
          "An act can also be unfair without being deceptive: if it causes substantial consumer injury that consumers cannot reasonably avoid and that is not outweighed by benefits, it may be actionable on that basis alone.",
        ],
        keyPoints: [
          "Deception = misleading + material, judged by a reasonable consumer",
          "Good intent is not a defense",
          "Omissions and fine print can both be deceptive",
        ],
        action:
          "Identify one omission in your current offer presentation — a fee, condition, or limitation — and move it into the main copy.",
      },
      {
        id: "3-2",
        title: "Substantiation: Proof Before Publication",
        duration: "14 min",
        summary:
          "Advertisers must possess adequate support for objective claims at the time the claim is made.",
        body: [
          "The substantiation doctrine is simple to state and demanding to satisfy: before you make an objective claim, you must already hold evidence sufficient to support it. Assembling proof after a challenge is too late.",
          "The evidence required scales with the claim. A subjective preference needs little. A performance claim needs data reflecting real conditions. Health, safety, and efficacy claims generally require competent and reliable scientific evidence — for many health claims, well-controlled human clinical studies.",
          "Establishment claims raise the bar further. Saying 'studies show' or 'clinically proven' commits you to the specific level of proof you have described, not merely to some support.",
        ],
        keyPoints: [
          "Hold the evidence before the claim is published",
          "Health and safety claims require scientific-grade support",
          "'Clinically proven' commits you to that exact evidentiary level",
        ],
        action:
          "Create a claims file: every objective claim you make, with the supporting evidence attached and dated.",
      },
      {
        id: "3-3",
        title: "Endorsements, Influencers, and Disclosure",
        duration: "13 min",
        summary:
          "The Endorsement Guides govern reviews, affiliates, employees, and anyone who speaks on your behalf.",
        body: [
          "Any material connection between an endorser and your business must be disclosed clearly and conspicuously. Material connections include payment, free or discounted products, commissions, employment, and personal or family relationships.",
          "Clear and conspicuous has a specific meaning: unavoidable, in the same medium as the claim, and understandable to ordinary people. A disclosure buried in a hashtag block, hidden behind 'more', or placed only in a video description generally fails.",
          "Advertisers are responsible for what their endorsers say. That means written guidance, training, and an actual monitoring process — not just a clause in a contract. Incentivizing only positive reviews, or suppressing negative ones, is itself a violation.",
        ],
        keyPoints: [
          "Disclose payment, free product, commissions, and relationships",
          "Disclosures must be unavoidable and in the same medium",
          "You are responsible for monitoring your endorsers",
        ],
        action:
          "Write a one-page endorser guideline and send it to every affiliate, influencer, and employee who posts about your business.",
      },
      {
        id: "3-4",
        title: "Pricing, Fees, and Negative Options",
        duration: "12 min",
        summary:
          "Where honest businesses most often stumble: comparison pricing, drip fees, and subscription renewals.",
        body: [
          "Comparison pricing must reference a genuine, recent, substantial price at which the item was actually offered. A permanent 'was $199, now $79' where nothing sold at $199 is a fictitious price comparison.",
          "Mandatory fees disclosed late in checkout create a misleading total-price impression. The safer and increasingly required practice is to present the total price a customer must pay up front.",
          "Negative-option offers — free trials that convert, subscriptions that auto-renew — demand clear disclosure of terms before billing information is collected, express informed consent, and a cancellation path at least as simple as the signup path.",
        ],
        keyPoints: [
          "Reference prices must be real, recent, and substantial",
          "Disclose mandatory fees up front, not at the last step",
          "Cancellation must be as easy as signup",
        ],
        action:
          "Walk your own checkout as a new customer and time how long it takes to see the true total.",
      },
    ],
  },
  {
    id: 4,
    slug: "compliance-systems",
    title: "Building a Compliance System",
    tagline: "From good intentions to reliable process",
    description:
      "Turn legal knowledge into a repeatable workflow: review checkpoints, records, disclosures, and privacy practice.",
    theme: "legal",
    lessons: [
      {
        id: "4-1",
        title: "The Pre-Publication Review Checkpoint",
        duration: "11 min",
        summary: "A short, mandatory gate that catches most problems before they reach the public.",
        body: [
          "Compliance fails at the point of speed. A campaign is due, the owner is traveling, someone ships copy that was never checked. The fix is not more diligence; it is a gate that cannot be skipped.",
          "An effective checkpoint asks five questions of every asset: What objective claims does this make? Where is the evidence for each? What does a reasonable consumer now believe? Are all material terms disclosed clearly and near the claim? Who approved it and when?",
          "Keep the gate short enough to survive contact with a deadline. Five questions and a name in a log will prevent more harm than a policy manual nobody opens.",
        ],
        keyPoints: [
          "Make the gate mandatory and short",
          "Five questions per asset, logged with an approver",
          "Speed, not ignorance, is the usual cause of violations",
        ],
        action: "Add the five-question checkpoint to your content calendar as a required field.",
      },
      {
        id: "4-2",
        title: "Records That Protect You",
        duration: "10 min",
        summary: "What to keep, for how long, and why the burden of proof sits with you.",
        body: [
          "If a claim is challenged, you must produce the support you held at the time of publication. Records are therefore not bureaucracy; they are the entire defense.",
          "Keep, at minimum: the claims file with dated evidence, published versions of each asset with publication dates, endorser agreements and the guidance you provided, substantiation for pricing comparisons, and consent records for subscription and marketing communications.",
          "Store records where a successor can find them. Institutional memory that lives in one person's inbox is not a record.",
        ],
        keyPoints: [
          "Burden of proof rests on the advertiser",
          "Keep dated evidence, published versions, and consent records",
          "Records must be findable by someone other than you",
        ],
        action: "Create a shared, dated records folder and backfill your three largest campaigns.",
      },
      {
        id: "4-3",
        title: "Email, Text, and Privacy Obligations",
        duration: "13 min",
        summary: "Consent, identification, and opt-out across the channels most small businesses use.",
        body: [
          "Commercial email requires accurate headers and subject lines, identification as an advertisement where applicable, a valid physical postal address, a working opt-out mechanism, and prompt honoring of opt-out requests.",
          "Text-message marketing is stricter. It generally requires prior express written consent for marketing messages, with the consent request stating clearly what the subscriber will receive. Consent obtained for one purpose does not transfer to another.",
          "Privacy practice extends past law into trust. Say plainly what data you collect, why, and who else receives it. Collect less than you technically can. A business that treats customer data as borrowed rather than owned will rarely be surprised by a regulation.",
        ],
        keyPoints: [
          "Email needs accurate headers, a physical address, and working opt-out",
          "Marketing texts require prior express written consent",
          "Collect less data than you are able to collect",
        ],
        action: "Test your own opt-out links and confirm removal happens within your stated window.",
      },
    ],
  },
  {
    id: 5,
    slug: "message-and-audience",
    title: "Message and Audience",
    tagline: "Saying the true thing to the right person",
    description:
      "Positioning, offer construction, and copy craft for businesses that will not manipulate but still must compete.",
    theme: "practice",
    lessons: [
      {
        id: "5-1",
        title: "Positioning by Genuine Difference",
        duration: "13 min",
        summary:
          "If your differentiator is a feeling, competitors can copy it by Friday. Find the difference that is structural.",
        body: [
          "Most positioning statements describe an aspiration: 'we care more', 'we're passionate about service'. These are unverifiable and therefore worthless as differentiation — every competitor claims them, and no customer can check.",
          "Structural differences are built into how you operate: a guarantee you actually honor, a specialization that took years to acquire, a response time your staffing enables, a price your supply chain permits, a refusal you have made that others have not.",
          "Find yours by asking what you do that a competitor could not copy within ninety days. That answer, stated plainly, is your position.",
        ],
        keyPoints: [
          "Aspirational claims cannot differentiate",
          "Structural differences resist quick imitation",
          "Test: what could a competitor not copy in 90 days?",
        ],
        action:
          "Write your ninety-day-defensible difference in one sentence and place it above the fold.",
      },
      {
        id: "5-2",
        title: "Offer Construction and Risk Reversal",
        duration: "14 min",
        summary:
          "Move risk from the customer to the business — the most persuasive move available to an honest company.",
        body: [
          "Every purchase asks the customer to accept risk: the product may not work, the service may disappoint, the money may be wasted. Manipulative marketing hides that risk. Honest marketing absorbs it.",
          "Risk reversal takes concrete forms: a real refund window with a simple process, a pilot engagement before a full contract, transparent pricing with no conditional add-ons, published limitations describing who the product is not for.",
          "The last item is underrated. Telling a prospect honestly that you are not the right fit costs one sale and earns a reputation that produces many. It also reduces refunds, disputes, and bad reviews.",
        ],
        keyPoints: [
          "Honest businesses can absorb risk that dishonest ones cannot",
          "Publish who your product is not for",
          "Disqualifying poor fits improves margins and reputation",
        ],
        action: "Add a 'this is not for you if…' section to your main sales page.",
      },
      {
        id: "5-3",
        title: "Copy Craft: Clarity Over Cleverness",
        duration: "12 min",
        summary: "Concrete techniques for writing plain copy that outperforms clever copy.",
        body: [
          "Clever copy asks the reader to decode. Every second spent decoding is a second not spent deciding. Clarity is not the boring option; it is the high-conversion option.",
          "Four habits produce clear copy. Lead with the outcome, not the mechanism. Use the customer's vocabulary rather than your industry's. Prefer concrete nouns and numbers to adjectives. Cut every sentence that would not change a decision if removed.",
          "Read the final draft aloud. Anything you would not say to a customer across a table should not survive to publication.",
        ],
        keyPoints: [
          "Decoding time competes with deciding time",
          "Numbers and concrete nouns beat adjectives",
          "Read aloud; cut what you would not say in person",
        ],
        action: "Rewrite your primary call-to-action section using only words a customer would use.",
      },
    ],
  },
  {
    id: 6,
    slug: "channels-in-practice",
    title: "Channels in Practice",
    tagline: "Website, search, email, social, and referral — done faithfully",
    description:
      "Channel-by-channel application: what to build, what to measure, and where the ethical and legal pressure points sit.",
    theme: "practice",
    lessons: [
      {
        id: "6-1",
        title: "Website and Search Foundations",
        duration: "14 min",
        summary: "The asset you own, and the traffic that compounds without a bidding war.",
        body: [
          "Owned assets appreciate; rented ones do not. A website with clear service pages, honest pricing information, and real proof will still be working in five years. An ad account stops the day the budget stops.",
          "Search visibility follows the same logic as honest marketing: specific pages answering specific questions for specific people. One thorough page per real customer question beats a dozen thin pages assembled for keywords.",
          "Technical basics still matter: descriptive page titles under sixty characters, meta descriptions that read like invitations, one clear H1 per page, alt text on images, fast loading, and a mobile layout that a customer can complete a task on.",
        ],
        keyPoints: [
          "Owned assets compound; ad spend does not",
          "One thorough page per real question beats thin keyword pages",
          "Titles, H1s, alt text, and mobile speed remain foundational",
        ],
        action: "List the ten questions customers ask before buying. Publish a real page for each.",
      },
      {
        id: "6-2",
        title: "Email as Relationship, Not Extraction",
        duration: "12 min",
        summary: "The highest-return channel, and the easiest one to burn.",
        body: [
          "An email list is permission to enter someone's attention repeatedly. Extraction treats that permission as inventory to be depleted. Relationship treats it as an account to be funded before it is drawn on.",
          "Practically: send useful material more often than you send offers, make every offer legible in the first two sentences, segment so that people receive things relevant to them, and let people leave easily.",
          "Measure the right thing. Open rates fluctuate with privacy features. Watch replies, click-through on genuine interest, unsubscribe trend, and revenue per subscriber over time.",
        ],
        keyPoints: [
          "Fund the relationship before drawing on it",
          "Make offers legible immediately; never disguise them",
          "Track replies and revenue per subscriber, not open rates",
        ],
        action: "Plan your next eight emails and confirm at least five deliver value without an ask.",
      },
      {
        id: "6-3",
        title: "Social Proof and Referral Systems",
        duration: "13 min",
        summary: "Building word of mouth deliberately, without buying it dishonestly.",
        body: [
          "Referrals are the natural output of two things: a result worth mentioning and an easy moment to mention it. Most businesses have the first and never build the second.",
          "Build the moment. Ask at the point of demonstrated satisfaction rather than at invoice time. Give the customer language they can forward. Make the introduction one click.",
          "Keep incentives clean. Rewarding referrals is legitimate; rewarding only positive reviews is not. Never gate a review request on sentiment, never suppress negative feedback, and disclose any incentive attached to a public endorsement.",
        ],
        keyPoints: [
          "Ask at demonstrated satisfaction, not at invoicing",
          "Give customers forwardable language",
          "Never filter review requests by expected sentiment",
        ],
        action: "Add a referral ask to your delivery process at the point of confirmed satisfaction.",
      },
    ],
  },
  {
    id: 7,
    slug: "measurement-and-witness",
    title: "Measurement and Witness",
    tagline: "Numbers that tell the truth, and a business that reads like its message",
    description:
      "Close the loop: analytics without self-deception, handling failure publicly, and aligning operations with the promises marketing makes.",
    theme: "practice",
    lessons: [
      {
        id: "7-1",
        title: "Analytics Without Self-Deception",
        duration: "13 min",
        summary: "False weights apply to internal reporting too — often more damagingly.",
        body: [
          "The same discipline that governs external claims should govern internal dashboards. Selecting the flattering window, reporting gross without churn, or crediting a channel for revenue it merely touched are internal false balances. They mislead the person making resource decisions: you.",
          "Choose a small set of honest metrics and hold them steady: cost to acquire a customer, retention over a fixed period, contribution margin per customer, and referral rate. Report them on the same cadence whether they are good or bad.",
          "Name the metric that would tell you a campaign failed, and name it before launch. Deciding the failure condition in advance is the only reliable protection against rationalizing after the fact.",
        ],
        keyPoints: [
          "Internal reporting deserves the same honesty as advertising",
          "Fix a small metric set and report it on a steady cadence",
          "Define the failure condition before launch",
        ],
        action: "Write the failure condition for your next campaign before it goes live.",
      },
      {
        id: "7-2",
        title: "When You Get It Wrong",
        duration: "11 min",
        summary: "Correction handled well builds more trust than the error destroyed.",
        scripture: {
          ref: "Proverbs 28:13",
          text: "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.",
        },
        body: [
          "You will publish something inaccurate. The variable is not whether it happens but how quickly and completely you correct it.",
          "A complete correction has four parts: state plainly what was wrong, correct it in the same channels where the error appeared, make affected customers whole without requiring them to fight for it, and change the process that allowed the error.",
          "Skipping the fourth part is the common failure. A correction without a process change is an apology scheduled to repeat.",
        ],
        keyPoints: [
          "Correct in the same channels where the error appeared",
          "Make customers whole without making them fight",
          "Change the process, or the apology will repeat",
        ],
        action: "Write your correction protocol now, while nothing is on fire.",
      },
      {
        id: "7-3",
        title: "Marketing That Matches the Company",
        duration: "12 min",
        summary: "The final integrity test: does the customer's experience match the advertisement?",
        body: [
          "Marketing does not create a reputation; it makes a promise that operations must keep. When the gap between promise and experience is small, marketing compounds. When the gap is wide, marketing accelerates decline by exposing more people to the disappointment faster.",
          "Audit the gap directly. Write down what your marketing promises, then buy from yourself as a customer would. Note every point where the experience is worse than the promise. Fix operations or lower the promise — either closes the gap, and both are honest.",
          "This is the point where marketing becomes witness. A business whose advertising is fully matched by its conduct makes a public argument that a customer can verify. That argument outlasts every campaign you will ever run.",
        ],
        keyPoints: [
          "Marketing accelerates whatever the operation actually is",
          "Close the promise-experience gap from either direction",
          "Verified consistency is the durable competitive asset",
        ],
        action:
          "Buy your own product as a customer this week. Document every gap between promise and experience.",
      },
    ],
  },
];

export const totalLessons = modules.reduce((n, m) => n + m.lessons.length, 0);

export function findModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
