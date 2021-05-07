import axios from 'axios';
import React, {useState} from 'react'

function UploadFile() {
    const [fileData , setFileData] = useState();

    // 
    function handleOnChange(e) {
    setFileData(e.target.files[0])


    }

   async function FileUpload (e) {
        e.preventDefault();

        console.log(fileData)
        // img()
        const data = new FormData()
        data.append("files", fileData)
        //data.append("files", fileData)
        //console.log(data)
       const res = axios.post("http://localhost:1337/upload",data)
        console.log(res)
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
