import Form from "./Form";
// const fscInfoArray = [
//     "Matric",
//     "FSc",
//     "NET",
// ];

// const ALevelsInfoArray = [
//     "MatricEquivalance",
//     "NET",
// ];
const info = {
  FSc:[
    "Matric",
    "FSc",
    "NET",
  ],
  "A levels":[
    "MatricEquivalance",
    "NET",
  ]
}

function Content({ setAgg, tab }) {
  const infoArray = info[tab];

  return <Form key={infoArray[0]} infoArray={infoArray} setAgg={setAgg} tab={tab} />;
}


export default Content