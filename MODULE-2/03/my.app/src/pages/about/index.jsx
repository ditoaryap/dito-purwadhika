function About(){

    function popUpSomething(){
        alert('ASIK')
    }

    return (
        <div>
            <h1>This is About Section</h1>
            <button onClick={popUpSomething}>Click Me</button>
        </div>
    );
}

export default About