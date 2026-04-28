const shortBio = 'PhD Student at North Carolina State University'

const name = 'Bigyapti Nepal'

const profilePhoto = '/profile.jpg'

const bio = 'I’m a Ph.D. student in Geospatial Analytics at NC State University, using satellite imagery to detect cyanobacteria in the Albemarle-Pamlico Sound. My research enhances North Carolina’s ability to predict and respond to harmful algal blooms, especially in underserved rural and low-income communities with limited water monitoring. By combining satellite and ground data, I aim to improve early warning systems, protect public health, and guide smarter environmental decisions. My interests focus on applying geospatial tools to environmental and security challenges.'

const researchFocus = 'Geospatial analysis, spatial data science, environmental modeling, and visualization.'

const contacts = [
  {
    label: 'Email',
    value: 'bnepal@ncsu.edu',
    href: 'mailto:bnepal@ncsu.edu',
    icon: (
      <path d="M4 6.75h16a1.25 1.25 0 0 1 1.25 1.25v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Zm0 1.5v.23l8 4.84 8-4.84v-.23H4Zm16 1.98-7.35 4.45a1.25 1.25 0 0 1-1.3 0L4 10.23V16h16v-5.77Z" />
    )
  },
  {
    label: 'GitHub',
    value: '',
    href: 'https://github.com/bigyaptinp',
    icon: (
      <path d="M12 2.75A9.25 9.25 0 0 0 9.08 20.8c.46.08.63-.2.63-.45v-1.58c-2.56.56-3.1-1.08-3.1-1.08-.42-1.07-1.02-1.35-1.02-1.35-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.82 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.58-1.24-2.04-.23-4.18-1.03-4.18-4.56 0-1.01.36-1.84.95-2.49-.1-.23-.41-1.17.09-2.43 0 0 .78-.25 2.55.95a8.86 8.86 0 0 1 4.64 0c1.77-1.2 2.55-.95 2.55-.95.5 1.26.19 2.2.09 2.43.59.65.95 1.48.95 2.49 0 3.54-2.14 4.33-4.19 4.56.33.28.62.84.62 1.69v2.5c0 .25.17.53.63.45A9.25 9.25 0 0 0 12 2.75Z" />
    )
  },
  {
    label: 'LinkedIn',
    value: '',
    href: 'https://www.linkedin.com/in/bigyapti-nepal-545603188/',
    icon: (
      <path d="M6.22 8.53a1.28 1.28 0 1 1 0-2.56 1.28 1.28 0 0 1 0 2.56ZM5.1 9.87h2.24v7.28H5.1V9.87Zm3.65 0H10.9v.99h.03c.3-.56 1.05-1.15 2.16-1.15 2.31 0 2.73 1.52 2.73 3.5v3.94h-2.24v-3.49c0-.83-.01-1.91-1.16-1.91-1.16 0-1.34.91-1.34 1.85v3.55H8.75V9.87Z" />
    )
  },
  {
    label: 'Google Scholar',
    value: '',
    href: 'https://scholar.google.com/citations?user=bjdU4w4AAAAJ&hl=en&oi=ao',
    icon: (
      <path d="m12 4.5 8.5 4.25L12 13 3.5 8.75 12 4.5Zm-5.25 6.07V14c0 .37.2.71.53.88C8.42 15.53 10.12 16 12 16s3.58-.47 4.72-1.12c.33-.17.53-.51.53-.88v-3.43L12 13.18 6.75 10.57Zm12 1.31a.75.75 0 0 1 .75.75v4.12a.75.75 0 0 1-1.5 0v-4.12a.75.75 0 0 1 .75-.75Z" />
    )
  }
]

const publications = [
  {
    title: 'Socio-economic and sharecropping influence on the adoption of practices beneficial to soil quality and nitrogen retention in Nepal',
    venue: 'Published in Farming System',
    year: '2024',
    summary: 'The paper examines the determinants of adopting soil-friendly agricultural practices. It focuses on sharecropping influence on adoption of practices. Being a sharecropper is associated with low adoption of some and high adoption of other practices. Sharecroppers mostly do not adopt minimum tillage and fertiliser incorporation. Contrary to assertions, adoption is more context-dependent than uniformly hindered by contract.',
    recommended_citation: 'Recommended citation: Begho, T., Joshi, R., Nepal, B., Shrestha, R., Sharma, S., & Eory, V. (2024). Socio-economic and sharecropping influence on the adoption of practices beneficial to soil quality and nitrogen retention in Nepal. Farming System, 2(4), 100108. https://doi.org/10.1016/j.farsys.2024.100108',
    paper_link: 'https://doi.org/10.1016/j.farsys.2024.100108'
  },
  {
    title: 'Nepalese farmers’ perceptions of nitrogen inputs and attitudes to soil management: Implications for soil health and environmentally sustainable farming',
    venue: 'Published in Soil Security',
    year: '2023',
    summary: 'Soil health is a concern in Nepal.The prevalence of some local practices is contributory factor to human-induced soil degradation. Farmers’ perceptions and attitudes influence their soil management practices. Education, training and increasing awareness will help farmers manage soils sustainable.Promoting a balanced approach that encompasses financial viability and environmental sustainability is crucial.', 
    recommended_citation: 'Recommended citation: Joshi, R., Nepal, B., Sharma, S., & Begho, T. (2023). Nepalese farmers’ perceptions of nitrogen inputs and attitudes to soil management: Implications for soil health and environmentally sustainable farming. Soil Security, 12, 100102. https://doi.org/10.1016/j.soisec.2023.100102',
    paper_link: 'https://doi.org/10.1016/j.soisec.2023.100102'
  }
]

