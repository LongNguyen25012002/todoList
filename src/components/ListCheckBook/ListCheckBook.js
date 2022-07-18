import {useState} from 'react';

const ListCheckBook = () => {

    const languageList = [
        {value : "english", label: "English"},
        {value : "vietnam", label: "Việt Nam"},
        {value : "russia", label: "Russia"}
    ];

    const musicTypeList = [
        {value: "rap", label: "Rap"},
        {value: "folk", label: "Folk"},
        {value: "vinahouse", label: "Vinahouse"},
        {value: "chill", label: "Chill"}
    ];

    const [listCheck, setListCheck] = useState([]);
    const [valueList, setValueList] = useState(listCheck,() => {
        alert("hello I am a alert")
    })

    const handleCheckListChange = (e) => {
        const {value, checked} = e.target

        if(checked){
            setListCheck(prev => [...prev, value])
        } else {
            setListCheck(prev => prev.filter(valueList => valueList !== value))
        }

    }

    const handleGetListCheck = (e) => {
        setValueList(listCheck)
        console.log(listCheck)
    }

  return (
    <div className="max-w-[600px] mt-[40px] mx-auto bg-pink-100 p-3 rounded-md mb-9">
      <h3 className="text-pink-500 text-[20px]">ListCheckBook</h3>
      <p className="text-pink-400 mt-4 text-[16px] mb-1">Choose a language</p>
      <div className="group">
        {languageList.length > 0 &&
          languageList.map((language) => {
            return (
              <label className="flex mb-1" key={language.label}>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[2px] align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 focus:ring-0"
                  type="checkbox"
                  value={language.value}
                  onChange={handleCheckListChange}
                />
                {language.label}
              </label>
            );
          })}
      </div>
      <p className="text-pink-400 mt-4 text-[16px] mb-1">Choose a type music</p>
      <div className="group">
        {musicTypeList.length > 0 &&
          musicTypeList.map((musicType) => {
            return (
              <label className="flex mb-1" key={musicType.label}>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[2px] align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 focus:ring-0"
                  type="checkbox"
                  value={musicType.value}
                  onChange={handleCheckListChange}
                />
                {musicType.label}
              </label>
            );
          })}
      </div>
      <button onClick={handleGetListCheck} className="bg-pink-600 py-2 text-center font-semibold rounded-2xl text-white w-[100%] mt-4">
        Check
      </button>
     {
        valueList.length > 0 && valueList.map(list => {

            return (
              <p className="py-[4px] text-pink-500" key={list}>List of check : {list} </p>
            );
        })
     }
    </div>
  );
};

export default ListCheckBook;
