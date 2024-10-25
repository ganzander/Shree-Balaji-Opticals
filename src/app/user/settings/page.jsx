"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function Page() {
  const router = useRouter();
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAuthToken = localStorage.getItem("AuthToken");
      if (storedAuthToken) {
        const token = JSON.parse(storedAuthToken);
        const decoded = jwt.decode(token);
        if (decoded) {
          setDecodedToken(decoded);
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
    }
  }, [router]);

  const [registerCred, setRegisterCred] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
  });

  function handleChange(event) {
    setRegisterCred({
      ...registerCred,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email } = decodedToken;
    console.log(email);
    axios.post("/api/send-change-details", { email }).then((result) => {
      if (result.data.Success === true) {
        toast.success(result.data.msg, { duration: 5000 });
      } else {
        toast.error(result.data.msg);
      }
    });
  }

  return (
    <div className="min-h-screen pt-24 w-full flex items-center justify-center bg-[#F6F5F2] dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {decodedToken ? (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-2xl bg-white dark:bg-black">
          <h2 className="uppercase font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
            Details
          </h2>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  disabled
                  id="firstname"
                  name="fname"
                  value={registerCred.fname}
                  placeholder={decodedToken.fname}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  disabled
                  id="lastname"
                  name="lname"
                  placeholder={decodedToken.lname}
                  autoComplete="off"
                  required
                  value={registerCred.lname}
                  onChange={handleChange}
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                disabled
                id="email"
                name="email"
                autoComplete="off"
                placeholder={decodedToken.email}
                required
                value={registerCred.email}
                onChange={handleChange}
                type="email"
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                disabled
                name="mobile"
                autoComplete="off"
                required
                value={registerCred.phone}
                onChange={handleChange}
                id="mobile"
                type="tel"
                placeholder={decodedToken.phone}
              />
            </LabelInputContainer>

            <div className="w-full flex justify-center items-center">
              <button
                className="bg-black text-white items-center w-[35%] relative group/btn dark:from-zinc-900 dark:to-zinc-900 dark:bg-zinc-800 dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                To Change &rarr;
                <BottomGradient />
              </button>
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      ) : decodedToken === null ? (
        <div className="flex flex-col items-center">
          <h2 className="w-full text-center pb-5 text-lg sm:text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Loading ...
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="capitalize w-full text-center pb-5 text-lg sm:text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Please Log In
          </h2>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
