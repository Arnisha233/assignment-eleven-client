import React, { useContext } from "react";
import Container from "../../components/Shared/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthContext";
import { imageUpload, saveOrUpdateUser } from "../../utils";
import { Link, useLocation, useNavigate } from "react-router";

const SignUp = () => {
  const {
    createUserWithEmailAndPasswordFun,
    signInWithPopupFun,
    updateUserProfile,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const { name, image, email, password } = data;

    const imageFile = image && image[0];
    if (!imageFile) {
      return toast.error("Please upload a profile image");
    }

    try {
      setLoading(true);

      const imageURL = await imageUpload(imageFile);

      const result = await createUserWithEmailAndPasswordFun(email, password);

      await updateUserProfile(name, imageURL);

      await saveOrUpdateUser({ name, email, image: imageURL });

      toast.success("Signup Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);

      const errorMsg = err.response?.data?.message || err.message;
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopupFun();

      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      });

      toast.success("Signup Successful with Google");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="min-h-[96vh] flex items-center justify-center bg-[#000] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold">Create Your Account</h1>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

            <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm">Email address</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-lime-50 file:text-lime-700 bg-gray-100 rounded-md"
                  {...register("image", { required: "Image is required" })}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input
                  type="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "At least 6 characters" },
                  })}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full rounded-md py-3 text-white font-bold transition"
              >
                SIGN UP
              </button>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px bg-white/20"></div>
              <p className="px-3 text-sm">Or signup with</p>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex justify-center items-center space-x-2 border mt-4 p-2 rounded-md hover:bg-white/10 transition"
            >
              <span>Continue with Google</span>
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
