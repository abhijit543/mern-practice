
import { useState, useEffect} from "react";

const FileReadWrite = () =>{
    let[newmessage, pickMessage] = useState("");
    let[messagelist, updateMessageList] = useState([]);

    const getMessage = () =>{
        fetch("http://localhost:1111/messagelist")
        .then(response=>response.text())
        .then(msg =>{
            let msgarray = msg.split("##");
            msgarray.pop();
            updateMessageList(msgarray.reverse());
        })
    }

    useEffect(()=>{
        getMessage();
    }, []);

    const save = () =>{
        let url = "http://localhost:1111/savemessage";
        let postdata = {
            method:"post",
            headers:{'content-type':'application/json'},
            body:JSON.stringify( {"message":newmessage} )
        }

        fetch(url, postdata)
        .then(response =>response.text())
        .then(info=>{
            alert( info );
            pickMessage("");
            getMessage();
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Write Your Message </h3>

                    <textarea 
                    className="form-control m-4" 
                    onChange={obj=>pickMessage(obj.target.value)} 
                    value={newmessage}></textarea>

                    <button className="btn btn-primary" onClick={save}> Send Message </button>
                </div>
            </div>
            <div className="row mt-5">
                {
                    messagelist.map((onemsg, index)=>{
                        return(
                            <div className="col-xl-3 mb-4" key={index}>
                                <p className="p-3 rounded bg-light" key={index}> {onemsg} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FileReadWrite;