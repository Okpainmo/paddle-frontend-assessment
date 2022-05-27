import React from 'react';
// import avatar from '../../../images/dots.png';s

function Repository({ repository }) {
  console.log(repository);

  return (
    <>
      {repository.items.map(function (eachItem) {
        const { id, owner, description, stargazers_count, open_issues_count } =
          eachItem;
        return (
          <div key={id} className="mb-5">
            <div className="repo-detail d-flex align-items-center">
              <div className="repo-avatar">
                <img src={owner.avatar_url} alt="repository avatar" />
              </div>
              <div
                className="more-repo-details d-flex flex-column ms-5"
                style={{ fontSize: '14px' }}
              >
                <h5 className="repo-name fw-bold">{owner.login}</h5>
                <p className="repo-description">{description}</p>
                <section className="stats d-flex gap-4 align-items-center">
                  <div className="stars-count fw-bold">{stargazers_count}</div>
                  <div className="issues-count fw-bold">
                    {open_issues_count}
                  </div>
                  <div className="submission-interval">
                    submitted 30 days ago by{' '}
                    <span className="fw-bold">{owner.login}</span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Repository;
