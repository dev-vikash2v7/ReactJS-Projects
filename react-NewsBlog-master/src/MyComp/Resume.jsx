import React from 'react'
import './resume.css'

export const Resume = () => {
   
    return (
        <div className = 'resume'>
          
            <img src="logo192.png" alt="k" id='img'/>
            <h1 className = 'bg-primary p-10'>Resume</h1>

<div className="m-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure iste similique aut excepturi, duci mus delectus provident quis asperiores optio quaerat id rem autem qui cupiditate odit eum repudiandae quae fugiat ipsum unde minus repellat?</p>

            <p style ={{clear : 'both'}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure iste similique aut excepturi, ducimus delectus provident quis asperiores optio quaerat id rem autem qui cupiditate odit eum repudiandae quae fugiat ipsum unde minus repellat?</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure iste similique aut excepturi, ducimus delectus provident quis asperiores optio quaerat id rem autem qui cupiditate odit eum repudiandae quae fugiat ipsum unde minus repellat?</p>

            </div>

            <div className="box-set">
                <div className="box box-1">1</div>
                <div className="box box-2">2</div>
                <div className="box box-3">3</div>
                <div className="box box-4">4</div>
            </div>
        </div>
    )
}
