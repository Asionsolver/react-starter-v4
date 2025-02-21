import MultiSelectDropdown from "./MultiSelectDropdown"


const FormInput = () => {
    return (
        <>
            <div className="mx-auto w-[94%] max-w-full pt-4 p-[2px]">
                <div>
                    <h1 className="text-xl text-text-primary mb-5">Mess Owner Information</h1>
                </div>
                <div className="flex gap-x-5">
                    <div className="w-full relative">
                        <input type="text" name="messOwnerName" id="messOwnerName" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Mess Owner Name" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Mess Owner Name</label>
                    </div>
                    <div className="w-full relative">
                        <input type="text" name="messOwnerMobileNo" id="messOwnerMobileNo" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Mess Owner Mobile Number" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Mess Owner Mobile Number</label>
                    </div>


                </div>
            </div>
            <div className="mx-auto w-[94%] max-w-full p-[2px]">
                <div>
                    <h1 className="text-xl text-text-primary mb-5">Mess Information</h1>
                </div>
                <div className="flex gap-x-5">
                    <div className="w-full relative">
                        <input type="text" name="messName" id="messName" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Mess Name" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Mess Name</label>
                    </div>

                    <div className="w-full relative">
                        <input type="text" name="gender" id="gender" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent " placeholder="Gender" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Gender</label>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[94%] max-w-full p-[2px]">
                <div>
                    <h1 className="text-xl text-text-primary mb-5">Mess Room Information</h1>
                </div>
                <div className="flex gap-x-5">
                    <div className="w-full relative">
                        {/* <input type="text" name="roomType" id="roomType" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Room Type" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Room Type</label> */}
                        <MultiSelectDropdown />
                    </div>

                    {/* Total Floor */}
                    <div className="w-full relative">
                        <input type="text" name="totalFloor" id="totalFloor" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Total Floor" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Total Floor</label>
                    </div>

                    <div className="w-full relative">
                        <input type="text" name="totalRoomInFloor" id="totalRoomInFloor" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Total Room in Floor" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Total Room in Floor</label>
                    </div>

                </div>
            </div>
            <div className="mx-auto w-[94%] max-w-full p-[2px]">
                <div className="flex gap-x-5">
                    <div className="w-full relative">
                        <input type="text" name="singleRoomRent" id="singleRoomRent" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Single Room Rent" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Single Room Rent</label>
                    </div>
                    <div className="w-full relative">
                        <input type="text" name="doubleRoomRent" id="doubleRoomRent" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Double Room Rent" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Double Room Rent</label>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[94%] max-w-full p-[2px]">
                <div className="flex gap-x-5">
                    <div className="w-full relative">
                        <input type="text" name="tripleRoomRent" id="tripleRoomRent" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Triple Room Rent" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Triple Room Rent</label>
                    </div>
                    <div className="w-full relative">
                        <input type="text" name="quadRoomRent" id="quadRoomRent" className="h-[50px] w-full px-4 py-2 text-lg outline-none border  border-border-color rounded  duration-200 peer bg-inherit focus:ring-0 focus:border-primary placeholder-transparent" placeholder="Quad Room Rent" />
                        <label className="pointer-events-none absolute -top-[8px] px-2 bg-white left-[8px] text-primary text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray peer-placeholder-shown:top-[12px] peer-placeholder-shown:bg-white peer-placeholder-shown:px-2 transition-all peer-focus:-top-[8px] peer-focus:text-primary peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">Quad Room Rent</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormInput