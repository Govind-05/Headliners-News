import { useState } from "react";

export default function SwipeButton(props){
    
    const[prevStyle,setPrevStyle]=useState({
        marginLeft:"4rem",
        display:"none"
    });

    const[nextStyle,setNextStyle]=useState({
        marginRight:"7rem",
        display:"inline"
    });

    function handlePrevious(){
        if(props.pageNum>1){
            props.changePageNum(props.pageNum-1);
            props.changeArticles(props.pageNum-1);
            setNextStyle({
                marginRight:"7rem",
                display:"inline"
            });            
        }
        if(props.pageNum===2){
            setPrevStyle({
                marginLeft:"4rem",
                display:"none"
            });
        }
    };

    function handleNext(){
        if(props.pageNum>=1 && props.pageNum<(Math.floor((props.totalArticles)/9))){
            props.changePageNum(props.pageNum+1);
            props.changeArticles(props.pageNum+1);
            setPrevStyle({
                marginLeft:"4rem",
                display:"inline"
            });
        }
        if(props.pageNum===((Math.floor((props.totalArticles)/9))-1)){
            setNextStyle({
                marginRight:"7rem",
                display:"none"
            });
        }
    };

    return(
        <div className="d-flex">
            <button type="button" className="btn btn-dark btn-lg mt-3" style={prevStyle} onClick={handlePrevious}>Previous</button>
            <button type="button" className="btn btn-dark btn-lg ms-auto mt-3" style={nextStyle} onClick={handleNext}>Next</button>
        </div>
    );
}