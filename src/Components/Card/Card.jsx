import './Card.css';

const Card = ({ imageUrl, title, description, link }) => {
  return (
      <div className="card">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="image" />
        </div>
        <div className="content">
          <a href={link}>
            <span className="title">{title}</span>
          </a>
          <p className="desc">{description}</p>
          <a className="action" href={link}>
            Find out more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
  );
};

export default Card;