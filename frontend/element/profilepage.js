import { useRouter } from 'next/router'
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux"
import { logout, setUserDetails, getMemberDetails, getMyPevents, getMyfEvents } from "../redux/actions/index"
import { useEffect, useState } from 'react';
function onChange(value) {
    console.log("Captcha value:", value);
}

function ProfilePage() {

    const data = useSelector(state => state.user);
    const fevent = useSelector(state => state.myfevents);
    console.log(fevent);
    const mevent = useSelector(state => state.mypevents);
    const isMember = useSelector(state => state.memberDetails)
    const dispatch = useDispatch();
    const router = useRouter();



    useEffect(() => {
        dispatch(setUserDetails(JSON.parse(localStorage.getItem("user"))));
        dispatch(getMemberDetails());
        dispatch(getMyfEvents());
        dispatch(getMyPevents());
        if (!data) {
            router.push("/login");
        }

    }, [])


    const logoutUser = () => {
        router.push("/");
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        dispatch(logout());
    }

    return (
        <>
            <section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
                <div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="osahan-account-page-left shadow-sm bg-white h-100">
                                    <div className="border-bottom p-4">
                                        <div className="osahan-user text-center">
                                            <div className="osahan-user-media">
                                                <img className="mb-3 rounded-pill shadow-sm mt-1" src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png" />
                                                <div className="osahan-user-media-body">
                                                    <h6 className="mb-2">{data && data.name}</h6>
                                                    <p class="mb-1">{data && data.phone}</p>
                                                    <p>{data && data.email}</p>
                                                    <div>
                                                        {
                                                            isMember ? (
                                                                <div className="border">
                                                                    <small className="text-success font-weight-normal">{isMember && isMember.duration} Year Duration</small>
                                                                    <p className="text-success font-weight-bold "><i class="fa fa-shield" aria-hidden="true"></i>&nbsp; Membership Active</p>
                                                                </div>

                                                            ) : (
                                                                <div>

                                                                    <p className="text-danger border font-weight-bold "><i class="fa fa-shield" aria-hidden="true"></i>&nbsp; Membership inactive</p>
                                                                    <small style={{
                                                                        fontStyle: "italic"
                                                                    }}>If Your membership is guranteed , then <Link href="/member-registraion">Click here</Link> to activate your membership and enroll in membership events.</small>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <a onClick={logoutUser} style={{ cursor: 'pointer' }} class="text-primary mr-3" data-target="#edit-profile-modal">
                                                        <i class="icofont-logout" />Logout
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav  flex-column border-0 pt-4" >
                                        <li className="nav-item">
                                            <Link href="/profile/dashboard">
                                                <a className="nav-link active" ><i className="icofont-search-user" /> My Account</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    {isMember && (<ul className="nav flex-column border-0 pt-4 " >
                                        <li className="nav-item">
                                            <Link href="/profile/membership-event">
                                                <a className="nav-link" ><i className="icofont-dropbox" /> Membership Events</a>
                                            </Link>
                                        </li>
                                    </ul>)}

                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade active show" id="payments" role="tabpanel" aria-labelledby="payments-tab">
                                            <h4 className="font-weight-bold mt-0 mb-4">My Account</h4>
                                            {isMember && (
                                                <div> <p className="font-weight-bold mt-0 mb-4">Registered Membership Events</p>
                                                {mevent == "" && <p>You are not registered in any of Membership events</p>}
                                                    <div class="row">

                                                        {
                                                            mevent.map((curr) => {
                                                                return (
                                                                    <div class="col-md-6">
                                                                        <div class="bg-white card payments-item mb-4 shadow-sm">
                                                                            <div class="gold-members p-4">
                                                                                <div class="media">
                                                                                    <div class="media-body">
                                                                                        <Link href="#">
                                                                                            <a >
                                                                                                <i class="icofont-certificate-alt-1 icofont-4x"></i>
                                                                                            </a>
                                                                                        </Link>
                                                                                        <h5 class="mb-1">{curr.eventName}</h5>
                                                                                        <p>Events date : {curr.eventDate}</p>
                                                                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipis occ dzSubscribedsfast </p> */}
                                                                                        <Link href="#" class="mb-0 text-black font-weight-bold">
                                                                                            <a class="text-danger" data-toggle="modal" data-target="#delete-address-modal"><i class="icofont-ui-delete"></i> DELETE</a>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }



                                                    </div>
                                                </div>)}
                                            <p className="font-weight-bold mt-0 mb-4">Registered Free Events</p>
                                            {fevent == "" && <p>You are not registered in any of free events</p>}
                                            <div class="row">
                                                {
                                                    fevent.map((curr) => {
                                                        return (
                                                            <div class="col-md-6">
                                                                <div class="bg-white card payments-item mb-4 shadow-sm">
                                                                    <div class="gold-members p-4">
                                                                        <div class="media">
                                                                            <div class="media-body">
                                                                                <Link href="#">
                                                                                    <a >
                                                                                        <i class="icofont-certificate-alt-1 icofont-4x"></i>
                                                                                    </a>
                                                                                </Link>
                                                                                <h5 class="mb-1">{curr.eventName}</h5>
                                                                                <p>Events date : {curr.eventDate}</p>
                                                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipis occ dzSubscribedsfast </p> */}
                                                                                <Link href="#" class="mb-0 text-black font-weight-bold">
                                                                                    <a class="text-danger" data-toggle="modal" data-target="#delete-address-modal"><i class="icofont-ui-delete"></i> DELETE</a>
                                                                                </Link>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProfilePage;
