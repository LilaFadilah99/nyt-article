const HeroSection = () => {
  return (
    <div className="relative h-[80vh] md:h-[70vh] lg:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-hero-pattern rounded-3xl overflow-hidden"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the whole world and enjoy its beauty</h1>
        <p className="text-lg md:text-xl mb-8">Find and write about your experiences around the world.</p>
      </div>
    </div>
  );
};

export default HeroSection;
