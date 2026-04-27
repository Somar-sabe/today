import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = [/* paste your `projects` array here or import it if external */];

const SingleProject = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className={styles.projectDetails}>
      <img src={project.image} alt={project.title} className={styles.mainImage} />
      <h1>{project.title}</h1>
      <p><strong>Location:</strong> {project.location}</p>
      <p><strong>Price:</strong> {project.price}</p>
      <p><strong>Bedrooms:</strong> {project.bedrooms}</p>
      <p><strong>Delivery:</strong> {project.delivery}</p>
      <p><strong>Sales Start:</strong> {project.salesStart}</p>
      <img src={project.developerLogo} alt="Developer Logo" className={styles.logo} />
    </div>
  );
};

export default SingleProject;
