import SocialNetworks from "./SocialNetworks"

import Avatar from "../img/my-foto-profisional.jpg"

import "../styles/components/sidebar.sass"

import InformationContainer from "./informationContainer"


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gustavo Gama" />
            <p className="title">Desenvolvedor Front-end</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar