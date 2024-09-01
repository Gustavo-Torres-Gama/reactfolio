import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import "../styles/components/informationcontainer.sass"

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(55)28999240379</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail - @gmail.com</h3>
                <p>gustavotorresgama36</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Mimoso do Sul / ES</p>
            </div>
        </div>
    </section>
}

export default InformationContainer