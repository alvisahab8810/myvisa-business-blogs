import MainLayout from '../components/layouts/main.components'
import React, { useState } from 'react'
import axios from 'axios'
import baseUrl from '../helpers/baseurl'
import moment from 'moment'
export default function Contact() {

    const[message,  setMessage] = useState('');

    const onSubmit = (e) => {
        const formData = new FormData(e.target);
        const data = {}
        e.preventDefault();
        for(let entry of formData.entries()) {
            data[entry[0]] = entry[1]
        }

        const bodyData = {
            ...data,
            createdAt   : moment().utcOffset("+05:30").format('YYYY-MM-DD h:mm A'),
            updatedAt   : moment().utcOffset("+05:30").format('YYYY-MM-DD h:mm A'),
        }

        axios.post(`${baseUrl}api/post` , bodyData)
        .then((result) => {
            setMessage(result.data.message)
            console.log(result)
        }).catch ((error) => {
            console.log(error)
        })
    }

  return (
    <MainLayout>
        <section className="page-header">
            <div className="container-xl">
                <div className="text-center">
                <h1 className="mt-0 mb-2">Contact</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                </nav>
                </div>
            </div>
        </section>


        <section className="main-content">
            <div className="container-xl">                
                <div className="spacer" data-height={50} />
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="section-header">
                            <h3 className="section-title">Send Message</h3>
                            <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                       <div>{ message ? message : ''}</div>
                        <form id="contact-form" className="contact-form" method="post" onSubmit={(e) => onSubmit(e)} encType="multipart/form-data">
                            <div className="messages" /> 
                            <div className="row">
                                <div className="column col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="InputName" id="InputName" placeholder="Your name" required="required" data-error="Name is required." />
                                    <div className="help-block with-errors" />
                                </div>
                                </div>
                                <div className="column col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="InputEmail" name="InputEmail" placeholder="Email address" required="required" data-error="Email is required." />
                                    <div className="help-block with-errors" />
                                </div>
                                </div>
                                <div className="column col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="InputSubject" name="InputSubject" placeholder="Subject" required="required" data-error="Subject is required." />
                                    <div className="help-block with-errors" />
                                </div>
                                </div>
                                <div className="column col-md-12">
                                <div className="form-group">
                                    <textarea name="InputMessage" id="InputMessage" className="form-control" rows={4} placeholder="Your message here..." required="required" data-error="Message is required." defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>
                                </div>
                            </div>
                            <button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default pull-right">Submit Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </MainLayout>
  )
}