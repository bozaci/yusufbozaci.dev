export interface IWorks {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  liveURL?: string;
  isFeatured?: boolean;
  tags: Array<{ name: string }>;
  labels: Array<{ name: string }>;
  pages: Array<{ image: string; title: string }>;
}

const works: IWorks[] = [
  {
    id: 1,
    title: 'BHT Clinic',
    slug: 'bht-clinic',
    description:
      'BHT Clinic, Bahat Health Group brought its quarter-century of experience and experience in the health sector under the BHT CLINIC brand in 2019 and established Istanbul Tema Hospital.<br>Within the body of Istanbul Tema Hospital, the first hospital of the BHT CLINIC brand; Sultangazi Bahat Hospital is the newest breakthrough of Bahat Health Group in the sector, which includes Private İkitelli Bahat Hospital and Yeni Yüzyıl University Gaziosmanpaşa Hospital.<br>The part I undertook in the project was to develop the <span class="u-text-primary">front-end</span> side. A very enjoyable, high quality and cleanly coded project has emerged.',
    shortDescription:
      'Bahat Health Group brought its quarter-century of experience and experience in the health sector.',
    thumbnail: 'bht-clinic-thumbnail.jpg',
    liveURL: 'https://bhtclinic.com.tr',
    isFeatured: true,
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Javascript',
      },
    ],
    pages: [
      {
        image: 'bht-clinic-homepage.png',
        title: 'Homepage',
      },
      {
        image: 'bht-clinic-corporate-page.jpg',
        title: 'Corporate Page',
      },
      {
        image: 'bht-clinic-contracted-institutions-page.jpg',
        title: 'Contracted Institutions Page',
      },
      {
        image: 'bht-clinic-doctors-page.jpg',
        title: 'Doctors Page',
      },
      {
        image: 'bht-clinic-doctors-detail-page.jpg',
        title: 'Doctors Detail Page',
      },
      {
        image: 'bht-clinic-medical-units-page.jpg',
        title: 'Medical Units Page',
      },
      {
        image: 'bht-clinic-health-guide-page.jpg',
        title: 'Health Guide Page',
      },
      {
        image: 'bht-clinic-health-guide-detail-page.jpg',
        title: 'Health Guide Detail Page',
      },
      {
        image: 'bht-clinic-contact-page.jpg',
        title: 'Contact Page',
      },
      {
        image: 'bht-clinic-hr-page.jpg',
        title: 'HR Page',
      },
      {
        image: 'bht-clinic-suggestion-comment-page.jpg',
        title: 'Suggestion Comment Page',
      },
      {
        image: 'bht-clinic-management-chart-page.jpg',
        title: 'Management Chart Page',
      },
      {
        image: 'bht-clinic-quality-management-system-page.jpg',
        title: 'Quality Management System Page',
      },
    ],
  },
  {
    id: 2,
    title: 'Cihangir Okulları',
    slug: 'cihangir-okullari',
    description:
      "Established in 1996 by Business Person and Education Volunteer Mr. Ergül CİHANGİR, Cihangir Schools is an outstanding educational institution that touched the lives of thousands of students and raised today's well-equipped individuals in its Güneşli campus until 2012.<br> Cihangir Schools, which has been continuing its educational activities for 26 years with its priorities, value and the vision of “Raising World Citizens”; Today, it continues its educational journey in five campuses supported by modern infrastructure and equipment.<br> On the European side of Istanbul; Atakent, Büyükçekmece, Bahçeşehir; Cekmekoy on the Anatolian Side of Istanbul and Kayseri in Anatolia are all 21st century campuses at all levels from kindergarten to high school. It is equipped with workshops, classrooms, laboratories and libraries needed for skills.<br>The part I undertook in the project was to develop the <span class='u-text-primary'>front-end</span> and <span class='u-text-primary'>wordpress</span> side. A very enjoyable, high quality and cleanly coded project has emerged.",
    shortDescription:
      "Cihangir Schools is a distinguished educational institution that has touched the lives of thousands of students and trained today's well-equipped individuals in its Güneşli campus until 2012.",
    thumbnail: 'cihangir-okullari-thumbnail.jpg',
    isFeatured: true,
    liveURL: 'https://cihangir.k12.tr',
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'WordPress',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'WordPress',
      },
    ],
    pages: [
      {
        image: 'cihangir-okullari-homepage.jpg',
        title: 'Homepage',
      },
      {
        image: 'cihangir-okullari-about-page.jpg',
        title: 'About Page',
      },
      {
        image: 'cihangir-okullari-chief-executive-chairman-page.jpg',
        title: 'Chief Executive Chairman Page',
      },
      {
        image: 'cihangir-okullari-management-team-page.jpg',
        title: 'Management Team Page',
      },
      {
        image: 'cihangir-okullari-manifesto-page.jpg',
        title: 'Manifesto Page',
      },
      {
        image: 'cihangir-okullari-contracted-institutions-page.jpg',
        title: 'Contracted Institutions Page',
      },
      {
        image: 'cihangir-okullari-human-resources-page.jpg',
        title: 'Human Resources Page',
      },
      {
        image: 'cihangir-okullari-campus-detail-page.jpg',
        title: 'Campus Detail Page',
      },
      {
        image: 'cihangir-okullari-education-page.jpg',
        title: 'Education Page',
      },
      {
        image: 'cihangir-okullari-sep-page.jpg',
        title: 'SEP Page',
      },
      {
        image: 'cihangir-okullari-betep-page.jpg',
        title: 'BETEP Page',
      },
      {
        image: 'cihangir-okullari-kep-page.jpg',
        title: 'KEP Page',
      },
      {
        image: 'cihangir-okullari-foreign-language-page.jpg',
        title: 'Foreign Language Page',
      },
      {
        image: 'cihangir-okullari-guidance-page.jpg',
        title: 'Guidance Page',
      },
      {
        image: 'cihangir-okullari-social-responsibility-page.jpg',
        title: 'Social Responsibility Page',
      },
      {
        image: 'cihangir-okullari-academic-projects-page.jpg',
        title: 'Academic Projects Page',
      },
      {
        image: 'cihangir-okullari-digital-projects-page.jpg',
        title: 'Digital Projects Page',
      },
      {
        image: 'cihangir-okullari-academic-achievements-page.jpg',
        title: 'Academic Achievements Page',
      },
      {
        image: 'cihangir-okullari-sports-achievements-page.jpg',
        title: 'Sports Achievements Page',
      },
      {
        image: 'cihangir-okullari-artistics-achievements-page.jpg',
        title: 'Artistic Achievements Page',
      },
      {
        image: 'cihangir-okullari-project-and-achievements-detail-page.jpg',
        title: 'Projects and Achievements Detail Page',
      },
      {
        image: 'cihangir-okullari-ap-page.jpg',
        title: 'AP Page',
      },
      {
        image: 'cihangir-okullari-beils-page.jpg',
        title: 'BEILS Page',
      },
      {
        image: 'cihangir-okullari-contact-page.jpg',
        title: 'Contact Page',
      },
      {
        image: 'cihangir-okullari-contact-us-page.jpg',
        title: 'Contact Us Page',
      },
      {
        image: 'cihangir-okullari-the-press-detail-page.jpg',
        title: 'The Press Detail Page',
      },
      {
        image: 'cihangir-okullari-ataturk-corner-education-life-page.jpg',
        title: 'Ataturk Corner: Education Life Page',
      },
      {
        image: 'cihangir-okullari-ataturk-corner-military-life-page.jpg',
        title: 'Ataturk Corner: Military Life Page',
      },
      {
        image: 'cihangir-okullari-workshops-page.jpg',
        title: 'Workshops Page',
      },
      {
        image: 'cihangir-okullari-blog-page.jpg',
        title: 'Blog Page',
      },
      {
        image: 'cihangir-okullari-blog-detail-page.jpg',
        title: 'Blog Detail Page',
      },
    ],
  },
  {
    id: 3,
    title: 'Sonat Co',
    slug: 'sonat-co',
    description:
      'Sonat Co is a type of agency that helps businesses grow using modern marketing tools and technology. It works to meet the marketing needs of individuals and companies in an economical and easy way.<br>Sonat Digital Marketing Agency was founded in 2016, aiming to bring a fresh approach to digital marketing in London and the UK. What we do is, collect, analyse and apply business data to digital marketing strategies and continue to support you during and after the process. Our founders have embraced a result-driven approach to tackle challenges faced by each business accordingly.<br>The part I undertook in the project was to develop the <span class="u-text-primary">front-end</span> and <span class="u-text-primary">wordpress</span> side. A very enjoyable, high quality and cleanly coded project has emerged.',
    shortDescription:
      'Sonat Co is a type of agency that helps businesses grow using modern marketing tools and technology. It works to meet the marketing needs of individuals and companies in an economical and easy way.',
    thumbnail: 'sonat-co-thumbnail.jpg',
    isFeatured: true,
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'WordPress',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'WordPress',
      },
    ],
    pages: [
      {
        image: 'sonat-co-homepage.jpg',
        title: 'Homepage',
      },
      {
        image: 'sonat-co-contact-us-page.jpg',
        title: 'Contact Us Page',
      },
      {
        image: 'sonat-co-about-us-page.jpg',
        title: 'About Us Page',
      },
      {
        image: 'sonat-co-services-page.jpg',
        title: 'Services Page',
      },
      {
        image: 'sonat-co-services-detail-page.jpg',
        title: 'Services Detail Page',
      },
      {
        image: 'sonat-co-pricing-page.jpg',
        title: 'Pricing Page',
      },
      {
        image: 'sonat-co-works-page.jpg',
        title: 'Works Page',
      },
      {
        image: 'sonat-co-works-detail-page.jpg',
        title: 'Works Detail Page',
      },
      {
        image: 'sonat-co-blog-page.jpg',
        title: 'Blog Page',
      },
      {
        image: 'sonat-co-blog-detail-page.jpg',
        title: 'Blog Detail Page',
      },
      {
        image: 'sonat-co-legal-page.jpg',
        title: 'Legal Page',
      },
      {
        image: 'sonat-co-404-page.jpg',
        title: '404 Page',
      },
    ],
  },
  {
    id: 4,
    title: "Chat's10",
    slug: 'chats-10',
    description:
      'Chat\'s10 is a professional customer service platform that delights your customers and affects your sales.<br>The part I undertook in the project was to develop the <span class="u-text-primary">front-end</span> side. A very enjoyable, high quality and cleanly coded project has emerged.',
    shortDescription:
      "Chat's10 is a professional customer service platform that delights your customers and affects your sales.",
    thumbnail: 'chats-10-thumbnail.jpg',
    isFeatured: true,
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'Nuxt.js',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'SASS',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'Nuxt.js',
      },
    ],
    pages: [
      {
        image: 'chats-10-homepage.jpg',
        title: 'Homepage',
      },
      {
        image: 'chats-10-login-page.jpg',
        title: 'Login Page',
      },
      {
        image: 'chats-10-register-page.jpg',
        title: 'Register Page',
      },
      {
        image: 'chats-10-forgot-password-page.jpg',
        title: 'Forgot Password Page',
      },
      {
        image: 'chats-10-setup-page.jpg',
        title: 'Setup Page',
      },
      {
        image: 'chats-10-dashboard-page.jpg',
        title: 'Dashboard',
      },
      {
        image: 'chats-10-chat-page.jpg',
        title: 'Dashboard: Chat',
      },
      {
        image: 'chats-10-chat-detail-page.jpg',
        title: 'Dashboard: Chat Detail',
      },
      {
        image: 'chats-10-traffic-page.jpg',
        title: 'Dashboard: Traffic',
      },
      {
        image: 'chats-10-archive-chat-page.jpg',
        title: 'Dashboard: Archive Chat',
      },
      {
        image: 'chats-10-archive-chat-detail-page.jpg',
        title: 'Dashboard: Archive Chat Detail',
      },
      {
        image: 'chats-10-ticket-page.jpg',
        title: 'Dashboard: Ticket',
      },
      {
        image: 'chats-10-ticket-detail-page.jpg',
        title: 'Dashboard: Ticket Detail',
      },
      {
        image: 'chats-10-representative-page.jpg',
        title: 'Dashboard: Representative',
      },
      {
        image: 'chats-10-reports-page.jpg',
        title: 'Dashboard: Reports',
      },
      {
        image: 'chats-10-settings-page.jpg',
        title: 'Dashboard: Settings',
      },
      {
        image: 'chats-10-settings-customize-page.jpg',
        title: 'Dashboard: Settings Customize',
      },
      {
        image: 'chats-10-update-profile-page.jpg',
        title: 'Dashboard: Update Profile',
      },
      {
        image: 'chats-10-chat-box.jpg',
        title: 'Chat Box',
      },
      {
        image: 'chats-10-chat-box-bubble.jpg',
        title: 'Chat Box Bubble',
      },
    ],
  },
  {
    id: 5,
    title: 'Salore Mobilya',
    slug: 'salore-mobilya',
    description:
      'Salore Furniture, combining 30 years of experience in armchair production with a constantly up-to-date design approach, promises comfort, elegance and quality for every style in its 2022 collection.<br>Combining 30 years of experience in armchair production with a constantly up-to-date design approach, Salore promises comfort, elegance and quality for every style in its 2022 collection.<br>The part I undertook in the project was to develop the <span class="u-text-primary">front-end</span> side. A very enjoyable, high quality and cleanly coded project has emerged.',
    shortDescription:
      'Salore Furniture, combining 30 years of experience in armchair production with a constantly up-to-date design approach, promises comfort, elegance and quality for every style in its 2022 collection.',
    thumbnail: 'salore-mobilya-thumbnail.jpg',
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'SASS',
      },
      {
        name: 'Javascript',
      },
    ],
    pages: [
      {
        image: 'salore-mobilya-homepage.jpg',
        title: 'Homepage',
      },
      {
        image: 'salore-mobilya-products-page.jpg',
        title: 'Products Page',
      },
      {
        image: 'salore-mobilya-products-detail-page.jpg',
        title: 'Products Detail Page',
      },
      {
        image: 'salore-mobilya-blog-page.jpg',
        title: 'Blog Page',
      },
      {
        image: 'salore-mobilya-contact-page.jpg',
        title: 'Contact Page',
      },
      {
        image: 'salore-mobilya-default-page.jpg',
        title: 'Default Page',
      },
    ],
  },
  {
    id: 6,
    title: 'Master Chef',
    slug: 'master-chef',
    description:
      'Master Chef is a blockchain based cooking game that provides players with low ROI (Return on Investment) and player friendly tokenomics.<br>The part I undertook in the project was to develop the <span class="u-text-primary">front-end</span> side. A very enjoyable, high quality and cleanly coded project has emerged.',
    shortDescription:
      'Master Chef is a blockchain based cooking game that provides players with low ROI (Return on Investment) and player friendly tokenomics.',
    thumbnail: 'master-chef-thumbnail.jpg',
    liveURL: 'https://master-chef.io',
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'Nuxt.js',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'Nuxt.js',
      },
    ],
    pages: [
      {
        image: 'master-chef-homepage.jpg',
        title: 'Homepage',
      },
    ],
  },
  {
    id: 7,
    title: 'Reydeko',
    slug: 'reydeko',
    description:
      'As REYDEKO Carpet, we bring the concepts of communication and service, which have been put into the background and become robotic in today\'s rapidly digitalizing world, to the forefront with our customer satisfaction-oriented approach.<br> In this enjoyable adventure of REYDEKO Carpet, we are constantly developing, transforming and growing by listening to criticism, praise and ideas from you, and by preserving and improving the features that make REYDEKO Carpet different and you like in order to provide you with a better and faster service.<br>The part I undertook in the project was to develop the <span class="u-text-primary">front-end</span> side. A very enjoyable, high quality and cleanly coded project has emerged.',
    shortDescription:
      "As REYDEKO Carpet, we bring the concepts of communication and service, which have been put into the background and become robotic in today's rapidly digitalizing world, to the forefront with our customer satisfaction-oriented approach.",
    thumbnail: 'reydeko-thumbnail.jpg',
    tags: [
      {
        name: 'Frontend',
      },
      {
        name: 'Development',
      },
    ],
    labels: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'SASS',
      },
      {
        name: 'Javascript',
      },
    ],
    pages: [
      {
        image: 'reydeko-homepage.jpg',
        title: 'Homepage',
      },
      {
        image: 'reydeko-category-page.jpg',
        title: 'Category Page',
      },
      {
        image: 'reydeko-product-inner-page.jpg',
        title: 'Product Inner Page',
      },
    ],
  },
];

export default works;
