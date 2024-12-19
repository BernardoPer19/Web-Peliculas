import React from 'react'

function SeriePagination({series,currentPage,totalPages,setcurrentPage,seriesPerPage}) {


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
        {series.length > seriesPerPage && (
        <div className="flex justify-between items-center mt-6 p-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-white cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Previous
          </button>
          <span className="text-white font-medium">
            Page <span className="font-bold text-red-500">{currentPage}</span>{" "}
            of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-white cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default SeriePagination
