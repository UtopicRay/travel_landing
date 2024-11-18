import Camp from "./Camp";

export default function CampSection() {
  return (
    <section className="2xl:max-container 2xl:padding-container py-10 flex flex-col ">
      <div className="w-full flex flex-row gap-8  overflow-x-auto  h-[320px] lg:h-[400px] xl:h-[640px]">
        <Camp
          backgroundImage="bg-bg-img-1"
          title="La Habana"
          subtitle="la habana"
          peopleJoined={50}
        ></Camp>
        <Camp
          backgroundImage="bg-bg-img-2"
          title="La Habana"
          subtitle="la habana"
          peopleJoined={50}
        ></Camp>
      </div>
      <div className="flexEnd px-6">
        <div className="w-full fade-up mt-12 bg-green-50 lg:max-w-[200px] 2xl:max-w-[734px] p-6 rounded-3xl xl:rounded-5xl lg:mt-[-200px] z-30">
          <h2 className="text-white regular-24 md:regular-32 xl:regular-64">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-16 text-white lg:regular-16 mt-6">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
}
