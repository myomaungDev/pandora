import React from 'react';
interface props{
    page:number;
    totalPages:number;
    setPage:React.Dispatch<React.SetStateAction<number>>
}
export const AppPagination:React.FC<props> =({page,setPage,totalPages})=>{
    console.log(totalPages,setPage,page)
    return(
        <React.Fragment>
             app pagination 
        </React.Fragment>
    )
}