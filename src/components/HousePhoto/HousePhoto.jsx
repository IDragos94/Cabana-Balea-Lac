import './HousePhoto.css'

function HousePhoto({imageUrl, title}){
    return (
        <div className="HousePhoto">            
            <div>
                <img src="https://live.staticflickr.com/1880/30572891278_18d0718bec_b.jpg" alt="Cabana Bâlea Lac"></img>
            </div>
            <div className="HousePhoto-text">
                <h4>Bucurați-vă de aerul proaspăt și relaxați-vă în natură</h4>
                <h2>Cabana Bâlea Lac</h2>
            </div>
        </div>
    )
}


export default HousePhoto;



