import React, { useState } from 'react';
import Papa from 'papaparse';
import 'tailwindcss/tailwind.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalEntries = data.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 font-poppins text-black dark:text-white">
      <input type="file" onChange={handleFileUpload} className="mb-4 text-black dark:text-white rounded-full px-2 py-4" />

      <table className="min-w-full bg-white border border-gray-500 dark:border-gray-500 overflow-hidden">
        <thead className="bg-gray-100 dark:bg-gray-900 dark:border-gray-500 ">
          <tr>
            {/* Displaying headers */}
            {data.length > 0 &&
              Object.keys(data[0]).map((header) => (
                <th key={header} className="py-2 px-4 border-lg">
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {/* Displaying rows with hover effect */}
          {currentEntries.map((row, index) => (
            <tr key={index} className="hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-500">
              {Object.values(row).map((value, i) => (
                <td key={i} className="py-2 px-4 border-b">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Basic pagination */}
      <div className="mt-4 flex justify-end">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-2 py-1 border rounded-full transition-all ${
              currentPage === index + 1 ? 'bg-blue-500' : 'hover:bg-blue-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
