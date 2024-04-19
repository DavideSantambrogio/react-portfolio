import React from 'react';

function ProjectsCard({ name, htmlUrl, languages, image, description }) {
  return (
    <div className="card h-100 my-bg-primary">
      <h5 class="card-header card-title">{name}</h5>
      <div className='ratio ratio-16x9'>
        <img src={image} className="object-fit-cover " alt={name} style={{ objectPosition: 'top' }} />
      </div>

      <div className="card-body d-flex flex-column my-bg-primary">

        <p className="card-text flex-grow-1">{description}</p>
        <div className="card-text mb-3"> LINK REPOSITORY:
          <a href={htmlUrl} className="d-inline-block text-truncate"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              maxWidth: '100%'
            }}>{htmlUrl}
          </a>
        </div>
        <strong className="card-text">
          Linguaggi: {languages.join(', ')}
        </strong>
      </div>
    </div>
  );
}

export default ProjectsCard;
