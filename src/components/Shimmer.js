const Shimmer = () => {
  return (
    <div className="shimmer-flex">
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div className="shimmer" key={index}>
            <div className="shimmer-image animate"></div>
            <div className="shimmer-content">
              <div className="shimmer-heading stroke animate"></div>
              <div className="shimmer-tags stroke animate"></div>
              <div className="shimmer-footer stroke animate"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
