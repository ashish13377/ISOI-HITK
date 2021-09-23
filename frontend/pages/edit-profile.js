
import EditProfile from "../element/editprofile";
import Footer from "../layout/footer";
import Header from "../layout/header";


function editprofile() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		<EditProfile/>
	</div>
	<Footer/>
    </>
  )
}

export default editprofile;