import { useParams } from 'react-router-dom'
import Slider from '../../components/housingSheet/Slider'
import HousingInformation from '../../components/housingSheet/HousingInformation'
import './HousingSheet.css'
const HousingSheet = ({ data }) => {
  const { idUrl } = useParams()



  const goodData = data.find((item) => item.id === idUrl)

  if (goodData === undefined && goodData === null) {
      return
    }

  return (
    <div className="HousingSheet">
      <Slider
        images={goodData ? goodData.pictures : ''}
        height="250px"
      ></Slider>
      <HousingInformation data={goodData}></HousingInformation>
    </div>
  )
}
export default HousingSheet
