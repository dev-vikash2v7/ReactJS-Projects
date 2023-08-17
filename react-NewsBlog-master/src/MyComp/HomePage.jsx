import React,{useState} from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import emailjs from 'emailjs-com';
import { setSignedIn, setUserData } from '../UserSlice'

import './style.css'

export const HomePage = () => {

    const dispatch = useDispatch()

    const [message , setMessage]  =useState('')

    const loginSuccess = (response) => {
        console.log('login response =>' , response)

        let templateParams = {
            website: "VkNews-Blog",
            to_name: response?.profileObj.name,
            to_email : response?.profileObj.email,
           }
    

        //sendemail
        try{
        emailjs.send('Vikashverma12345', 'VkReacttempelate', templateParams, 'user_Tsrb8b8mclvkFVs6mp3K8').then((result) => {
            console.log(result)
        }, (error) => {
            console.log(error);
        });}
        catch(e){
            console.log(e)
        }

        dispatch(setSignedIn(true))
        dispatch(setUserData(response?.profileObj))   

    }

    const loginFail = (response) => {
        console.log('login fail =>', response)
        alert('login failed !! ' )

    }


    return (
        <div className='home-page' >


            <div className="login-mess">

                <h2>♥Please sign in ♠</h2>
                <p>we provide higg qualtiy memes on out bolog page if your are interested in theis oples sublscrivet ot it </p><p>and habe a nice day with your laaaaaaaalahsun ........♣☻♥</p>


               
                <GoogleLogin
                    clientId='1033919005296-43c3ims99lpb2opit5etd3so0fgjl7fu.apps.googleusercontent.com'

                    render={  (renderProps) => (

                       //renderProps = // {disabled: true, onClick: ƒ}

                        <button type="button" className="btn btn-primary login-btn"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}>
                            login with google
                        </button>
                    ) }
                    onSuccess={loginSuccess}
                    onFailure={loginFail}
                    isSignedIn={true}
                    cookiePolicy = {'single_host_origin'}
                />
            </div>
            



        </div>
    )
}


//login response

// Aa: "100618011480406057098"

// At: nx {AT: "100618011480406057098", Ve: "Vikásh Vermä", kV: "Vikásh", fT: "Vermä", ZJ: "https://lh3.googleusercontent.com/a-/AOh14Gh6emL98ED8-HAQSojYBNgowddXazhqdrqzlhF7=s96-c", …}
// accessToken: "ya29.a0AfH6SMC6lDcwCikqxx8OpBiEDiEIjHGDieKCJYPc5IvDWvJooMpNBqJ1f7aJZz7n_TJdAsEbpbmw18dA5a-SSprx8z8Z8seF7j6LdS3jcDma6ATT-w1Yle_9o8NIfaBdSLmSGwrsthe69J-vQo6d3r9bnknJ"

// googleId: "100618011480406057098"

// profileObj: {googleId: "100618011480406057098", imageUrl: "https://lh3.googleusercontent.com/a-/AOh14Gh6emL98ED8-HAQSojYBNgowddXazhqdrqzlhF7=s96-c", email: "vikashvermacom92@gmail.com", name: "Vikásh Vermä", givenName: "Vikásh", …}

// qc: {token_type: "Bearer", access_token: "ya29.a0AfH6SMC6lDcwCikqxx8OpBiEDiEIjHGDieKCJYPc5Iv…a6ATT-w1Yle_9o8NIfaBdSLmSGwrsthe69J-vQo6d3r9bnknJ", scope: "email profile https://www.googleapis.com/auth/user…id https://www.googleapis.com/auth/userinfo.email", login_hint: "AJDLj6JUa8yxXrhHdWRHIV0S13cA2HvSTV2G9nXMvnWTtqyBJI0wQFTDJ30wVW0fRtR5CzhCybFRVJp6PMQbbJq6YZoW-qHBVg", expires_in: 3599, …}

// tokenId: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3MTllYjk1N2Y2OTU2YjU4MThjMTk2OGZmMTZkZmY3NzRlNzA4ZGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAzMzkxOTAwNTI5Ni00M2MzaW1zOTlscGIyb3BpdDVldGQzc28wZmdqbDdmdS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMzM5MTkwMDUyOTYtNDNjM2ltczk5bHBiMm9waXQ1ZXRkM3NvMGZnamw3ZnUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDA2MTgwMTE0ODA0MDYwNTcwOTgiLCJlbWFpbCI6InZpa2FzaHZlcm1hY29tOTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJkcXBncVJEQ3p0Z2FLY3BSdWhoR3VnIiwibmFtZSI6IlZpa8Ohc2ggVmVybcOkIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdoNmVtTDk4RUQ4LUhBUVNvallCTmdvd2RkWGF6aHFkcnF6bGhGNz1zOTYtYyIsImdpdmVuX25hbWUiOiJWaWvDoXNoIiwiZmFtaWx5X25hbWUiOiJWZXJtw6QiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYyMjQ4Nzk0MCwiZXhwIjoxNjIyNDkxNTQwLCJqdGkiOiI3NjI4OWM5MmEyYjE1YjFjN2NlMzkyNDUxODUzODk3OGE3YmI3OTk3In0.gAkbT6-loILAsf4yCb0lwWF24xPQar6qLDFkrPF51Ha0eMc90GKAYEAddaJBbkbS5U7O-f_V24KG_CLYtd63zvSeIoy9n-VtA9pMEsqgi7yHHcD449_601BEpBUfLlCNzRWDzXdPCjapyoTVKDbxdehnC0Ee2k5U0NkcOuGRDDWr8KuWanIyzJmWFNjkzGGtE1Yp31QvRr_4gQ62-21HJ4M1rAgWRZMKj9J584ziOKe8K7IOrBfKNafEvSHdLusH5zLl-tb8FwpXPL-MWUSZnODrwp6daqE_dvXekxpsL7cLjHti-WZqQsfVH1JKWWkHp5IoM0QL5g-fsZVQgJiIAA"

// tokenObj: {token_type: "Bearer", access_token: "ya29.a0AfH6SMC6lDcwCikqxx8OpBiEDiEIjHGDieKCJYPc5Iv…a6ATT-w1Yle_9o8NIfaBdSLmSGwrsthe69J-vQo6d3r9bnknJ", scope: "email profile https://www.googleapis.com/auth/user…id https://www.googleapis.com/auth/userinfo.email", login_hint: "AJDLj6JUa8yxXrhHdWRHIV0S13cA2HvSTV2G9nXMvnWTtqyBJI0wQFTDJ30wVW0fRtR5CzhCybFRVJp6PMQbbJq6YZoW-qHBVg", expires_in: 3599, …}
// __proto__: Object