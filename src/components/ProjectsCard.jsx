import React from 'react';

function ProjectsCard({ name, htmlUrl, languages, image, description }) {
  return (
    <div className="card h-100">
      <div className='ratio ratio-16x9'>
        <img 
          src={image} 
          className="card-img-top object-fit-cover rounded" 
          alt={name} 
          style={{ objectPosition: 'top' }} 
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{name}</h4>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="card-text">
          LINK REPOSITORY: 
          <a 
            href={htmlUrl} 
            className="d-inline-block text-truncate"
            style={{ 
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              maxWidth: '100%'
            }}
          >
            {htmlUrl}
          </a>
        </div>
        <p className="card-text">
          Languages: {languages.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
