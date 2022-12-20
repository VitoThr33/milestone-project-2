import React, {useState} from "react";
import { TextField, Button, InputLabel } from '@mui/material'

function UserComment(props: { id: boolean; }) {

    //state variable for textfield data
    const [inputs, setInputs] = useState({
        name: "",
        comment: "",
        post: props.id
    });

    //function to handle input field change
    function handleChange(e: { target: { name: string; value: any; }; }) {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(inputs)
    }

    //handle comment submit
    async function handleSubmit(e: any) {
        await fetch(`https://cspn-sports.herokuapp.com/comments/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
        });
        window.location.reload(false);
    }

    return(
        <div>
            <InputLabel>Name</InputLabel>
            <TextField
            name="name"
            onChange={handleChange} />

            <InputLabel>Comment</InputLabel>
            <TextField
            fullWidth={true}
            multiline={true}
            name="comment"
            onChange={handleChange}
            
            />
            <div className="comment-button">
                <Button size="small" type="submit" 
                onClick={handleSubmit}>POST COMMENT</Button>
            </div>
            
        </div>
    )
}

export default UserComment