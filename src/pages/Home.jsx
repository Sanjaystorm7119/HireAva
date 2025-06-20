import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import Footer from "../components/Footer";
import Hero1 from "../components/Hero1";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero1 />
      <Hero />
      <JobList />
      <Footer />
    </div>
  );
};

export default Home;
