import Home from "../control/Home";

export default function Main() {
    return(
        <Home>
            <div className="container-fluid" styles={{backgroundColor: "white"}}>
                <img src={require('../../img-avata/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg')} 
                    className="card-display animate__animated animate__pulse" alt="Household appliances" style={{width: "300px"}} />
                <div className="text-slogan">
                    <p className="card-title animate__animated animate__bounceInRight"  style={{fontSize: "60px", fontFamily: "Helvetica"}}>CỬA HÀNG ĐỒ GIA DỤNG</p>
                    <p className="card-title animate__animated animate__bounceInLeft animate__delay-1s" style={{fontSize: "50px", fontFamily: "Helvetica"}}>HÀNG LẺ - GIÁ SỈ</p>
                </div>
            </div>
        </Home>
    )
}