const presentations = [
  {
    title: '',
    event: '',
    year: ''
  },
  // {
  //   title: 'Geospatial ML for Environmental Risk Analysis',
  //   event: 'NCSU Geospatial Forum',
  //   year: '2025'
  // }
]

const projects = [
  {
    title: '',
    text: ''
  },
  // {
  //   title: 'Satellite Change Explorer',
  //   text: 'A clean module for showcasing reproducible research tools and visual interfaces.'
  // }
]

const visualizations = [
  {
    title: '',
    caption: '',
    image: '',
    project_link: 'https://github.com/bigyaptinp'
  },
  // {
  //   title: 'Interactive maps',
  //   caption: 'A map-based interface for exploring spatial patterns in environmental observations.',
  //   image: '/visualizations/interactive-maps.jpg',
  //   project_link: 'https://github.com/your-username/interactive-maps'
  // },
  // {
  //   title: 'Spatial dashboards',
  //   caption: 'A dashboard view that combines geographic summaries with compact analytical panels.',
  //   image: '/visualizations/spatial-dashboards.jpg',
  //   project_link: 'https://github.com/your-username/spatial-dashboards'
  // },
  // {
  //   title: 'Terrain and land-cover visuals',
  //   caption: 'A terrain-focused figure for presenting land-cover and elevation-driven interpretation.',
  //   image: '/visualizations/terrain-cover.jpg',
  //   project_link: 'https://github.com/your-username/terrain-cover'
  // },
  // {
  //   title: 'Time-series change stories',
  //   caption: 'A temporal visualization for communicating change detection across repeated observations.',
  //   image: '/visualizations/time-series-story.jpg',
  //   project_link: 'https://github.com/your-username/time-series-story'
  // }
]

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  )
}

function ContactIcon({ children }) {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      {children}
    </svg>
  )
}

function App() {
  return (
    <div className="page-shell">
      <div className="grid-orbit grid-orbit-left" />
      <div className="grid-orbit grid-orbit-right" />

      <header className="hero">
        <nav className="topbar">
          <span className="brand">NCSU / Geospatial Analysis</span>
          <div className="nav-links">
            <a href="#publications">Publications</a>
            <a href="#projects">Projects</a>
            <a href="#visualization">Visualization</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-intro">
          <div className="hero-copy">
            <p className="eyebrow">{shortBio}</p>
            <h1>
              {name}
            </h1>
            <p className="lead">
              {bio}
            </p>
          </div>

          <div className="profile-frame">
            <div className="profile-frame-inner">
              <img
                className="profile-photo"
                src={profilePhoto}
                alt={`${name} profile`}
              />
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card panel-card-large">
            <span className="panel-label">Research Focus</span>
            <p>{researchFocus}</p>
          </div>
          <div className="panel-card">
            <span className="panel-label">Current Base</span>
            <p>North Carolina State University</p>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section" id="publications">
          <SectionHeader
            eyebrow="Selected Work"
            title="Publications"
            text="All the academic publications from me."
          />
          <div className="stack-list">
            {publications.map((item) => (
              <article className="stack-card" key={item.title}>
                <div className="stack-meta">
                  <span>{item.venue}</span>
                  <span>{item.year}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p> <b>Recommended Citation:</b> {item.recommended_citation}</p>
                {item.paper_link ? (
                  <a
                    className="paper-link"
                    href={item.paper_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download paper
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="presentations">
          <div className="split-main">
            <SectionHeader
              eyebrow="Academic Presence"
              title="Presentations"
              text="My conference talks, invited lectures, posters, and lab presentations."
            />
            <div className="timeline">
              {presentations.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.event}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* <aside className="split-side">
            <div className="side-note">
              <p className="eyebrow">Visual Cue</p>
              <p>
                The right column mimics a field notebook panel, giving the site a research
                feel without becoming dense or ornamental.
              </p>
            </div>
          </aside> */}
        </section>

        <section className="section" id="projects">
          <SectionHeader
            eyebrow="Applied Work"
            title="Projects"
            text="My projects."
          />
          {/* <div className="project-grid">
            {projects.map((item) => (
              <article className="project-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div> */}
        </section>

        <section className="section visualization-section" id="visualization">
          <SectionHeader
            eyebrow="Spatial Communication"
            title="Visualization"
            text="A single gallery for maps, figures, dashboards, and other research visuals, each linking to the underlying project."
          />
          <div className="viz-grid">
            {visualizations.map((item) => (
              <article className="viz-card" key={item.title}>
                {item.project_link ? (
                  <a
                    className="viz-image-link"
                    href={item.project_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="viz-thumb">
                      <img
                        className="viz-image"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="viz-overlay" />
                      <div className="contour contour-one" />
                      <div className="contour contour-two" />
                      <div className="contour contour-three" />
                    </div>
                  </a>
                ) : (
                  <div className="viz-thumb">
                    <img
                      className="viz-image"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="viz-overlay" />
                    <div className="contour contour-one" />
                    <div className="contour contour-two" />
                    <div className="contour contour-three" />
                  </div>
                )}

                <div className="viz-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                  <span className="viz-path">{item.image}</span>
                  {item.project_link ? (
                    <a
                      className="viz-project-link"
                      href={item.project_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact"
            text="Get in touch with me."
          />
          <div className="contact-grid">
            {contacts.map((item) => (
              <a
                className="contact-card"
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <div className="contact-card-top">
                  <span className="contact-badge">
                    <ContactIcon>{item.icon}</ContactIcon>
                  </span>
                  <span className="contact-label">{item.label}</span>
                </div>
                <p>{item.value}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
