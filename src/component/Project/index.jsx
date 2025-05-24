

import { useState } from "react";
import "./index.css"

const projects = [
  {
    title: "Khayangan",
    tech: ['React', 'Next JS', 'Tailwind CSS', 'GraphQL'],
    image: 'project-one.png',
    description: "Website manage hypervisor Openstack dan VMWARE.",
    role: "Frontend Developer – membuat layout halaman dan integrasi API menggunakan GraphQL."
  },
  {
    title: "Parisada",
    tech: ['React', 'Next JS', 'Tailwind CSS', 'Rest API'],
    image: 'project-two.png',
    description: "Website Meet Converance untuk Meeting Dengan Fitur Chat Dan Share Screen.",
    role: "Frontend Developer dan Backend – membangun seluruh antarmuka dan membangun sistem agar berjalan dan berintegrasi dengan Frontend"
  },
  {
    title: "Panenin",
    tech: ['React', 'Next JS', 'Tailwind CSS', 'GraphQL'],
    image: 'project-three.png',
    description: "Platform e-commerce hasil pertanian lokal berbasis komunitas.",
    role: "Frontend Developer – menangani tampilan Dashboard Admin untuk manage produk, dan halaman transaksi."
  },
  {
    title: "Sellon Marketplace",
    tech: ['React Native', 'GraphQL'],
    image: 'project-four.png',
    description: "Marketplace mobile app untuk produk lokal dan UMKM.",
    role: "Frontend Developer – mengembangkan antarmuka aplikasi mobile dengan React Native."
  },
  {
    title: "Bda Mencari Bakat – Form Register",
    tech: ['React', 'Next JS', 'Tailwind CSS', 'GraphQL'],
    image: 'project-five.png',
    description: "Formulir pendaftaran event pencarian bakat Form Lomba.",
    role: "Frontend Developer – membangun form multi-step dengan validasi dan integrasi GraphQL."
  },
  {
    title: "Taman Budaya Yogyakarta",
    tech: ['Yii 2', 'MySQL', 'Bootstrap'],
    image: 'project-six.png',
    description: "Situs resmi Taman Budaya Yogyakarta yang menampilkan event dan galeri budaya dan juga sistem Booking tempat.",
    role: "Frontend Developer – mengembagkan fitur Booking Reservasi pada Sistem yang sudah ada berbasis Yii dan Bootstrap."
  },
];

const Card = ({ title, tech = [], image, onClick }) => {
  const background = "/my/project/" + image;
  return (
    <div href="" className="card" style={{
      background: `url(${background}) center center/cover`
    }} onClick={onClick}>
      <div className="project-info">
        <div className="project-bio">
          <h3>{title}</h3>
          <p>
            {tech.map((item, i) =>
              i === tech.length - 1 ? `${item}` : `${item}, `
            )}
          </p>
        </div>

        <div className="project-link">
          <a href="#" target="_blank"><i className="fab fa-github"></i></a>
          <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
        </div>
      </div>
    </div>
  )
}


const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
const [isClosing, setIsClosing] = useState(false);


  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // waktu sesuai durasi animasi keluar
  };

  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>

      <article className="project">
        {projects.map((item, i) => (
          <Card
            onClick={() => handleCardClick(item)}
            image={item.image}
            title={item.title}
            tech={item.tech}
            key={i} />
        ))}
      </article>

      <a href="#projects" className="btn btn-secondary"
      >See More <i className="fas fa-arrow-right"></i></a>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={`modal project-modal ${isClosing ? "modal-exit" : "scale-up-center"}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>

            {/* Gambar Hero */}
            <div className="modal-image-wrapper">
              <img
                src={`/my/project/${selectedProject.image}`}
                alt={selectedProject.title}
                className="modal-image"
              />
            </div>

            {/* Konten Info */}
            <div className="modal-content">
              <h3 className="modal-title">{selectedProject.title}</h3>

              <p className="modal-description">{selectedProject.description}</p>

              <p className="modal-role"><strong>Peran:</strong> {selectedProject.role}</p>

              <div className="modal-tech">
                <strong>Teknologi Digunakan:</strong>
                <ul className="tech-list">
                  {selectedProject.tech.map((tech, index) => (
                    <li key={index} className="tech-badge">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}


export default Project