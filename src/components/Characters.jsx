// import { useEffect } from "react"
// import{useDispatch, useSelector} from 'react-redux'
// import { getCharacters } from "../redux/actions"
// import Character from "./Character"


// const Characters=()=>{
//     const dispatch=useDispatch
//     const characters=useSelector(state=>state.characters)

//     useEffect(()=>{
//         dispatch(getCharacters())
//     },[])
    
//     return(
//         <div>
//             <h1>Characters</h1>
//             {
//                 characters.map(char=>{
//                     return(
//                         <Character
//                             key={char.id}
//                             id={char.id}
//                             name={char.name}
//                             image={char.images[0]}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Characters

import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions";
import Character from "./Character";
class Characters extends React.Component{
    cosntructor(props){
        super(props)            
    }

    componentDidMount(){
        this.props.getCharacters()
    }
    render(){
        return(
            <div>
                <h1>Characters</h1>
                {
                    this.props.characters.map(char =>{
                        return(
                            <Character
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                image={char.images[0]}
                               /> 
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return{
        characters:state.characters
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getCharacters: ()=>{dispatch(getCharacters())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);