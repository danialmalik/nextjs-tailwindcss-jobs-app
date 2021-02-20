import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MaxWidthContainer from "../components/containers/max-width-container";
import JobsDashboard from "../components/jobs-dashboard";

const Index = () => {

  return (
    <div className="relative min-h-screen min-w-screen bg-gray-300">
      <Navbar />
      <div >
        <MaxWidthContainer>
          <JobsDashboard />
        </MaxWidthContainer>

      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
export default Index
