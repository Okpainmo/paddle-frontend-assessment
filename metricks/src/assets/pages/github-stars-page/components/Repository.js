import React from 'react';
import avatar from '../../../images/dots.png';

function Repository() {
  return (
    <section className="repo-wrapper">
      <h1 className="mb-4">Repositories</h1>
      <div className="repo-detail d-flex align-items-center">
        <div className="repo-avatar">
          <img src={avatar} alt="repository avatar" />
        </div>
        <div
          className="more-repo-details d-flex flex-column ms-5"
          style={{ fontSize: '14px' }}
        >
          <h5 className="repo-name fw-bold">Lorem, ipsum dolor.</h5>
          <p className="repo-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            atque molestias sint quod et? Incidunt fugiat nesciunt ex vitae
            tenetur!
          </p>
          <section className="stats d-flex gap-4">
            <div className="stars-count fw-bold">20</div>
            <div className="issues-count fw-bold">500</div>
            <div className="submission-interval">
              submitted 30 days ago by repo owner
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Repository;
