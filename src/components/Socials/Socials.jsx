import {SOCIALS} from "../../utils/constants";
import {Icon} from "../Icon/Icon";


export const Socials = () => {
    return(
        <ul className='socials'>
            {SOCIALS.map(({link, icon}) => (
                <li key={link} className='socials-item' title={icon}>
                    <a href={link} target='_blank' rel="noreferrer"><Icon name={icon}/></a>
                </li>
            ))}
        </ul>
    )
}