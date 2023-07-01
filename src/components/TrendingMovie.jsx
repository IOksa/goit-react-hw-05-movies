const TrendingMovie=(props)=>{
    //const {title}=props.title;
    console.log("props.title=", props.title);
    return (
        <>
        <li>
        <p>{props.title}</p>
        </li>
        </>
        );

}

export default TrendingMovie;