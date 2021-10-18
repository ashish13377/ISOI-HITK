import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Head from "next/head";


function RefundCancellation() {
    return (
        <>
            <Head>
                <title>ISOI-HITK | Refunds & Cancellation</title>
            </Head>
            <Header />
            <div className="page-content bg-white">
                {/* <!-- Banner  --> */}
                <div className="dlab-bnr-inr overlay-primary-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1>Refunds & Cancellation</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Refunds & Cancellation</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Banner End --> */}
                <div style={{ marginLeft: "15%", marginRight: "15%", marginTop: "5%", marginBottom: "5%" }}>
                    <h2> Refunds & Cancellation Policies </h2>
                    <p> All our students/members are very important to us, that's why ISOI-Heritage Institute of Technology, has created the following Refund Policy to let You know how we handle the refunds for membership bought on our website https://www.isoihitk.live/ .</p>
                    <p> The terms "You," "Your," and "Yours" refer to the students/members using our Website. When this Policy mentions "we", "us,", and "our" it refers to the ISOI society and its subsidiaries or /and affiliates. The term "membership" refer to the 1 year/4 year plan bought on our Website by You. </p>
                    <p>This Refund Policy is governed by our Terms of Services. </p>
                    <p>For any questions regarding this Refund Policy or any requests regarding the refunds, please contact us by writing an email to us at trojan2277@gmail.com, or by phone call- 6204477640 or other contacts provided below. </p>

                    <h2> STANDARD RETURNS </h2>
                    <p> PAYMENTS ARE NON-REFUNDABLE AND THERE ARE NO REFUNDS OR CREDITS FOR PARTIALLY USED PERIODS.</p>
                    <p> It is hereby made clear by the ISOI-Heritage Institute of Technology that if you purchase either of the paid plans of membership, it can't be terminated in between the tenure of the selected plan. There will be no refund or credits if you wish to pull out of the membership mid-way. .</p>
                    <p> Once the tenure is completed, it is completely your will if you would like to renew your membership or not. .</p>
                    <h2> FURTHER INFORMATION </h2>
                    <p> This Policy was created with the help of the TermsHub.io and the Refund & Return Policy Generator and applies only to the membership of our student chapter. Our Policy does not apply to the refunds offered by other organisations or individuals. .</p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default RefundCancellation;

