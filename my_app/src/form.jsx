import './App.css'

const Form = ()=>{
    return(
    <>
    <div className="main_div">
    
    <h1>Form</h1>
    <form action="#">
    <input className='input' type="text" placeholder="Name" />
    <input className='input' type="text" placeholder="Email" />
    <input className='input' type="text" placeholder="Address" />
    <input className='input' type="number" placeholder="Contact" />
    <input className='submit' type="submit" value="Submit" />
    </form>
    </div>


    
    </>
    );
}

export default Form;