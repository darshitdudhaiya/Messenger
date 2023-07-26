"use client";
import { useEffect, useState } from "react";
import Link from "next/link"
import { signIn , useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignupPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const Credentials = async () => {
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  if (session) {
    const router = useRouter();
    router.push('/components/chat/');
  }
  else{
    return (
      <>
        <div className="max-w-screen-xl py-20 sm:mx-28 sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-5 shadow-lg">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-[#F53855]">
                Sign in
              </h1>
              <div className="w-full flex-1 mt-5">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 text-center items-center">
                  <button onClick={() => signIn('github')} type="button" className="py-2 px-1 md:py-2.5 md:px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-50 hover:text-blue-700 text-center items-center inline-flex">
                    <svg className="h-6 mx-2" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                    Sign in with Github
                  </button>
                  <button onClick={() => signIn('google')} type="button" className="py-2 px-1 md:py-2.5 md:px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-50 hover:text-blue-700 text-center items-center inline-flex">
                    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 mx-2'>
                      <path d="M27.9851 14.2618C27.9851 13.1146 27.8899 12.2775 27.6837 11.4094H14.2788V16.5871H22.1472C21.9886 17.8738 21.132 19.8116 19.2283 21.1137L19.2016 21.287L23.44 24.4956L23.7336 24.5242C26.4304 22.0904 27.9851 18.5093 27.9851 14.2618Z" fill="#4285F4" />
                      <path d="M14.279 27.904C18.1338 27.904 21.37 26.6637 23.7338 24.5245L19.2285 21.114C18.0228 21.9356 16.4047 22.5092 14.279 22.5092C10.5034 22.5092 7.29894 20.0754 6.15663 16.7114L5.9892 16.7253L1.58205 20.0583L1.52441 20.2149C3.87224 24.7725 8.69486 27.904 14.279 27.904Z" fill="#34A853" />
                      <path d="M6.15656 16.7113C5.85516 15.8432 5.68072 14.913 5.68072 13.9519C5.68072 12.9907 5.85516 12.0606 6.14071 11.1925L6.13272 11.0076L1.67035 7.62109L1.52435 7.68896C0.556704 9.58024 0.00146484 11.7041 0.00146484 13.9519C0.00146484 16.1997 0.556704 18.3234 1.52435 20.2147L6.15656 16.7113Z" fill="#FBBC05" />
                      <path d="M14.279 5.3947C16.9599 5.3947 18.7683 6.52635 19.7995 7.47204L23.8289 3.6275C21.3542 1.37969 18.1338 0 14.279 0C8.69485 0 3.87223 3.1314 1.52441 7.68899L6.14077 11.1925C7.29893 7.82856 10.5034 5.3947 14.279 5.3947Z" fill="#EB4335" />
                    </svg>
                    Sign in with Google
                  </button>
                </div>
  
                <div className="my-2 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign in with e-mail
                  </div>
                </div>
  
                <div className="mx-auto max-w-xs my-5">
                  <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 focus:outline-none border border-gray-300 placeholder-gray-500 text-sm mt-3"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                  <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 focus:outline-none border border-gray-300 placeholder-gray-500 text-sm mt-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                  />
                  <button onClick={() => Credentials()} className="mt-5 tracking-wide font-semibold bg-white border border-gray-400 w-full py-4 rounded-lg hover:bg-[#F53855] hover:border-[#F53855] hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <Link href='/components/Signup'>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4 cursor-pointer">
                      I don't have an account? <a className="font-medium text-[#F53855] hover:underline">Signup here</a>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SignupPage
