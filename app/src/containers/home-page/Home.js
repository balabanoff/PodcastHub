import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Get Started</h2>
      <p>review the <Link to="/music">music app</Link></p>
    </div>
  );
};

export default HomePage;
