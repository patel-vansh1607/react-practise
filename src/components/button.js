const Button = () =>{

    const onClick1 = () => {
        console.log("I have been clicked")
    }
    const onClick2 = () => {
        console.log("I have been reseted")
    }
    
        return(
            <div>
                <button onClick={onClick1}>Click me</button>
                <button onClick={onClick2}>Reset</button>
            </div>
        )
    }
    
    export default Button
    