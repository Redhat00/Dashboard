import NavBar from "@/components/NavBar"
// import {DropdownMenuCheckboxes} from "@/components/drop-down"

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <NavBar/>
      <div className="flex flex-col w-full px-4 md:px-8 border relative dark:text-white">
        <p className="text-[#757775] pt-4 w-full">Wallet details:</p>
        <div className="flex gap-4 w-full pt-4">
          <div className="border flex-col w-2/3 px-6 py-4 items-center">
            <p className="text-sm">Wallet Balance:</p>
            <div className="mt-4 font-semibold text-2xl">
              <p>122,000</p>
            </div>
          </div>
          <div className="border w-1/3">Add Cash </div>
        </div>

        <div className="flex pt-4 w-full justify-between">
          <p>Transaction List</p>
          <div className="w-1/2 border">
            <p>Filter by</p>
            {/* <DropdownMenuCheckboxes/> */}
          </div>

        </div>

      </div>
    </main>
  )
}

export default page