import { useRouter } from 'next/router'
import Link from 'next/link';
import { useSelector , useDispatch } from "react-redux"
import { logout, setUserDetails } from "../redux/actions/index"
import { useEffect } from 'react';
function onChange(value) {
    console.log("Captcha value:", value);
}

function ProfilePage() {

    const data = useSelector(state => state.user);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(setUserDetails(JSON.parse(localStorage.getItem("user"))));
        if(!data){
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
                                                <img className="mb-3 rounded-pill shadow-sm mt-1" src={!data ? `images/avatar1.png` : `http://localhost:8000/uploads/${data.picture}`} />
                                                <div className="osahan-user-media-body">
                                                    <h6 className="mb-2">{data && data.name}</h6>
                                                    <p class="mb-1">{data && data.phone}</p>
                                                    <p>{data && data.email}</p>
                                                 
                                                        <a onClick={logoutUser} style={{  cursor: 'pointer' }} class="text-primary mr-3"  data-target="#edit-profile-modal">
                                                        <i class="icofont-logout"/>Logout
                                                        </a>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link active" id="payments-tab" data-toggle="tab" role="tab" aria-controls="payments" aria-selected="true"><i className="icofont-atom" /> Recent Events</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade active show" id="payments" role="tabpanel" aria-labelledby="payments-tab">
                                            <h4 className="font-weight-bold mt-0 mb-4">My Account</h4>
                                            <div class="row">
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
                                                                    <h5 class="mb-1">Event Name</h5>
                                                                    <p>Events date : 12/06/2021</p>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipis occ dzSubscribedsfast </p>
                                                                    <Link href="#" class="mb-0 text-black font-weight-bold">
                                                                        <a class="text-danger" data-toggle="modal" data-target="#delete-address-modal"><i class="icofont-ui-delete"></i> DELETE</a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
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
                                                                    <h5 class="mb-1">Event Name</h5>
                                                                    <p>Events date : 17/10/2021</p>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipis occ dzSubscribedsfast </p>

                                                                    <Link href="#" class="mb-0 text-black font-weight-bold">
                                                                        <a class="text-danger" data-toggle="modal" data-target="#delete-address-modal"><i class="icofont-ui-delete"></i> DELETE</a>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
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
