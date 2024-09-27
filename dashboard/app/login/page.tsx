import Link from "next/link";
import ECommerce from "@/app/Dashboard/ecommerce";
export default function LoginForm() {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-indigo-100 dark:bg-opacity-40 text-gray "
        style={{
          backgroundImage: 'url("images/bg1.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-wrap flex-row">
          <span
            className="fixed bg-gray-100 dark-bg-opacity-40 w-full h-full inset-x-0 top-0"
            style={{
              backgroundImage: 'url("/bg1.jpg")', // Replace with your image path or URL
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="flex-shrink max-w-full w-full min-h-screen sm:w-2/3 lg:w-1/2 xl:w-1/3 z-30">
            {/* login form */}
            <div className="max-w-full w-full h-full px-6 sm:px-12 bg-white dark:bg-white shadow-lg z-40">
              <div className="relative">
                <div className="p-6 sm:p-8">
                  <form id="login-form">
                    <div className="text-center">
                      <a className="py-2 text-2xl" href="#">
                        <h2 className="text-2xl font-semibold text-gray px-4 w-full h-full overflow-hidden">
                          {/* <img class="inline-block w-8 h-auto ltr:mr-2 rtl:ml-2 -mt-1" src="../src/img/logo.png"> */}
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
                          <span className="text-black dark:text-gray">
                            Taildash
                          </span>
                        </h2>
                      </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className="block w-12 height:2px mx-auto my-5 bg-gray-700 border-gray-700" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="inputemail" className="inline-block mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        id="inputemail"
                        className="w-full leading-5 relative py-2 px-4 rounded text-grey-950 bg-white border border-indigo overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray dark:bg-white dark:border-indigo-200 dark:focus:border-gray-600"
                        defaultValue=""
                        aria-label="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <div className="flex flex-wrap flex-row">
                        <div className="flex-shrink-0 w-full md:w-1/2">
                          <label htmlFor="inputpass" className="block mb-2">
                            Password
                          </label>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-1/2 text-right text-indigo-500 hover:text-indigo-700">
                          <Link href="/forget">Forgot password?</Link>
                        </div>
                      </div>
                      <input
                        name="password" // Set the name to "password"
                        id="inputpass"
                        className="w-full px-4 py-2 rounded bg-white border border-indigo focus:outline-none focus:border-indigo focus:ring-0 text-gray dark:text-gray dark:bg-white dark:border-indigo-200 dark:focus:border-gray-600"
                        aria-label="password"
                        type="password"
                        defaultValue=""
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        className="form-checkbox h-5 w-5  text-white bg-white border border-indigo  rounded focus:outline-none"
                        type="checkbox"
                        defaultValue=""
                        id="remember"
                        required
                      />
                      <label
                        className="ltr:ml-2 rtl:mr-2"
                        htmlFor="remember"
                        style={{ marginLeft: "10px" }}
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="grid">
                      <button
                        
                        type="submit"
                        className="py-2 px-4 inline-block text-center rounded leading-5 text-white bg-primary border border-indigo-500 hover:bg-blue hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                      >
                        {/* <i class="fas fa-sign-up ltr:mr-2 rtl:ml-2"></i> */}
                        <svg
                          xmlns=""
                          fill="currentColor"
                          className="inline-block w-4 h-4 mx-3 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>
                        <a
                          href="/chart"
                        >
                          Login
                        </a>
                      </button>
                    </div>
                  </form>
                  <div className="mt-4">
                    <p className="text-center mb-3">
                      <span>Or</span>
                    </p>
                    <div className="text-center mb-6 sm:space-x-4">
                      <a
                        className="p-2 block sm:inline-block rounded lg:rounded-full leading-5 text-gray bg-bluefb text-white border border-indigo-900  hover:opacity-90 hover:ring-0 hover:border-indigo-900 focus:bg-indigo-900 focus:border-indigo-800 focus:outline-none focus:ring-0 mb-3"
                        href="#"
                      >
                        {/* <i class="fab fa-facebook"></i> */}
                        <svg
                          xmlns=""
                          className="inline-block w-4 h-4 mx-1"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                        </svg>
                        <span className="inline-block lg:hidden">
                        Login with FB
                        </span>
                      </a>
                      <a
                        className="p-2 block sm:inline-block  rounded lg:rounded-full leading-5 text-gray bg-indigo border-none border-indigo-400 hover:opacity-90 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0 mb-3"
                        href="#"
                        
                      >
                        
                        {/* <i class="fab fa-twitter"></i> */}
                        <svg
                          xmlns=""
                          className="inline-block w-4 h-4 mx-1"
                          fill="white"
                          viewBox="0 0 512 512"
                        >
                          <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                        </svg>
                        <span className="inline-block lg:hidden text-white">
                        Login with Twitter
                        </span>
                      </a>
                    </div>
                    <p className="text-center mb-0">
                      Don't have an account?{" "}
                      <a className="hover:text-indigo-500" href="/register">
                        Register
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}