import type { NextPage } from 'next';
import Sidebar from './components/Sidebar';
import Contents from './components/Contents';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#f5ebe1] flex">
      {/* Sidebar with a 2-second animation delay */}
      <div className="animate-fade-in-slide-up">
        <Sidebar />
      </div>

      {/* Main Content with a 2-second animation delay */}
      <div className="animate-fade-in-slide-up">
        <Contents />
      </div>
    </div>
  );
};

export default Home;
  