const OtterCamComponent = () => {
  return (
    <div className="background">
      <div className="otter-container">
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/JQnxefImhu8?controls=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default OtterCamComponent;
