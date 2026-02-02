// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Triesha V H',
    title: 'Student | Christ Uniiversity',
    image: getAsset('"public/images/cute-avocado-in-green-pastel-background-wallpaper-1440x900_4.jpg"'), // Customize or replace with your profile image
    description:
      'Bachelor of Science in Economics with Data Science, 1st year. Bangalore, India.\n' +
      '\n' +
      'Part of 2/9 Coy, Christ University NCC. \n' +
      '\n' +
      'Completed my 10th grade in SKCHEC CBSE, +2 in Christ Junior college (Humanities), and pursuing a BSc degree in Economics with Data Science.\n' +
      '\n' +
      '',
    tagline: 'Still waters run deep.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Triesha V H, Student',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Learn', 'Grow', 'Create', 'Share'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'TVH Blogs',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'CHRIST (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2025-2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['1st year student, completed NCC C Certificate'],
    },
    {
      institution: 'Christ Junior College',
      degree: '2nd PUC, Humanities',
      year: '2023-2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Completed NCC B Certificate'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Volunteering Experience',
      specialization: true,
      file: getAsset('"C:\Users\Lenovo\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\67229472739BA1D83ECC1C8879D50CFE87522F99\transfers\2026-05\volunteer_certs.pdf"'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/triesha-afk',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
