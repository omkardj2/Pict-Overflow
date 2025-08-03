import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [btnLoading, setBtnLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setBtnLoading(false);
      console.log("Signup attempted with:", user);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Signup Card */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 backdrop-blur-sm bg-opacity-95 transition-all duration-300 hover:shadow-3xl hover:scale-105">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ 
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            PICTconnect.
          </h1>
          <p className="text-gray-600 text-sm">Join your campus community</p>
        </div>

        {/* Signup Form */}
        <div className="space-y-6">
          {/* Username Input */}
          <div>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 hover:shadow-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email here."
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 hover:shadow-lg"
              required
            />
          </div>

          {/* Mobile Input */}
          <div>
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
              placeholder="Mobile number"
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 hover:shadow-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 pr-12 hover:shadow-lg"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {isPasswordVisible ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={btnLoading}
            onClick={handleSubmit}
            className="w-full py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            style={{
              background: btnLoading 
                ? 'linear-gradient(45deg, #9ca3af, #9ca3af)' 
                : 'linear-gradient(45deg, #667eea, #764ba2)',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}
          >
            {btnLoading ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                <span>Signing up...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-6 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button 
              type="button"
              className="font-semibold hover:underline transition-colors"
              style={{ color: '#667eea' }}
            >
              Login
            </button>
          </p>
        </div>
      </div>

      {/* Responsive Animated Background - Same as Login */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs with Different Sizes and Speeds */}
        <div className="absolute w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white bg-opacity-10 animate-float-slow" 
             style={{
               top: '10%',
               left: '5%',
               animationDelay: '0s',
               filter: 'blur(1px)'
             }}>
        </div>
        
        <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white bg-opacity-15 animate-float-medium" 
             style={{
               top: '20%',
               right: '8%',
               animationDelay: '2s',
               filter: 'blur(2px)'
             }}>
        </div>
        
        <div className="absolute w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white bg-opacity-8 animate-float-fast" 
             style={{
               bottom: '15%',
               left: '8%',
               animationDelay: '4s',
               filter: 'blur(1.5px)'
             }}>
        </div>
        
        <div className="absolute w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white bg-opacity-12 animate-float-slow" 
             style={{
               bottom: '25%',
               right: '12%',
               animationDelay: '6s',
               filter: 'blur(2px)'
             }}>
        </div>
        
        <div className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white bg-opacity-20 animate-float-medium" 
             style={{
               top: '60%',
               left: '15%',
               animationDelay: '1s',
               filter: 'blur(1px)'
             }}>
        </div>
        
        <div className="absolute w-10 h-10 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full bg-white bg-opacity-18 animate-float-fast" 
             style={{
               top: '45%',
               right: '20%',
               animationDelay: '3s',
               filter: 'blur(1.5px)'
             }}>
        </div>

        {/* Gradient Waves Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-wave-1" 
               style={{
                 transform: 'rotate(-15deg) translateX(-100%)',
                 width: '200%',
                 height: '200%'
               }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-wave-2" 
               style={{
                 transform: 'rotate(15deg) translateX(-100%)',
                 width: '200%',
                 height: '200%',
                 animationDelay: '4s'
               }}>
          </div>
        </div>

        {/* Particle System */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white bg-opacity-30 rounded-full animate-particle-1"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white bg-opacity-25 rounded-full animate-particle-2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-white bg-opacity-40 rounded-full animate-particle-3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white bg-opacity-20 rounded-full animate-particle-1" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-white bg-opacity-35 rounded-full animate-particle-2" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 right-1/5 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white bg-opacity-30 rounded-full animate-particle-3" style={{animationDelay: '1s'}}></div>

        {/* Morphing Shapes */}
        <div className="absolute top-1/6 right-1/6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-8 animate-morph-1 rounded-full"></div>
        <div className="absolute bottom-1/6 left-1/6 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white bg-opacity-12 animate-morph-2 rounded-full"></div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-10px) translateX(-5px) rotate(180deg); 
            opacity: 0.08;
          }
          75% { 
            transform: translateY(-30px) translateX(15px) rotate(270deg); 
            opacity: 0.12;
          }
        }
        
        @keyframes float-medium {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.15;
          }
          33% { 
            transform: translateY(-15px) translateX(-10px) scale(1.1); 
            opacity: 0.2;
          }
          66% { 
            transform: translateY(-25px) translateX(8px) scale(0.9); 
            opacity: 0.1;
          }
        }
        
        @keyframes float-fast {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-40px) translateX(20px) rotate(180deg) scale(1.2); 
            opacity: 0.05;
          }
        }
        
        @keyframes wave-1 {
          0% { transform: rotate(-15deg) translateX(-100%); }
          100% { transform: rotate(-15deg) translateX(100%); }
        }
        
        @keyframes wave-2 {
          0% { transform: rotate(15deg) translateX(-100%); }
          100% { transform: rotate(15deg) translateX(100%); }
        }
        
        @keyframes particle-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-50px) translateX(30px); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-20px) translateX(-20px); 
            opacity: 0.1;
          }
          75% { 
            transform: translateY(-80px) translateX(10px); 
            opacity: 0.6;
          }
        }
        
        @keyframes particle-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.25;
          }
          50% { 
            transform: translateY(-60px) translateX(-30px) scale(1.5); 
            opacity: 0.7;
          }
        }
        
        @keyframes particle-3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-30px) translateX(40px) rotate(120deg); 
            opacity: 0.1;
          }
          66% { 
            transform: translateY(-70px) translateX(-15px) rotate(240deg); 
            opacity: 0.8;
          }
        }
        
        @keyframes morph-1 {
          0%, 100% { 
            border-radius: 50%; 
            transform: rotate(0deg) scale(1);
          }
          25% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
            transform: rotate(90deg) scale(1.2);
          }
          50% { 
            border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%; 
            transform: rotate(180deg) scale(0.8);
          }
          75% { 
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%; 
            transform: rotate(270deg) scale(1.1);
          }
        }
        
        @keyframes morph-2 {
          0%, 100% { 
            border-radius: 50%; 
            transform: rotate(0deg);
          }
          50% { 
            border-radius: 10% 90% 10% 90% / 90% 10% 90% 10%; 
            transform: rotate(180deg);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
        
        .animate-wave-1 {
          animation: wave-1 25s linear infinite;
        }
        
        .animate-wave-2 {
          animation: wave-2 30s linear infinite;
        }
        
        .animate-particle-1 {
          animation: particle-1 18s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle-2 22s ease-in-out infinite;
        }
        
        .animate-particle-3 {
          animation: particle-3 16s ease-in-out infinite;
        }
        
        .animate-morph-1 {
          animation: morph-1 25s ease-in-out infinite;
        }
        
        .animate-morph-2 {
          animation: morph-2 20s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .animate-float-slow {
            animation-duration: 25s;
          }
          .animate-float-medium {
            animation-duration: 20s;
          }
          .animate-float-fast {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;