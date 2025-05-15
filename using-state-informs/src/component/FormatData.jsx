import { useState } from "react"

function FormData(){
    
const [formData, setFormData] = useState({
    name:"",
    email:"",
    feedback:"",
});

const handleFormData= (e) => {
    const{ name, value} = e.target;

    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));

}


return(
    <div>
        <h1>User Feedback Form</h1>
        <form>
            <label>
                Name:
                <input
                type="text" 
                name="name"
                value= {formData.name} 
                placeholder="Enter Your Name"
                onChange= {handleFormData} />
            </label><br />
            <label>
                Email:
                <input 
                type="text" 
                name="email"
                value= {formData.email}
                placeholder="Enter Your Email"
                onChange= {handleFormData} />
            </label><br />
            <label>
                Feedback:
                <textarea name="feedback"
                value= {formData.feedback}
                placeholder="Please provide your feedback(max 200 Characters"
                onChange= {handleFormData} rows="5" cols="33" 
                    maxLength={200}
                />
                <p> {formData.feedback.length}/200 Characters</p>
            </label>
            
        </form>
        <h2>Preview</h2>
        <p id="preview-name"> Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
    </div>
);

}
export default FormData;






