import * as React from 'react';
import { Component as TurbulentFlow } from '@/components/ui/turbulent-flow';

const SignUp1 = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    alert('Sign up successful! (Demo)');
  };

  return (
    <TurbulentFlow>
      <div className='flex min-h-screen w-full items-center justify-center px-4 py-8'>
      <div className='relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl bg-gradient-to-r from-[#ffffff10] to-[#121212] p-8 shadow-2xl backdrop-blur-sm'>
        <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 shadow-lg'>
          <img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=64&q=80' alt='Muncho logo' className='h-8 w-8 rounded-full object-cover' />
        </div>

        <h2 className='mb-6 text-center text-2xl font-semibold text-white'>Create Muncho Account</h2>

        <div className='flex w-full flex-col gap-4'>
          <div className='flex w-full flex-col gap-3'>
            <input
              placeholder='Full name'
              type='text'
              value={name}
              className='w-full rounded-xl bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder='Email'
              type='email'
              value={email}
              className='w-full rounded-xl bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='Password'
              type='password'
              value={password}
              className='w-full rounded-xl bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder='Confirm password'
              type='password'
              value={confirmPassword}
              className='w-full rounded-xl bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <div className='text-left text-sm text-red-400'>{error}</div>}
          </div>

          <hr className='opacity-10' />

          <div>
            <button
              onClick={handleSignUp}
              className='mb-3 w-full rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-white/20'
            >
              Sign up
            </button>

            <button className='mb-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#232526] to-[#2d2e30] px-5 py-3 text-sm font-medium text-white shadow transition hover:brightness-110'>
              <img
                src='https://www.svgrepo.com/show/475656/google-color.svg'
                alt='Google'
                className='h-5 w-5'
              />
              Continue with Google
            </button>

            <div className='mt-2 w-full text-center'>
              <span className='text-xs text-gray-400'>
                Already have an account?{' '}
                <a href='/signin' className='text-white/80 underline hover:text-white'>
                  Sign in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </TurbulentFlow>
  );
};

export { SignUp1 };
