import React from "react";
// import myImage from "../../public/images/";

const Firstpage = () => {
  return (
    <div className="p-2">
      <div className=" md:flex part1 flex border-b-2 border-stone-950 hidden">
        <div className="w-1/5 border-r-2 border-stone-950 p-1">
          <span>
            Form<span className="text-3xl font-bold">W-9</span>
            <br />
            (Rev. March 2024)
            <br />
            Department of the Treasury
            <br />
            Internal Revenue Service
            <br />
          </span>
        </div>
        <div className="w-3/5 text-center p-1 flex flex-col justify-center">
          <span className="text-2xl font-bold">
            Request for Taxpayer <br /> Identification Number and Certification
          </span>
          <span className="block">
            <a href="www.irs.gov/FormW9" className="font-semibold">
              Go to www.irs.gov/FormW9 for instructions and the latest
              information.
            </a>
          </span>
        </div>
        <div className="w-1/5 border-l-2 border-stone-950 p-1 flex items-center">
          <span className="text-xl font-semibold">
            Give form to the requester. Do not send to the IRS.
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
        <div className="w-1/12 flex items-center justify-center">
          <img
            src="/images/test.JPG"
            alt=""
            className="min-w-[50px] max-w-[170px]"
          />
        </div>
        <div className="w-11/12 border-l-2 border-stone-950 p-2">
          <div className="form-area p1">
            <span className="">
              <label htmlFor="">
                <span className="font-bold">1</span> Name of entity/individual.
                An entry is required. (For a sole proprietor or disregarded
                entity, enter the owner’s name on line 1, and enter the
                business/disregarded entity’s name on line 2.)
              </label>
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
              />
            </span>
            <span>
              <label htmlFor="">
                <span className="font-bold ">2</span> Business name/disregarded
                entity name, if different from above
              </label>
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
              />
            </span>
          </div>
          <div className="p22 md:flex  ">
            <div className="p22-left md:w-8/12 md:border-r-2 md:border-stone-950 sm:w-full ">
              <span>
                <label htmlFor="" id="federal-tax">
                  <span className="font-bold">3a</span> Check the appropriate
                  box for federal tax classification of the entity/individual
                  whose name is entered on line 1. Check only{" "}
                  <span className="font-bold">one </span>
                  of the following seven boxes.
                </label>
                <br />
                <span className="p-2">
                  <input
                    type="checkbox"
                    id="sole-proprietor"
                    //   name="vehicle1"
                    value="Individual/sole proprietor"
                  />
                  <label htmlFor="sole-proprietor">
                    {" "}
                    Individual/sole proprietor
                  </label>
                </span>
                <span className="p-2">
                  <input
                    type="checkbox"
                    id=" C-corporation"
                    //   name="vehicle1"
                    value=" C corporation"
                  />
                  <label htmlFor=" C-corporation"> C corporation</label>
                </span>
                <span className="p-2">
                  <input
                    type="checkbox"
                    id=" S-corporation"
                    //   name="vehicle1"
                    value=" S corporation"
                  />
                  <label htmlFor=" S-corporation"> S corporation</label>
                </span>
                <span className="p-2">
                  <input
                    type="checkbox"
                    id=" Partnership"
                    //   name="vehicle1"
                    value=" Partnership"
                  />
                  <label htmlFor=" Partnership"> Partnership</label>
                </span>
                <span className="p-2">
                  <input
                    type="checkbox"
                    id=" Trust-estate"
                    //   name="vehicle1"
                    value=" Trust/estate"
                  />
                  <label htmlFor=" Trust-estate"> Trust/estate</label>
                </span>
                <span className="p-2">
                  <input
                    type="checkbox"
                    id=" llc-tax-classification"
                    //   name="vehicle1"
                    value=" llc-tax-classification"
                  />
                  <label htmlFor="llc-tax-classification">
                    {" "}
                    LLC. Enter the tax classification (C = C corporation, S = S
                    corporation, P = Partnership) . . . .{" "}
                    <input
                      type="text"
                      className="border-b-2 border-stone-950 outline-none w-32 bg-[#f0f8ff]"
                    />
                    <div>
                      <span className="font-bold"> Note:</span> Check the “LLC”
                      box above and, in the entry space, enter the appropriate
                      code (C, S, or P) for the tax classification of the LLC,
                      unless it is a disregarded entity. A disregarded entity
                      should instead check the appropriate box for the tax
                      classification of its owner.
                    </div>
                  </label>
                </span>
                <span className="p-2">
                  <input
                    type="checkbox"
                    id=" other"
                    //   name="vehicle1"
                    value="other"
                  />
                  <label htmlFor=" other"> Other(see instructions)</label>
                  <input
                    type="text"
                    className="border-b-2 border-stone-950 outline-none w-64 bg-[#f0f8ff]"
                  />
                </span>
              </span>
              <div className="border-t-2 border-stone-950 my-1">
                <span className="font-bold ">3b</span>
                <label htmlFor="3a" className="p-2">
                  {" "}
                  If on line 3a you checked “Partnership” or “Trust/estate,” or
                  checked “LLC” and entered “P” as its tax classification, and
                  you are providing this form to a partnership, trust, or estate
                  in which you have an ownership interest, check this box if you
                  have any foreign partners, owners, or beneficiaries. See
                  instructions
                </label>
                <input
                  type="checkbox"
                  id="3a"
                  //   name="vehicle1"
                  //   value="other"
                  className="rounded-none"
                />
              </div>
            </div>
            <div className="p22-right md:w-2/6 md:p-2 sm:w-full">
              <span>
                <label htmlFor="">
                  <span className="font-bold">4</span> Exemptions (codes apply
                  only to certain entities, not individuals; see instructions on
                  page 3):
                </label>
                <br />
                <br />
                <label htmlFor="">Exempt payee code (if any)</label>
                <input
                  type="text"
                  className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
                />
                <label htmlFor="">
                  {" "}
                  Exemption from Foreign Account Tax Compliance Act (FATCA)
                  reporting code (if any)
                </label>
                <input
                  type="text"
                  className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
                />
              </span>
              <br />
              <br />
              <div className="text-center">
                (Applies to accounts maintained outside the United States.)
              </div>
            </div>
          </div>
          <div className="p33 border-y-2 border-stone-950 md:flex ">
            <div className="p33-left md:w-7/12 md:border-r-2 border-stone-950 py-2 ">
              <label htmlFor="">
                <span className="font-bold">5 </span> Address (number, street,
                and apt. or suite no.). See instructions.
              </label>
              <br />
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
              />
              <label htmlFor="">
                <span className="font-bold">6 </span> City, state, and ZIP code
              </label>
              <br />
              <input
                type="text"
                className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
              />
            </div>
            <div className="p33-right md:w-5/12 p-2">
              <label htmlFor="">Requester’s name and address (optional)</label>
              <br />
              <textarea
                name=""
                id=""
                className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
              ></textarea>
            </div>
          </div>
          <div className="p44">
            <label htmlFor="">
              <span className="font-bold">7 </span>
              List account number(s) here (optional)
            </label>
            <input
              type="text"
              className="border-b-2 border-stone-950 outline-none w-full bg-[#f0f8ff]"
            />
          </div>
        </div>
      </div>
      <div className="part4 ">
        <h4 className="border-y-2 border-stone-950 font-bold">
          <span className="bg-black text-white px-2 me-6 ">Part 1 </span>
          Taxpayer Identification Number (TIN)
        </h4>
        <div className="p4-inner md:flex">
          <div className="p4-inner-left md:w-2/3">
            Enter your TIN in the appropriate box. The TIN provided must match
            the name given on line 1 to avoid backup withholding. For
            individuals, this is generally your social security number (SSN).
            However, for a resident alien, sole proprietor, or disregarded
            entity, see the instructions for Part I, later. For other entities,
            it is your employer identification number (EIN). If you do not have
            a number, see How to get a TIN, later. <br />
            <br />
            <span className="font-bold"> Note:</span> If the account is in more
            than one name, see the instructions for line 1. See also What Name
            and Number To Give the Requester for guidelines on whose number to
            enter
          </div>
          <div className="p4-inner-right md:w-1/3 py-2">
            <div>
              <div className="font-bold border-2 border-stone-950 my-1">
                Social security number
              </div>
              {/* <br /> */}
              <div className="inpts flex gap-1">
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                -
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                -
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
              </div>
            </div>
            <span className="font-bold">OR</span>
            <div>
              <div className="font-bold border-2 border-stone-950 my-1">
                Employer identification number
              </div>
              {/* <br /> */}
              <div className="inpts flex gap-1">
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                -
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text "
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
                <input
                  type="text"
                  className="border-2 border-stone-950 w-6 bg-[#f0f8ff]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part5">
        <h4 className="border-y-2 border-stone-950 font-bold">
          <span className="bg-black text-white px-2 me-6">Part 2 </span>
          Certification
        </h4>
        <div>
          Under penalties of perjury, I certify that: <br /> 1. The number shown
          on this form is my correct taxpayer identification number (or I am
          waiting for a number to be issued to me); and <br /> 2. I am not
          subject to backup withholding because (a) I am exempt from backup
          withholding, or (b) I have not been notified by the Internal Revenue
          Service (IRS) that I am subject to backup withholding as a result of a
          failure to report all interest or dividends, or (c) the IRS has
          notified me that I am no longer subject to backup withholding; and{" "}
          <br /> 3. I am a U.S. citizen or other U.S. person (defined below);
          and <br /> 4. The FATCA code(s) entered on this form (if any)
          indicating that I am exempt from FATCA reporting is correct.
          <br /> <span className="font-bold">Certification</span> instructions.
          You must cross out item 2 above if you have been notified by the IRS
          that you are currently subject to backup withholding because you have
          failed to report all interest and dividends on your tax return. For
          real estate transactions, item 2 does not apply. For mortgage interest
          paid, acquisition or abandonment of secured property, cancellation of
          debt, contributions to an individual retirement arrangement (IRA),
          and, generally, payments other than interest and dividends, you are
          not required to sign the certification, but you must provide your
          correct TIN. See the instructions for Part II, later.
        </div>
      </div>
      <div className="part6 hidden md:block">
        <div className="p6-inner flex gap-96 border-y-2 border-stone-950">
          <span className="flex gap-2 font-bold">
            <h4 className="border-r-2 border-stone-950">
              Sign <br /> Here
            </h4>
            <h3>
              Signature of <br /> U.S. persons
            </h3>
          </span>
          <span className="font-bold">Date</span>
        </div>
        <div className="p6-inner-cont flex gap-8">
          <div className="lft w-1/2">
            <h1 className="text-2xl font-bold">General Instructions</h1>
            Section references are to the Internal Revenue Code unless otherwise
            noted. <br />{" "}
            <span className="font-bold">Future developments.</span> For the
            latest information about developments related to Form W-9 and its
            instructions, such as legislation enacted after they were published,
            go to www.irs.gov/FormW9
            <h1 className="text-2xl font-bold">What's New</h1>
            Line 3a has been modified to clarify how a disregarded entity
            completes this line. An LLC that is a disregarded entity should
            check the appropriate box for the tax classification of its owner.
            Otherwise, it should check the “LLC” box and enter its appropriate
            tax classification.
          </div>
          <div className="rght w-1/2">
            New line 3b has been added to this form. A flow-through entity is
            required to complete this line to indicate that it has direct or
            indirect foreign partners, owners, or beneficiaries when it provides
            the Form W-9 to another flow-through entity in which it has an
            ownership interest. This change is intended to provide a
            flow-through entity with information regarding the status of its
            indirect foreign partners, owners, or beneficiaries, so that it can
            satisfy any applicable reporting requirements. For example, a
            partnership that has any indirect foreign partners may be required
            to complete Schedules K-2 and K-3. See the Partnership Instructions
            for Schedules K-2 and K-3 (Form 1065). <br />
            <h1 className="text-2xl font-bold">Purpose of Form</h1>
            An individual or entity (Form W-9 requester) who is required to file
            an information return with the IRS is giving you this form because
            they
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
