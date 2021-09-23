
import ProfilePage from "../element/profilepage";
import Footer from "../layout/footer";
import Header from "../layout/header";


function profilepage() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		<ProfilePage/>
	</div>
	<Footer/>
    </>
  )
}

export default profilepage;