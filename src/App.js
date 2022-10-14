import axios from "axios";
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import './index.css'
import Footer from "./components/Footer";
import {BsFillArrowUpCircleFill} from "react-icons/bs"


function App() {
  const [data, setData] = useState([]);
  const Category = [
    "family",
    "office",
    "children",
    "college",
    "party",
    "funny",
    "unbelievable",
    "developers"
  ];
  const fetchData = async (Category) => {
    try {
      const res = await axios.get(
         `https://excuser.herokuapp.com/v1/excuse/${Category}/300`,
    
      );
      setData(res.data)
    } catch (err) {
      console.log(err);
    }}
    const CategoryButton = ({ category }) => (
      <button className="bg-blue-500 shadow-md hover:bg-blue-700  text-white font-md px-3 py-2 rounded-full ml-4 m-1" 
      onClick={() => fetchData(category)}> {category}</button>
    );
  useEffect(() => {
    // Trigger the API Call
    fetchData("funny");
    }, []);

  return (
    <>
    <Navbar/>
    <a href="#">
    <BsFillArrowUpCircleFill className="fixed bottom-20 text-blue-500 right-20 text-6xl"/>
    </a>
      <div className="p-4 flex justify-start md:justify-center flex-wrap">
        {Category.map((value, index) => {
          return <CategoryButton category={value} key={index} />;
        })}
      </div>
    <div className="flex justify-start md:justify-center items-center m-5 overflow flex-wrap">
        {data?.map((item, index)=>(
          <div className="mr-3 w-80%">
            <div className="max-w-sm font-bold rounded-lg shadow-lg p-6 mb-6"
          key={index}>{item.excuse}
          <br/>
              <div className="mt-6">
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
                  text-gray-500 mr-2 mb-2"
                  >ID:{item.id}
                </span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
                  text-gray-500 mr-2 mb-2"
                  >Category:{item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
    <Footer/>
    </>
  );
}

export default App;
