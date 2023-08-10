import Card from './card'
import Data from './Data'

export default function cards() {
  let cardsData = Data.map((value) => {
   return <Card  {...value}/> // Both are same
   // return <Card cardData = {...value}/>
  })
  return (
    <div>
      {cardsData}
    </div>
  )
}