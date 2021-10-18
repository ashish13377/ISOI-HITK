import ProfileEvent from "../../element/profile-event";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Head from "next/head";


function MembershipEvent() {
  return (
    <>
      <Head>
        <title>ISOI-HITK | My Profile</title>
      </Head>
      <Header />
      <div className="page-content bg-white">
        <ProfileEvent />
      </div>
     <Footer />
    </>
  )
}

export default MembershipEvent;