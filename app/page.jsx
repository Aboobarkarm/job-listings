import Hero from '@/components/Hero';
import HomeCards from '@/components/HomeCards';
import RecentJobs from '@/components/RecentJobs';
import ViewAllJobs from '@/components/ViewAllJobs';


export default function Home() {
  
  const title = 'Become a React Dev';
  const description = 'Find The React Job That Fit Your Skill Set';
  
  return (
    <>
    <Hero title={title} description={description} />
    <HomeCards />
    <RecentJobs />
    <ViewAllJobs />
    </>
  );
};
