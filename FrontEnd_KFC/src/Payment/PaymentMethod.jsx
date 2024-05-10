import React, { useState ,useEffect} from "react";
import styles from "./Payment.module.css";
import {StartOrder} from '../Copments2/StartOrder'
import {FaClock} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {FaLock} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { Popup } from "../Copments2/Popup";
import { PaymentMethodCo } from "./PaymentMethodCo";
import { useNavigate } from "react-router-dom";
import { Ordered } from "./Ordered";
export const PaymentMethod = (props) => {
  
    const [payMth, setpayMth] = useState(false);
    const [formdata, setformdata] = useState({});
    const [payType, setpayType] = useState("");
    const [showbtn, setshowbtn] = useState(false);
    const navigate=useNavigate(Ordered)
    const handlechange = (e) => {
        let key = e.target.name;
        setformdata({
          ...formdata,
          [key]: e.target.value,
        });
        console.log(payType, formdata);
      };
      useEffect(() => {
        if (payType && formdata.full_name && formdata.email && formdata.phone_no) {
          console.log("show button true");
          setshowbtn(true);
        }
      }, [payMth]);
    

      const handleCheckout = () =>{
        navigate("/Ordered");
       localStorage.removeItem("KFC")
      } 
  let kfcProduct =JSON.parse(localStorage.getItem('KFC'))||[]

  let total=kfcProduct.reduce((sum,el)=>{
     return  sum+el.price;
  },0)
   let address=JSON.parse(localStorage.getItem("address"))
  return (
    <>
     <StartOrder/>
    <div className={styles.checkout}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt=""/>
        <h1>CHECKOUT</h1>
    </div>

    <div className={styles.sequrecheckout}>
        {/* <img src="https://online.kfc.co.in/static/media/Lock.e846db0a.svg" alt=""/> */}
       < FaLock/>
        <h5>Sequre checkout</h5>
    </div>

    <div className={styles.paymentMainDiv}>
        <div className={styles.child1}>
            <div className={styles.DeleveryInfo}>

                    <div className={styles.deleveryHeading}>   <h1>Delevery INFO</h1></div>
                    <div className={styles.Name_address}>
                       <div className={styles.address}>
                       {/* <img src="https://online.kfc.co.in/static/media/LocationOn.f57c1dfd.svg" alt=""/> */}
                       <MdLocationOn/>
                        <h4>{`KFC RBD ${address}`}</h4>
                       </div>
                       <input className={styles.input} type='text' placeholder="Apartment unit building floor"/>
                       <div className={styles.ASAP}>
                        {/* <img src="https://online.kfc.co.in/static/media/WatchLater.3ca73ea2.svg" alt=""/> */}
                      <FaClock/>
                        <h3>ASAP</h3>
                       </div>
                    </div>

            </div>
             {/* Delevery option  */}
             <div className={styles.deveryOption}>
              <div className={styles.deleveryOptionchild_1}>
                
              <div className={styles.deleveryHeading2}>   <h1>Delevery OPTION</h1></div>
                <div className={styles.a}>
                    <div className={styles.LeaveAtMyDoor}><input name="a"type="radio" /> <h4>Leave at my door</h4></div>
                    <br/>
                     <br/>
                     <div className={styles.instruction}>
                     <p >To protect you and our team, we practice contactless delivery. Your driver will leave the order at your door, knock, step away, and wait at a safe distance for you to collect your food.</p>
                     </div>
                     <br/>
                     <br/>
                     <div className={styles.LeaveAtMyDoor}><input name="a"type="radio" /> <h4>Hand it to me</h4></div>
                     <hr className={styles.hr}/>
                </div>

               
              </div>
            </div>  
             {/* Delevery INFO2 */}
            <div className={styles.DeleveryInfo2}>

                    <div className={styles.deleveryHeading2}>   <h1>Delevery INFO</h1></div>
                    <div className={styles.InfoInput}>
                      <input type='text'  name="full_name"
                       onChange={handlechange} placeholder="Full Name*"  required/>
                      <br/>
                      <input type="Phone" 
                      name="phone_no"
                      onChange={handlechange}
                      placeholder="PHone No.*" required/>
                      <br/>
                      <input type='email'
                       name="email"
                       onChange={handlechange}
                       placeholder="Email*" required/>

                      <div className={styles.LeaveAtMyDoor2}><input name="a"type="radio" /> <h4>I want to know about the cool stuff at KFC on Email & SMS (I know I can unsubscribe anytime).</h4></div>                   </div>  
                  </div>    

                  {/* Paymet Method */}
               <div className={styles.payment}>
                   <h1>PAYMENT</h1>
                  
                   <h4 onClick={() => setpayMth(true)}>Add Payment Method</h4>
                </div>
                <Popup trigger={payMth} setpayMth={setpayMth}>
              <PaymentMethodCo setpayMth={setpayMth} setpayType={setpayType} />
            </Popup>
        </div>


        {/* <div className={styles.child12}> */}
        <div className={styles.cartTotal}>
        <h1>{`${kfcProduct.length} Item`}</h1>
        <br/>
        <br/>
        <br/>
        <div className={styles.same}>
          <p>SubTotal</p>
           <p>{`₹${total}`}</p>
        </div>
        <br/>
       <div className={styles.same}>
               <p>GST</p>
              <p>{`${2.28}`}</p>
       </div>
       <br/>
        <div className={styles.same}>
          <p>Rasturante Handling (Inc.taxes)  </p>
          <p>{`₹${37}`}</p>
        </div>

        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        <div className={styles.btn}>
        {showbtn ? (
            <div id={styles.paybtn1} onClick={handleCheckout}>
              <p>Continue to Payment</p>
              <p> ₹{total + 2.28 + 37}</p>
            </div>
          ) : (
            <div id={styles.paybtn2}>
              <p>Continue to Payment</p>
              <p> ₹{total + 2.28 + 37}</p>
            </div>
          )}
        </div>
      

      </div>
        {/* </div> */}
    </div>
    </>
  );
};