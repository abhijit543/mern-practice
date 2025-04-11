import { useState } from "react";

const Myemail = () =>{
    let[info, setInfo] = useState({});

    const pickValue = (formobj) =>{
        info[formobj.target.name] = formobj.target.value;
        setInfo(info);
    }

    const sendEmail = async(obj) =>{
        obj.preventDefault();
        let url = "http://localhost:1111/sendemail";
        try{
            let postdata = {
                headers:{'content-type':'application/json'},
                method:"post",
                body:JSON.stringify(info)
            }
            await fetch(url, postdata)
            .then(response=>response.text())
            .then(message =>{
                alert( message );
            })
        }catch(error){
            alert("The Server is Down.. "+error);
        }
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-3"></div>
                <div className="col-xl-6">
                    <h3 className="text-center mb-4"> Compose Email </h3>
                    <form onSubmit={sendEmail}>
                        <div className="mb-4">
                            <p> To Email </p>
                            <input type="email" className="form-control" name="email" onChange={pickValue}/>
                        </div>

                        <div className="mb-4">
                            <p> Subject </p>
                            <input type="text" className="form-control" name="subject" onChange={pickValue}/>
                        </div>

                        <div className="mb-4">
                            <p> Message </p>
                            <textarea className="form-control" name="message" onChange={pickValue}></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary me-2"> Send Email </button>
                            <button type="reset" className="btn btn-warning"> Reset </button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3"></div>
            </div>
        </div>
    )
}
export default Myemail