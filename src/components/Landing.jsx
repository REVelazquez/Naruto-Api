import {Link} from 'react-router-dom';


const Landing= ()=>{
    return(
        <div>
            <h1>Welcome to the Daianeta</h1>
            <button>
                <Link to='/login'>Subite a la Daianeta</Link>
            </button>
        </div>
    )
}

export default Landing;