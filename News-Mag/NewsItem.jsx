import image from '../assets/66059.jpg'
const NewsItem = ({ title, description, src, url }) => {
    return (
      <div
        className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "345px" }}
      >
        <img
          src={src?src:image}
          style={{ height: "200px", width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "calc(0.25rem - 1px)",
          borderTopRightRadius: "calc(0.25rem - 1px)"
        }}
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled"}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "News Mag is a modern news app that fetches and displays the latest headlines in real-time using the News API. Built with React and Vite for speed and simplicity."}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  
  