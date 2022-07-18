import React from "react";
import Text from "../../componentes/Texto/Text";
import Element from "../../componentes/roadmap-element/Element";
import bitcoinImage from "../../componentes/image/Bitcoin_ilustration.png"
import shibaImage from "../../componentes/image/Shiba.png"
import blackCoinImage from "../../componentes/image/black_final.png"
import ColorCoinImage from "../../componentes/image/colored_final.png"
import './estilo.css'

function Roadmap() {
    return (
        <div className="roadmap-container">
            <div className="title-roadmap">
                <Text text={"Roadmap"} fontSize={"1.5rem"} textColor={"white"} margin={"4rem 0 0"} />
                <Text text={"Lorem ipsum dolor"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
            </div>

            <ul className="roadmap-list">
                <Element
                    date={"Enero 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={bitcoinImage}
                />
                <Element
                    date={"Febrero 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={shibaImage}
                />
                <Element
                    date={"Marzo 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={blackCoinImage}
                />
                <Element
                    date={"Abril 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={shibaImage}
                />
                <Element
                    date={"Mayo 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={ColorCoinImage}
                />
                <Element
                    date={"Junio 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={shibaImage}
                />
                <Element
                    date={"Julio 2022"}
                    title={"Blockchain"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    linkText={"Lorem ipsum dolor"}
                    linkHref={"/"}
                    image={bitcoinImage}
                />
            </ul>

        </div>
    )
}

export default Roadmap;