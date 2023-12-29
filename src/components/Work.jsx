import projectsData from "./projectsData";
import CardProject from "./CardProject";

export default function Work() {
  const cardProjects = projectsData.map(card => {
    return  <CardProject key={card.id} {...card} />
})
  return (
    <section id="about" className="container mx-auto">
      <div className="relative ml-60 pl-10 left-Line h-full circ-leline">
        <h1 className="text-gray-500 font-bold text-lg mb-10">
          <span className="text-white">Work</span> /&gt;
        </h1>
        <div className="relative left-[-100px] flex flex-row flex-wrap">
          {cardProjects}
        </div>
      </div>
    </section>
  );
}
