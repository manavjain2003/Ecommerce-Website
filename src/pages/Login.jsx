import { Link } from "react-router-dom";

function Login() {
	return (
	  <div className="flex items-center justify-center min-h-screen bg-gray-900">
		<div className="p-6 rounded-md sm:p-10 bg-gray-900 text-black max-w-full w-full sm:max-w-md">
		  <div className="mb-8 text-center">
			<h1 className="my-3 text-4xl font-bold text-yellow-400">Log in</h1>
			<p className="text-sm text-white">Log in to access your account</p>
		  </div>
		  <form noValidate="" action="" className="space-y-12">
			<div className="space-y-4">
			  <div>
				<label htmlFor="email" className="block mb-2 text-sm text-white">Email address</label>
				<input
				  type="email"
				  name="email"
				  id="email"
				  placeholder="leroy@jenkins.com"
				  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
				/>
			  </div>
			  <div>
				<div className="flex justify-between mb-2">
				  <label htmlFor="password" className="text-sm text-white">Password</label>
				  <a
					rel="noopener noreferrer"
					href="#"
					className="text-xs hover:underline dark:text-gray-600 text-white"
				  >
					Forgot password?
				  </a>
				</div>
				<input
				  type="password"
				  name="password"
				  id="password"
				  placeholder="*****"
				  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
				/>
			  </div>
			</div>
			<div className="space-y-2">
			  <div>
				<button
				  type="button"
				  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white"
				>
				  Sign in
				</button>
			  </div>
			  <p className="px-6 text-sm text-center dark:text-gray-600 text-white">
				Don't have an account yet?{" "}
				<Link to="/register" className="hover:underline text-violet-600">
				  Sign up
				</Link>
				.
			  </p>
			</div>
		  </form>
		</div>
	  </div>
	);
  }
  
export default Login;
  