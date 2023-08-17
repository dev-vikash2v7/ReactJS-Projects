import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { selectSearchInput, setBlogData } from '../UserSlice'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

export const Blogs = () => {

    const query = useSelector(selectSearchInput)
    const [blogs, setBlogs] = useState([])
    const [date , setDate] = useState(null)
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)

    const today = new Date()

    useEffect(() => {
        let yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)
        setDate(yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate())

    }, [today])



    // const blog_url = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=3f3b61c5f48445e594d57355f0303984`
    const blog_url = `https://gnews.io/api/v4/search?q=${query}&&from=${today}&lang=hi&country=in&token=8ee5b523ee8dde47a9fed258e9d42f08`


    const dispatch = useDispatch()

    useEffect(() => {
        try {
            axios.get(blog_url).then((response) => {


                setTotal(response.data.totalArticles)
                setLoading(false)
                setBlogs(response.data.articles)
                dispatch(setBlogData(response.data))
            })
        }
        catch (e) {
            console.log(e)
        }

    }, [blog_url])

    const [show, setShow] = useState(true);

    return (
        <div className='blog_page'>

            {show && (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Welcome To Vk News Blog</Alert.Heading>
                    <p>
                        your welcome to this mashlla website
                    </p>
                </Alert>)
            }
            {loading ? <h1 className='m-6 ml-5'>Loading.....  </h1>

                :
                <>
                    {!total && <h1> No available news  blogs with related to :  {query} </h1>}

                    <h1>Blogs related to <b>{query}</b></h1>

                    <h2>Total Result : {total}</h2>


                    <div className="blogs">

                        {blogs?.map((blog, index) => {
                            return (

                                // <div className="card col-sm-50 col-xs-3 text-center border-primary blog mx-3 my-3" key={index} >
                                <div className="card" key={index} id={"card"+ index}>

                                    <div className="card-header">
                                        {blog?.source?.name}
                                    </div>


                                    <img className="card-img-top" src={blog?.image} alt='no image' />

                                    <div className="card-body">
                                        <span>{blog?.publishedAt}</span>

                                        <h4 className="card-title">{blog?.title}</h4>
                                        <p className="card-text">{blog?.content}</p>

                                        <a className='card-link' href={blog?.url}>Read More..</a>

                                    </div>

                                    <div className="card-footer text-muted">
                                        {blog?.source?.id}
                                    </div>


                                </div>

                            )
                        })}

                    </div>

                </>
            }


        </div>
    )
}

//response
//config: {url: "https://newsapi.org/v2/everything?q=tech&from=2021…blishedAt&apiKey=3f3b61c5f48445e594d57355f0303984", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data: {status: "ok", totalResults: 60345, articles: Array(20)}
// headers: {cache-control: "no-cache", content-type: "application/json; charset=utf-8", expires: "-1", pragma: "no-cache"}
// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// status: 200
// statusText: ""


// author: "Matthew Cappucci"
// content: "The novel technique builds upon years of exploration by Saildrones, which measure ocean water temperature, salinity and chemical composition, and can map the ocean floor. They even are equipped with … [+5334 chars]"
// description: "The data they collect could expand their understanding of hurricane dynamics."
// publishedAt: "2021-06-01T18:39:04Z"
// source: {id: "the-washington-post", name: "The Washington Post"}
// title: "Scientists hope to steer robotic surfboards into hurricanes"
// url: "https://www.washingtonpost.com/weather/2021/06/01/surfboard-saildrone-hurricanes/"
// urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Q2VGFRX2HZGDRMDIBEDDPXAF6I.jpeg&w=1440"
