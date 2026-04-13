import { WelcomeScreen } from '@/components/ui/onboarding-welcome-screen';
import { Component } from '@/components/ui/lumina-interactive-list';
import { useNavigate } from 'react-router-dom';

const WelcomeScreenDemo = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin');
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <div className='absolute inset-0'>
        <Component />
      </div>

      <div className='relative z-20 mx-auto flex min-h-screen items-center justify-center px-4 py-8'>
        <div className='h-[812px] w-[975px] max-w-sm overflow-hidden rounded-3xl border border-white/30 bg-black/30 shadow-2xl backdrop-blur-sm'>
          <WelcomeScreen
            imageUrl='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1260&q=80'
            title={
              <>
                Welcome To <span className='text-primary'>Muncho</span>
              </>
            }
            description='Discover and order food effortlessly with Muncho, your personalized food delivery app.'
            buttonText="Let's get started"
            onButtonClick={handleGetStarted}
            secondaryActionText={
              <>
                Already have an account? <span className='font-semibold text-primary'>Login Now</span>
              </>
            }
            onSecondaryActionClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreenDemo;
