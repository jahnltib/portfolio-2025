import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Product Review Aggregator',
    tags: ['React', 'Express.Js', 'TypeScript', 'MongoDB', 'Puppeteer', 'Gemini API', 'YouTube Data API'],
    projectLink: 'https://github.com/jahnltib/reviewpal.me'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'AI Flashcard Platform',
    tags: ['Next.Js', 'JavaScript', 'Firebase', 'Material-UI', 'Clerk', 'OpenAI API'],
    projectLink: 'https://studyzap.vercel.app'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'Self-Hosted LinkTree Clone',
    tags: ['Next.Js', 'TailwindCSS', 'Supabase'],
    projectLink: 'https://github.com/jahnltib/nextjs-linktree-clone'
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'NBA Trivia Website',
    tags: ['React', 'Bootstrap', 'JavaScript'],
    projectLink: 'https://nbatrivia.netlify.app'
  },
  {
    imgSrc: '/images/project-5.png',
    title: 'Real Estate Page',
    tags: ['HTML/CSS', 'Bootstrap'],
    projectLink: 'https://github.com/jahnltib/bootstrap-real-estate-website'
  },
  {
    imgSrc: '/images/project-6.png',
    title: 'Predicting Tobacco Use in the Youth',
    tags: ['Numpy', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
    projectLink: 'https://github.com/jahnltib/predicting-tobacco-use-in-youth'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">
      <div className="flex justify-center md:justify-start">
      <h2 className="headline-2 mb-4 reveal-up">
          My Portfolio
        </h2>
      </div>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work