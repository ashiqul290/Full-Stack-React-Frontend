import { useState } from "react";

export default function ReviwAndDescription() {
    const [showDes , setShowDes] = useState(true)
    const [showReview , setShowReview] = useState(false)
    const [showReting , setShowReting] = useState(false)
  const [rating, setRating] = useState(0);

let descriptionheandler = ()=>{
    setShowDes(true)
    setShowReview(false)
    setShowReting(false)
}
let revMassgheandler = ()=>{
    setShowDes(false)
    setShowReting(false)
    setShowReview(true)
}
let retingheandler = ()=>{
    setShowDes(false)
    setShowReting(true)
    setShowReview(false)
}

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 my-10">
      {/* Tabs */}
      <div className="flex  text-sm font-medium">
        <button onClick={descriptionheandler} className={`px-4 py-2 bg-gray-200/80 ${showDes ? 'border border-green-600 text-green-600' : "text-gray-500"} cursor-pointer  `}>
          Description
        </button>
        <button onClick={revMassgheandler} className={`px-4 py-2 bg-gray-200/80 ${showReview ? 'border border-green-600 text-green-600' : "text-gray-500"} cursor-pointer  `}>
          Customer Reviews Message
        </button>
        <button onClick={retingheandler} className={`px-4 py-2 bg-gray-200/80 ${showReting ? 'border border-green-600 text-green-600' : "text-gray-500"} cursor-pointer  `}>
          Reviews (0)
        </button>
      </div>

      {/* Description */}
      <div className={`${showDes? "block" : "hidden"} border border-gray-200 p-10`}>
        <h3 className="font-semibold text-lg">
          Lightweight Puffer Jacket With a Hood
        </h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          laborum ipsam explicabo tempora nostrum at, sequi doloribus aperiam
          quis magnam totam, voluptatem quibusdam obcaecati dolor voluptatibus
          recusandae. Nulla, iure iste.
        </p>
        <h3 className="font-semibold text-lg">
          Women Embroidered A-line Kurta
        </h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          laborum ipsam explicabo tempora nostrum at, sequi doloribus aperiam
          quis magnam totam, voluptatem quibusdam obcaecati dolor voluptatibus
          recusandae. Nulla, iure iste. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Unde impedit exercitationem, enim eum nulla
          inventore aliquam neque esse natus. Earum ut quidem hic laborum.
          Exercitationem odit voluptates architecto iste officia doloremque,
          sapiente itaque, omnis aliquam iusto expedita obcaecati. Natus
          voluptatibus quidem accusantium vitae doloribus pariatur ipsum, velit
          provident, veniam facere voluptatum officia. Magni molestias incidunt
          animi? Vel itaque similique pariatur iste sequi culpa, nihil commodi
          saepe repellendus impedit unde nesciunt cum quasi dolor sit doloribus!
          Non iste doloribus mollitia quia? Rerum dolor itaque voluptas? Numquam
          reprehenderit esse itaque saepe sunt nemo animi modi in maxime,
          exercitationem accusantium nostrum dolores accusamus non magni
          quibusdam omnis error. Sequi velit natus ad quo fugiat quam vero
          blanditiis expedita aspernatur rem. Iure harum facere error sed
          doloremque ut mollitia enim quae, magni tempora sequi. Error, libero?
          Nulla nostrum inventore sapiente dolor aliquid, nemo voluptates
          quisquam ullam animi itaque ea deleniti nam a sed, debitis quis earum
          totam atque veritatis dolorum voluptas. Et voluptate quasi error
          commodi amet aut architecto ipsum reiciendis facilis debitis
          temporibus earum asperiores, adipisci quas modi provident excepturi
          iusto nisi itaque eaque eligendi? Tenetur, nihil deserunt eligendi
          aliquid magnam doloremque in quod sed aperiam consectetur porro odio
          pariatur vel rem. A!
        </p>

        <h3 className="font-semibold text-lg">
          Women Embroidered A-line Kurta
        </h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          laborum ipsam explicabo tempora nostrum at, sequi doloribus aperiam
          quis magnam totam, voluptatem quibusdam obcaecati dolor voluptatibus
          recusandae. Nulla, iure iste.
        </p>
      </div>

      {/* Customer reviews Message   */}
      <div className={`${showReview ? "block" : "hidden"} border border-gray-200 p-10`}>
        <div className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 !leading-tight">
              Customer reviews
            </h3>
          </div>
          <div className="flex lg:items-center sm:justify-between max-lg:flex-col gap-x-6 gap-y-8 mt-8">
            <div className="space-y-2 w-full max-w-sm">
              <div className="flex items-center">
                <div className="min-w-9">
                  <p className="text-sm text-slate-900 font-medium">5.0</p>
                </div>
                <div className="bg-gray-300 rounded w-full h-3">
                  <div className="w-2/3 h-full rounded bg-blue-700" />
                </div>
                <div className="min-w-14">
                  <p className="text-sm text-slate-900 font-medium ml-4">66%</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="min-w-9">
                  <p className="text-sm text-slate-900 font-medium">4.0</p>
                </div>
                <div className="bg-gray-300 rounded w-full h-3">
                  <div className="w-1/3 h-full rounded bg-blue-700" />
                </div>
                <div className="min-w-14">
                  <p className="text-sm text-slate-900 font-medium ml-4">33%</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="min-w-9">
                  <p className="text-sm text-slate-900 font-medium">3.0</p>
                </div>
                <div className="bg-gray-300 rounded w-full h-3">
                  <div className="w-1/6 h-full rounded bg-blue-700" />
                </div>
                <div className="min-w-14">
                  <p className="text-sm text-slate-900 font-medium ml-4">16%</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="min-w-9">
                  <p className="text-sm text-slate-900 font-medium">2.0</p>
                </div>
                <div className="bg-gray-300 rounded w-full h-3">
                  <div className="w-1/12 h-full rounded bg-blue-700" />
                </div>
                <div className="min-w-14">
                  <p className="text-sm text-slate-900 font-medium ml-4">8%</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="min-w-9">
                  <p className="text-sm text-slate-900 font-medium">1.0</p>
                </div>
                <div className="bg-gray-300 rounded w-full h-3">
                  <div className="w-[6%] h-full rounded bg-blue-700" />
                </div>
                <div className="min-w-14">
                  <p className="text-sm text-slate-900 font-medium ml-4">6%</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:text-center">
              <h3 className="text-slate-900 text-xl font-semibold">
                Total Reviews
              </h3>
              <h6 className="text-slate-600 text-base mt-3 font-medium">
                2k + Reviews
              </h6>
            </div>
            <div className="w-full lg:text-center">
              <h3 className="text-slate-900 text-xl font-semibold">
                Average Rating
              </h3>
              <div className="flex items-center lg:justify-center space-x-0.5 text-blue-700 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-8 mt-12">
            <div className="sm:p-8 p-6 bg-gray-100 rounded-xl">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img
                      src="https://readymadeui.com/team-2.webp"
                      className="object-cover rounded-full w-14 h-14 border-2 border-gray-400"
                      alt="customer-img-1"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] text-slate-900 font-semibold">
                      Emily Carter
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 h-2 fill-green-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                        </svg>
                      </span>
                      <p className="text-slate-600 text-xs">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.2 478.2"
                    >
                      <path
                        d="M457.575 325.1c9.8-12.5 14.5-25.9 13.9-39.7-.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-.1c-5 .9-10.3 2-15.7 3.2-.4-6.4.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-.6.4-1.1.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6.5 67.6 8.6 133.3 7.3 11.9.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6V270.1c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 .1 4.1 7.1 4.6 16.7.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 .1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-.1l-10.1-1.2c.6-2.8.9-5.8.9-8.8V270.1c0-4.3-.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9.8-2.1 1-4.4.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5.4-.1.9-.2 1.3-.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4.1.1 10.6 10 11.1 23.3.4 8.9-3.8 18-12.5 27z"
                        data-original="#000000"
                      />
                    </svg>
                    17
                  </button>
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.174 478.174"
                    >
                      <path
                        d="M457.525 153.074c1.9-5.1 3.7-12 4.2-20 .7-14.1-2.8-33.9-22.7-51.9 1.3-9.2 1.3-23.8-6.8-38.3-10.7-19.2-31.6-32.2-62.2-38.7-20.5-4.4-47.4-5.3-80-2.8-65.7-1.3-129.7 6.8-133.3 7.3l-23.5 2.8c-6.8-4.8-15.1-7.6-24-7.6h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c7.2 0 13.9-1.8 19.8-5 4.2 9.2 10.4 19.7 19.6 29.4.5.5 1 1 1.6 1.4 31.4 24.1 68.4 110.9 81.5 146.3-1.3 11-2.6 34.8 8.4 47.7 4.9 5.7 11.7 8.8 19.3 8.8 7.7 0 34.3-1.8 50.9-24.7 15.7-21.8 16.6-54.4 2.6-97-11.8-35.8-12.9-51.7-12.5-58.1 5.4 1.2 10.7 2.3 15.8 3.2h.1c.9.2 22.9 5.1 49.2 6.3 37.4 1.8 64.5-4.7 80.3-19.2 21.8-19.9 19.2-45.3 12.7-61.5 5.6-7.3 12.4-19.2 13-34.4.4-13.8-4.2-27.1-14-39.7zm-348.3 69.6h-61c-8.1 0-14.6-6.6-14.6-14.6v-162.5c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.5 14.6-14.6 14.6zm321.7 9.7c0 .1 3.5 5.6 4.7 13.1 1.5 9.3-1.1 17-8.1 23.4-19.1 17.4-74.1 13.4-104.8 6.6-.4-.1-.8-.2-1.3-.3-5.5-1-11.4-2.2-17.4-3.5-6.4-2.3-15.2-2-21.8 3.9-13.3 11.8-11.8 38.6 4.9 89.5 11 33.4 11.4 58.6 1.2 72.7-8.6 11.9-22.8 13.4-28.2 13.5-2.4-4-3.1-17.7-1.3-29 .3-2.2.1-4.5-.6-6.7-1.9-5.1-45.8-125.3-90.7-160.9-11.7-12.7-16.8-27.6-18.6-34.3 1.2-3.9 1.9-8.1 1.9-12.4v-162.4c0-3-.3-6-.9-8.8l10.1-1.2h.1c.6-.1 65.7-8.5 130-7.1h1.4c30.3-2.4 54.8-1.7 72.9 2.2 22.4 4.8 37.2 13.2 44 25.1 7.1 12.3 3.2 25 2.9 26.2-2.1 5.6-.2 11.7 4.6 15.3 29.6 22.2 16 48.1 14.2 51.3-3.3 5.2-2.5 11.8 1.8 16.3 8.6 9 12.8 18 12.5 26.8-.4 13.1-10.5 22.9-11.2 23.5-5 4.3-5.9 11.6-2.3 17.2z"
                        data-original="#000000"
                      />
                    </svg>
                    8
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 text-base font-semibold">
                  Quick and Easy Experience
                </h6>
                <div className="flex items-center space-x-0.5 text-blue-700 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <p className="text-slate-600 text-sm !ml-2">2 days ago</p>
                </div>
                <div className="mt-4">
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    Everything was seamless. Ordering was simple and the
                    response time was super fast. Highly recommend to anyone
                    looking for convenience and speed.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:p-8 p-6 bg-gray-100 rounded-xl">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img
                      src="https://readymadeui.com/team-3.webp"
                      className="object-cover rounded-full w-14 h-14 border-2 border-gray-400"
                      alt="customer-img-2"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] text-slate-900 font-semibold">
                      Daniel Kim
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 h-2 fill-green-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                        </svg>
                      </span>
                      <p className="text-slate-600 text-xs">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.2 478.2"
                    >
                      <path
                        d="M457.575 325.1c9.8-12.5 14.5-25.9 13.9-39.7-.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-.1c-5 .9-10.3 2-15.7 3.2-.4-6.4.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-.6.4-1.1.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6.5 67.6 8.6 133.3 7.3 11.9.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6V270.1c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 .1 4.1 7.1 4.6 16.7.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 .1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-.1l-10.1-1.2c.6-2.8.9-5.8.9-8.8V270.1c0-4.3-.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9.8-2.1 1-4.4.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5.4-.1.9-.2 1.3-.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4.1.1 10.6 10 11.1 23.3.4 8.9-3.8 18-12.5 27z"
                        data-original="#000000"
                      />
                    </svg>
                    36
                  </button>
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.174 478.174"
                    >
                      <path
                        d="M457.525 153.074c1.9-5.1 3.7-12 4.2-20 .7-14.1-2.8-33.9-22.7-51.9 1.3-9.2 1.3-23.8-6.8-38.3-10.7-19.2-31.6-32.2-62.2-38.7-20.5-4.4-47.4-5.3-80-2.8-65.7-1.3-129.7 6.8-133.3 7.3l-23.5 2.8c-6.8-4.8-15.1-7.6-24-7.6h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c7.2 0 13.9-1.8 19.8-5 4.2 9.2 10.4 19.7 19.6 29.4.5.5 1 1 1.6 1.4 31.4 24.1 68.4 110.9 81.5 146.3-1.3 11-2.6 34.8 8.4 47.7 4.9 5.7 11.7 8.8 19.3 8.8 7.7 0 34.3-1.8 50.9-24.7 15.7-21.8 16.6-54.4 2.6-97-11.8-35.8-12.9-51.7-12.5-58.1 5.4 1.2 10.7 2.3 15.8 3.2h.1c.9.2 22.9 5.1 49.2 6.3 37.4 1.8 64.5-4.7 80.3-19.2 21.8-19.9 19.2-45.3 12.7-61.5 5.6-7.3 12.4-19.2 13-34.4.4-13.8-4.2-27.1-14-39.7zm-348.3 69.6h-61c-8.1 0-14.6-6.6-14.6-14.6v-162.5c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.5 14.6-14.6 14.6zm321.7 9.7c0 .1 3.5 5.6 4.7 13.1 1.5 9.3-1.1 17-8.1 23.4-19.1 17.4-74.1 13.4-104.8 6.6-.4-.1-.8-.2-1.3-.3-5.5-1-11.4-2.2-17.4-3.5-6.4-2.3-15.2-2-21.8 3.9-13.3 11.8-11.8 38.6 4.9 89.5 11 33.4 11.4 58.6 1.2 72.7-8.6 11.9-22.8 13.4-28.2 13.5-2.4-4-3.1-17.7-1.3-29 .3-2.2.1-4.5-.6-6.7-1.9-5.1-45.8-125.3-90.7-160.9-11.7-12.7-16.8-27.6-18.6-34.3 1.2-3.9 1.9-8.1 1.9-12.4v-162.4c0-3-.3-6-.9-8.8l10.1-1.2h.1c.6-.1 65.7-8.5 130-7.1h1.4c30.3-2.4 54.8-1.7 72.9 2.2 22.4 4.8 37.2 13.2 44 25.1 7.1 12.3 3.2 25 2.9 26.2-2.1 5.6-.2 11.7 4.6 15.3 29.6 22.2 16 48.1 14.2 51.3-3.3 5.2-2.5 11.8 1.8 16.3 8.6 9 12.8 18 12.5 26.8-.4 13.1-10.5 22.9-11.2 23.5-5 4.3-5.9 11.6-2.3 17.2z"
                        data-original="#000000"
                      />
                    </svg>
                    12
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 text-base font-semibold">
                  Fantastic Support
                </h6>
                <div className="flex items-center space-x-0.5 text-blue-700 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <p className="text-slate-600 text-sm !ml-2">3 days ago</p>
                </div>
                <div className="mt-4">
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    Had a few questions before ordering and the customer service
                    team was amazing—super responsive and knowledgeable. It
                    really made a difference!
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:p-8 p-6 bg-gray-100 rounded-xl">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img
                      src="https://readymadeui.com/team-4.webp"
                      className="object-cover rounded-full w-14 h-14 border-2 border-gray-400"
                      alt="customer-img-3"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] text-slate-900 font-semibold">
                      Priya Singh
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 h-2 fill-green-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                        </svg>
                      </span>
                      <p className="text-slate-600 text-xs">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.2 478.2"
                    >
                      <path
                        d="M457.575 325.1c9.8-12.5 14.5-25.9 13.9-39.7-.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-.1c-5 .9-10.3 2-15.7 3.2-.4-6.4.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-.6.4-1.1.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6.5 67.6 8.6 133.3 7.3 11.9.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6V270.1c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 .1 4.1 7.1 4.6 16.7.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 .1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-.1l-10.1-1.2c.6-2.8.9-5.8.9-8.8V270.1c0-4.3-.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9.8-2.1 1-4.4.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5.4-.1.9-.2 1.3-.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4.1.1 10.6 10 11.1 23.3.4 8.9-3.8 18-12.5 27z"
                        data-original="#000000"
                      />
                    </svg>
                    45
                  </button>
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.174 478.174"
                    >
                      <path
                        d="M457.525 153.074c1.9-5.1 3.7-12 4.2-20 .7-14.1-2.8-33.9-22.7-51.9 1.3-9.2 1.3-23.8-6.8-38.3-10.7-19.2-31.6-32.2-62.2-38.7-20.5-4.4-47.4-5.3-80-2.8-65.7-1.3-129.7 6.8-133.3 7.3l-23.5 2.8c-6.8-4.8-15.1-7.6-24-7.6h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c7.2 0 13.9-1.8 19.8-5 4.2 9.2 10.4 19.7 19.6 29.4.5.5 1 1 1.6 1.4 31.4 24.1 68.4 110.9 81.5 146.3-1.3 11-2.6 34.8 8.4 47.7 4.9 5.7 11.7 8.8 19.3 8.8 7.7 0 34.3-1.8 50.9-24.7 15.7-21.8 16.6-54.4 2.6-97-11.8-35.8-12.9-51.7-12.5-58.1 5.4 1.2 10.7 2.3 15.8 3.2h.1c.9.2 22.9 5.1 49.2 6.3 37.4 1.8 64.5-4.7 80.3-19.2 21.8-19.9 19.2-45.3 12.7-61.5 5.6-7.3 12.4-19.2 13-34.4.4-13.8-4.2-27.1-14-39.7zm-348.3 69.6h-61c-8.1 0-14.6-6.6-14.6-14.6v-162.5c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.5 14.6-14.6 14.6zm321.7 9.7c0 .1 3.5 5.6 4.7 13.1 1.5 9.3-1.1 17-8.1 23.4-19.1 17.4-74.1 13.4-104.8 6.6-.4-.1-.8-.2-1.3-.3-5.5-1-11.4-2.2-17.4-3.5-6.4-2.3-15.2-2-21.8 3.9-13.3 11.8-11.8 38.6 4.9 89.5 11 33.4 11.4 58.6 1.2 72.7-8.6 11.9-22.8 13.4-28.2 13.5-2.4-4-3.1-17.7-1.3-29 .3-2.2.1-4.5-.6-6.7-1.9-5.1-45.8-125.3-90.7-160.9-11.7-12.7-16.8-27.6-18.6-34.3 1.2-3.9 1.9-8.1 1.9-12.4v-162.4c0-3-.3-6-.9-8.8l10.1-1.2h.1c.6-.1 65.7-8.5 130-7.1h1.4c30.3-2.4 54.8-1.7 72.9 2.2 22.4 4.8 37.2 13.2 44 25.1 7.1 12.3 3.2 25 2.9 26.2-2.1 5.6-.2 11.7 4.6 15.3 29.6 22.2 16 48.1 14.2 51.3-3.3 5.2-2.5 11.8 1.8 16.3 8.6 9 12.8 18 12.5 26.8-.4 13.1-10.5 22.9-11.2 23.5-5 4.3-5.9 11.6-2.3 17.2z"
                        data-original="#000000"
                      />
                    </svg>
                    15
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 text-base font-semibold">
                  Exceeded Expectations
                </h6>
                <div className="flex items-center space-x-0.5 text-blue-700 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <p className="text-slate-600 text-sm !ml-2">4 days ago</p>
                </div>
                <div className="mt-4">
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    From start to finish, I felt taken care of. The ordering
                    process was smooth and the delivery was right on time. Would
                    definitely use this service again.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:p-8 p-6 bg-gray-100 rounded-xl">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img
                      src="https://readymadeui.com/team-5.webp"
                      className="object-cover rounded-full w-14 h-14 border-2 border-gray-400"
                      alt="customer-img-4"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] text-slate-900 font-semibold">
                      Liam Brown
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 h-2 fill-green-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                        </svg>
                      </span>
                      <p className="text-slate-600 text-xs">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.2 478.2"
                    >
                      <path
                        d="M457.575 325.1c9.8-12.5 14.5-25.9 13.9-39.7-.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-.1c-5 .9-10.3 2-15.7 3.2-.4-6.4.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-.6.4-1.1.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6.5 67.6 8.6 133.3 7.3 11.9.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6V270.1c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 .1 4.1 7.1 4.6 16.7.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 .1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-.1l-10.1-1.2c.6-2.8.9-5.8.9-8.8V270.1c0-4.3-.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9.8-2.1 1-4.4.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5.4-.1.9-.2 1.3-.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4.1.1 10.6 10 11.1 23.3.4 8.9-3.8 18-12.5 27z"
                        data-original="#000000"
                      />
                    </svg>
                    32
                  </button>
                  <button
                    type="button"
                    className="text-[15px] flex items-center gap-2 cursor-pointer text-slate-900 font-medium bg-transparent border-0 outline-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 478.174 478.174"
                    >
                      <path
                        d="M457.525 153.074c1.9-5.1 3.7-12 4.2-20 .7-14.1-2.8-33.9-22.7-51.9 1.3-9.2 1.3-23.8-6.8-38.3-10.7-19.2-31.6-32.2-62.2-38.7-20.5-4.4-47.4-5.3-80-2.8-65.7-1.3-129.7 6.8-133.3 7.3l-23.5 2.8c-6.8-4.8-15.1-7.6-24-7.6h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c7.2 0 13.9-1.8 19.8-5 4.2 9.2 10.4 19.7 19.6 29.4.5.5 1 1 1.6 1.4 31.4 24.1 68.4 110.9 81.5 146.3-1.3 11-2.6 34.8 8.4 47.7 4.9 5.7 11.7 8.8 19.3 8.8 7.7 0 34.3-1.8 50.9-24.7 15.7-21.8 16.6-54.4 2.6-97-11.8-35.8-12.9-51.7-12.5-58.1 5.4 1.2 10.7 2.3 15.8 3.2h.1c.9.2 22.9 5.1 49.2 6.3 37.4 1.8 64.5-4.7 80.3-19.2 21.8-19.9 19.2-45.3 12.7-61.5 5.6-7.3 12.4-19.2 13-34.4.4-13.8-4.2-27.1-14-39.7zm-348.3 69.6h-61c-8.1 0-14.6-6.6-14.6-14.6v-162.5c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.5 14.6-14.6 14.6zm321.7 9.7c0 .1 3.5 5.6 4.7 13.1 1.5 9.3-1.1 17-8.1 23.4-19.1 17.4-74.1 13.4-104.8 6.6-.4-.1-.8-.2-1.3-.3-5.5-1-11.4-2.2-17.4-3.5-6.4-2.3-15.2-2-21.8 3.9-13.3 11.8-11.8 38.6 4.9 89.5 11 33.4 11.4 58.6 1.2 72.7-8.6 11.9-22.8 13.4-28.2 13.5-2.4-4-3.1-17.7-1.3-29 .3-2.2.1-4.5-.6-6.7-1.9-5.1-45.8-125.3-90.7-160.9-11.7-12.7-16.8-27.6-18.6-34.3 1.2-3.9 1.9-8.1 1.9-12.4v-162.4c0-3-.3-6-.9-8.8l10.1-1.2h.1c.6-.1 65.7-8.5 130-7.1h1.4c30.3-2.4 54.8-1.7 72.9 2.2 22.4 4.8 37.2 13.2 44 25.1 7.1 12.3 3.2 25 2.9 26.2-2.1 5.6-.2 11.7 4.6 15.3 29.6 22.2 16 48.1 14.2 51.3-3.3 5.2-2.5 11.8 1.8 16.3 8.6 9 12.8 18 12.5 26.8-.4 13.1-10.5 22.9-11.2 23.5-5 4.3-5.9 11.6-2.3 17.2z"
                        data-original="#000000"
                      />
                    </svg>
                    6
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 text-base font-semibold">
                  Highly Recommended
                </h6>
                <div className="flex items-center space-x-0.5 text-blue-700 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                  </svg>
                  <p className="text-slate-600 text-sm !ml-2">5 days ago</p>
                </div>
                <div className="mt-4">
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    Very impressed by the quality and speed. It’s rare to see
                    this level of dedication these days. I’ll definitely be
                    coming back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className={`${showReting? "block" : "hidden"} border border-gray-200 p-10`}>
        <h3 className="font-semibold text-lg">Reviews</h3>
        <p className="text-gray-500 mt-2">There are no reviews yet.</p>

        {/* Review Form */}
        <div className="border border-green-500 mt-6 p-6 rounded-md">
          <h4 className="font-semibold text-green-600 mb-4">
            Women Embroidered A-line Kurta
          </h4>

          {/* Rating */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Your rating *</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div className="mb-4">
            <label className="text-sm font-medium">Your review *</label>
            <textarea
              rows="4"
              className="w-full border-gray-200 mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <input
                type="text"
                className="w-full border-gray-200 mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                className="w-full border-gray-200 mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 mb-4">
            <input type="checkbox" className="mt-1" />
            <p className="text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>

          {/* Submit */}
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
