
import HeaderEmpty from "../layout/Headerempty";
import Head from "next/head";


function Certificate() {
    return (
        <>
            <Head>
                <title>ISOI-HITK | Certificate</title>
            </Head>
            <HeaderEmpty />
            <div className="row justify-content-center h-100 align-items-center h-100">
                <div className="col-md-10">
                        <div class="main-page">
                            <div class="sub-page" style={{ "backgroundImage": "url(images/Certificate.png)", "backgroundSize": "cover" }}>
                                <p class="text-right font-link" style={{ fontFamily: "GraphikBlod", fontWeight: "bold" }}>October 16 2021</p>
                                <h5 class="certificatename">Ashish Kumar</h5>
                                <p class="certificatetitle">for attending all the four sessions of the webinar series </p>
                                <p class="certificateevent" >Industry Academia Interaction Series</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Certificate;