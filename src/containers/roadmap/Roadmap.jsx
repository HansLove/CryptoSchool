import React from "react";
import Text from "../../componentes/Texto/Text";
import Element from "../../componentes/roadmap-element/Element";
import bitcoinImage from "../../componentes/image/Bitcoin_ilustration.png"
import shibaImage from "../../componentes/image/EDDI.png"
import blackCoinImage from "../../componentes/image/certi_1.jpeg"
import colorCoinImage from "../../componentes/image/colored_final.png"
import rocketImage from "../../componentes/image/Rocket_1.png"
import blockchainImage from "../../componentes/image/blockchain.png"
import blackCoin from "../../componentes/image/black_final.png"
import './estilo.css'

function Roadmap() {
    return (
        <div className="roadmap-container">
            <div className="title-roadmap">
                <Text 
                text={"DECCERT Roadmap"} 
                fontSize={"1.5rem"} 
                textColor={"white"} 
                margin={"4rem 0 0"} />
                <Text 
                text={"Proof You Learn"} 
                fontSize={"4rem"} 
                textColor={"white"} margin={"0"} />
            </div>

            <ul className="roadmap-list">
                <Element
                    date={"July 2022"}
                    title={"Documentation"}
                    description={"Realease of our white-paper, lite-paper and tokenomics."}
                    linkText={""}
                    linkHref={"/"}
                    image={bitcoinImage}
                />
                <Element
                    date={"August 2022"}
                    title={"Full Blockchain Deployment"}
                    description={"DECCERT protocol smart contracts of our ecosystem are deployed and tested in at least 1 blockchain. ."}
                    linkText={""}
                    linkHref={"/"}
                    image={blockchainImage}
                />
                <Element
                    date={"September 2022"}
                    title={"Full Certification"}
                    description={"DECCERT covers all the gamma of NFT´s sould bond capability and expands the human/machine actions to be certificated."}
                    linkText={""}
                    linkHref={"/"}
                    image={blackCoinImage}
                />
                <Element
                    date={"November 2022"}
                    title={"Native Token"}
                    description={"$EDDI token will be deployed to give the DECCERT community voting power over our ecosystem."}
                    linkText={""}
                    linkHref={"/"}
                    image={shibaImage}
                />
                <Element
                    date={"January 2023"}
                    title={"Stable-coin liquidity"}
                    description={"Will add in our treasury the most community voted stable coins."}
                    linkText={""}
                    linkHref={"/"}
                    image={colorCoinImage}
                />

                <Element
                    date={"March 2023"}
                    title={"Liquidity event"}
                    description={"First event where DECCERT will add diferent round of liquidity to our native token to be able to reach our price targets."}
                    linkText={""}
                    linkHref={"/"}
                    image={rocketImage}
                />
                <Element
                    date={"June 2023"}
                    title={"Multichain"}
                    description={"DECCERT smart contracts running in more than 3 chains."}
                    linkText={""}
                    linkHref={"/"}
                    image={blackCoin}
                />
            </ul>

        </div>
    )
}

export default Roadmap;