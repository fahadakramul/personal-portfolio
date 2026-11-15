export type Category = 'community' | 'teaching' | 'planning' | 'studio';
export type Project = {
  slug: string;
  title: string;
  short: string;
  category: Category;
  label: string;
  hero?: string;
  heroAlt?: string;
  role: string;
  overview: string;
  evidence: string[];
  credits?: string;
  links?: { label: string; url: string }[];
  gallery?: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: 'chorcha-community-campaigns', title: 'A community in motion',
    short: 'Student support, campaign communication, and creator coordination at Chorcha.',
    category: 'community', label: 'Chorcha / Community & campaigns',
    hero: 'campaign-1111', heroAlt: 'Fahad speaking in the public Chorcha 11.11 campaign video',
    role: 'Community Expert since May 2025',
    overview: 'I help students use Chorcha, answer questions, collect feedback, and keep campaign communication clear. My work spans participation, push notifications, in-app modal copy, selected publishing, and coordination with creators.',
    evidence: [
      'Chorcha community membership moved from 35K to 160K during my tenure, May 2025–November 2026. This is community growth during that period, not a claim that I caused the entire increase.',
      '11.11 and the iPad Giveaway are featured examples of public campaign communication and participation work. The linked posts show the campaigns; the operational contribution described here comes from my supplied portfolio brief.',
      'Additional public appearances cover HSC 26 results eve, RUET admissions eve, and my first on-camera appearance.'
    ],
    links: [
      { label: '11.11 campaign video', url: 'https://www.facebook.com/share/v/1ALMSjKxJH/' },
      { label: 'iPad Giveaway live announcement', url: 'https://www.facebook.com/reel/1114666427997780' },
      { label: 'HSC 26 results eve', url: 'https://www.facebook.com/share/v/1Cud7s2X6B/' },
      { label: 'RUET admissions eve', url: 'https://www.facebook.com/share/v/19PaJsqeZY/' },
      { label: 'First on-camera appearance', url: 'https://www.facebook.com/reel/1078712290813610' },
    ],
  },
  {
    slug: 'ict-teaching', title: 'Inside my ICT classroom',
    short: 'SSC 27’s full ICT course and HSC lessons taught through Chorcha.',
    category: 'teaching', label: 'Chorcha / Teaching',
    hero: 'class-0', heroAlt: 'Chorcha app interface showing Fahad’s ICT class lessons',
    role: 'ICT Instructor since September 2026',
    overview: 'I teach the full SSC 27 ICT course and HSC ICT, including Web Design & HTML and Number Systems & Digital Devices. The app listings shown here are examples of paid classes, not the paid lessons themselves.',
    evidence: [
      '24 videos and 28 hours of content in my teaching dashboard as of 15 November 2026.',
      'More than 2,500 unique students attended my first two HSC live classes, as described in my public teaching recap.',
      'The HSC and SSC app screenshots document class listings and topics. Internal dashboard screenshots and paid lesson content are excluded.'
    ],
    links: [{ label: 'Read my live-class recap', url: 'https://www.linkedin.com/posts/fahad-md-akramul-islam_teachingjourney-firstliveclass-hsc-activity-7506394289787019264-V2kF' }],
    gallery: [
      { src: 'class-0', alt: 'Chorcha mobile app showing ICT lesson list', caption: 'Course interface · lesson list' },
      { src: 'class-1', alt: 'Chorcha mobile app showing more ICT lessons', caption: 'Course interface · more lessons' },
      { src: 'class-2', alt: 'Chorcha mobile app showing an ICT lesson screen', caption: 'Class interface · lesson detail' },
      { src: 'class-3', alt: 'Chorcha mobile app showing a second ICT lesson screen', caption: 'Class interface · lesson detail' },
      { src: 'ict-web', alt: 'Bangla app listing for Web Design and HTML', caption: 'HSC · ওয়েব ডিজাইন ও এইচটিএমএল' },
      { src: 'ict-number', alt: 'Bangla app listing for Number Systems and Digital Devices', caption: 'HSC · সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস' },
      { src: 'ict-ssc-one', alt: 'Bangla SSC ICT listing for chapters one and three', caption: 'SSC 27 · অধ্যায় ১ + ৩' },
      { src: 'ict-ssc-two', alt: 'Bangla SSC ICT listing for computer maintenance and cybersecurity', caption: 'SSC 27 · কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা' },
    ],
  },
  {
    slug: 'nagarbondhu-ai', title: 'NagarBondhu AI',
    short: 'A Bengali-language civic reporting prototype for Rajshahi.',
    category: 'planning', label: 'Civic technology / Independent prototype',
    hero: 'nagar-0', heroAlt: 'NagarBondhu mobile app prototype home screen',
    role: 'Co-builder with Tashika Hossain',
    overview: 'Residents can report neighborhood issues in Bengali using text, voice and a photo, view issues on a map, and follow their status. The prototype also explores ward scorecards, civic information, an AI assistant and a planning workspace.',
    evidence: [
      'The reporting → map → tracking sequence is shown with screenshots captured from the public prototype on 15 November 2026. They represent the public interface at that time, not a promise of live service availability.',
      'This is an independent prototype, not a municipal service or Chorcha project.',
      'The supplied 90-second explanation video shows the report flow and additional prototype capabilities.'
    ],
    credits: 'Co-builders: Fahad MD Akramul Islam and Tashika Hossain.',
    links: [
      { label: 'Try the demo', url: 'https://nagarbondhu-api.onrender.com/' },
      { label: 'Watch the project story', url: 'https://www.facebook.com/reel/39144074205235936' }
    ],
    gallery: [
      { src: 'nagar-0', alt: 'NagarBondhu mobile homepage', caption: '01 / Home' },
      { src: 'nagar-1', alt: 'NagarBondhu feature and information screen', caption: '02 / Features' },
      { src: 'nagar-2', alt: 'NagarBondhu civic information screen', caption: '03 / Civic information' },
      { src: 'nagar-3', alt: 'NagarBondhu mobile map and issue markers', caption: '04 / Map' },
      { src: 'nagar-4', alt: 'NagarBondhu tracking screen', caption: '05 / Track' },
      { src: 'nagar-5', alt: 'NagarBondhu issue reporting screen', caption: '06 / Report' },
      { src: 'nagar-6', alt: 'NagarBondhu assistant interface', caption: '07 / Assistant' },
      { src: 'nagar-7', alt: 'NagarBondhu ward scorecard', caption: '08 / Ward view' },
      { src: 'nagar-8', alt: 'NagarBondhu planning workspace', caption: '09 / Planning workspace' },
      { src: 'nagar-report', alt: 'NagarBondhu Bengali issue reporting form in the desktop prototype', caption: '10 / Desktop report' },
      { src: 'nagar-map', alt: 'NagarBondhu Rajshahi issue map in the desktop prototype', caption: '11 / Desktop map' },
      { src: 'nagar-track', alt: 'NagarBondhu report tracking form in the desktop prototype', caption: '12 / Desktop tracking' },
    ],
  },
  {
    slug: 'when-farmland-stays-underwater', title: 'When Farmland Stays Underwater',
    short: 'Recurring November water on cropland, from Bangladesh to Manda.',
    category: 'planning', label: 'GIS / Solo project',
    hero: 'map-board', heroAlt: 'Full GIS map board of recurring November water on cropland in Bangladesh, Naogaon and Manda',
    role: 'Map and analysis by Fahad MD Akramul Islam',
    overview: 'I mapped where water appeared in at least 25% of valid November observations, then compared those areas with 2021 cropland. The map moves from Bangladesh by district to Naogaon by upazila and a closer Manda view.',
    evidence: [
      'The source map lists 19,485 ha of eligible cropland with recurring November water in Naogaon, including 4,751 ha in Manda. These figures refer to the map’s defined overlap, not all flooded land.',
      'Water observations: 1984–2021. Eligible cropland has at least five valid Novembers and excludes permanent water. A pixel counts at the 25% threshold. Area uses WGS84 ellipsoidal pixel hectares.',
      'Data: JRC Global Surface Water v1.4, ESA WorldCover 2021 v200, and BAMIS district and upazila boundaries. The map records possible locations for field checks, not a diagnosis of crop loss.'
    ],
    credits: 'Map and analysis: Fahad MD Akramul Islam. Data attribution is printed on the map board.',
  },
  {
    slug: 'rajshahi-services-survey', title: 'Rajshahi municipal services survey',
    short: 'A 100-person survey across five areas and five services.',
    category: 'planning', label: 'URP 2110 / Social & Physical Surveys',
    role: 'Research team member',
    overview: 'Our team surveyed 100 respondents across five areas to compare access to and satisfaction with five municipal services.',
    evidence: [
      'In the surveyed sample, waste management had the highest mean satisfaction score and drainage the lowest. This describes the sample; it is not a citywide estimate.',
      'The underlying report was not supplied, so exact chart values and the document are not published. Submitted 10 October 2026.'
    ],
    credits: 'Research team: Farhat Afrin, Tashika Hossain, Sabbir Hossain and Fahad MD Akramul Islam.',
  },
  {
    slug: 'flyover-paradox', title: 'The Flyover Paradox: Development or Illusion?',
    short: 'A short film asking what development means when a city builds a flyover.',
    category: 'studio', label: 'URP 1234 / Communication & Presentation Technique Studio',
    role: 'Script and post-production',
    overview: 'The documentary questions how a flyover is framed as development and what the city gains or overlooks.',
    evidence: ['The linked public film is the project record. The supplied brief conflicts on semester, so the course name and code identify the work.'],
    credits: 'Scripting and post-production: Fahad MD Akramul Islam. Narration: Tashika Fairuz. B-roll and pre-production: Sabbir Hossain and Farhat Afrin Dina.',
    links: [{ label: 'Watch the documentary', url: 'https://www.facebook.com/reel/2140246113432300' }],
  },
  {
    slug: 'green-city-dust-crisis', title: 'From Green City to Dust Crisis',
    short: 'A group poster on air pollution and possible responses in Rajshahi.',
    category: 'studio', label: 'URP 1234 / Group poster',
    role: 'Group project contributor',
    overview: 'Our poster considers air pollution sources in Rajshahi, including brick kilns and unregulated construction, and presents possible responses.',
    evidence: ['The poster is linked as a public Google Drive document. Its source file was not present locally.'],
    credits: 'Poster design: Sabbir Hossain. Group: Sabbir Hossain, Tashika Hossain, Farhat Afrin and Fahad MD Akramul Islam.',
    links: [{ label: 'Open the poster', url: 'https://drive.google.com/file/d/1ST2meNY4YpGpqAeWz4az4K_ZFpOCBizr/view' }],
  },
  {
    slug: 'ethereal-pavilion', title: 'The Ethereal Pavilion',
    short: 'From roof sketches to a waterside scale model.',
    category: 'studio', label: 'URP 1116 / Basic Design',
    hero: 'pavilion-hero', heroAlt: 'Scale model of a pavilion in a waterside landscape',
    role: 'Design and model team member',
    overview: 'Our five-person studio team designed and built a scale model of a pavilion concept for Croatia’s Plitvice Lakes landscape. Roof planes and a wooden footbridge shape the approach over water.',
    evidence: ['Sketches, site views, construction photographs, and the finished model show the development of the idea.'],
    credits: 'Design and model team: Tashika Hossain, Farhat Afrin, Sabbir Hossain, BM Shafi Sahal Mokaddas and Fahad MD Akramul Islam.',
    gallery: [
      { src: 'pavilion-sketch', alt: 'Concept sketches of pavilion roof and site', caption: '01 / Concept sketches' },
      { src: 'pavilion-top', alt: 'Overhead view of the pavilion site model', caption: '02 / Site layout' },
      { src: 'pavilion-studio', alt: 'Pavilion model under construction in studio', caption: '03 / Model making' },
      { src: 'pavilion-detail', alt: 'Folded white roof panels on wood supports', caption: '04 / Roof detail' },
      { src: 'pavilion-water', alt: 'Wooden landing and footpath beside mirrored model water', caption: '05 / Waterside approach' },
    ],
  },
];

export const categories = [
  ['all', 'All work'], ['community', 'Community'], ['teaching', 'Teaching'],
  ['planning', 'Planning / GIS'], ['studio', 'Studio']
] as const;
