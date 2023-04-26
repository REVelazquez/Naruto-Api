import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCharacterDetail, cleanDetail } from '../redux/actions'

const Detail= ()=>{
    const {id} = useParams()
    const dispatch= useDispatch()
    const characterDetail= useSelector(state=>state.characterDetail)
    const imageSliced= characterDetail?.images?.[0].split('revision')[0]

    useEffect(()=>{
        dispatch(getCharacterDetail(id))

        return ()=>dispatch(cleanDetail)
    }, [id])

    return(
        <div>
            <h1>{characterDetail.name}</h1>
            <img src={imageSliced} alt={characterDetail.name} />
            {characterDetail && <p>{characterDetail.jutsu[0]}</p>}
        </div>
    )
}

export default Detail;