import{Link} from 'react-router-dom'

const Character = ({image, id, name})=>{
    const imageSliced= image?.split('revision')[0]
    return(
        <div>
            <h2>{name}</h2>
            <Link to={`/detail/${id}`}>
            <img style={{borderRadius:'100%'}} src={imageSliced} alt={name} />
            </Link>
        </div>
    )
}



export default Character;