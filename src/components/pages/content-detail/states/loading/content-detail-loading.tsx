import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContentDetailLoading = () => {
  return (
    <div className="content-detail-loading">
      <div className="container">
        <Skeleton width="75%" height={28} style={{ marginBottom: 5 }} />
        <Skeleton count={3} style={{ marginTop: 5 }} />
        <Skeleton height={120} style={{ marginTop: 25 }} />
        
        <div style={{ marginTop: 60 }}>
          <Skeleton count={20} style={{ marginBottom: 10 }} />
        </div>
      </div>
    </div>
  );
};

export default ContentDetailLoading;
