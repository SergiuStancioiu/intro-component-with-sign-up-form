import { useForm } from 'react-hook-form';
import errorIcon from '../src/assets/icon-error.svg';
import { ToastContainer, toast } from 'react-toastify';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (_data) => {
    toast.success('Form submited succesfuly!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    reset();
  };

  return (
    <>
      <ToastContainer />
      <div className='px-7 max-w-[460px] md:max-w-[1110px] mx-auto md:grid md:grid-cols-2 md:gap-20 pt-[119px]'>
        {/* Title And Description Wrapper*/}
        <div>
          <h1 className='font-bold text-center text-white md:mt-[140px] lg:mt-[120px] text-3xl mb-7 md:text-4xl md:text-start lg:text-5xl lg:text-start'>
            Learn to code by watching others
          </h1>
          <p className='font-poppins text-center text-white mb-[70px] text-lg md:text-start md:text-xs lg:text-start lg:text-[15px]'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        {/* Trial Card And Form Wrapper */}
        <div>
          {/* Trial Card Wrapper*/}
          <div className='mb-6'>
            <div className='p-5 bg-custom-purple rounded-lg relative z-20'>
              <p className='px-6 text-white text-center '>
                Try it free 7 days
                <span className='font-light text-gray-300 pl-1'>
                  then $20/mo. thereafter
                </span>
              </p>
            </div>
            <div className='w-full h-3  bg-custom-orange relative z-10 top-[-5px] rounded-b-[8px]'></div>
          </div>
          {/* Form Wrapper */}
          <div className=' mb-10 '>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='p-6 bg-white rounded-lg flex flex-col gap-5 relative z-20'
            >
              {/* First Name */}
              <div className='relative'>
                <input
                  {...register('firstName', {
                    required: 'First Name cannot be empty',
                    minLength: {
                      value: 4,
                      message: 'Min length is 4',
                    },
                  })}
                  type='text'
                  placeholder={
                    errors.lastName ? 'Please enter First Name' : 'First Name'
                  }
                  id='first-name'
                  className={`py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer ${
                    errors.firstName
                      ? 'border-[2px] border-red-400 focus:border-red-400 hover:border-red-400'
                      : ''
                  }`}
                />
                {/* Error Message Wrapper*/}
                {errors.firstName && (
                  <div className='pt-1'>
                    {/* Error Icon */}
                    <img
                      className='absolute top-3 right-2.5'
                      src={errorIcon}
                      alt='Error Icon'
                    />
                    {/* Error Message */}
                    <p className='text-right italic text-xs text-red-400 absolute right-0'>
                      {errors.firstName.message}
                    </p>
                  </div>
                )}
              </div>
              {/* Last Name */}
              <div className='relative'>
                <input
                  {...register('lastName', {
                    required: 'Last Name cannot be empty',
                    minLength: {
                      value: 4,
                      message: 'Min length is 4',
                    },
                  })}
                  type='text'
                  placeholder={
                    errors.lastName ? 'Please enter Last Name' : 'Last Name'
                  }
                  id='last-name'
                  className={`py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer ${
                    errors.lastName
                      ? 'border-[2px] border-red-400 focus:border-red-400 hover:border-red-400'
                      : ''
                  }`}
                />
                {/* Error Message Wrapper*/}
                {errors.lastName && (
                  <div className='pt-1'>
                    {/* Error Icon */}
                    <img
                      className='absolute top-3 right-2.5'
                      src={errorIcon}
                      alt='Error Icon'
                    />
                    {/* Error Message */}
                    <p className='text-right italic text-xs text-red-400 absolute right-0'>
                      {errors.lastName.message}
                    </p>
                  </div>
                )}
              </div>
              {/* Email */}
              <div className='relative'>
                <input
                  {...register('email', {
                    required: 'Email cannot be empty',
                    pattern: {
                      value: emailRegex,
                      message: 'Looks like this is not an email',
                    },
                  })}
                  type='email'
                  placeholder={
                    errors.lastName ? 'Please enter an Email' : 'Email'
                  }
                  id='email'
                  className={`py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer ${
                    errors.email
                      ? 'border-[2px] border-red-400 focus:border-red-400 hover:border-red-400'
                      : ''
                  }`}
                />
                {/* Error Message Wrapper*/}
                {errors.email && (
                  <div className='pt-1'>
                    {/* Error Icon */}
                    <img
                      className='absolute top-3 right-2.5'
                      src={errorIcon}
                      alt='Error Icon'
                    />
                    {/* Error Message */}
                    <p className='text-right italic text-xs text-red-400 absolute right-0'>
                      {errors.email.message}
                    </p>
                  </div>
                )}
              </div>
              {/* Password */}
              <div className='relative'>
                <input
                  {...register('password', {
                    required: 'Password cannot be empty',
                    minLength: {
                      value: 8,
                      message: 'Min length is 8',
                    },
                  })}
                  type='password'
                  placeholder={
                    errors.password ? 'Please enter Password' : 'Password'
                  }
                  id='Password'
                  className={`py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer ${
                    errors.password
                      ? 'border-[2px] border-red-400 focus:border-red-400 hover:border-red-400'
                      : ''
                  }`}
                />
                {/* Error Message Wrapper*/}
                {errors.password && (
                  <div className='pt-1'>
                    {/* Error Icon */}
                    <img
                      className='absolute top-3 right-2.5'
                      src={errorIcon}
                      alt='Error Icon'
                    />
                    {/* Error Message */}
                    <p className='text-right italic text-xs text-red-400 absolute right-0'>
                      {errors.password.message}
                    </p>
                  </div>
                )}
              </div>
              <input
                value='Claim your free trial'
                className='bg-green-500 py-4 rounded-md font-medium text-white uppercase transform duration-300 hover:bg-green-600 cursor-pointer'
                type='submit'
              />
              <p className='text-center text-xs text-gray-400 '>
                By clicking the button, you are agreeing to our
                <a className='pl-1 text-custom-red font-bold' href='#'>
                  Terms and Services
                </a>
              </p>
            </form>
            <div className='w-full h-3  bg-custom-orange relative z-10 top-[-5px] rounded-b-[8px]'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
