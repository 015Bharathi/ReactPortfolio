import AboutImg from '../assets/about.png';


export default function About() {
    const config = {
        line1 : 'Hi, My name Bharathi kumar. Im a Full stack web developer. I built beautiful websites with React.js and Tailwind CSS',
        line2 : 'I am proficient in frontend skills like React.js,Tailwind CSS, CSS3 and many more.',
        line3 : 'In backend I know Django,MySql'
    }
    
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 px-5 py-5'>
            <img src={AboutImg} />
        </div>
        <div className='m:w-1/2 flex justify-center px-5'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}