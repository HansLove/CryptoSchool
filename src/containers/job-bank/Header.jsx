import Text from '../../componentes/Texto/Text'
import Search from '../../componentes/search-bar/Search'
import Sections from '../../componentes/Materias/Sections'
import './estilo.css'

function Header() {
  return (
    <div className='job-bank-header'>
      <div className='fact-content'>


        <Text text={"DECCERT"}
          fontSize={"1.5rem"}
          textColor={"snow"} margin={"0"} fontWeight={"500"} />
        <Text text={"Decentralized Job Bank"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

        <Text text={
          "We use nft technology in our database to filter the skills you need in your business. In order to be filtered in our database, you have to keep accumulating the digital assets issued by Deccert official private key."}
          fontSize={"20px"}
          textColor={"white"}
          margin={"2rem 40vw 2rem 0"}
          />

        <Sections/>

        {/* <Search
          name="name"
          type="text"
          jobBankSearch={true}
          placeholder={"Search"}
          placeholderColor={"#AFAFAF"}
          fontSize={"16px"}
          padding={"15px 100px 15px 24px"}
          textColor={"white"}
          backgroundColor={"transparent"}
          borderRadius={"10px"}
          margin={"0"}
          border={"1px solid white"}
          paddingButtom={"15px 24px"}
          marginButtom={"0 0 0 -100px"}
        /> */}


      </div>

    </div>
  )
}

export default Header