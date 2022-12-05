import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const { useEffect, useState } = require("react");

export default function Detail() {
    const params = useParams();
    const [banda, setMascota] = useState([]);
    useEffect(() => {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setMascota(data.find(mascota => banda.id == params.bandaId));
          });
      }, [params.bandaId]);


 return (
  <Card className = "mb-3">
    <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={banda.image}
       alt={banda.description}
     />
  </Card>
 );
}