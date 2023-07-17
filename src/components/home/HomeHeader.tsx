function HomeHeader() {
  return (
    <div className="relative">
      <button className="bg-white text-blue absolute top-96 left-96">
        Get in Touch
      </button>
      <img
        src="/static/images/image-home.jpg"
        alt="Bridge in Dessau/Germany"
        className="w-full max-h-[728px] border-4-white  z-0"
      />
    </div>
  );
}

export default HomeHeader;
