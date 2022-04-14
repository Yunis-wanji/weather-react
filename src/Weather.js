export default function Weather(){
       
    function handleSubmit(event){
        event.preventDefault()
        alert("I am Nairobi")
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