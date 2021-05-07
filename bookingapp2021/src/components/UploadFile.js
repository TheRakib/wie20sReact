import axios from 'axios';
import React, {useState} from 'react'

function UploadFile() {
    const [fileData , setFileData] = useState();

    // 
    function handleOnChange(e) {

    console.log(e.target.files[0])

    setFileData(e.target.files[0])


    }

    function FileUpload (e) {
        e.preventDefault();

        // FormData()
        const formData = new FormData()

        formData.append("files", JSON.stringify(fileData))

        console.log(formData)

        axios.post("http://localhost:1337/upload", {
            img: formData
        })
        .then(  (response)=> {console.log("text" , response.data)} )
        .catch(   (error) => {console.log( "error text", error)})

       

    }


    return (
        <div>
            <form onSubmit={FileUpload}>
            <input type="file" name="file" onChange={handleOnChange} />
             <button>Click to submit</button>
            </form>

        </div>
    )
}

export default UploadFile
