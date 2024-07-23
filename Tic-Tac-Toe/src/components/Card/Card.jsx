import Icon from '../Icon/Icon'; 
import './Card.css'
import Grid from '../Grid/Grid';

function Card({ gameEnd, player, onplay,index }) {
    let icon = <Icon />;

    if (player === "X") {
        icon = <Icon name="cross" />;
    } else if (player === "O") {
        icon = <Icon name="circle" />;
    }

    return (
        <div className='card' onClick={()=> !gameEnd && onplay(index)}>
            {icon}
        </div>
    );
}

export default Card;
