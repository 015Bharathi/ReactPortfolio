import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg'

export default function Projects() {
    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Portfolio Website. Built With React.js',
                link: 'https://github.com/015Bharathi/ReactPortfolio'
            },
            {
                image: websiteImg2,
                description: 'A CRUD operation, Build with Django',
                link: 'https://github.com/015Bharathi/Django'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website. Build with React.js',
                link: 'https://github.com/015Bharathi/Django'
            }
        ]
    } 
    return <section className="flex flex-col px-5 py-20 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl font-bold border-b-4  w-[140px] border-secondary mb-5">Projects</h1>
                <p>These are some of my best Projects. I have built these with React,MERN and Vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project)=>(
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                            <div  className='project-desc'>
                                 <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}