export interface ModuleScripture {
  ref: string;
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
}

export interface GroupTimingBlock {
  label: string;
  minutes: string;
  color: string;
  description: string;
}

export interface GroupOpener {
  title: string;
  prompt: string;
  note: string;
}

export interface GroupCaseStudy {
  title: string;
  story: string;
  question: string;
}

export interface ModuleGroupGuide {
  timing: GroupTimingBlock[];
  opener: GroupOpener;
  talkingPoints: string[];
  caseStudy: GroupCaseStudy;
  groupDiscussion: string[];
  keyTakeaway: string;
  prayerPrompt: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  sub: string;
  emoji: string;
  question: string;
  worldlyAnswer: string;
  kingdomShift: string;
  shiftNote: string;
  scriptures: ModuleScripture[];
  teaching: string[];
  steps: string[];
  reflections: string[];
  quiz: QuizQuestion[];
  group: ModuleGroupGuide;
}

export const COURSE_TITLE = "Kingdom Marketing";
export const COURSE_SUBTITLE =
  "A 7-module training for Christian businesses on marketing that is faithful, lawful, and effective.";
export const COURSE_PRICE_CENTS = 24900;
export const COURSE_PRICE_LABEL = "$249";

export const modules: Module[] = [
  {
    id: 1,
    slug: "who-owns-your-business",
    title: "Who Owns Your Business?",
    sub: "The Stewardship Foundation",
    emoji: "⚖️",
    question: "Who owns your business?",
    worldlyAnswer: "I do. I built it. I carry the risk.",
    kingdomShift: "God owns your business. You are trusted to steward it.",
    shiftNote:
      "This single mindset shift changes everything — how you market, price, serve customers, and make decisions under pressure.",
    scriptures: [
      {
        ref: "Psalm 24:1",
        text: "The earth is the Lord's, and everything in it, the world, and all who live in it.",
      },
      {
        ref: "Deuteronomy 8:17–18",
        text: "You may say to yourself, 'My power and the strength of my hands have produced this wealth for me.' But remember the Lord your God, for it is he who gives you the ability to produce wealth...",
      },
      {
        ref: "1 Corinthians 4:2",
        text: "Now it is required that those who have been given a trust must prove faithful.",
      },
      {
        ref: "Matthew 25:14–15",
        text: "Again, it will be like a man going on a journey, who called his servants and entrusted his wealth to them. To one he gave five bags of gold, to another two bags, to another one bag, each according to his ability...",
      },
    ],
    teaching: [
      "Most business owners answer this question the same way. 'I do.' And legally, sure — your name is on the paperwork. But the moment you accept that God is the true owner and you are the manager, your entire approach to business transforms.",
      "A steward doesn't make decisions for personal gain alone. A steward asks, 'What would the owner want here?' That changes how you treat customers, how you price services, how you represent yourself online — and yes, how you market.",
      "Marketing built on stewardship is honest by default. You're not trying to squeeze every dollar from someone else's pocket. You're connecting people who genuinely need what you offer with what you have — and doing it in a way that reflects well on the Owner.",
      "This isn't soft theology. It's a practical operating principle. When your team understands they're serving God's business, accountability shifts. Excellence becomes worship. Customer service becomes ministry. And your marketing stops being about hype and starts being about truth.",
    ],
    steps: [
      "Write a one-sentence 'stewardship statement' — who the business belongs to and what your role is.",
      "Share this concept with your team at your next meeting and invite honest discussion.",
      "Review your current marketing materials and ask: 'Does this reflect a steward, or an owner chasing profit?'",
    ],
    reflections: [
      "How would your day-to-day decisions change if you truly saw yourself as a manager of God's business rather than the owner?",
      "Are there areas of your marketing where you've been operating like the owner rather than the steward?",
      "What would it look like for your team to serve customers as if serving God directly?",
    ],
    quiz: [
      {
        question: "According to Psalm 24:1, who owns everything on earth?",
        options: ["The person who earned it", "The Lord", "The community", "The government"],
        answerIndex: 1,
      },
      {
        question: "What is the primary role of a steward?",
        options: [
          "To grow wealth aggressively",
          "To faithfully manage what belongs to someone else",
          "To protect assets from loss",
          "To maximize personal gain",
        ],
        answerIndex: 1,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–3 min",
          color: "#4A7C59",
          description: "Ask the room the central question and let it sit.",
        },
        {
          label: "Core Teaching",
          minutes: "3–15 min",
          color: "#4A6A8A",
          description: "Walk through the stewardship framework with talking points below.",
        },
        {
          label: "Group Discussion",
          minutes: "15–23 min",
          color: "#8A6A3A",
          description: "Break into tables or open to full group depending on room size.",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "Present the story and ask the closing question.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "Land the key statement, close with prayer.",
        },
      ],
      opener: {
        title: "The Opening Question",
        prompt:
          "Ask the room: 'Raise your hand if you've said the words \"my business\" at least once this week.' (Pause — nearly every hand goes up.) 'Keep it up if you said it more than five times.' (Most stay up.) 'Keep it up if you've ever introduced yourself as the owner.' (Most stay up.)\n\nThen say: 'Here's what I want to explore with you today. What if that's the most expensive habit you have?'",
        note: "This creates immediate engagement and a little humor without being heavy. Let it breathe for a few seconds before moving to the teaching.",
      },
      talkingPoints: [
        "Start with the legal reality: yes, your name is on the LLC paperwork. Yes, you sign the checks. The law recognizes you as the owner. We're not disputing that. But the Bible draws a different line — and it has implications for every business decision you make.",
        "Psalm 24:1 says the earth is the Lord's — and everything in it. That's not a metaphor. That's a declaration of ownership. Which means your building, your client list, your reputation, your revenue — all of it was entrusted to you by someone who was here before you and will be here after you.",
        "Deuteronomy 8 is especially pointed. God knew we'd get successful and forget. He said it directly: don't look at your thriving business and say, 'My hand did this.' He gives you the ability to produce wealth. That's not false humility. That's accurate accounting.",
        "Now — what does this actually change? Everything. The owner mindset says: this exists to serve me, grow my wealth, and sustain my family. The steward mindset says: this exists to serve the Owner's purposes, and I am trusted to operate it faithfully. Those are not the same mission.",
        "In the parable of the talents, the servants who doubled what they were given were celebrated. The one who buried his talent out of fear was rebuked. God isn't giving you a business to protect it from risk. He's giving it to you to be multiplied in service of His kingdom — which means how you operate, how you market, how you serve, all of it matters to Him.",
        "Here's the practical piece: when you market as an owner, you market to extract. When you market as a steward, you market to serve. An owner asks: how do I get the most from this customer? A steward asks: how do I genuinely help this person with what God has given me to offer?",
        "This also removes a weight many business owners carry quietly. You are not ultimately responsible for the outcome. You are responsible for faithfulness. You work hard, you operate with integrity, you serve well — and you trust God with the results. That's not an excuse for laziness. It's an invitation to stop white-knuckling an outcome you were never meant to control.",
      ],
      caseStudy: {
        title: "The Cleaning Company That Couldn't Raise Prices",
        story:
          "A local cleaning business owner had been running her business for six years. She was exhausted, her team was underpaid, and she hadn't raised prices in three years because she was terrified of losing clients. Every time she thought about raising prices, her internal monologue was: 'I can't afford to lose this. This is mine and I have to protect it.'\n\nA mentor asked her one question: 'If this business belongs to God, does He want it running on fumes?' She raised her prices. She lost two clients. She gained five new ones within 90 days who paid the new rate without hesitation. Her team got a raise. She stopped working weekends. And for the first time, she felt like she was running the business instead of the business running her.\n\nThe only thing that changed was the answer to the question: who owns this?",
        question:
          "What is one decision in your business you've been avoiding that might look completely different if you answered that question honestly?",
      },
      groupDiscussion: [
        "Where in your business right now are you making decisions like an owner (protecting your interests) rather than a steward (serving the Owner's purposes)?",
        "What would your marketing look like if every campaign started with the question 'How do we serve the people who need this?' rather than 'How do we get more revenue?'",
        "How do you think your employees would respond if you genuinely presented the idea that they're stewarding God's business alongside you? What barriers would come up?",
        "The servant who buried his talent was afraid. What are you protecting out of fear right now that might actually be something God wants you to multiply?",
      ],
      keyTakeaway:
        "You are not the owner. You are the manager. And a faithful manager doesn't operate out of fear or greed — they operate out of trust.",
      prayerPrompt:
        "Close by asking if anyone would like to pray, or lead a brief prayer: thanking God for entrusting each person in the room with their business, asking for the wisdom to manage it faithfully, and the courage to stop holding it so tightly.",
    },
  },
  {
    id: 2,
    slug: "your-brand-is-your-witness",
    title: "Your Brand is Your Witness",
    sub: "Integrity in Presentation",
    emoji: "🕊️",
    question: "What is your brand?",
    worldlyAnswer: "My logo, my colors, my tagline. My reputation in the market.",
    kingdomShift: "Your brand is your public witness. It reflects whose you are.",
    shiftNote:
      "Every touchpoint — your website, your ads, your voicemail — is saying something about your values. Make sure it's saying the right thing.",
    scriptures: [
      {
        ref: "Colossians 3:17",
        text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
      },
      {
        ref: "Matthew 5:16",
        text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
      },
      {
        ref: "Proverbs 22:1",
        text: "A good name is more desirable than great riches; to be esteemed is better than silver or gold.",
      },
      {
        ref: "Titus 2:7–8",
        text: "In everything set them an example by doing what is good. In your teaching show integrity, seriousness and soundness of speech that cannot be condemned...",
      },
    ],
    teaching: [
      "Branding in the secular world is about differentiation and memorability. Make people remember you. Stand out. That's fine — but it's incomplete for a Christian business owner.",
      "Your brand is also a witness. The way your website reads, the tone of your social posts, how your staff answers the phone — all of it either reflects or contradicts your stated values. If you claim to be a faith-based business but your marketing uses pressure tactics or misleading claims, you're not just bad at marketing. You're a poor witness.",
      "Consistency between what you believe and how you operate is called integrity. And integrity, in marketing terms, is your most powerful differentiator. People are tired of being sold to. They're hungry for businesses they can actually trust.",
      "Being a Christian-owned business isn't a marketing gimmick. It's an operating standard. Your branding should be the visible expression of the values underneath it.",
    ],
    steps: [
      "Read every page of your website and your last 30 days of social posts. Ask honestly: does this sound like a business grounded in faith and integrity?",
      "Define 3 to 5 core values your brand will never compromise, regardless of competitive pressure.",
      "If you display a faith affiliation publicly, make sure your customer experience actually earns that claim.",
    ],
    reflections: [
      "If someone who didn't know you personally evaluated your public presence, what would they conclude about your values?",
      "Where is there a gap between the values you say you hold and how your brand actually behaves?",
      "How can your brand be a genuine light in your industry without being preachy or alienating?",
    ],
    quiz: [
      {
        question:
          "According to Colossians 3:17, what should guide everything we say and do in business?",
        options: [
          "Our marketing strategy",
          "The name of the Lord Jesus",
          "Customer feedback",
          "Industry standards",
        ],
        answerIndex: 1,
      },
      {
        question: "What does integrity mean in the context of Christian business branding?",
        options: [
          "Having a professional logo",
          "Consistency between stated values and actual behavior",
          "Hiding your faith to appear neutral",
          "Charging premium prices",
        ],
        answerIndex: 1,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–3 min",
          color: "#4A7C59",
          description: "Brand audit exercise — quick and convicting.",
        },
        {
          label: "Core Teaching",
          minutes: "3–15 min",
          color: "#4A6A8A",
          description: "Walk through the brand-as-witness framework.",
        },
        {
          label: "Group Discussion",
          minutes: "15–23 min",
          color: "#8A6A3A",
          description: "Table discussions on brand gaps and witness.",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "The contractor story and the cost of a fish sticker.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "Land the integrity statement, close with prayer.",
        },
      ],
      opener: {
        title: "The 30-Second Brand Audit",
        prompt:
          "Tell the room: 'I want you to pull up your business's Facebook page or website — right now on your phone if you can. Don't overthink it. Just look at the last thing you posted or the first page someone sees when they find you. Now ask yourself one honest question: if I didn't know this business owner personally, what would I conclude about their values based on what I'm looking at right now?'\n\nGive them 60 seconds of silence to actually look. Then ask: 'How many of you felt a little uncomfortable just now?' Most hands will go up. That's your opening.",
        note: "This is one of the most effective openers in the course because it's immediate and personal. Don't skip the silence — it does the work for you.",
      },
      talkingPoints: [
        "When most people think about their brand, they think about the visual stuff — logo, colors, website design, maybe a tagline. And that matters. But a brand is not what you say about yourself. A brand is what other people experience when they interact with you. It's the sum total of every touchpoint.",
        "For a Christian business owner, that raises the stakes significantly. Because you're not just building a market reputation — you are a witness. Your business is one of the most visible expressions of your faith in your community. Your customers, your vendors, your employees — they are watching how you operate. And they are drawing conclusions.",
        "Colossians 3:17 is unambiguous: whatever you do — in word or deed — do it in the name of Jesus. That includes your email auto-responder. That includes how your staff answers the phone when they're frustrated. That includes your response to a negative Google review.",
        "Matthew 5:16 doesn't say 'let your light shine in church.' It says let it shine before others, so they see your good deeds and glorify God. Your business is a platform for that. But a platform only works if what you're saying from it is consistent with how you're living it.",
        "Proverbs 22:1 says a good name is more valuable than great riches. That's not a metaphor about brand strategy — it's a statement about character. Your reputation is built one interaction at a time. And it can be destroyed in one interaction too. The businesses that last, the ones people refer without being asked, are the ones where there is no gap between what they claim and what they deliver.",
        "Here's the uncomfortable part: a lot of Christian businesses use faith as a differentiator without using it as an operating standard. The fish sticker on the truck, the Bible verse in the email footer, 'God bless' at the end of every invoice — none of that matters if your crew shows up late, your estimates are vague, or your customer service disappears after the check clears.",
        "Titus 2 tells us to set an example with sound speech that cannot be condemned. In business terms: be so consistent, so honest, so excellent in how you operate that no one can find a legitimate complaint. That's a high bar. But it's the bar God set, not me.",
        "The good news is that this is actually the most powerful marketing strategy available to a Christian business. People are exhausted by hype and manipulation. A business that simply does what it says, treats people with dignity, and operates with visible integrity stands out immediately in almost any market. You don't need a bigger ad budget. You need a smaller gap between your stated values and your actual behavior.",
      ],
      caseStudy: {
        title: "The Contractor and the Fish Sticker",
        story:
          "A general contractor in a mid-sized town was known in his church community as a man of faith. He had a Bible verse on his truck, a cross on his business cards, and 'Christian-owned' on his website. He also consistently ran over budget, communicated poorly during projects, and was slow to respond to client concerns after work was completed.\n\nWhen a church member had a bad experience and mentioned it to others, the response in the community wasn't simply 'he's a bad contractor.' It was 'I thought he was a Christian.' The label had raised the expectation — and the gap between that expectation and the experience became a witness problem, not just a business problem.\n\nHe didn't lose a client. He damaged a testimony. And it took years to rebuild both.",
        question:
          "Where is there currently a gap between the faith identity your business projects and the actual experience your customers have? What would it take to close it?",
      },
      groupDiscussion: [
        "What is the one area of your customer experience that you know doesn't match the values you claim publicly? What's stopping you from fixing it?",
        "Think of a business in your community — not necessarily faith-based — that you genuinely trust and refer without hesitation. What specifically earns that trust? How does your own business compare?",
        "Is there language or imagery in your marketing that signals your faith without your operations backing it up? What would it take to earn the right to use that language?",
        "How do you handle a negative review or a difficult customer publicly? What does your response say about your brand and your witness?",
      ],
      keyTakeaway:
        "Your brand is not your logo. It's your witness. And a witness that contradicts itself is worse than no witness at all.",
      prayerPrompt:
        "Lead a prayer asking God for the courage to see the gaps honestly, the humility to close them, and the grace to represent His name well in the marketplace — even when it's costly.",
    },
  },
  {
    id: 3,
    slug: "truth-in-advertising",
    title: "Truth in Advertising",
    sub: "Honesty and Legal Compliance",
    emoji: "📋",
    question: "Is it okay to exaggerate a little in your marketing?",
    worldlyAnswer: "Everyone does it. You have to stand out. It's just puffery.",
    kingdomShift: "Deception — even small — erodes trust and dishonors God.",
    shiftNote:
      "Honesty in marketing is both a legal requirement and a Biblical one. And the truth is usually more compelling than the hype.",
    scriptures: [
      {
        ref: "Proverbs 11:1",
        text: "Dishonest scales are an abomination to the Lord, but accurate weights find favor with him.",
      },
      {
        ref: "Ephesians 4:15",
        text: "Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ.",
      },
      {
        ref: "Proverbs 12:17",
        text: "An honest witness tells the truth, but a false witness tells lies.",
      },
      {
        ref: "Zechariah 8:16–17",
        text: "These are the things you are to do: Speak the truth to each other, and render true and sound judgment in your courts; do not plot evil against each other, and do not love to swear falsely. I hate all this, declares the Lord.",
      },
    ],
    teaching: [
      "The FTC requires that advertising be truthful, not misleading, and backed by evidence. But before you ever get to federal law, Scripture already settled this. Dishonest weights — giving people less than what you promised, or inflating what you offer — is an abomination to God.",
      "This applies directly to your marketing. Testimonials must be real and representative. Before-and-after claims must be accurate. 'Best in the business' is opinion, but 'guaranteed results' is a promise you'd better be able to keep. If you use paid endorsers or affiliates, the FTC requires clear disclosure.",
      "Most Christian business owners aren't running scams. But many are using borrowed language — exaggerated claims, meaningless buzzwords, fake urgency — without thinking about it. The standard isn't 'am I technically lying?' The standard is 'could this mislead someone?'",
      "Truth in marketing also builds the kind of trust that creates loyal customers. Hype may get a click. Honesty earns a relationship.",
    ],
    steps: [
      "Review all testimonials and case studies. Are they real? Are they representative of typical results? Add disclaimers where needed.",
      "Remove any urgency or scarcity claims that aren't literally true — fake countdown timers, false low-stock warnings.",
      "If you use influencers, affiliates, or have employees leave reviews, ensure disclosures are clear and prominent.",
      "Visit ftc.gov and search 'truth in advertising' for a plain-language overview of your obligations.",
    ],
    reflections: [
      "Where in your current marketing might there be exaggeration you've justified as 'just the way marketing works'?",
      "How would your marketing change if you committed to only making claims you can fully substantiate?",
      "What would it look like for your marketing to be so honest that customers feel respected rather than persuaded?",
    ],
    quiz: [
      {
        question: "What does Proverbs 11:1 call dishonest business practices?",
        options: [
          "An acceptable shortcut",
          "An abomination to the Lord",
          "A sign of poor planning",
          "A competitive advantage",
        ],
        answerIndex: 1,
      },
      {
        question: "What does the FTC require of advertising claims?",
        options: [
          "They must be creative and memorable",
          "They must be truthful, not misleading, and backed by evidence",
          "They must be approved by an attorney",
          "They must include a disclaimer in small print",
        ],
        answerIndex: 1,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–4 min",
          color: "#4A7C59",
          description: "The 'technically not lying' exercise.",
        },
        {
          label: "Core Teaching",
          minutes: "4–16 min",
          color: "#4A6A8A",
          description: "Biblical standard + FTC framework, side by side.",
        },
        {
          label: "Group Discussion",
          minutes: "16–23 min",
          color: "#8A6A3A",
          description: "Where does exaggeration live in your marketing?",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "The HVAC company and the 'guaranteed' promise.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "The honest marketing challenge.",
        },
      ],
      opener: {
        title: "The 'Technically Not Lying' Exercise",
        prompt:
          "Say to the room: 'I'm going to read a few phrases that show up commonly in marketing. I want you to raise your hand if you've used one of these — or something close to it — in the last year.' Then read slowly:\n\n• 'Limited time offer'\n• 'Best in the business'\n• 'Guaranteed results'\n• 'Only a few spots left'\n• 'Thousands of satisfied customers'\n• 'Risk-free'\n\nAfter each one, notice how many hands go up. Then ask: 'How many of those were completely, documentably true at the time you used them?' Pause. 'That gap — between what we say and what we can prove — is exactly what today is about.'",
        note: "This is a conviction exercise, not a shaming exercise. Keep your tone warm and self-aware — include yourself in the examples if applicable. The goal is honesty, not guilt.",
      },
      talkingPoints: [
        "Let's start with the Biblical standard, because it's stricter than the legal one. Proverbs 11:1 calls dishonest scales an abomination. Not a mistake. Not a minor violation. An abomination. God takes commercial honesty seriously — so seriously that He addressed it repeatedly in the Old Testament, and the New Testament reinforces it.",
        "Zechariah 8 says God hates false swearing and deceit in commerce. Ephesians 4:15 calls us to speak truth in love. The standard God sets for our communication isn't 'technically accurate.' It's truthful in a way that genuinely serves the person receiving the information.",
        "Now let's talk about the legal standard, because a lot of Christian business owners assume their good intentions protect them legally. They don't. The FTC regulates advertising claims regardless of intent. And the rules are specific.",
        "Testimonials and endorsements: if someone is paid, gifted, or employed by you and they leave a review or post about your product, that relationship must be disclosed. A restaurant owner who gives a friend a free meal and then asks them to post a five-star review without disclosure is violating FTC rules — even if the friend genuinely loved the meal.",
        "Factual claims require substantiation. If your ad says 'lose 10 pounds in 30 days,' you need clinical evidence. If it says 'customers save an average of $500,' you need data. 'Best in the business' is opinion and is generally permissible — but 'guaranteed results' is a promise with legal weight.",
        "Fake urgency is both deceptive and increasingly easy to detect. Countdown timers that reset when you refresh the page. 'Only 3 spots left!' when you've been running that same ad for six months. These tactics erode trust at an accelerating rate as consumers get smarter. They're also dishonest. Both of those reasons should be enough to stop.",
        "Here's what I want you to hear: the honest version of your marketing is usually more powerful. When you stop trying to manufacture urgency and start telling the genuine story of the problem you solve and the people you've helped, something shifts. The hype makes people suspicious. The truth makes them feel respected. And people buy from businesses that respect them.",
        "A useful test to apply to everything you publish: 'Could a reasonable person be misled by this?' Not 'is this technically accurate?' but 'does this create a false impression?' That's both the Biblical standard and, interestingly, the exact language the FTC uses.",
      ],
      caseStudy: {
        title: "The HVAC Company and the 'Guaranteed' Promise",
        story:
          "A small HVAC company had used 'satisfaction guaranteed' in their advertising for years. They figured it just meant they'd try to make things right if a customer was unhappy. When a customer demanded a full refund after a repair that technically worked but didn't fix the underlying issue, the owner pushed back. The customer filed a complaint with the state attorney general's office.\n\nThe investigation found that the company had no written guarantee policy, had never actually issued a full refund under this 'guarantee,' and could not document what the guarantee covered. The word 'guaranteed' in their advertising had no substance behind it.\n\nThe company paid a fine, updated their advertising, and wrote an actual guarantee policy. The owner said afterward: 'I had no idea that one word had that much legal weight. I thought it was just something you say.'",
        question:
          "What words or phrases in your marketing do you use habitually that you've never actually examined for accuracy or legal weight?",
      },
      groupDiscussion: [
        "Where in your marketing are you using language you know is exaggerated or that you couldn't fully substantiate if someone pressed you on it?",
        "What would your marketing look like if every claim had to be backed by documented evidence? Would you have to cut a lot? What would you replace it with?",
        "Have you ever felt pressure to exaggerate claims to keep up with competitors who are less honest? How did you handle it? How should you handle it?",
        "Think about the last purchase decision you made where you felt genuinely respected by the business's marketing — where you felt like they were giving you real information rather than selling you. What did that look like?",
      ],
      keyTakeaway:
        "The standard isn't 'am I technically lying?' It's 'could this mislead someone?' Apply that to everything you publish — because God already does.",
      prayerPrompt:
        "Pray for the courage to remove whatever needs to be removed, the creativity to replace it with honest and compelling content, and the trust that God can grow a business built on truth.",
    },
  },
  {
    id: 4,
    slug: "serving-the-customer",
    title: "Serving the Customer",
    sub: "Marketing as Ministry",
    emoji: "🤝",
    question: "What is the goal of your marketing?",
    worldlyAnswer: "To get more sales. To grow revenue. To beat competitors.",
    kingdomShift: "The goal is to serve people well. Sales follow genuine service.",
    shiftNote:
      "When marketing is built around genuinely serving your customer, everything changes — your message, your offers, your follow-up, your loyalty.",
    scriptures: [
      {
        ref: "Mark 10:43–45",
        text: "...whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all. For even the Son of Man did not come to be served, but to serve...",
      },
      {
        ref: "Philippians 2:3–4",
        text: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
      },
      { ref: "Luke 6:31", text: "Do to others as you would have them do to you." },
      {
        ref: "Galatians 5:13",
        text: "You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.",
      },
    ],
    teaching: [
      "Most marketing is built around the question: 'How do we get more customers to give us money?' That's not wrong — you do need revenue. But it's an incomplete question. The better question is: 'How do we genuinely help more people with what we offer?'",
      "That shift produces fundamentally different marketing. Instead of writing copy that manipulates emotions to force a decision, you write copy that clearly explains what you do and who it's for. Instead of burying your pricing and hoping people commit before they see it, you're transparent — because you respect their ability to make a good decision.",
      "Philippians 2 tells us to look to the interests of others. In marketing language: know your customer's actual problem. Speak to it honestly. Offer your solution without manipulation. Let them decide. Follow up without pressure. Deliver what you promised.",
      "This is marketing as ministry. It doesn't mean you give everything away. It means you treat every prospect and customer like a person made in the image of God — worth serving well, whether they buy or not.",
    ],
    steps: [
      "Rewrite your core marketing message to lead with the customer's problem, not your services.",
      "Audit your sales process: are there pressure tactics you use that you'd find offensive if used on you?",
      "Create a simple customer service standard that reflects your values and train your staff on it.",
    ],
    reflections: [
      "If you treated every person who contacted your business as if they were sent by God, how would your interactions change?",
      "Where in your sales and marketing process do you use pressure you could replace with genuine service?",
      "What is the difference between persuasion and manipulation — and where do you draw that line?",
    ],
    quiz: [
      {
        question: "According to Mark 10:43–45, what is the path to greatness?",
        options: [
          "Aggressive growth",
          "Service and humility",
          "Wealth and reputation",
          "Strategic planning",
        ],
        answerIndex: 1,
      },
      {
        question: "What does a service-first marketing mindset prioritize?",
        options: [
          "Revenue over relationship",
          "Speed over accuracy",
          "The customer's actual needs over the sale",
          "Competitor analysis",
        ],
        answerIndex: 2,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–3 min",
          color: "#4A7C59",
          description: "The 'being sold to' experience question.",
        },
        {
          label: "Core Teaching",
          minutes: "3–15 min",
          color: "#4A6A8A",
          description: "Reframing marketing from extraction to service.",
        },
        {
          label: "Group Discussion",
          minutes: "15–23 min",
          color: "#8A6A3A",
          description: "Where does pressure live in your sales process?",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "The financial advisor who stopped selling.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "Rewrite one thing before you leave.",
        },
      ],
      opener: {
        title: "The Being Sold To Question",
        prompt:
          "Open with: 'I want you to think about the last time you felt genuinely sold to — where you could feel the pressure, where the person on the other end clearly cared more about the transaction than about you. Maybe it was a car lot. Maybe it was a timeshare pitch. Maybe it was a pushy contractor.'\n\nPause and let people land on a memory.\n\n'Now — without saying who it was — how many of you have ever used a tactic on a customer that felt like what you just remembered? A little urgency manufactured, a little pressure applied, a follow-up that was more about you than them?'\n\nWait for the honest hands and the honest silence. Then say: 'That's where we're starting today.'",
        note: "People know the feeling of being manipulated. The question lands because it makes abstract ethics personal and immediate.",
      },
      talkingPoints: [
        "Marketing has a vocabulary that we all absorbed from the culture and never examined. 'Close the deal.' 'Overcome objections.' 'Create urgency.' 'Don't let them leave without buying.' These are military metaphors applied to human relationships. And when you're a Christian business, they deserve a second look.",
        "Mark 10 is Jesus's most direct teaching on greatness — and His definition is the opposite of what every sales training seminar has ever taught. Greatness is servanthood. If you want to be first, be last. That is a complete inversion of every competitive business instinct. And it applies in the marketplace.",
        "Here's what service-first marketing actually looks like in practice. Your homepage leads with the customer's problem, not your credentials. Your sales conversation starts with questions, not a pitch. Your follow-up emails provide value rather than manufacture pressure. Your guarantee is real and clearly explained. Your pricing is visible and easy to understand.",
        "Philippians 2 says to look not only to your own interests but to the interests of others. In a sales context: genuinely ask yourself whether what you're offering actually serves this particular person. Sometimes the answer is no. A service-first business has the integrity to say: 'I don't think I'm the right fit for what you need. Let me point you somewhere else.' That referral, by the way, will come back to you ten times.",
        "Luke 6:31 — the Golden Rule — is the simplest possible marketing audit. Would you want to receive this email? Would you want to be followed up with this aggressively? Would you want to feel this pressure in a sales conversation? If the answer is no, you have your answer about whether to do it.",
        "Here's the practical reality: customers are more sophisticated than they've ever been. They can feel the difference between being served and being sold. When you market from a place of genuine service — when your copy is honest, your process is transparent, and your follow-up is helpful — it creates trust. And trust is the asset that every truly successful business is built on.",
        "Ministry doesn't mean you work for free. It means you approach every interaction with the posture of a servant. You show up prepared. You listen. You recommend what's actually best for them. You do what you said you would. You follow up. You're available when there's a problem. That is marketing as ministry — and when you do it consistently, you will not have a marketing problem.",
      ],
      caseStudy: {
        title: "The Financial Advisor Who Stopped Selling",
        story:
          "A financial advisor built his practice for twelve years using standard industry sales practices — cold calls, appointment quotas, product-focused presentations, and persistent follow-up scripts designed to break down resistance. He was successful by the numbers. He was also deeply uncomfortable with much of what he was doing.\n\nAfter a period of genuine conviction, he made a decision: he would stop selling products and start solving problems. Every initial meeting became a listening session. He began telling potential clients when he thought another firm was better suited for their situation. He stopped tracking sales conversion rates and started tracking client outcomes.\n\nHis revenue dropped 20% in the first year. Over the following three years, it grew 80% — almost entirely from referrals. He said: 'I stopped trying to close people and started trying to serve them. Turns out, serving them well is the most effective sales strategy I've ever used. I just wish someone had told me it was also the right one.'",
        question:
          "What is one specific pressure tactic or manipulation in your sales and marketing process that you could commit to removing this month — and what would you replace it with?",
      },
      groupDiscussion: [
        "Walk through your customer's experience from the moment they find you to the moment they receive their first invoice. Where in that journey is your process about you rather than them?",
        "What would it look like for your marketing to be so genuinely helpful that people felt served even if they never bought anything? Is that possible in your industry?",
        "Have you ever turned away a customer or referred them to a competitor because you weren't the right fit? How did that feel — and what happened as a result?",
        "What is the difference between ethical persuasion and manipulation? Where is that line in your specific industry, and are you currently on the right side of it?",
      ],
      keyTakeaway: "You don't have a customer. You have a neighbor. Market to them accordingly.",
      prayerPrompt:
        "Pray for a genuine shift from the mindset of extraction to the heart of a servant — and for the business results to confirm, over time, that God honors this way of operating.",
    },
  },
  {
    id: 5,
    slug: "legal-compliance-and-caesar",
    title: "Legal Compliance and Caesar",
    sub: "Render to Caesar What is Caesar's",
    emoji: "🏛️",
    question: "Do I really need to worry about marketing laws if I'm running an honest business?",
    worldlyAnswer: "I'm not trying to deceive anyone. The regulations are for bad actors.",
    kingdomShift: "Obeying the law honors God. Ignorance is not a defense.",
    shiftNote:
      "Scripture is clear: we submit to governing authorities. That includes marketing law — and there is more of it than most small businesses realize.",
    scriptures: [
      {
        ref: "Romans 13:1–2",
        text: "Let everyone be subject to the governing authorities, for there is no authority except that which God has established. The authorities that exist have been established by God...",
      },
      {
        ref: "Matthew 22:21",
        text: "'Give back to Caesar what is Caesar's, and to God what is God's.'",
      },
      {
        ref: "1 Peter 2:13–14",
        text: "Submit yourselves for the Lord's sake to every human authority: whether to the emperor, as the supreme authority, or to governors...",
      },
      {
        ref: "Romans 13:7",
        text: "Give to everyone what you owe them: If you owe taxes, pay taxes; if revenue, then revenue; if respect, then respect; if honor, then honor.",
      },
    ],
    teaching: [
      "Most Christian business owners have a strong internal moral compass. They're not trying to break the law. But 'trying to be honest' is not the same as 'being in compliance.' Specific legal requirements exist for marketing regardless of your intent.",
      "Key areas: The FTC regulates endorsements — if someone is paid, gifted, or employed by you and they leave a review or endorsement, it must be disclosed. Email marketing is governed by CAN-SPAM — you must include a physical address and a working unsubscribe link. Text marketing is regulated by the TCPA — you must have documented consent before texting customers.",
      "If you advertise special pricing or limited-time offers, those must be real. If you collect customer data, you likely have privacy obligations depending on your state. These aren't meant to scare you — they're meant to prepare you.",
      "Being legally compliant is not just smart business. It's obedience to the governing authorities God has established. Getting an FTC complaint is a poor witness and an entirely avoidable problem.",
    ],
    steps: [
      "Add a clear physical mailing address and unsubscribe link to every marketing email you send.",
      "Audit your review and testimonial strategy — any incentivized reviews must be disclosed.",
      "If you run text campaigns, document customer consent carefully.",
      "Keep records: document customer consents, contest rules, and any claims you make so you can substantiate them.",
    ],
    reflections: [
      "Are there any areas of your marketing where you've been uninformed about legal requirements? What is your plan to address them?",
      "How does Romans 13 apply to the way you run your marketing?",
      "What would it look like to be above reproach not just morally but legally in every area of your business?",
    ],
    quiz: [
      {
        question: "According to Romans 13:1, what is true about governing authorities?",
        options: [
          "They should be ignored if they conflict with your beliefs",
          "They have been established by God",
          "They only apply to secular businesses",
          "They are optional guidelines",
        ],
        answerIndex: 1,
      },
      {
        question: "Which federal law governs commercial email marketing in the United States?",
        options: ["GDPR", "HIPAA", "CAN-SPAM", "CCPA"],
        answerIndex: 2,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–3 min",
          color: "#4A7C59",
          description: "The 'I had no idea' moment.",
        },
        {
          label: "Core Teaching",
          minutes: "3–16 min",
          color: "#4A6A8A",
          description: "Romans 13 + the key marketing compliance areas.",
        },
        {
          label: "Group Discussion",
          minutes: "16–23 min",
          color: "#8A6A3A",
          description: "Where are the gaps in your current compliance?",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "The florist and the Instagram post.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "One action item, close with prayer.",
        },
      ],
      opener: {
        title: "The 'I Had No Idea' Inventory",
        prompt:
          "Say to the group: 'I'm going to read through a few common marketing practices. If you're currently doing any of these, I want you to hold up one finger for each one — no judgment, just awareness.'\n\nRead slowly:\n• You send marketing emails without a physical mailing address in the footer.\n• You've asked customers or employees to leave a review without disclosing they're connected to your business.\n• You run giveaways or contests on social media without posting official rules.\n• You send text message marketing to customers without written documentation of their consent.\n• You've used a countdown timer or 'limited availability' claim that wasn't literally true.\n\nThen say: 'If you had even one finger up, you're in good company in this room — and you're also technically in violation of federal marketing regulations. That's not to scare you. That's why we're here today.'",
        note: "This creates immediate stakes without shame. The room will be relieved to know they're not alone and motivated to actually understand the rules.",
      },
      talkingPoints: [
        "Romans 13 is clear: governing authorities have been established by God. Submission to law is not a secular compromise of your faith — it is an expression of it. And here's the thing about marketing law specifically: most of it was written to protect people from exactly the kind of exploitation that Scripture already prohibits.",
        "The FTC's core standard — that advertising must be truthful, not misleading, and backed by evidence — is essentially a secular restatement of Proverbs 11:1. They arrived at the same place from a different direction. So compliance with these laws isn't in tension with Biblical values. It's the overlap.",
        "Let's cover the areas where most small businesses have unknowing violations. First: email marketing. CAN-SPAM, which applies to all commercial email in the United States, requires three things that most businesses don't do consistently — a physical mailing address, a functioning unsubscribe mechanism, and honest subject lines that accurately reflect the email content.",
        "Second: testimonials and reviews. The FTC's endorsement guidelines require disclosure of any material connection between the reviewer and the business. If you gave someone a discount in exchange for a review, that must be disclosed. If an employee posts a positive review without identifying themselves as an employee, that's a violation. This includes social media posts and influencer partnerships.",
        "Third: text message marketing. The TCPA is one of the most aggressively enforced federal marketing laws. You must have prior written consent — meaning the customer explicitly agreed to receive marketing texts — before you send promotional messages. This is not implied by giving you their number. It requires an explicit opt-in. The fines for TCPA violations are $500 to $1,500 per text. Per text. This is not a theoretical risk.",
        "Fourth: contests and giveaways. If you're running a giveaway on social media, you are legally required to post official rules that include eligibility, prize description, odds of winning, and how the winner will be selected and notified. Most small business social giveaways don't include these. That's a problem.",
        "Fifth: data privacy. If your state has a consumer privacy law — California, Colorado, Virginia, Texas, and others — and you collect customer data through your website or marketing tools, you have specific disclosure and data-handling obligations. This is an area evolving quickly, and you need to know what applies in your state.",
        "Here's the bottom line on all of this: you don't have to be a lawyer. You do have to take it seriously. A consultation with a marketing attorney or a compliance review of your core materials is a reasonable investment. Getting a cease-and-desist or an FTC complaint is expensive, damaging to your reputation, and a poor witness. Being above reproach — legally, not just morally — is the standard.",
      ],
      caseStudy: {
        title: "The Florist and the Instagram Post",
        story:
          "A small florist ran a Valentine's Day promotion: she offered a 25% discount to any customer who posted a photo of their flowers and tagged her business on Instagram. No disclosure, no mention that it was a promotional arrangement. The posts looked like organic customer reviews. Within three days she had 40 posts and a surge in orders.\n\nA competitor filed a complaint with the FTC. The florist received a warning letter requiring her to add disclosure language to all incentivized posts, notify each participating customer to update their posts, and implement a formal endorsement disclosure policy. She was not fined on the first offense. But she spent significant time and legal fees on the compliance process — and the experience shook her confidence in her social media marketing entirely.\n\nShe said: 'I genuinely didn't know. I thought it was just a fun promotion. I had no idea there were rules about this.'",
        question:
          "What marketing activities do you currently run that involve customers or third parties promoting your business? What is your disclosure practice for each of them?",
      },
      groupDiscussion: [
        "Which of the compliance areas covered today — email, reviews, text messaging, giveaways, data privacy — do you have the most uncertainty about in your own business?",
        "How do you think about the relationship between Biblical ethics and legal compliance? Are they separate categories, or do they overlap more than you realized?",
        "What would it mean practically for your business to be 'above reproach' in the legal dimension — not just avoiding violations, but being a model of how it should be done?",
        "Have you ever experienced or witnessed the aftermath of a marketing compliance issue — either in your business or someone else's? What happened?",
      ],
      keyTakeaway:
        "Good intentions don't create legal compliance. Obedience to governing authority — which God established — requires actually knowing the rules.",
      prayerPrompt:
        "Pray for wisdom to understand your obligations, resources to address your gaps, and the integrity to operate a business that is above reproach in every category — including the ones we've been ignoring.",
    },
  },
  {
    id: 6,
    slug: "honest-pricing-and-value",
    title: "Honest Pricing and Value",
    sub: "Fair Weights, Fair Business",
    emoji: "⚖️",
    question: "Should I charge what the market will bear?",
    worldlyAnswer: "If people will pay it, it's worth it. That's just business.",
    kingdomShift:
      "Fair pricing reflects God's character. Exploiting desperation is not stewardship.",
    shiftNote:
      "How you price your products and services is a moral decision — not just a financial one.",
    scriptures: [
      {
        ref: "Proverbs 16:11",
        text: "Honest scales and balances belong to the Lord; all the weights in the bag are of his making.",
      },
      {
        ref: "Leviticus 19:35–36",
        text: "Do not use dishonest standards when measuring length, weight or quantity. Use honest scales and honest weights...",
      },
      {
        ref: "Luke 3:14",
        text: "'...Don't extort money and don't accuse people falsely — be content with your pay.'",
      },
      {
        ref: "Proverbs 20:10",
        text: "Differing weights and differing measures — the Lord detests them both.",
      },
    ],
    teaching: [
      "Pricing strategy is treated as purely financial in most business education. But for a Christian business owner, how you price has spiritual dimensions. Are you being transparent? Are you taking advantage of someone's urgent need? Are you advertising one price and finding ways to charge another?",
      "Bait-and-switch pricing — advertising a low price to draw someone in and then pivoting to something higher — is both illegal and dishonest. Surprise fees and hidden charges are variations of the same problem. 'Honest scales' means the price you advertise is the price you charge.",
      "On the other side, you are allowed to price your work appropriately. Undercharging out of guilt doesn't serve God either. A good steward knows the value of what they manage. Know your costs, understand your market, and price in a way that lets you operate, pay your team fairly, and serve your customers well.",
      "When your pricing is honest, your marketing is easier. You don't have to hide numbers. You can lead with your price confidently — because it reflects the real value of what you offer.",
    ],
    steps: [
      "Review your pricing page and how you present quotes. Are all fees and conditions disclosed upfront?",
      "If you offer 'starting at' pricing, make the path to what most customers actually pay transparent.",
      "Evaluate whether your pricing reflects your actual costs and value — both overcharging and severe undercharging can be forms of dishonesty.",
    ],
    reflections: [
      "Are there areas of your pricing where you're counting on customers not asking the right questions?",
      "How does 'honest scales' apply specifically to your industry and pricing practices?",
      "If your best customers could see exactly how you calculate your prices, would they feel respected or taken advantage of?",
    ],
    quiz: [
      {
        question: "What does Proverbs 16:11 say about honest scales and balances?",
        options: [
          "They are good for business",
          "They are a sign of professionalism",
          "They belong to the Lord",
          "They are required by law",
        ],
        answerIndex: 2,
      },
      {
        question: "What is bait-and-switch pricing?",
        options: [
          "Offering seasonal discounts",
          "Advertising a low price to attract customers then switching to a higher one",
          "Charging different rates for different service tiers",
          "Offering a price-match guarantee",
        ],
        answerIndex: 1,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–3 min",
          color: "#4A7C59",
          description: "The storm pricing question — honest reaction first.",
        },
        {
          label: "Core Teaching",
          minutes: "3–15 min",
          color: "#4A6A8A",
          description: "Honest scales: both directions.",
        },
        {
          label: "Group Discussion",
          minutes: "15–23 min",
          color: "#8A6A3A",
          description: "Where is your pricing vulnerable to dishonesty?",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "Two roofers after a hailstorm.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "The pricing transparency challenge.",
        },
      ],
      opener: {
        title: "The Storm Question",
        prompt:
          "Open with: 'Quick scenario. A major hailstorm hits your area. You're in the roofing business. Your schedule goes from half-empty to full for six months overnight. You've got more demand than you can handle. The question is: do you raise your prices?'\n\nLet the room wrestle with it for 30 seconds. Some will say yes immediately. Some will hesitate. Some will say it depends.\n\nThen ask: 'What's the difference between charging what the market will bear because demand is high, and taking advantage of people in a vulnerable moment? Is there a line? And if there is, where is it?'\n\nLet two or three people share before you move into the teaching. This scenario has no clean answer — that's the point.",
        note: "The goal is to surface the real tension people carry around pricing without a clear framework. The teaching will give them one.",
      },
      talkingPoints: [
        "God has a lot to say about pricing. More than most people realize. The Old Testament references honest weights and measures repeatedly — it's not a throwaway law. It's because commerce is one of the primary arenas where human beings exploit each other, and God cares about that.",
        "Proverbs 20:10 says God detests differing weights and differing measures. What does that mean in practice? It means you don't have two different price systems — one for people who seem wealthy and one for people who seem desperate. It means the price you quote in your ad is the price you charge. It means what you say something costs and what it actually costs are the same thing.",
        "Let's address the storm scenario directly. There is a legitimate version of raising prices when demand increases: if your costs go up — materials, overtime, subcontractors — adjusting your prices to reflect that is honest business. That's honest scales. But if your costs stay the same and you raise prices simply because people have no other options right now, that's exploitation. The Biblical word for it is usury — taking advantage of someone's disadvantage. God is specific about that.",
        "Now let's go the other direction, because a lot of Christian business owners have a problem in the opposite direction. They underprice out of guilt. They feel bad charging what their work is actually worth. They discount reflexively. They say yes to scope creep because they don't want to seem greedy.",
        "But here's the problem with chronic underpricing: it's not honest either. If you charge below your actual costs to the point that you can't sustain your business, pay your employees fairly, or invest in the quality of your work — you're not being generous. You're being unfaithful to the stewardship you were given. A good steward doesn't give the Owner's resources away out of false humility.",
        "Proverbs 16:11 says honest scales belong to the Lord. They belong to Him, which means He cares how you use them. Your pricing is not just a financial decision. It's a reflection of your character. Are you pricing to extract maximum value from someone's desperation? Or are you pricing fairly, transparently, based on what your work actually costs and what it's genuinely worth?",
        "Here's the test for honest pricing: could you explain your pricing to any customer in plain language and have them feel like they understood it and it was fair? No hidden fees that appear later. No bait-and-switch from the advertised price to the actual quote. No 'starting at' that nobody ever actually pays. If your pricing requires that customers don't ask questions, it needs to change.",
        "Transparent pricing, by the way, is a significant competitive advantage in most service industries. Most of your competitors are hiding their prices. Being the business that openly says 'here's what we charge and here's why' builds trust immediately — and trust is the hardest thing to manufacture and the easiest thing to lose.",
      ],
      caseStudy: {
        title: "Two Roofers After a Hailstorm",
        story:
          "After a major storm hit a mid-sized city, two roofing companies operated differently. The first company raised prices 40% across all their services, citing 'market conditions.' They had more work than they could finish, made more money that year than any year before, and lost most of their repeat customers when the market settled. Several left scathing reviews specifically about the price gouging.\n\nThe second company held their standard pricing and added a transparent surcharge they explained clearly: a 12% supply and scheduling premium due to the regional demand increase, itemized on every quote. They explained it plainly to every customer. Some customers pushed back. Most accepted it as reasonable. They finished the year with a waiting list of customers who specifically chose them after hearing about their pricing transparency from neighbors.\n\nBoth companies made money. Only one built a business that survived the next five years.",
        question:
          "What is one aspect of your pricing — a fee, a structure, a range, a condition — that you know most customers don't fully understand until they're already committed? What would it look like to make that transparent upfront?",
      },
      groupDiscussion: [
        "Where in your pricing structure are there fees, conditions, or escalations that most customers don't know about until after they've committed? Is that intentional or accidental — and does the distinction matter?",
        "How do you think about the difference between charging fairly for your expertise and exploiting a customer's lack of knowledge or options? Where is that line in your industry?",
        "For those who struggle with undercharging: what belief is underneath that habit? Is it genuine generosity, or is it something else — fear, guilt, lack of confidence in your value?",
        "What would your marketing look like if your pricing was so transparent that it became a selling point rather than something you disclosed reluctantly?",
      ],
      keyTakeaway:
        "Honest scales go both directions. Don't exploit people's desperation — and don't undervalue what God gave you to offer.",
      prayerPrompt:
        "Pray for the wisdom to price with integrity, the confidence to charge what your work is worth, and the discipline to never use someone's desperation as an opportunity.",
    },
  },
  {
    id: 7,
    slug: "faith-as-your-differentiator",
    title: "Faith as Your Differentiator",
    sub: "Your Why Without Being Preachy",
    emoji: "✨",
    question: "Should I advertise that I'm a Christian business?",
    worldlyAnswer: "I don't want to alienate anyone. Better to keep faith separate.",
    kingdomShift: "Your faith is your competitive advantage — if it's lived out, not just labeled.",
    shiftNote:
      "You don't have to hide your faith to be professional. And you don't have to be loud to be genuine. Authenticity is the bridge.",
    scriptures: [
      {
        ref: "1 Peter 3:15",
        text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect...",
      },
      {
        ref: "Romans 1:16",
        text: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes...",
      },
      {
        ref: "Matthew 5:13–14",
        text: "You are the salt of the earth... You are the light of the world. A town built on a hill cannot be hidden.",
      },
      {
        ref: "Colossians 4:5–6",
        text: "Be wise in the way you act toward outsiders; make the most of every opportunity. Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone.",
      },
    ],
    teaching: [
      "There's a real tension a lot of Christian business owners feel: they don't want to be preachy, they don't want to alienate non-Christian customers, but they don't want to hide what drives them either. That tension is healthy. The answer isn't to hide your faith or weaponize it for marketing. It's to live it out so visibly that people notice.",
      "A business that treats every employee with dignity, keeps every promise, prices honestly, and delivers what it advertises will naturally stand out in almost any market. When someone asks why you operate that way, you have an answer. That's 1 Peter 3:15 in practice.",
      "If you choose to label yourself as a Christian-owned business, that raises the standard. You're now held to a higher expectation by the public. Don't use it as a marketing hook if you're not ready to back it up with how you actually operate.",
      "Authenticity looks like: sharing your 'why' when it's relevant, operating with visible integrity, treating customers and staff with dignity, and never using your faith as a pressure tactic. Let the work speak. When it does, your faith explains it.",
    ],
    steps: [
      "Write a short 'our story' section for your website that authentically shares your motivation — including your faith — without making it a sales pitch.",
      "Identify the 2 to 3 ways your faith most visibly affects how you operate and make those prominent in your marketing.",
      "If you're not ready for the scrutiny that comes with the 'Christian-owned' label, that's okay. Focus on living it first, labeling it later.",
    ],
    reflections: [
      "Is there a gap between the faith you claim publicly and the standards you actually operate at? What would closing that gap look like?",
      "How can you talk about your values in marketing in a way that's inviting rather than exclusive?",
      "Who in your community do you respect as an example of a well-run, faith-grounded business? What can you learn from them?",
    ],
    quiz: [
      {
        question: "According to 1 Peter 3:15, how should we share our faith with others?",
        options: [
          "Loudly and frequently",
          "Only with other Christians",
          "With gentleness and respect",
          "In advertising only",
        ],
        answerIndex: 2,
      },
      {
        question: "What is the biggest risk of labeling yourself as a 'Christian-owned business'?",
        options: [
          "Losing non-Christian customers",
          "Being held to a higher standard you may not be ready for",
          "Legal liability",
          "Lower revenue",
        ],
        answerIndex: 1,
      },
    ],
    group: {
      timing: [
        {
          label: "Opening Hook",
          minutes: "0–3 min",
          color: "#4A7C59",
          description: "The hiding vs. labeling spectrum.",
        },
        {
          label: "Core Teaching",
          minutes: "3–15 min",
          color: "#4A6A8A",
          description: "The three postures and what each costs.",
        },
        {
          label: "Group Discussion",
          minutes: "15–23 min",
          color: "#8A6A3A",
          description: "Where do you land — and where should you?",
        },
        {
          label: "Case Study",
          minutes: "23–28 min",
          color: "#7A4A7A",
          description: "The barbershop that earned the right to say it.",
        },
        {
          label: "Takeaway & Close",
          minutes: "28–30 min",
          color: "#8A3A3A",
          description: "Course close, commissioning, prayer.",
        },
      ],
      opener: {
        title: "The Spectrum Question",
        prompt:
          "Draw an imaginary line in the air or write on a whiteboard: on one end, write 'HIDING' — on the other end, write 'PREACHING.' Then say:\n\n'Most Christian business owners live somewhere on this line. On the hiding end, you keep your faith completely separate from your business — no mention of it, ever, to anyone professional. On the preaching end, every invoice has a Bible verse, every sales conversation includes an altar call, and your business card basically functions as a tract.'\n\nLet a few people laugh.\n\n'Here's my question — and be honest: where do you actually live on this line right now? And where do you think you should be?'\n\nLet several people respond. The variety in the room will be valuable context for the teaching.",
        note: "This surfaces genuine diversity in the room and creates a non-judgmental space. Some people will realize they're hiding for fear. Others will realize they've been overcorrecting. Both discoveries are useful.",
      },
      talkingPoints: [
        "Let's name the three postures a Christian business owner can take toward their faith in their marketing, because the line between them matters. The first is concealment: you operate a faith-driven business but keep that entirely private. The second is labeling: you publicly identify as a Christian business — fish on the truck, verse in the footer, 'Christian-owned' on the website. The third is expression: you let your faith show through how you operate, and you're prepared to explain why when asked. These are not equally useful.",
        "Concealment is understandable. You don't want to appear exclusive. You don't want non-Christian customers to feel unwelcome. You don't want to be judged by every imperfect decision your business makes. Those are legitimate concerns. But there's also a cost: you've removed the most compelling piece of your story from your marketing. The 'why' behind your business is often the most powerful differentiator you have — and you've buried it.",
        "Labeling without substance is the most dangerous posture. The moment you put 'Christian-owned' in your marketing, every customer interaction becomes a test of that claim. A slow response, an unfair charge, a dishonest answer — these aren't just business problems anymore. They're witness problems. If you're going to use the label, you need to earn it every day. The label raises the expectation. Make sure your operations can meet it.",
        "Expression is the posture that 1 Peter 3:15 describes. You're not hiding, and you're not broadcasting. You're operating so visibly with integrity and purpose that people notice — and when they ask, you have a genuine answer. That answer can mention your faith. It should mention your values. And it should be delivered, as the verse says, with gentleness and respect.",
        "Matthew 5 says you are the light of the world. A city on a hill cannot be hidden. Note what Jesus did not say: He didn't say 'announce that you're a city on a hill.' He said a city on a hill cannot be hidden. The light comes from how you operate — and it becomes visible naturally. Your job isn't to put a billboard in front of your light. Your job is to actually be the light.",
        "Colossians 4:5 says to be wise in how you act toward outsiders, making the most of every opportunity — and to let your conversation be full of grace, seasoned with salt. In marketing terms: be thoughtful. Be winsome. Be genuinely good at what you do. Let your values come through in the quality of your work, the honesty of your communication, and the dignity with which you treat people. That is both good marketing and good witness.",
        "Here's the practical path forward. Write your business story honestly — including the fact that your faith shapes how you operate. Don't make it a sermon. Make it a reason. 'We started this business because we believe work done with integrity is worth doing. That belief comes from our faith.' That's it. That's enough. Anyone who wants to know more will ask. And you'll be ready to answer.",
        "And finally — this entire course has been building toward this. If you've been operating with honesty, serving customers with genuine care, pricing transparently, staying legally compliant, and treating your work as stewardship rather than ownership — then your faith is already visible. You've already been marketing as a Christian. You may just need to find the language for what you've been living.",
      ],
      caseStudy: {
        title: "The Barbershop That Earned the Right to Say It",
        story:
          "A barbershop owner in a mid-sized city decided when he opened that he wasn't going to hide his faith, but he also wasn't going to wear it on his sleeve. He didn't have a Bible verse on his sign. He didn't mention church to customers. He just operated the way he believed a Christian should operate: he was always on time, his prices were the same for everyone, he knew his clients by name and asked about their kids, he hired ex-offenders and paid them fairly, and when a client fell on hard times he cut hair for free without making a big deal of it.\n\nFive years in, a local newspaper did a feature on his shop. The reporter asked him what made the place different. He said: 'We try to treat everybody the way we'd want to be treated. That comes from our faith.'\n\nThat one line in a newspaper article generated more new clients than any advertising he'd ever done. People specifically came in and said, 'I read what you said and I wanted to see if you meant it.' He always did.",
        question:
          "What would your business look like if someone wrote a profile of it today — and what would they say is the 'why' behind how you operate? Is that the story you want told?",
      },
      groupDiscussion: [
        "Where do you currently fall on the hiding-to-preaching spectrum — and is that where you want to be? What would it take to move toward genuine expression?",
        "Think about a business in your life — faith-based or not — that you trust completely. What is it about how they operate that earned that trust? Is your business earning that same trust from your customers?",
        "What is the most authentic version of your business's 'why' story? Have you ever actually written it down and shared it publicly? What's stopping you?",
        "As we close out this course: what is the single most important thing you are taking home? What will you change, start, or stop in the next 30 days based on what you've learned?",
      ],
      keyTakeaway:
        "You don't have to announce that you're the light. You just have to actually be it. The rest takes care of itself.",
      prayerPrompt:
        "Close the course with a commissioning prayer — sending these business owners out with a genuine blessing over their work, their teams, their customers, and their witness in their communities. Thank God for the trust He's placed in each person in the room, and ask for the courage to steward it faithfully.",
    },
  },
];

export function findModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
