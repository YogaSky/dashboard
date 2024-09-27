import Script from "next/script";
export default function ForgetForm() {
  return (
    <>
      <header>
        {/* Navbar */}
        <nav
          className="flex  text-gray-950 flex-row flex-nowrap items-center justify-between mt-0 py-4 px-6 border-b border-gray-200 bg-white dark:bg-white dark:border-white"
          id="desktop-menu"
        >
          {/* logo */}
          <a
            className="flex items-center py-2 mr-4 text-xl"
            href="../index.html"
          >
            <h2 className="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-7 h-7 ltr:mr-2 rtl:ml-2 -mt-1"
                viewBox="0 0 300.000000 300.000000"
              >
                <g
                  transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    className="text-pink"
                    d="M1225 2825 c-546 -115 -959 -534 -1065 -1080 -28 -147 -28 -373 0
        -520 81 -419 350 -774 728 -964 115 -58 120 -58 65 3 -27 29 -65 84 -85 122
        -68 131 -90 236 -89 428 0 229 44 470 167 923 41 149 74 275 74 278 0 4 -102
        5 -227 3 -198 -4 -236 -7 -290 -25 -35 -12 -63 -18 -63 -14 0 4 22 43 49 87
        58 93 123 157 177 175 22 6 124 14 234 16 l195 5 33 112 c91 305 200 431 405
        465 43 7 31 9 -73 9 -94 1 -152 -5 -235 -23z"
                  />
                  <path
                    className="text-primary"
                    d="M1695 2763 c-48 -77 -122 -231 -179 -375 -25 -65 -46 -120 -46 -123
        0 -7 995 -6 1069 1 34 4 61 12 61 18 0 6 -30 46 -65 88 -170 201 -426 361
        -687 428 -110 29 -111 28 -153 -37z"
                  />
                  <path
                    className="text-primary"
                    d="M2660 2104 c-33 -36 -54 -47 -120 -67 -21 -6 -256 -12 -595 -16
        l-560 -6 -51 -180 c-62 -215 -116 -445 -144 -608 -74 -435 -37 -655 124 -740
        62 -32 189 -30 274 5 174 72 337 212 410 353 l20 40 24 -50 c32 -70 32 -162
        -1 -229 -48 -97 -216 -250 -383 -347 -86 -51 -170 -85 -261 -109 l-69 -17 94
        -6 c469 -33 947 205 1214 605 229 342 291 790 163 1173 -24 70 -76 192 -94
        217 -10 16 -14 14 -45 -18z"
                  />
                </g>
              </svg>
              <span className="text-gray-950 dark:text-gray-950">Taildash</span>
            </h2>
          </a>
          {/* menu */}
          <ul className="flex ltr:ml-auto rtl:mr-auto mt-2">
            <li className="relative">
              <a
                href="/login"
                className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
              >
                <div className="relative inline-block">Login</div>
              </a>
            </li>
            <li className="relative">
              <a
                href="/register"
                className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
              >
                <div className="relative inline-block">Register</div>
              </a>
            </li>
          </ul>
        </nav>
        {/* End Navbar */}
      </header>

      <div id="login-area" className="relative py-12   ">
        <div className="container xl:max-w-6xl my-auto mx-auto px-4 ">
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            {/* login form */}
            <div className="max-w-full w-full md:w-2/3 lg:w-1/2 px-6 sm:px-12">
              <div className="relative">
                <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white dark:bg-white shadow-xl">
                  <form id="login-form">
                    <h1 className="text-2xl leading-normal mb-6 font-bold text-gray-800  dark:text-gray-950 text-center">
                      Reset Password
                    </h1>
                    <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
                    <p className="text-gray-950 mb-6">
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </p>
                    <div className="mb-6">
                      <input
                        name="email"
                        className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300  dark:border-indigo-100 dark:focus:border-gray-600"
                        placeholder="Email address"
                        defaultValue=""
                        aria-label="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500  hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="inline-block w-4 h-4 mx-3 ltr:mr-2 rtl:ml-2 bi bi-key"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                          <path d="M4 8a1 1 0 1 1-2 0" />
                        </svg>
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-gray-800 p-6 shadow-sm">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row -mx-4">
            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right">
              {/* footer menu */}
              <ul className="ltr:pl-0 rtl:pr-0">
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Support
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Help Center
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Privacy
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left">
              {/* copyright text */}
              <p className="mb-0 mt-3 md:mt-0">
                <a href="index.html" className="hover:text-indigo-500">
                  Tailnet
                </a>
                | All right reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Script src="vendors/alpinejs/dist/cdn.min.js"></Script>
      <Script src="vendors/flatpickr/dist/flatpickr.min.js"></Script>
      <Script src="vendors/flatpickr/dist/plugins/rangePlugin.js"></Script>
      <Script src="vendors/@yaireo/tagify/dist/tagify.min.js"></Script>
      <Script src="vendors/pristinejs/dist/pristine.min.js"></Script>
      <Script src="vendors/simple-datatables/dist/umd/simple-datatables.js"></Script>
      <Script src="dist/js/scripts.js"></Script>
      <Script src="src/js/demo.js"></Script>
      <Script src="vendors/chart.js/dist/chart.min.js"></Script>
      <Script src="src/js/chart/cms.js"></Script>
      <Script src="vendors/jsvectormap/dist/js/jsvectormap.min.js"></Script>
      <Script src="vendors/jsvectormap/dist/maps/world.js"></Script>
      <Script src="src/js/vendor.js"></Script>
      <Script src="src/js/customizer.js"></Script>
    </>
  );
}
