import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Python',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'TypeScript',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'SQL',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'NoSQL',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'Next.js',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Express.js',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Git',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'GitHub Actions',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Jupyter Notebooks',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Material-UI',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Pandas',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'NumPy',
    desc: 'User Interface'
  },  
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Matplotlib',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Plotly',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Scikit-learn',
    desc: 'User Interface'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Technologies & Skills
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Here are some of the languages, frameworks, and tools I use!
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill