import axios from 'axios';
import React, {useState} from 'react'

function UploadFile() {
    const [fileData , setFileData] = useState();

    function FileUpload (e) {
        e.preventDefault();

        // FormData()

        axios.post("http://localhost:1337/upload", {
            img: fileData
        })

        const formData = new FormData()

        console.log(formData)

    }


    return (
        <div>
            <form onSubmit={FileUpload}>
            <input type="file" name="file" />
             <button>Click to submit</button>
            </form>

        </div>
    )
}

export default UploadFile
