import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBar from "../components/inputs/search-bar";
import MaxWidthContainer from "../components/containers/max-width-container"
import JobsFilters from "../components/jobs-filters"
import JobsListing from "../components/jobs-listing"

const Index = () => {
  const handleSearch = (text) => {
    alert("searched: ", text)
  }
  return (
    <div className="relative min-h-screen min-w-screen bg-gray-300">
      <Navbar />
      <div >
        <MaxWidthContainer>

          <SearchBar onSearch={handleSearch} />
          <div className="flex flex-row w-full">
            <div className="w-72">
              <JobsFilters />
            </div>
            <div className="w-full mt-6 ml-4" >
              <JobsListing />
            </div>
          </div>
        </MaxWidthContainer>

      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
export default Index
