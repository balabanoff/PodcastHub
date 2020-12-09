import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>review the <Link to="/home">Home page</Link></p>
    </div>
  );
};

export default NotFoundPage;
