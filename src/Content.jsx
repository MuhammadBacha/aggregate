import Form from "./Form";

const fscInfoArray = [
    "Matric",
    "FSc",
    "NET",
];

const ALevelsInfoArray = [
    "MatricEquivalance",
    "NET",
];

function Content({setAgg,tab}) {
  console.log(tab)
  if(tab === 'FSc') return <Form key={fscInfoArray[0]} infoArray={fscInfoArray} setAgg={setAgg} tab={tab}/>
  if(tab === 'A levels') return <Form key={ALevelsInfoArray[0]} infoArray={ALevelsInfoArray} setAgg={setAgg} tab={tab}/>
}

export default Content