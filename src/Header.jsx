import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faGrinBeam } from "@fortawesome/free-solid-svg-icons"
export default function Header() {
        
    return (
        <header>
            <span><FontAwesomeIcon icon={faUtensils} size="2xl"/></span>
            <span><FontAwesomeIcon icon={faGrinBeam} size="2xl" /></span>
            <h1>Ask Chef Improv</h1>
        </header>
    )
}