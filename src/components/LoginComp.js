const LoginComp = () => {

    function handleSubmit () {
        console.log("Submitted")
    }
    
    return(
        <div>
            <input type="text" placeholder="Enter your UserName"/>
            <input type="email" placeholder="Enter your Email"/>
            <button onSubmit={handleSubmit}>Submit</button>
        </div>
    )
}

export default LoginComp