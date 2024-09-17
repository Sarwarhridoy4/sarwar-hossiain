import Image from "next/image";
import myself from "../../assets/sarwar-about.png";
import facebook from "../../assets/scocial/facebook.svg";
import insta from "../../assets/scocial/instagram.svg";
import linkedin from "../../assets/scocial/linkedin.svg";
import stack from "../../assets/scocial/stackoverflow.svg";
import GitHub from "../../assets/scocial/github.svg";
import Discord from "../../assets/scocial/discord.svg";
import SlideWrapper from "@/components/ui/SlideWraper/SlideWraper";
import TypingAnimation from "@/components/ui/TypeAnimation/TypeAnimation";

const About = () => {
  return (
    <div className='overflow-hidden'>
      <SlideWrapper direction='right'>
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-20'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
            Who I am
          </h2>
          <div className='w-40 h-40 flex items-center justify-center rounded-full relative'>
            <Image
              src={myself}
              alt='my-picture'
              className='w-60 absolute bottom-8'
            />
          </div>
          <div>
            <div
              id='typing-effect'
              className='mockup-code max-w-[90dvw] mx-auto'
            >
              <pre data-prefix='$'>
                <code>
                  <TypingAnimation
                    sequences={["I am Srawar Hossain"]}
                    speed={50}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={0}
                  />
                </code>
              </pre>
              <pre data-prefix='>' className='text-warning'>
                <code>
                  <TypingAnimation
                    sequences={[
                      "A Full Stack Developer",
                      1000,
                      "A MERN Stack Developer",
                      1000,
                      "A React Developer",
                      1000,
                      "A React Native Developer",
                      1000,
                      "A NodeJS Developer",
                      1000,
                    ]}
                    speed={10}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </SlideWrapper>

      <SlideWrapper direction='left'>
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
            Overview
          </h2>
          <div className='w-full my-9'>
            <div className='relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]'>
              <div className='rounded-xl overflow-x-hidden overflow-y-auto h-[140px] md:h-[300px] text-slate-100 dark:text-slate-50'>
                <TypingAnimation
                  sequences={[
                    `
                    I am Sarwar Hossain. I completed my Diploma in Engineering conducted by Bangladesh Technical Education Board from S M Tofazzol Hossain Polytechnic Institute in 2022. 
        As a MERN Stack Developer, I am passionate about creating high-quality, scalable, and user-friendly web applications. I have a strong foundation in JavaScript, React, Node.js, and MongoDB, and I am constantly expanding my skills and knowledge in this dynamic field.
        
        I have completed several projects demonstrating my ability to build responsive and dynamic web applications using the MERN stack. My experience includes creating RESTful APIs, integrating third-party APIs, and implementing user authentication and authorization. I am familiar with popular front-end frameworks such as React and Redux and back-end frameworks such as Express.js and Mongoose.
        
        I am a fast learner and a team player, and I am always eager to take on new challenges. I thrive in an environment that encourages collaboration and innovation, and I am committed to delivering high-quality work that meets both the business and user requirements.
        
        I am excited to work with a team of experienced developers, designers, and project managers to create cutting-edge web applications that will make a difference in people's lives. If you are looking for a passionate, driven, and skilled MERN Stack Developer, I would love to connect and discuss how I can contribute to your team.
                  `,
                  ]}
                  cursor={true}
                  repeat={0}
                  speed={99}
                  style={{
                    fontSize: "0.9em",
                    textAlign: "justify",
                    display: "inline-block",
                  }}
                />
              </div>
            </div>
            <div className='relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]'></div>
            <div className='relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]'></div>
          </div>
        </div>
      </SlideWrapper>

      <SlideWrapper direction='right'>
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
            Education
          </h2>
          <div className='max-w-[90dvw] mx-auto my-9'>
            <div className='mockup-code'>
              <pre data-prefix='$'>
                <code>
                  <TypingAnimation
                    sequences={["Diploma In Engineering (Computer)"]}
                    speed={50}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={0}
                  />
                </code>
              </pre>
              <pre data-prefix='>' className='text-warning'>
                <code>
                  <TypingAnimation
                    sequences={["S M Tofazzol Hossain Polytechnic Institute"]}
                    speed={50}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={0}
                  />
                </code>
              </pre>
              <pre data-prefix='>' className='text-success'>
                <code>
                  <TypingAnimation
                    sequences={["2017-2021"]}
                    speed={50}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={0}
                  />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </SlideWrapper>

      <SlideWrapper direction='left'>
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
          <h2 className='text-5xl font-semibold'>Connect With Me</h2>

          <div className='my-9'>
            <div className='relative mx-auto border-slate-950 dark:border-gray-100 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]'>
              <div className='h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg'></div>
              <div className='h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg'></div>
              <div className='h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg'></div>
              <div className='h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'></div>
              <div className='rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800'>
                <div className='w-full overflow-auto flex flex-col items-center justify-center gap-5 p-12'>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://www.facebook.com/sarwarhridoy4/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        viewBox='0 0 1024 1024'
                        className='icon'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#000000'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          <path
                            d='M715.637 960h171.897C920.348 960 960 932.759 960 898.909V125.091C960 91.243 920.348 64 887.534 64H113.716C77.004 64 64 96.892 64 125.091v773.818C64 927.109 77.004 960 113.716 960h439.012V634.182H410.181c-11.257 0-20.363-9.106-20.363-20.363V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.354 88.056-183.272 192.261-183.272h113.193c11.257 0 20.365 9.106 20.365 20.363V288c0 11.258-9.108 20.365-20.365 20.365h-72.465c-34.444 0-70.079 19.052-70.079 50.908v112h131.17a20.27 20.27 0 0 1 16.507 8.472c3.856 5.291 4.891 12.133 2.823 18.337l-40.728 122.181a20.403 20.403 0 0 1-19.33 13.919h-90.442V960z'
                            fill='#2577FF'
                          ></path>
                          <path
                            d='M807.708 451.723h-92.071v19.549h112.288c-0.161-3.938-1.326-7.809-3.711-11.078a20.263 20.263 0 0 0-16.506-8.471zM513.629 940.451H75.445C83.3 951.952 95.599 960 113.716 960h439.012V634.183H513.63v306.268zM839.283 145.456c-0.451-10.855-9.231-19.549-20.198-19.549H705.89c-104.205 0-192.261 83.919-192.261 183.272v142.544H371.083c-11.257 0-20.363 9.108-20.363 20.365v122.181c0 11.258 9.107 20.364 20.363 20.364h18.899c-0.012-0.286-0.164-0.527-0.164-0.815V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.353 88.056-183.272 192.261-183.272h94.295z'
                            fill=''
                          ></path>
                          <path
                            d='M900.123 65.251c12.221 10.76 20.778 24.748 20.778 40.29V879.36c0 33.85-39.651 61.091-72.467 61.091H715.637V960h171.896C920.348 960 960 932.759 960 898.909V125.091c0-29.6-30.322-54.141-59.877-59.84z'
                            fill=''
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://www.instagram.com/sarwarhridoy04/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          {" "}
                          <rect
                            x='2'
                            y='2'
                            width='28'
                            height='28'
                            rx='6'
                            fill='url(#paint0_radial_87_7153)'
                          ></rect>{" "}
                          <rect
                            x='2'
                            y='2'
                            width='28'
                            height='28'
                            rx='6'
                            fill='url(#paint1_radial_87_7153)'
                          ></rect>{" "}
                          <rect
                            x='2'
                            y='2'
                            width='28'
                            height='28'
                            rx='6'
                            fill='url(#paint2_radial_87_7153)'
                          ></rect>{" "}
                          <path
                            d='M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z'
                            fill='white'
                          ></path>{" "}
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z'
                            fill='white'
                          ></path>{" "}
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z'
                            fill='white'
                          ></path>{" "}
                          <defs>
                            {" "}
                            <radialGradient
                              id='paint0_radial_87_7153'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(12 23) rotate(-55.3758) scale(25.5196)'
                            >
                              {" "}
                              <stop stop-color='#B13589'></stop>{" "}
                              <stop
                                offset='0.79309'
                                stop-color='#C62F94'
                              ></stop>{" "}
                              <stop offset='1' stop-color='#8A3AC8'></stop>{" "}
                            </radialGradient>{" "}
                            <radialGradient
                              id='paint1_radial_87_7153'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(11 31) rotate(-65.1363) scale(22.5942)'
                            >
                              {" "}
                              <stop stop-color='#E0E8B7'></stop>{" "}
                              <stop
                                offset='0.444662'
                                stop-color='#FB8A2E'
                              ></stop>{" "}
                              <stop
                                offset='0.71474'
                                stop-color='#E2425C'
                              ></stop>{" "}
                              <stop
                                offset='1'
                                stop-color='#E2425C'
                                stop-opacity='0'
                              ></stop>{" "}
                            </radialGradient>{" "}
                            <radialGradient
                              id='paint2_radial_87_7153'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)'
                            >
                              {" "}
                              <stop
                                offset='0.156701'
                                stop-color='#406ADC'
                              ></stop>{" "}
                              <stop
                                offset='0.467799'
                                stop-color='#6A45BE'
                              ></stop>{" "}
                              <stop
                                offset='1'
                                stop-color='#6A45BE'
                                stop-opacity='0'
                              ></stop>{" "}
                            </radialGradient>{" "}
                          </defs>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://www.linkedin.com/in/sarwar-hridoy4/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          {" "}
                          <rect
                            x='2'
                            y='2'
                            width='28'
                            height='28'
                            rx='14'
                            fill='#1275B1'
                          ></rect>{" "}
                          <path
                            d='M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z'
                            fill='white'
                          ></path>{" "}
                          <path
                            d='M9.24742 12.6281H12.3402V22H9.24742V12.6281Z'
                            fill='white'
                          ></path>{" "}
                          <path
                            d='M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z'
                            fill='white'
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://stackoverflow.com/users/19937858/sarwar-hossain'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        aria-label='Stack Overflow'
                        role='img'
                        viewBox='0 0 512 512'
                        fill='#000000'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          <rect
                            width='512'
                            height='512'
                            rx='15%'
                            fill='#f58025'
                          ></rect>
                          <path
                            stroke='#ffffff'
                            stroke-width='30'
                            fill='none'
                            d='M293 89l90 120zm-53 50l115 97zm-41 65l136 64zm-23 69l148 31zm-6 68h150zm-45-44v105h241V297'
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://github.com/Sarwarhridoy4'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        fill='#000000'
                        viewBox='0 0 32 32'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          {" "}
                          <title>github</title>{" "}
                          <path d='M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z'></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://discord.com/users/981127290484314122'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          {" "}
                          <path
                            d='M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z'
                            fill='white'
                          ></path>{" "}
                          <path
                            d='M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z'
                            fill='#5865F2'
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>
    </div>
  );
};

export default About;
