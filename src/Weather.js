export default function Weather(){
       
    function handleSubmit(event){
        event.preventDefault()
        return(
            <ul>
                <li>Nairobi</li>
                <li>
                    Thurs 12:00pm
                </li>
                <li>Clouds</li>
            </ul>
        )
    }

    return(
    <div className="Weather">
        <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type city"/>
        <input type="submit" value="search"/>
        </form>
    </div>
    );
}