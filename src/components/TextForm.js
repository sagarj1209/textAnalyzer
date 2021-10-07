import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () =>{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () =>{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () =>{
            let newText = "";
            setText(newText);
            props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () =>{
            
            navigator.clipboard.writeText(text);
        //     document.getSelection().removeAllRanges();    //Desselect copied text
            props.showAlert("copied to clipboard!", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
}

    const handleOnChange = (event) =>{
            setText(event.target.value);     //for typing in textarea
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042260',textAlign:"center"}}>
            <h1 style = {{textAlign:"center"}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#265488f7' : 'white' , color : props.mode === 'dark' ? 'white' : '#042260', border : "2px solid black" , borderRadius:" 4px 20px "  }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled ={text.length===0}className="btn btn-info mx-1 my-1" style={{border : "2px solid black" , borderRadius:"15px 4px"}} onClick={handleUpClick}>UPPERCASE</button>
            <button disabled ={text.length===0}className="btn btn-info mx-1 my-1" style={{border : "2px solid black" , borderRadius:"15px 4px"}} onClick={handleLoClick}>lowerCase</button>
            
            <button disabled ={text.length===0}className="btn btn-info mx-1 my-1" style={{border : "2px solid black" , borderRadius:"15px 4px"}} onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled ={text.length===0}className="btn btn-warning mx-1 my-1" style={{border : "2px solid black" , borderRadius:"15px 4px"}} onClick={handleCopy}>Copy Text</button>
            <button disabled ={text.length===0}className="btn btn-danger mx-1 my-1" style={{border : "2px solid black" , borderRadius:"15px 4px"}} onClick={handleClearClick}>Clear Text</button>
        </div>

        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042260',textAlign:"center"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something to Preview"}</p>
        </div>
        </>
    )
}
