const Card = ({ title, sub, text, index }) => (
    <div className="card">
        <span className="index">{index}</span>
        <h1>{title}</h1>
        <p className="sub">{sub}</p>
        <p className="text">{text}</p>
    </div>
)

export default Card;