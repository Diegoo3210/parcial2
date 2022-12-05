import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Banda from "./Banda";
import {Table} from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Banda2 from "./Banda2"
const { useEffect, useState } = require("react");


function Bandas(){

    const [bandas, setBandas] = useState([]);
    const[oldBanda, setBanda] = useState("Nada ")
    useEffect(() => {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
          fetch(URL).then(data => data.json()).then(data => {
            setBandas(data);
            setBanda(getOldestBand(data))
        })
    }, []);

    function getOldestBand(data){
        var toCompare = data[0]
        for (var b in data){
            if (b.foundation_year>toCompare.foundation_year){
                toCompare = b;

            }
        }
        return toCompare;
    }
      return(
        <div className="container">
            <Table striped>
                <thead>
                    <tr>
                <th scope= "col">#</th>
                <th scope= "col"><FormattedMessage id = "Name"/></th>
                <th scope= "col"><FormattedMessage id = "Country"/></th>
                <th scope= "col"><FormattedMessage id = "Genre"/></th>
                <th scope= "col"><FormattedMessage id = "Foundation"/></th>
                </tr>
                </thead>
                <tbody>
                    
                    {bandas.map((b) => (
                            <tr key = {b.id}><Banda banda={b}></Banda></tr>
                        ))}
                </tbody>
            </Table>  

            <h7><FormattedMessage id = "OldMsg1"/> {oldBanda.name} <FormattedMessage id = "OldMsg2"/>{ oldBanda.foundation_year} <FormattedMessage id = "OldMsg3"/></h7>     

        </div>

    )
}

export default Bandas;