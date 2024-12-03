import React, { useEffect, useRef, useState } from "react";
import bgimage1 from "/public/images/bgimage1.png";
import bgimage2 from "/public/images/bgimage2.png";
import google from "/public/images/google.png";
import facebook from "/public/images/facebook.png";
import openEye from "/public/images/openEye.png";
import closeEye from "/public/images/closeEye.png";
import lock from "/public/images/lock.png";

const Hero = () => {
  const [page, setPage] = useState("signIn");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('')
  const [remember, setRemember] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [passwordScore, setPasswordScore] = useState(0);
  const intersectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          console.log("visible");
        }
      },
      {
        rootMargin: "0px",
        threshold: "0.5",
      }
    );

    observer.observe(intersectionRef.current);

    return () => {
    };
  }, []);

  useEffect(() => {
    const resetValue = ()=>{
      setPasswordStrength(null)
      setPasswordScore(0)
      setEmail('')
      setPassword('')
    }
  resetValue()

  }, [page])
  

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);

    let score = 0;

    if (value.length >= 12) {
      score += 4;
    } else if (value.length >= 8) {
      score += 3;
    }

    if (/[a-z]/.test(value)) {
      //lowercase alphabets
      score += 1;
    }

    if (/[A-Z]/.test(value)) {
      //uppercase alphabets
      score += 1;
    }

    if (/\d/.test(value)) {
      // digits
      score += 1;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
      //special character
      score += 1;
    }

    setPasswordScore(score);

    if (score < 6) {
      setPasswordStrength("bg-red-500");
    } else if (score < 8) {
      setPasswordStrength("bg-yellow-500");
    } else {
      setPasswordStrength("bg-green-500");
    }
  };

  const handleSignIn = (e)=>{
    e.preventDefault();
    if (!email || !password) {
      console.log("Fill all the fields.")
    }
    try {
      const data = {
        email,
        password
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleJoinIn = (e)=>{
    e.preventDefault();
    if (!email || !password) {
      console.log("Fill all the fields.")
      return;
    }
    if (passwordScore<7) {
      console.log("Please use a stronger password")
      return;
    }
    try {
      const data = {
        email,
        password
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative w-full md:min-h-[87vh] md:h-max min-h-screen h-max flex py-36 justify-center bg-[#F7F5F9]">
      <div
        ref={intersectionRef}
        className={`md:w-[45%] w-full md:h-max h-[20vh] absolute bottom-0 transition-all ease-linear duration-700 ${
          visible
            ? "opacity-100 blur-none left-0 md:left-20"
            : "opacity-0 blur-lg md:left-[-5%] left-[-20%]"
        } flex flex-row items-end z-0`}
      >
        {/* <div className="w-1/2 md:min-w-[250px] h-full"> */}
        <img
          src={bgimage1}
          alt="hero image"
          className="w-1/2 md:min-w-[250px] h-full object-contain object-bottom"
        />
        {/* </div> */}
        {/* <div className="w-1/2 md:min-w-[250px] h-full "> */}
        <img
          src={bgimage2}
          alt="hero image"
          className="w-1/2 md:min-w-[250px] h-full object-contain object-bottom"
        />
        {/* </div> */}
      </div>
      <div className="relative z-10 w-[90%] md:h-[75%] h-full md:gap-0 gap-8 flex md:flex-row flex-col items-start justify-around">
        <div className="md:w-1/2 w-full h-max flex flex-col  md:gap-8 gap-4">
          <h1 className="font-poppins italic font-semibold md:text-4xl sm:text-2xl text-lg text-black">
            Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
            <span className="text-[#8064A2]">passion</span>{" "}
          </h1>
          <p className="md:hidden block font-poppins font-light text-black text-xs text-justify">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
          </p>
          <p className="md:block hidden font-poppins font-light text-black text-sm">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="md:block hidden font-poppins font-light text-black text-sm">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>

        <div className="md:w-[42%] w-full h-full flex justify-center">
          <div className="w-[68%] min-w-[300px] h-max">
            <div className="w-full flex flex-row gap-4">
              <h3
                onClick={() => setPage("signIn")}
                className={`cursor-pointer select-none font-poppins font-bold md:text-xl text-md transition-all ease-linear duration-150 ${
                  page === "signIn"
                    ? "text-[#8064A2] border-b-2 border-b-[#8064A2]"
                    : "text-[#939CA3]"
                }  py-2 `}
              >
                Sign In
              </h3>
              <h3
                onClick={() => setPage("joinIn")}
                className={`cursor-pointer font-poppins select-none font-bold md:text-xl text-md transition-all ease-linear duration-150 ${
                  page === "joinIn"
                    ? "text-[#8064A2] border-b-2 border-b-[#8064A2]"
                    : "text-[#939CA3]"
                } py-2`}
              >
                Join In
              </h3>
            </div>
            {/* sign in */}
            {page === "signIn" && (
              <div className="transition-all ease-linear duration-200 w-full h-max flex md:flex-col flex-col-reverse mt-4 gap-6">
                <div className="w-full h-max flex flex-col gap-3 ">
                  <div className="w-full h-10 rounded-lg border border-[#8064A2] flex flex-row justify-around items-center pr-24">
                    <img src={google} alt="google" className="h-4 w-4" />
                    <p className="font-poppins font-semibold text-[#08090A] md:text-sm text-xs">
                      Continue with Google
                    </p>
                  </div>
                  <div className="w-full h-10 rounded-lg border border-[#8064A2] flex flex-row justify-around items-center pr-24">
                    <img src={facebook} alt="google" className="h-4 w-4" />
                    <p className="font-poppins font-semibold text-[#08090A] md:text-sm text-xs">
                      Continue with Facebook
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2">
                  <hr className="flex-grow border-t-2 border-[#CED4DA]" />
                  <span className=" text-black text-xs font-semibold">
                    Or Connect With
                  </span>
                  <hr className="flex-grow border-t-2 border-[#CED4DA]" />
                </div>

                <form onSubmit={handleSignIn} className="w-full h-max flex flex-col gap-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-10 border text-xs shadow-sm shadow-slate-100 border-[#EBEDF0] rounded-lg p-3 outline-none"
                  />
                  <div className="w-full flex flex-row shadow-sm shadow-slate-100 items-center bg-white border border-[#EBEDF0] rounded-lg overflow-hidden pr-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={e=>setEmail(e.target.value)}
                      required
                      className="w-full text-xs h-10 p-3 outline-none"
                    />
                    <img
                      src={showPassword ? openEye : closeEye}
                      onClick={() => setShowPassword(!showPassword)}
                      alt=""
                      className="w-4 h-4 cursor-pointer object-contain"
                    />
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={()=>setRemember(!remember)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <p className="font-poppins font-normal md:text-sm text-xs text-black">
                        Remember Me
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <img src={lock} alt="" />
                      <p className="cursor-pointer font-poppins font-normal md:text-sm text-xs text-black">
                        Forgot Password?
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-max">
                    <button type="submit" className="w-full h-10 border border-black hover:bg-black hover:text-white transition-all duration-300 ease-linear rounded-lg font-poppins font-semibold md:text-sm text-xs text-black">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* join in */}
            {page === "joinIn" && (
              <div className="transition-all ease-linear duration-200 w-full h-max flex md:flex-col flex-col-reverse mt-4 gap-6">
                <div className="w-full h-max flex flex-col gap-3 ">
                  <div className="w-full h-10 rounded-lg border border-[#8064A2] flex flex-row justify-around items-center pr-24">
                    <img src={google} alt="google" className="h-4 w-4" />
                    <p className="font-poppins font-semibold text-[#08090A] md:text-sm text-xs">
                      Continue with Google
                    </p>
                  </div>
                  <div className="w-full h-10 rounded-lg border border-[#8064A2] flex flex-row justify-around items-center pr-24">
                    <img src={facebook} alt="google" className="h-4 w-4" />
                    <p className="font-poppins font-semibold text-[#08090A] md:text-sm text-xs">
                      Continue with Facebook
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2">
                  <hr className="flex-grow border-t-2 border-[#CED4DA]" />
                  <span className=" text-black text-xs font-semibold">
                    Or Connect With
                  </span>
                  <hr className="flex-grow border-t-2 border-[#CED4DA]" />
                </div>

                <form onSubmit={handleJoinIn} className="w-full h-max flex flex-col gap-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-10 border md:text-sm text-xs shadow-sm shadow-slate-100 border-[#EBEDF0] rounded-lg p-3 outline-none"
                  />
                  <div className="w-full flex flex-row items-center shadow-sm shadow-slate-100 bg-white border border-[#EBEDF0] rounded-lg overflow-hidden pr-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full h-10 md:text-sm text-xs p-3 outline-none"
                      value={password}
                      required
                      onChange={handlePassword}
                    />
                    <img
                      src={showPassword ? openEye : closeEye}
                      onClick={() => setShowPassword(!showPassword)}
                      alt=""
                      className="w-4 h-4 cursor-pointer object-contain"
                    />
                  </div>

                  <div className="w-full h-max flex flex-row justify-between items-center">
                    <div className="w-[50%] flex flex-row  gap-[0.125rem]">
                      <div
                        className={`w-[3.75rem] h-1 rounded-sm ${
                          password.length > 0 ? passwordStrength : "bg-white"
                        }`}
                      ></div>

                      <div
                        className={`w-[3.75rem] h-1 rounded-sm ${
                          passwordStrength
                            ? passwordScore >= 7
                              ? passwordStrength
                              : "bg-white"
                            : "bg-white"
                        }`}
                      ></div>

                      <div
                        className={`w-[3.75rem] h-1 rounded-sm ${
                          passwordStrength
                            ? passwordScore >= 8
                              ? passwordStrength
                              : "bg-white"
                            : "bg-white"
                        }`}
                      ></div>
                    </div>
                    <p className="font-poppins font-semibold md:text-xs text-[0.675rem] text-[#939CA3]">
                      {password.length > 0
                        ? passwordScore >= 7
                          ? passwordScore >= 8
                            ? "Strong"
                            : "Medium"
                          : "Weak"
                        : ""}
                    </p>
                    <p className="font-poppins font-semibold text-[0.625rem] text-[#939CA3]">
                      Password Strength
                    </p>
                  </div>

                  <div className="w-full h-max flex flex-col gap-2">
                    <p className="font-poppins font-normal text-black md:text-xs text-[0.563rem]">
                      By continuing, you agree to our{" "}
                      <span className="text-[#08090A]">Terms of Service</span>{" "}
                      and <span className="text-[#08090A]">Privacy Policy</span>{" "}
                      .
                    </p>
                    <button type="submit" className="w-full h-10 bg-[#8064A2] hover:bg-white hover:text-[#8064A2] hover:border hover:border-[#8064A2] transition-all ease-linear duration-300 rounded-lg font-poppins font-semibold text-sm text-white">
                      Agree and Continue
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
