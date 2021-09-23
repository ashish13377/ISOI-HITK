
import Link from 'next/link';
function onChange(value) {
    console.log("Captcha value:", value);
}

function EditProfile() {
    return (
        <>
            <section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
                <div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="osahan-account-page-left shadow-sm bg-white h-100">
                                    <div className=" p-4">
                                        <div className="osahan-user text-center">
                                            <div className="osahan-user-media">
                                                <img className="mb-3 rounded-pill shadow-sm mt-1" src="images/avatar1.png" />
                                                <div className="osahan-user-media-body">
                                                    <h6 className="mb-2">Ashish Kumar</h6>
                                                    <p class="mb-1">+91 85680-79956</p>
                                                    <p>iamosahan@gmail.com</p>
                                                    <Link href="/profile-page" class="mb-0 text-black font-weight-bold">
                                                        <a class="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal">
                                                            <i class="icofont-arrow-left"></i> Back to Account
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade active show" id="payments" role="tabpanel" aria-labelledby="payments-tab">
                                            <h4 className="font-weight-bold mt-0 mb-4">My Account</h4>
                                            <form className="dlab-form dzForm" method="POST" action="script/contact.php">
                                                <div className="dzFormMsg"></div>
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="la la-user"></i></span>
                                                            </div>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Username" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="la la-user-circle"></i></span>
                                                            </div>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="la la-lock"></i></span>
                                                            </div>
                                                            <input name="dzOther[phone]" type="text" required className="form-control" placeholder="Password" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="la la-phone"></i></span>
                                                            </div>
                                                            <input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone Number" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="la la-envelope-open-text"></i></span>
                                                            </div>
                                                            <input name="dzOther[phone]" type="text" required className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="la la-image"></i></span>
                                                            </div>
                                                            <input name="dzOther[phone]" type="file" required className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12 mt-2">
                                                        <button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i> Submit</button>
                                                    </div>
                                                    <div className="col-sm-12 mt-2">

                                                    </div>
                                    
                                                </div>
                                            </form>
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

export default EditProfile;
