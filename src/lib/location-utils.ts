// Dynamic content generation utilities for location pages
// These functions create fresh, auto-updating content based on current date

import { City, State, formatNumber, formatPercent } from '@/data/locations';

// Get current date info for dynamic content
export function getCurrentDateInfo() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(), // 0-11
    quarter: Math.floor(now.getMonth() / 3) + 1, // 1-4
    week: getWeekNumber(now),
    season: getSeason(now.getMonth()),
    monthName: now.toLocaleString('en-US', { month: 'long' }),
  };
}

function getWeekNumber(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  const oneWeek = 604800000;
  return Math.ceil(diff / oneWeek);
}

function getSeason(month: number): 'spring' | 'summer' | 'fall' | 'winter' {
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

// Seasonal marketing tips by industry
const seasonalTips: Record<string, Record<string, string>> = {
  spring: {
    Technology: 'Spring is perfect for launching new product features. Highlight innovation and fresh starts in your content.',
    Healthcare: 'Promote wellness and preventive care as people become more active with warmer weather.',
    Tourism: 'Capture the spring break travel surge with compelling destination content and early booking incentives.',
    'Real Estate': 'Spring buying season is here! Showcase new listings with outdoor photography and neighborhood highlights.',
    Finance: 'Tax season follow-up: Help clients plan for the rest of the year with smart financial content.',
    Entertainment: 'Festival season approaches - create buzz around upcoming events and ticket sales.',
    Retail: 'Spring cleaning translates to spring buying. Highlight new arrivals and seasonal products.',
    default: 'Spring brings renewal - refresh your content strategy with new themes and engagement tactics.',
  },
  summer: {
    Technology: 'Back-to-school tech prep starts now. Target students and educators with relevant content.',
    Healthcare: 'Summer safety content resonates - hydration tips, sun protection, and outdoor activity advice.',
    Tourism: 'Peak travel season is here. Maximize engagement with stunning visual content and local experiences.',
    'Real Estate': 'Families want to move before school starts. Emphasize quick closings and family-friendly neighborhoods.',
    Finance: 'Mid-year financial check-ins help clients stay on track. Share planning tips and market insights.',
    Entertainment: 'Outdoor events and summer concerts drive engagement. Leverage FOMO with event content.',
    Retail: 'Summer sales and back-to-school prep dominate. Create urgency with limited-time offers.',
    default: 'Summer engagement can dip - use vibrant, snackable content to capture attention.',
  },
  fall: {
    Technology: 'Major product launches happen in fall. Build anticipation with teaser content and early access offers.',
    Healthcare: 'Flu season prep and open enrollment drive healthcare content. Be the trusted source.',
    Tourism: 'Fall foliage and shoulder season deals attract travelers. Highlight unique autumn experiences.',
    'Real Estate': 'Motivated buyers remain active. Showcase cozy home features and investment opportunities.',
    Finance: 'Year-end planning begins. Help clients with tax strategies and retirement contributions.',
    Entertainment: 'Award season and holiday content planning starts. Build anticipation for upcoming releases.',
    Retail: 'Holiday shopping prep begins earlier each year. Start Black Friday buzz by mid-fall.',
    default: 'Fall is strategy season - plan your Q4 content calendar for maximum impact.',
  },
  winter: {
    Technology: 'CES and new year tech trends dominate. Position your brand as an industry thought leader.',
    Healthcare: 'New year wellness resolutions drive engagement. Support healthy lifestyle content.',
    Tourism: 'Winter escapes and holiday travel peak. Target both warm-weather getaways and ski destinations.',
    'Real Estate': 'Serious buyers shop in winter. Less competition means more motivated transactions.',
    Finance: 'New year financial resolutions and tax prep content perform well. Help clients start strong.',
    Entertainment: 'Award shows and winter releases create buzz. Leverage cultural moments.',
    Retail: 'Post-holiday sales and new year refresh. Clear inventory and introduce new lines.',
    default: 'Winter is planning season - set goals and establish your content themes for the year.',
  },
};

// Weekly rotating tips (52 tips for the year)
const weeklyTips = [
  'Start your week by scheduling content for peak engagement times in your timezone.',
  'Use AI to generate multiple variations of your top-performing posts.',
  'Analyze last week\'s metrics to identify content themes that resonate.',
  'Engage with your audience\'s comments within the first hour of posting.',
  'Create a content pillar strategy focusing on your top 3 topics.',
  'Repurpose long-form content into social snippets for wider reach.',
  'Test different call-to-actions to see what drives more clicks.',
  'Use trending hashtags relevant to your industry this week.',
  'Share behind-the-scenes content to humanize your brand.',
  'Collaborate with complementary local businesses for cross-promotion.',
  'Create educational content that positions you as an industry expert.',
  'Run a quick poll to boost engagement and gather audience insights.',
  'Optimize your posting schedule based on when your audience is most active.',
  'Share customer success stories and testimonials.',
  'Create content addressing common questions in your industry.',
  'Use carousel posts to increase time spent on your content.',
  'Leverage local events and news in your content strategy.',
  'A/B test your headlines to improve click-through rates.',
  'Focus on video content - it typically gets 48% more views.',
  'Engage with industry influencers and thought leaders.',
  'Create a content series that keeps followers coming back.',
  'Use data-driven insights to refine your target audience.',
  'Experiment with new content formats like Reels or Stories.',
  'Share industry statistics and trends with your unique perspective.',
  'Build an email list from your social media following.',
  'Create urgency with limited-time offers and announcements.',
  'Focus on quality over quantity in your posting strategy.',
  'Use consistent branding across all your social platforms.',
  'Engage with your competitors\' audiences authentically.',
  'Create content that addresses pain points in your market.',
  'Leverage user-generated content for authenticity.',
  'Optimize your social profiles for local search.',
  'Share your company values and mission in your content.',
  'Use AI to maintain consistent posting during busy periods.',
  'Create content clusters around your main topics.',
  'Engage with local community groups and forums.',
  'Test different content lengths to find your sweet spot.',
  'Use emojis strategically to increase engagement.',
  'Share industry news with your expert commentary.',
  'Create how-to guides and tutorials for your audience.',
  'Leverage seasonal trends in your content calendar.',
  'Build relationships with local media for PR opportunities.',
  'Use social listening to stay ahead of market trends.',
  'Create content that encourages saves and shares.',
  'Focus on building community, not just followers.',
  'Use AI to analyze competitor content strategies.',
  'Create content that sparks conversation and debate.',
  'Leverage local SEO in your social media strategy.',
  'Share milestone celebrations with your audience.',
  'Create anticipation for upcoming announcements.',
  'End the year strong with a content review and planning.',
  'Reflect on top-performing content for next year\'s strategy.',
];

// Quarterly trends and focus areas
const quarterlyTrends: Record<number, { title: string; focus: string[] }> = {
  1: {
    title: 'Q1: Fresh Start & Strategy',
    focus: [
      'Set your social media goals for the year',
      'Audit your content performance from last year',
      'Plan major campaigns and content themes',
      'Update your brand voice and visual guidelines',
    ],
  },
  2: {
    title: 'Q2: Growth & Engagement',
    focus: [
      'Double down on content that performs well',
      'Test new platforms and content formats',
      'Build partnerships and collaborations',
      'Prepare for mid-year campaigns',
    ],
  },
  3: {
    title: 'Q3: Optimization & Preparation',
    focus: [
      'Analyze first-half performance metrics',
      'Prepare holiday content in advance',
      'Build your content library for busy season',
      'Strengthen customer relationships',
    ],
  },
  4: {
    title: 'Q4: Maximize & Reflect',
    focus: [
      'Execute holiday marketing campaigns',
      'Maximize year-end engagement opportunities',
      'Plan and schedule content for slower periods',
      'Document learnings for next year',
    ],
  },
};

// Generate dynamic hero tagline based on city data
export function getHeroTagline(city: City, state: State): string {
  const { year } = getCurrentDateInfo();
  const taglines = [
    `Join ${formatNumber(city.businessCount)} ${city.name} businesses automating their social media in ${year}`,
    `The #1 AI content platform trusted by ${city.name} ${city.topIndustries[0].toLowerCase()} businesses`,
    `${formatPercent(city.socialMediaStats.instagramPenetration)} of ${city.name} businesses are on Instagram. Are you reaching them?`,
    `${city.name}\'s fastest-growing businesses use AI for content creation`,
  ];

  // Use consistent selection based on city slug for stable output
  const index = city.slug.length % taglines.length;
  return taglines[index];
}

// Get seasonal marketing tip for a city
export function getSeasonalTip(city: City): string {
  const { season } = getCurrentDateInfo();
  const primaryIndustry = city.topIndustries[0];

  const tips = seasonalTips[season];
  return tips[primaryIndustry] || tips.default;
}

// Get weekly rotating tip
export function getWeeklyTip(): { week: number; tip: string } {
  const { week } = getCurrentDateInfo();
  const tipIndex = (week - 1) % weeklyTips.length;
  return {
    week,
    tip: weeklyTips[tipIndex],
  };
}

// Get quarterly focus
export function getQuarterlyFocus(): { quarter: number; title: string; focus: string[] } {
  const { quarter } = getCurrentDateInfo();
  const trend = quarterlyTrends[quarter];
  return {
    quarter,
    ...trend,
  };
}

// Calculate projected marketing spend for a city
export function calculateMarketingSpend(city: City, state: State): string {
  const baseSpend = 12500; // Base annual digital marketing spend per business
  const adjustedSpend = baseSpend * state.marketingSpendIndex;
  const totalSpend = adjustedSpend * city.businessCount;

  if (totalSpend >= 1000000000) {
    return `${(totalSpend / 1000000000).toFixed(1)}B`;
  }
  if (totalSpend >= 1000000) {
    return `${(totalSpend / 1000000).toFixed(0)}M`;
  }
  return `${(totalSpend / 1000).toFixed(0)}K`;
}

// Calculate time saved for businesses in this city
export function calculateTimeSaved(city: City): string {
  // Average time saved per business: 8-15 hours per week
  const baseHours = city.competitorDensity === 'high' ? 12 : city.competitorDensity === 'medium' ? 10 : 8;
  return `${baseHours}+ hours`;
}

// Calculate ROI projection
export function calculateROI(city: City, state: State): string {
  // Higher competition = higher ROI potential from automation
  const baseROI = city.competitorDensity === 'high' ? 340 : city.competitorDensity === 'medium' ? 280 : 220;
  const adjustedROI = Math.round(baseROI * state.marketingSpendIndex);
  return `${adjustedROI}%`;
}

// Generate dynamic stats for a city
export function getCityStats(city: City, state: State) {
  const { year } = getCurrentDateInfo();

  return {
    businessCount: formatNumber(city.businessCount),
    linkedInActive: formatPercent(city.socialMediaStats.linkedinPenetration),
    instagramActive: formatPercent(city.socialMediaStats.instagramPenetration),
    facebookActive: formatPercent(city.socialMediaStats.facebookPenetration),
    marketingSpend: calculateMarketingSpend(city, state),
    timeSaved: calculateTimeSaved(city),
    projectedROI: calculateROI(city, state),
    growthRate: `${(city.growthRate * 100).toFixed(1)}%`,
    year,
  };
}

// Generate industry-specific content suggestions
export function getIndustryContent(industry: string): { topics: string[]; contentTypes: string[] } {
  const industryContent: Record<string, { topics: string[]; contentTypes: string[] }> = {
    Technology: {
      topics: ['Product updates', 'Tech tips', 'Industry trends', 'Behind-the-scenes', 'Team spotlights'],
      contentTypes: ['Demo videos', 'Infographics', 'How-to guides', 'Case studies', 'Thought leadership'],
    },
    Healthcare: {
      topics: ['Wellness tips', 'Patient stories', 'Health awareness', 'Team introductions', 'Service highlights'],
      contentTypes: ['Educational posts', 'Video testimonials', 'Infographics', 'FAQ content', 'Community events'],
    },
    'Real Estate': {
      topics: ['Property showcases', 'Market updates', 'Neighborhood guides', 'Buyer tips', 'Success stories'],
      contentTypes: ['Virtual tours', 'Market reports', 'Client testimonials', 'Local spotlights', 'Just sold posts'],
    },
    Finance: {
      topics: ['Financial tips', 'Market insights', 'Planning guides', 'Industry news', 'Client success'],
      contentTypes: ['Educational content', 'Infographics', 'Webinar promotions', 'Case studies', 'Compliance-safe posts'],
    },
    Tourism: {
      topics: ['Destination highlights', 'Travel tips', 'Local experiences', 'Seasonal specials', 'Guest stories'],
      contentTypes: ['Stunning photography', 'Video tours', 'User-generated content', 'Booking promotions', 'Behind-the-scenes'],
    },
    Entertainment: {
      topics: ['Event announcements', 'Behind-the-scenes', 'Artist spotlights', 'Fan engagement', 'Ticket promotions'],
      contentTypes: ['Teaser videos', 'Live content', 'Countdown posts', 'Fan reposts', 'Exclusive previews'],
    },
    Manufacturing: {
      topics: ['Process showcases', 'Quality highlights', 'Team features', 'Innovation stories', 'Industry leadership'],
      contentTypes: ['Factory tours', 'Product features', 'B2B content', 'Certifications', 'Trade show coverage'],
    },
    default: {
      topics: ['Industry updates', 'Company news', 'Team highlights', 'Customer success', 'Tips and insights'],
      contentTypes: ['Educational posts', 'Behind-the-scenes', 'Testimonials', 'How-to content', 'Engagement posts'],
    },
  };

  return industryContent[industry] || industryContent.default;
}

// Generate competitor insight message
export function getCompetitorInsight(city: City): string {
  const { year } = getCurrentDateInfo();

  if (city.competitorDensity === 'high') {
    return `In ${year}, ${city.name}'s competitive market demands consistent, high-quality content. AI automation helps you stay ahead while competitors struggle to keep up.`;
  }
  if (city.competitorDensity === 'medium') {
    return `${city.name}'s growing market presents a prime opportunity. Early adopters of AI content tools are capturing market share faster in ${year}.`;
  }
  return `${city.name}'s emerging market means less competition for attention. Establish your brand presence now with consistent AI-powered content.`;
}

// Generate location-specific FAQ questions
export function getLocationFAQs(city: City, state: State): Array<{ question: string; answer: string }> {
  const { year } = getCurrentDateInfo();

  return [
    {
      question: `Is KontentFire available for businesses in ${city.name}, ${state.abbreviation}?`,
      answer: `Absolutely! KontentFire serves businesses throughout ${city.name} and all of ${state.name}. Our AI-powered platform works for any business looking to automate their social media content creation and scheduling.`,
    },
    {
      question: `How does KontentFire help ${city.topIndustries[0].toLowerCase()} businesses in ${city.name}?`,
      answer: `Our AI understands industry-specific content needs. For ${city.name}'s ${city.topIndustries[0].toLowerCase()} sector, we generate relevant content, suggest optimal posting times for your local audience, and help you maintain consistent brand presence across all platforms.`,
    },
    {
      question: `What makes KontentFire different for ${city.name} businesses?`,
      answer: `While our AI platform works globally, we understand that ${city.name} businesses need content that resonates locally. Our tools help you create content that connects with your ${state.name} audience while saving ${calculateTimeSaved(city)} per week on content creation.`,
    },
    {
      question: `How much can ${city.name} businesses save with AI content automation?`,
      answer: `Based on current ${year} data, ${city.name} businesses using KontentFire report saving an average of ${calculateTimeSaved(city)} per week on content creation, with an average ROI of ${calculateROI(city, state)} from improved social media performance.`,
    },
    {
      question: `Does KontentFire work with all social media platforms popular in ${city.name}?`,
      answer: `Yes! We support LinkedIn (used by ${formatPercent(city.socialMediaStats.linkedinPenetration)} of ${city.name} businesses), Instagram (${formatPercent(city.socialMediaStats.instagramPenetration)}), Facebook (${formatPercent(city.socialMediaStats.facebookPenetration)}), and Twitter/X. Create once, publish everywhere.`,
    },
  ];
}

// Get related cities for internal linking
export function getRelatedCities(city: City, allCities: City[], limit: number = 6): City[] {
  // Get cities in same state first
  const sameSateCities = allCities
    .filter(c => c.stateSlug === city.stateSlug && c.slug !== city.slug)
    .slice(0, Math.ceil(limit / 2));

  // Get cities with similar industries
  const similarIndustryCities = allCities
    .filter(c =>
      c.stateSlug !== city.stateSlug &&
      c.topIndustries.some(ind => city.topIndustries.includes(ind))
    )
    .sort((a, b) => b.businessCount - a.businessCount)
    .slice(0, limit - sameSateCities.length);

  return [...sameSateCities, ...similarIndustryCities];
}
