import ProfilePage from "../element/profilepage";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";


function profilepage() {
  return (
    <>
      <Head>
        <title>My Profile | ISOI-HITK</title>
      </Head>
      <Header />
      <div className="page-content bg-white">
        <ProfilePage />
      </div>
      <Footer />
    </>
  )
}

export default profilepage;