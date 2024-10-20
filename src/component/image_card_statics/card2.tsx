import './card2.css';

interface ImageCardProps {
    image: string;
    title?: string;
    description?: string;
  }

const ImageCard2: React.FC<ImageCardProps> = ({ image,  title, description }) => {

    return(
        <div className="image_card2 img-title">
            
            <img  src={image} alt="" className='imag1'/>
            <span className='completion'>{title}</span>
            <span className='txt'>{description}</span>
        </div>
    )
}

export default ImageCard2;
