import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectDetailLoading = () => {
  return (
    <div className="project-detail-loading">
      <div className="container">
        <Skeleton height={225} />
        <Skeleton width="75%" height={28} style={{ marginTop: 24 }} />
        <Skeleton count={2.5} style={{ marginTop: 5 }} />
        <Skeleton width="50%" height={28} style={{ marginTop: 60 }} />
        <Skeleton count={15} style={{ marginTop: 5 }} />
      </div>
    </div>
  );
};

export default ProjectDetailLoading;
