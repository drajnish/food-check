const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div className="w-64 h-64 p-3 my-8 mx-2" key={index}>
            <div className="bg-[#efefef] mt-2 w-full h-2/5 animate-shimmer"></div>
            <div className="w-full h-3/5">
              <div className="w-1/2 bg-[#777] h-[15px] mt-2 animate-shimmer"></div>
              <div className="w-full bg-[#777] h-[15px] mt-2 animate-shimmer"></div>
              <div className="w-1/5 bg-[#777] h-[15px] mt-2 animate-shimmer"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
