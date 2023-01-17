import React from "react";
import Text from "../../componentes/Texto/Text";
import Element from "../../componentes/roadmap-element/Element";
import shibaImage from "../../componentes/image/EDDI.png"
import colorCoinImage from "../../componentes/image/colored_final.png"
import blockchainImage from "../../componentes/image/blockchain.png"
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
                    date={"November 2022"}
                    title={"Documentation"}
                    description={"Realease of our white-paper, lite-paper and tokenomics."}
                    linkText={""}
                    linkHref={"/"}
                    // image={bitcoinImage}
                />
                <Element
                    date={"December 2022"}
                    title={"Smart Contract Deployment"}
                    description={"DECCERT protocol smart contracts of our ecosystem are deployed and tested in Binance Smart chai blockchain."}
                    linkText={""}
                    linkHref={"/"}
                    image={blockchainImage}
                />
                <Element
                    date={"January 2023"}
                    title={"Full Certification"}
                    description={"Deccert covers all the gamma of NFT´s sould bond capability and expands the human/machine actions to be certificated."}
                    linkText={""}
                    linkHref={"/"}
                    // image={blackCoinImage}
                />
                <Element
                    date={"February 2023"}
                    title={"Native Token"}
                    description={"$EDDI token will be deployed to give the DECCERT community voting power over our ecosystem."}
                    linkText={""}
                    linkHref={"/"}
                    image={shibaImage}
                />
                <Element
                    date={"March 2023"}
                    title={"Job Bank"}
                    description={"Will add on the official pool from our treasury the most community voted stable coin"}
                    linkText={""}
                    linkHref={"/"}
                    image={colorCoinImage}
                />

                <Element
                    date={"June 2023"}
                    title={"DAO Activation"}
                    description={"A decentralized autonomous organization is activated for the distribution in the decision making of the protocol and to add an extra layer of utility in our assets"}
                    linkText={""}
                    linkHref={"/"}
                    // image={rocketImage}
                />
                <Element
                    date={"August 2023"}
                    title={"Multichain"}
                    description={"Deccert smart contracts running in 3 EVM blockchains"}
                    linkText={""}
                    linkHref={"/"}
                />
            </ul>

        </div>
    )
}

export default Roadmap;