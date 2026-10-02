"use client"

export function Signin(){
    function handler(){
        console.log("welcomee")
    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-gray-300 p-8 shadow-sm">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Sign in
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your credentials to access your account 
          </p>
        </div>

        {/* Form */}
        <form>
          <LabelledInput
            label="Email"
            placeholder="you@example.com"
            type="email"
          />

          <LabelledInput
            label="Password"
            placeholder="••••••••"
            type="password"
          />

          {/* Forgot password */}
          <div className="mt-2 flex justify-end">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign in */}
          <button
            onClick={handler}
            type="submit"
            className="mt-6 w-full rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer"
          >
            Sign in 
          </button>
        </form>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-gray-900 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  type = "text",
}: LabelledInputType) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-gray-900">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required
        className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
      />
    </div>
  );
}