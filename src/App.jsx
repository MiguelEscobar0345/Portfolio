// src/App.jsx
import './index.css';

export default function App() {
  const skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'ReactJS', 'GitHub','Team Work', 'Fast Learning', 'SCRUM', 'Responsive Design','Kind', 'Emotional Intelligence'];
  const languages = ['Spanish:Native', 'English:B2'];
  return (
    <div>
      {/* HEADER */}
      <header style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: 'url("../assets/IMG-20231103-WA0023_Original.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '1rem',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <img 
            src="../assets/perfil2.jpg"
            alt="Foto personal"
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',  
              objectFit: 'cover',
              border: '4px solid #a3e635',
              transform: 'scale(1.1)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          />
          <div>
            <h1 style={{ margin: 0, fontSize: '2rem', color: '#ffffff' }}>Miguel Escobar Pereira</h1>
            <p style={{ margin: '0.5rem 0 0' }}>Web UI Developer Junior</p>
            <p style={{ margin: 0 }}>ReactJS · HTML · CSS · JavaScript</p>
          </div>
        </div>
      </header>

      {/* SOBRE MÍ */}
      <section style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>About me</h2>
        <p>
          <b>Miguel</b> is a Web Ui dev with a background in Software Analysis and Development from SENA. He has 
          completed a year-long technology program and has undergone intensive training at Globant, also as a 
          web ui developer at Globant for 6 (six) months in Web UI development using HTML, CSS, JavaScript, and React. 
          <b> Miguel</b> is recognized not only for his technical skills but also for his dedication, collaboration, and 
          proactive attitude. His excellent communication skills and strong work ethic make him a valuable team 
          member ready to take on front-end development challenges. 
        </p>
        <p>
         I did my internship at Globant as a Collage Trainee (April - October 2024)
        and later i was hired as a Junior Web UI Developer from November 2024 to May 2025, where i worked on several real projects in the business enviroment.
        </p>
      </section>

      {/* STACK / TECNOLOGÍAS */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>Proficient in</h2>
        
        <ul style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          listStyle: 'none',
          padding: 0
        }}>
          {skills.map((skill) => (
            <li
              key={skill}
              className="skill-item"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#a3e635',
                borderRadius: '999px',
                color: '#fff',
                fontWeight: 'bold',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default'
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* IDIOMAS */}
      <section style={{  backgroundColor: '#f1f5f9', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>Languages</h2>
        <ul style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          listStyle: 'none',
          padding: 0
        }}>
          {languages.map((idioma) => (
            <li
              key={idioma}
              className="idioma-item"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#a3e635',
                borderRadius: '999px',
                color: '#fff',
                fontWeight: 'bold',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default'
              }}
            >
              {idioma}
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCIA */}
      <section className='experience-item' style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>Career History </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><h2> Globant - Web UI Developer Junior </h2></li>
          <p>● Participation in several client projects with different approach and needs in each one.</p>
          <p>● Excellent teamwork with different work teams and process resolution. </p>
          <p>● Processes with React and different technologies.  </p>
          <p>November 2024 - May 2025</p>
          <location>Medellin - Antioquia</location>
          <li><h2> Globant - Contact-App Project </h2></li>
          <p>● Implemented reusable and optimized components for an improved user experience.</p>
          <p>● Configuredand managed the Redux store for efficient global state handling.</p>
          <p>● Implemented create, read and delete functionalities, ensuring consistent and efficient data flow 
            in the application. </p>
          <p>April 2024 - October 2024</p>
          <location>Medellin - Antioquia</location>
        </ul>
      </section>

      {/* EDUCACIÓN */}
      <section style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>Education</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><h2>Software Analysis and Development</h2></li>
          <p>Servicio Nacional de Aprendizaje (SENA) - Medellin - Antioquia</p>
          <p>Agust 2022 - April 2024</p>
          <li><h2>Globant - Web UI Developer Training (Collage Trainee)</h2></li>
          <p>Globant - Medellin - Antioquia</p>
          <p>April 2024 - October 2024</p>
        </ul>
      </section>
      
      {/* Projects */}
      <section style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>Projects</h2>
        <p>I don't have any published personal projects yet, but i'm working on some to share them, for during my time at Globant i participated in business projects under NDA.</p>
      </section>

      {/* CONTACTO */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#166534' }}>Contact</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="https://mail.google.com/mail/u/0/?hl=es#inbox?compose=CllgCJvqsVCxBJkstbNqzHXQngVxkqQgzPtjTxsRvtddTjNbbbmmKvXLtNphTJddfBvdxVlRnxV" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Gmail</a></li>
          <li><a href="https://github.com/MiguelEscobar0345" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/miguel-eduardo-escobar-pereira-6b5629254/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Linkedin</a></li>
        </ul>
      </section>
    </div>
  );
}
