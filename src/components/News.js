import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalize(props.category)} - NewsMonkey`;

    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c01e9e16961d47d983d10657f3479454&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])


    // handlePrevClick = async () => {
    //     this.setState({page: this.state.page - 1});
    //     this.updateNews();
    // }
    // handleNextClick = async () => {
    //     this.setState({page: this.state.page + 1});
    //     this.updateNews();
    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c01e9e16961d47d983d10657f3479454&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }


        return (
            <>
                <h1 className="text-center " style={{margin: "35px 0px", marginTop: "90px"}}>Top {capitalize(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row">
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
}
