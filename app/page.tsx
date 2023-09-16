export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            {" "}
            OpenTable{" "}
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Sign in
              </button>
              <button className="border p-1 px-4 rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */} {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white captitalize text-shadow text-center">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                {" "}
                Overview{" "}
              </a>
              <a href="" className="mr-7">
                {" "}
                Menu{" "}
              </a>
            </nav>
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milesstone Grill</h1>
            </div>
            {/* TITLE */} {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* RATING */} {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That’s the Milestones
                promise. So, whether you’re celebrating a milestone, making the
                most of Happy Hour or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            {/* DESCRIPTION */} {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">MJ</h2>
                      </div>
                      <p className="text-center">Micheal Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Laurie was on top of everything! Slow night due to the
                          snow storm so it worked in our favor to have more one
                          on one with the staff. Delicious and well worth the
                          money.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select name="" className="py-3 border-b font-light" id="">
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 border-b font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
}
