import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banda2 (props){

return (
    <Card className="mb-3">
        <Card.Tittle>
            <Link to={"/bandas/" + props.banda.id}>
           {props.banda.name} </Link>
        </Card.Tittle>
    
    </Card>
);

}
export default Banda2