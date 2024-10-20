import './image_card.css';

interface ImageCardProps {
    image: string;

  }

const ImageCard: React.FC<ImageCardProps> = ({ image}) => {

    return(
        <div className="image-card ">
            <img src={image} alt="" className='imag'/>
        </div>
    )
}

export default ImageCard;
