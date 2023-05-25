import React,{useState,useEffect} from "react";
import Headline from "./Headline";
import NewsItems from "./NewsItems";
// import SampleNews from "../sampleNews";
import SwipeButton from "./SwipeButton";
import axios from "axios";
import Loader from "./Loader";
import _ from "lodash";

async function getData(pageNum,category){
    const response=await axios.get("https://newsapi.org/v2/top-headlines?language=en&category="+category+"&apiKey="+process.env.REACT_APP_API_KEY+"&pageSize=9&page="+pageNum);
    
    const res={
        SampleNews:response.data.articles,
        totalArticles:response.data.totalResults
    }
    
    return res;
}

export default function News(props){
 
    
    const [pageNum,setPageNum]=useState(1);
    const [loaderState,setLoaderState]=useState(false);

    function changePageNum(pageNum){
        setPageNum(pageNum);
        console.log(pageNum);
    }
    
    const [SampleNews,setSampleNews]=useState([]);
    
    const[totalArticles,setTotalArticles]=useState(100);

    async function getOpeningArticles(){
        setLoaderState(true);
        const res=await getData(1,props.category);
        setSampleNews(res.SampleNews);
        if(res.totalArticles<100){
            setTotalArticles(res.totalArticles);
        }
        setLoaderState(false);
    }

    async function changeArticles(pageNum){
        setLoaderState(true);
        setSampleNews([]);
        const res=await getData(pageNum,props.category);
        setLoaderState(false);
        console.log(SampleNews);
        setSampleNews(res.SampleNews);
    }

    const headline=`Top ${_.upperFirst(props.category)} Headlines`;

    useEffect(()=>{
        getOpeningArticles();
    });

    return (
        <div className="container" style={{"width":"72rem"}}>
            <Headline title={headline}/>
            <div className="container d-flex flex-wrap justify-content-start">
            {SampleNews.map((article,index)=>{
                return <NewsItems key={index} title={article.title===null?"No Title Found":article.title.slice(0,40)} description={article.description===null?"No Description Found":article.description.slice(0,120)} imgURL={article.urlToImage} redirectURL={article.url}/>
            })}
            </div>
            {loaderState&&<Loader />}
            <SwipeButton changePageNum={changePageNum} pageNum={pageNum} changeArticles={changeArticles} totalArticles={totalArticles}/>    
        </div>
    );
};