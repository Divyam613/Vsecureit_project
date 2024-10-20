import './work_card.css';

interface cardProps {
    title: string;
    image: string;
    description: string;
}

const Workcard: React.FC<cardProps> = (({title, image, description}) => {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <span><img src={image} alt="Avatar" className="card"/></span>
                    <h2>{title}</h2>
                </div>
                <div className="flip-card-back">
                    <h1>{title}</h1>
                    <p className='desc'> {description}</p>
                </div>
            </div>
        </div>
    )
})

export default Workcard;
