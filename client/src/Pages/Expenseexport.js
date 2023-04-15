import React,{useEffect, useState} from "react";
import { DownloadExcel } from "react-excel-export";

const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    language: "English",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    language: "Danish",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    language: "Italian",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
];

export default function Expenseexport() {
    const [data, setData] = useState([]);
    
  useEffect(() => {
    async function fetchDailyData() {
      const res = await fetch("/expense/viewexcel");
      const data = await res.json();
        console.log(data);
        if (data.error) {
            alert(data.error)
            return;
        }
        const amnt = data.expenses.map((item) => {
            return {
                    amount: item.amount.$numberDecimal,
                    category:item.category,
                    createdAt:item.createdAt,
                    date:item.date,
                    desc:item.desc,
                    updatedAt:item.updatedAt,
            }
        })
        setData(amnt);
    }
    fetchDailyData();
  }, []);
  
    return (
        <>
            <div className="w-screen h-screen bg-jp-black">
                <div className="w-1/2 p-5 flex flex-col mx-40 mt-14 ">
                    <div className="bg-mj-yellow text-center w-40 px-4 py-3 mb-5 ml-20 flex rounded-md font-bold duration-300 ease-out hover:scale-110">
                    <DownloadExcel
                        data={data}
                        buttonLabel="Export Data"
                        fileName="expense-csv-data"
                        className="export-button "
                        />  
                        
                    </div>
                    <div >
                    
                        <div class="relative overflow-x-auto mx-auto w-50">
                        
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Purpose
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Amount
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.desc}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.amount}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.category}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.date}
                                            </td>
                                        </tr>
                                    ))}
                                        {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td class="px-6 py-4">
                                                White
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td class="px-6 py-4">
                                                $1999
                                            </td>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td class="px-6 py-4">
                                                Black
                                            </td>
                                            <td class="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td class="px-6 py-4">
                                                $99
                                            </td>
                                        </tr> */}
                                    </tbody>
                            </table>
                            
                            </div>
                        
                        </div>
                </div>
            
        </div>
            
        </>
      
    );
  
}