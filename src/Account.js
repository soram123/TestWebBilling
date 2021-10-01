import { Container } from "reactstrap"
import style from './style.module.css'
import moment from "moment"
import { useSelector } from "react-redux"

const Account = ()=>{
    //const [adminInfo, setAdminInfo] = useState({})
   
    const adminInfo = useSelector((state)=>{
        return state.account
    }) 
    return (<div>
        <Container className={style.themed}>
                <h2 style={{color:'forestgreen',fontSize:'60px',marginTop:'50px',marginBottom:'40px'}}>Account</h2>
                
                <h3 style={{color:'darkslateblue',fontSize:'30px',marginBottom:'20px'}}>Username : {adminInfo.username}</h3>  
                <h3 style={{color:'darkslateblue',fontSize:'30px',marginBottom:'20px'}}>Email : {adminInfo.email}</h3> 
                <h3 style={{color:'darkslateblue',fontSize:'30px',marginBottom:'20px'}}>Address : {adminInfo.address}</h3>
                <h3 style={{color:'darkslateblue',fontSize:'30px',marginBottom:'20px'}}>BusinessName : {adminInfo.businessName}</h3>
                <h3 style={{color:'darkslateblue',fontSize:'30px',marginBottom:'20px'}}>CreatedAt : {moment(adminInfo.createdAt).format('l')}</h3>
        </Container>
        </div>
        

    )
}
export default Account