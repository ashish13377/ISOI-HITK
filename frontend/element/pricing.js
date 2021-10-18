
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions";
import { useRouter } from "next/router"
import axios from "axios";

function loadRazorpay(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script)
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
    })


}

function Pricing() {

    const [open, setOpen] = useState("p2")
    const state = useSelector(state => state.user)
    const products = useSelector(state => state.products)
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts());
    }, [])

    const getMembership = async (_id) => {
        try {
            if (!state) {
                router.push("/signup")
            } else {
                
                const response = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js')
                if(!response){
                    alert("Razorpay SDK failed to load, Are you Online!")
                }


                const res = await axios.get(`https://isoi-backend.herokuapp.com/api/membership/razorpay/${_id}`);
                console.log(res);
                if (res.status != 200) {
                    return;
                }


                const options = {
                    "key": "rzp_test_AV21XwOeQmdM3Y", // Enter the Key ID generated from the Dashboard
                    "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": 'INR',
                    "name": res.data.notes.name,
                    "description": res.data.notes.desc,
                    "image": "../../images/logo.png",
                    "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (response) {
                        // alert(response.razorpay_payment_id);
                        // alert(response.razorpay_order_id);
                        // alert(response.razorpay_signature)

                        const razorpay_payment_id = response.razorpay_payment_id;
                        const razorpay_order_id = response.razorpay_order_id;
                        const razorpay_signature = response.razorpay_signature;

                        // alert("Membership guaranteed!");
                        fetch("https://isoi-backend.herokuapp.com/api/membership/verify-payment" , {
                            method : "POST",
                            headers : {
                                "Content-Type" : "application/json",
                                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("jwt"))
                            },
                            body : JSON.stringify({
                                razorpay_payment_id , razorpay_order_id , razorpay_signature
                            })
                        }).then(res => res.json()).then(data => {
                            if(data.error){
                                alert(data.error)
                            }else{
                                alert(data.message)
                                router.push("/member-registraion");
                            }
                        })
                    },
                    "prefill": {
                        "name": "",
                        "email": state.email,
                        "contact": ""
                    },
                    "theme": {
                        "color": "#18076E"
                    }
                };
                var rzp1 = new window.Razorpay(options);

                rzp1.open();

                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                });

            }
        } catch (error) {
            alert(error)
        }
    }


    return (
        <>
            <section className="content-inner" style={{ backgroundImage: "url(images/background/bg20.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="section-head style-1 text-center">
                        <h6 className="sub-title">PRICING</h6>
                        <h2 className="title">CHOOSE MEMBERSHIP</h2>
                    </div>
                    <div className="row pricingtable-wraper-2">
                        {
                            products.map((product) => {

                                return (
                                    <div className="col-lg-4 col-md-6" key={product.id}>
                                        <div className={`${open === "p1" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p1")}>
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-title">
                                                    <h3 className="title">{products && product.name}</h3>
                                                </div>
                                                <div className="pricingtable-price">
                                                    <h2 className="pricingtable-bx">₹{products && product.price}<small>/Year</small></h2>
                                                </div>
                                                <p className="text">{products && product.desc}</p>
                                                <div className="pricingtable-footer">
                                                    <a onClick={() => getMembership(product.id)} className="btn btn-primary rounded-md">Join now<i className="fa fa-angle-right m-l10"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing;
