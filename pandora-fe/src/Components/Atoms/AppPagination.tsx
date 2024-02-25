import React from "react";
interface props {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export const AppPagination: React.FC<props> = ({
  page,
  setPage,
  totalPages,
}) => {
 
  return (
    <React.Fragment>
      <div className="container mx-auto">
       
          
        <div className="flex justify-center mt-4">
          <button
            onClick={()=>setPage(page-1)}
            disabled={page === 1}
            className="btn-pagination"
          >
            Previous
          </button>
          <button
            onClick={()=>setPage(page+1)}
            disabled={page === totalPages}
            className="btn-pagination"
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
