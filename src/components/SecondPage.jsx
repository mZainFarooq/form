import React from "react";
import { FaPlay } from "react-icons/fa6";
import Table from "./Table";
const SecondPage = () => {
  return (
    <div className="flex justify-center py-8">
       <div className="lg:w-[90vw] w-full py-4 ">
      <div className=" md:flex part1 border-b-2 border-stone-950 hidden">
        <div className="w-1/5 border-r-2 border-stone-950 p-1">
          <span>
            Form<span className="text-3xl font-bold">8821</span>
            <br />
            (Rev. January 2021) 
            <br />
            Department of the Treasury
            <br />
            Internal Revenue Service
            <br />
          </span>
        </div>
        <div className="w-3/5 text-center p-1 flex flex-col justify-center">
          <span className="text-2xl font-bold">
          Tax Information Authorization 
          </span>
          <span className=" flex items-center justify-center">
          <FaPlay />
            <a href="www.irs.gov/FormW9" className="font-semibold">
            Go to www.irs.gov/Form8821 for instructions and the latest information.
            </a>
          </span>
          <span className=" flex items-center justify-center">
          <FaPlay />
            <a href="www.irs.gov/FormW9" className="font-semibold">
            Don’t sign this form unless all applicable lines have been completed. 
            </a>
          </span>
         <span className=" flex items-start  justify-center">
          <FaPlay className="mt-1" />
            <a href="www.irs.gov/FormW9" className="font-semibold">
            Don’t use Form 8821 to request copies of your tax returns <br />
            or to authorize someone to represent you. See instructions.
            </a>
          </span>
        </div>
        <div className="w-1/5 border-l-2 border-stone-950   ">
          <span className="text-xs font-semibold flex justify-center ">
          OMB No. 1545-1165 
          </span>
        <div className="ml-0 border-b-2 border-stone-950 w-full"></div>
          <span className="text-sm font-bold flex justify-center ">
          For IRS Use Only
          </span>
          <span className="text-xs  px-1">
          Recived by:
          </span>
          <span className="text-xs  px-1  flex gap-1 items-center">
              <label htmlFor="">
               Name
              </label>
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full "
              />
            </span>
          <span className="text-xs  px-1 flex mt-1 gap-1 items-center">
              <label htmlFor="">
               TelePhone
              </label>
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full "
              />
            </span>
          <span className="text-xs  px-1 flex mt-1 gap-1 items-center">
              <label htmlFor="">
               Function
              </label>
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full "
              />
            </span>
          <span className="text-xs  px-1 flex mt-1 gap-1 items-center">
              <label htmlFor="">
               Date
              </label>
              <input
                type="text"
                className=" outline-none w-full "
              />
            </span>
        </div>
      </div>
      <div className="part2 sm:hidden">
        <span>
          <span className="text-lg font-semibold">Before you begin. </span>For
          guidance related to the purpose of Form W-9, see Purpose of Form,
          below.
        </span>
      </div>
      <div className="part3 border-t-2 border-stone-950 flex">
        <div className="w-full  px-2">
          <div className="form-area  border-b-2 border-stone-950 ">
            <span className="flex gap-2">
            <span className="font-bold">1 Taxpayer information.</span>
            <span className="block">Taxpayer must sign and date this form on line 6. </span>
            </span>
          </div>
          <div className="p22 md:flex  ">
            <div className="p22-left md:w-8/12 md:border-r-2 md:border-stone-950 sm:w-full ">
                <span className="p-2">
                Taxpayer name and address
              </span>
              <input type="text" className="w-[90%] outline-none  bg-slate-100 h-14 px-4"  />
            </div>
            <div className="md:w-2/6  sm:w-full">
              <span>
                <label htmlFor="">
                 Taxpayer identification number(s)
                </label>
                <input type="text" className="w-[90%] outline-none bg-slate-100 px-1"  />
               </span>
               <div className="flex gap-1 border-t-2 border-stone-950">
              <span className="border-r-2 border-stone-950 px-1">
                <label htmlFor="">
                Daytime telephone number 
                </label>
                <input type="text" className="w-full outline-none bg-slate-100 px-1"  />
               </span>
              <span>
                <label htmlFor="">
                Plan number (if applicable) 
                </label>
                <input type="text" className="w-full outline-none bg-slate-100 px-1"  />
               </span>
               </div>
            </div>
          </div>
          <div className=" border-y-2 border-stone-950 md:flex ">
            <div className=" w-full flex  py-2 ">
             <span className="flex items-center gap-1"> <label htmlFor="">
                <span className="font-bold ">2 Designee(s).</span>  If you wish to name more than two designees, attach a list to this form. <b>Check here if a list of additional
                designees is attached </b>
              </label>
             <span className="flex gap-4">
             <FaPlay/>
              <input
                type="checkbox"
                className=""
              /></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="main w-full border-b-2 border-stone-950  px-4">
      <div className="flex">
      <div className=" flex flex-col  w-1/2 border-r-2 border-stone-950">
        <span>Name and Address</span>
        <b>
        Nuclius LLC <br />
1305 Lancaster Lane <br />
Woodridge, IL 60517
        </b>
       <div className="flex gap-2 items-center">
       <span className="font-bold">
        Check if to be sent copies of notices and communications
        </span>
        <input
                type="checkbox"
                className=""
 />
       </div>
      </div>
      <div className=" flex flex-col  w-1/2 px-2">
      <div className="">
   <label htmlFor="">CAF No.</label>
    <input type="text" value={'0316-08092R'} disabled className="border-b-2 text-center outline-none border-dashed border-stone-950  w-1/2" />
      </div>
      <div className="">
   <label htmlFor="">PTIN</label>
    <input type="text" value={'P03182228'} disabled className="border-b-2 text-center outline-none border-dashed border-stone-950  w-1/2" />
      </div>
      <div>
   <label htmlFor="">Telephone No.</label>
    <input type="text" value={'480-636-0927'} disabled className="border-b-2 text-center outline-none border-dashed border-stone-950  w-1/2" />
      </div>
      <div>
   <label htmlFor="">Fax No</label>
    <input type="text" disabled className="border-b-2 text-center outline-none border-dashed border-stone-950 w-1/2" />
      </div>
      <div className="flex justify-between">
   <span >Check if new:</span>
  <div className="flex items-center gap-2">
  <label htmlFor="">Address</label>
  <input type="checkbox" className="" />
  </div>
  <div className="flex items-center gap-2">
  <label htmlFor="">Telephone No.</label>
  <input type="checkbox" className="" />
  </div>
  <div className="flex items-center gap-2">
  <label htmlFor="">FAX No.</label>
  <input type="checkbox" className="" />
  </div>
      </div>
      </div>
      </div>
      <div className="flex border-t-2 border-stone-950">
      <div className=" flex flex-col justify-between  w-1/2 border-r-2 border-stone-950">
        <span>Name and Address</span>
       <div className="flex gap-2 items-center">
       <span className="font-bold">
        Check if to be sent copies of notices and communications
        </span>
        <input
                type="checkbox"
                className=""
 />
       </div>
      </div>
      <div className=" flex flex-col  w-1/2 px-2">
      <div className="">
   <label htmlFor="">CAF No.</label>
    <input type="text" className="border-b-2 text-center outline-none border-dashed border-stone-950  w-1/2" />
      </div>
      <div className="">
   <label htmlFor="">PTIN</label>
    <input type="text" className="border-b-2 text-center outline-none border-dashed border-stone-950  w-1/2" />
      </div>
      <div>
   <label htmlFor="">Telephone No.</label>
    <input type="text" className="border-b-2 text-center outline-none border-dashed border-stone-950  w-1/2" />
      </div>
      <div>
   <label htmlFor="">Fax No</label>
    <input type="text" className="border-b-2 text-center outline-none border-dashed border-stone-950 w-1/2" />
      </div>
      <div className="flex justify-between">
   <span >Check if new:</span>
  <div className="flex items-center gap-2">
  <label htmlFor="">Address</label>
  <input type="checkbox" className="" />
  </div>
  <div className="flex items-center gap-2">
  <label htmlFor="">Telephone No.</label>
  <input type="checkbox" className="" />
  </div>
  <div className="flex items-center gap-2">
  <label htmlFor="">FAX No.</label>
  <input type="checkbox" className="" />
  </div>
      </div>
      </div>
      </div>
      <div>
      </div>
      </div>
     <Table/>

      <div className="part3 border-t-2 border-stone-950 flex">
        <div className="w-full  px-2">
          <div className="form-area  border-b-2 border-stone-950 px-4">
            <span className="space-x-2">
            <span className="font-bold ">3 Tax information.</span>
            <span className="">Each designee is authorized to inspect and/or receiveconfidential tax information for the type of tax, forms,
            periods, and specific matters you list below. See the line 3 instructions.</span>
            </span>
            <div className="flex gap-2 items-center px-4">
        <input
                type="checkbox"
                className=""
 />
       <span className="">
       By checking here, I authorize access to my IRS records via an Intermediate Service Provider.
        </span>
       </div>
          </div>
          </div>
          </div>
      <div className="part5">
      <div className="space-x-2 border-b-2 px-4 border-stone-950 pb-2">
      <span className="font-semibold">4. Specific use not recorded on the Centralized Authorization File (CAF).</span>
      <span className=" ">
        If the tax information authorization is for a specific use not recorded on CAF, check this box. See the instructions.
        If you check this box, skip line 5. . . . . . 
      </span>
     <span className="inline-flex items-end gap-2">
     <FaPlay className="inline"/>
     <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
     </span>
    </div>
      <div className="space-x-2 border-b-2 px-4 border-stone-950 pb-2">
      <span className="font-semibold">5. Retention/revocation of prior tax information authorizations.</span>
      <span className=" ">
      If the line 4 box is checked, skip this line. If the line 4 box
isn’t checked, the IRS will automatically revoke all prior tax information authorizations on file unless you check the line 5
box and attach a copy of the tax information authorization(s) that you want to retain . . . . . . . . . . . .
      </span>
     <span className="inline-flex items-end gap-2">
     <FaPlay className="inline"/>
     <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
     </span>
     <span className="block">To revoke a prior tax information authorization(s) without submitting a new authorization, see the line 5 instructions.</span>
    </div>
      <div className="space-x-2 border-b-2 px-4 border-stone-950 pb-2">
      <span className="font-semibold">6. Taxpayer signature.</span>
      <span className=" ">
      If signed by a corporate officer, partner, guardian, partnership representative (or designated
individual, if applicable), executor, receiver, administrator, trustee, or individual other than the taxpayer, I certify that I have
the legal authority to execute this form with respect to the tax matters and tax periods shown on line 3 above.
      </span>
     <span className="flex items-center gap-2 font-bold">
     <FaPlay className=""/>
     <span className="">IF NOT COMPLETED, SIGNED, AND DATED, THIS TAX INFORMATION AUTHORIZATION WILL BE RETURNED. </span>
     </span>
     <span className="flex items-center gap-2 font-bold">
     <FaPlay className=""/>
     <span className="">DON’T SIGN THIS FORM IF IT IS BLANK OR INCOMPLETE. </span>
     </span>
     <div className="w-full flex text-sm mt-4">
     <div className="w-[80%]">
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full "
              />
              <label htmlFor="">
              Signature
              </label>
            </div>
     <div className="w-[20%]  ">
              <input
                type="text"
                className="border-b-2 border-l-2  px-1 border-stone-950 outline-none w-full "
              />
              <label htmlFor="" className="px-2">
               Date
              </label>
            </div>
     </div>
     <div className="w-full flex text-sm mt-4 mb-4">
     <div className="w-[80%]">
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full "
              />
              <label htmlFor="">
              Print Name
              </label>
            </div>
     <div className="w-[20%]  ">
              <input
                type="text"
                className="border-b-2   border-stone-950 outline-none w-full "
              />
              <label htmlFor="" className="px-2">
               Title (if Applicable)
              </label>
            </div>
     </div>
    </div>
      <div className="flex justify-between">
        <span className="font-bold">For Privacy Act and Paperwork Reduction Act Notice, see the instructions. </span>
        <span>
        Cat. No. 11596P
        </span>
        <span>
        Form <b>8821</b> (Rev. 01-2021)
        </span>
      </div>
      </div>
    </div>
    </div>
  )
}

export default SecondPage
