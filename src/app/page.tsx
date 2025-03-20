import Navbar from "@/components/navbar";
import Notes from "@/components/notes";
import Timer from "@/components/timer";

const HomePage = () => {
  return (
    <div>
      <div className="wrapper__bgcolor">
        <Navbar />
        <Timer />
        <Notes />
      </div>
    </div>
  );
};

export default HomePage;
