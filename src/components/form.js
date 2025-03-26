const Form =() => {
    return(
        <div className="form">
                <div className="form-group">
                <input onChange={handleChange} type="name" placeholder="Enter your name"> Name</input>
                <input onChange={handleChange} type="number" placeholder="Enter your number"> Number</input>
                <input onChange={handleChange} type="password" placeholder="Enter your password"> Password</input>
                <button onClick={handleClick}> Sumbit</button>
                </div>
                <div className="headings">
                    
                </div>
        </div>
    )
}