import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader disappears after 5 seconds
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-screen bg-ocean text-white p-4">
      <div className="flex flex-col mt-40 ml-10 items-start max-w-2xl space-y-4">
        <h1 className="font-medium text-5xl">
          Our Next <span className="text-yellow-300">Expedition</span>
        </h1>
        <h1>Brings a New Website Ashore</h1>
        <p>We're building a new online home for CeyFish Company.</p>
        <p>
          While we build, our lines stay in the water and deliveries on course.
        </p>
      </div>
      <img
        src="/src/assets/Tuna_Fish.png"
        alt="Large tuna fish swimming in clear blue water with a calm and optimistic atmosphere. The surrounding environment suggests an ocean setting. No visible text in the image."
        className="flex-1 h-screen w-full object-cover"
      />
    </div>
  );
}

export default App;
