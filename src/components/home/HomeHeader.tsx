function HomeHeader() {
  return (
    <div className="relative mt-6">
      <img
        src="/static/images/bridge-dessau.jpeg"
        alt="Bridge in Dessau/Germany"
        className="w-[80%] h-[633px] border-4-white"
      />
      <div className="absolute top-[50%] right-0 w-[30%] border-4-white">
        <h4 className="bg-green text-white text-2xl text-center py-4 px-5 font-bold">
          We are the right partner for you! We offer you the best quality parts
          at a fair price!
        </h4>
      </div>
    </div>
  );
}

export default HomeHeader;
