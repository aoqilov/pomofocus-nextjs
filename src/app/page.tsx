import Navbar from "@/components/navbar";
import Notes from "@/components/notes";
import Timer from "@/components/timer";

const HomePage = () => {
  return (
    <div>
      <div className="wrapper__bgcolor" style={{ background: "#ba4949" }}>
        <Navbar />
        <Timer />
        <Notes />
      </div>
    </div>
  );
};

export default HomePage;
