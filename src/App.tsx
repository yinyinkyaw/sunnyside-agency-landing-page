import DownArrow from '@components/Icons/DownArrow'
import './App.css'
import Navigation from '@components/Navigation'
import eggImg from '@images/desktop/image-transform.jpg'
import cupImg from '@images/desktop/image-stand-out.jpg'
import graphicImg from '@images/desktop/image-graphic-design.jpg'
import photographyImg from '@images/desktop/image-photography.jpg'
import milkBottlesImg from '@images/desktop/image-gallery-milkbottles.jpg'
import orangeImg from '@images/desktop/image-gallery-orange.jpg'
import coneImg from '@images/desktop/image-gallery-cone.jpg'
import sugarCubImg from '@images/desktop/image-gallery-sugarcubes.jpg'
import emilyProfile from '@images/image-emily.jpg'
import jennieProfile from '@images/image-jennie.jpg'
import thomasProfile from '@images/image-thomas.jpg'
import FacebookIcon from '@components/Icons/FacebookIcon'
import InstagramIcon from '@components/Icons/InstagramIcon'
import TwitterIcon from '@components/Icons/TwitterIcon'
import PinterestIcon from '@components/Icons/PinterestIcon'

function App() {

  return (
    <main>
      <section className='banner_image'>
        <Navigation />
        <h1 className='h1 uppercase heading_title'>We are creatives</h1>
        <DownArrow />
      </section>
      <section className='two_grid_section'>
        <div className='grid_content_container'>
          <h2 className='h2'>
            Transform your brand
          </h2>
          <p>We are full-service creative agency specilizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <div>
            <a className='learn_more transform_text'>Learn More</a>
          </div>
        </div>
        <div>
          <picture>
            <img src={eggImg}  />
          </picture>
          
        </div>
      </section>
      <section className='two_grid_section'>
        <div>
          <img src={cupImg} />
        </div>
        <div className='grid_content_container'>
          <h2 className='h2'>
            Stand out to the right audience
          </h2>
          <p>Using the collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
          <div>
            <a className='learn_more stand_out'>Learn more</a>
          </div>
        </div>
      </section>
      <section className='two_grid_section'>
        <div className='relative'>
          <img src={graphicImg} />
          <div className='text_over_image'>
            <h3 className='h3 graphic_design'>Graphic Design</h3>
            <p className='graphic_design'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
          </div>
          
        </div>
        <div className='relative'>
          <img src={photographyImg} />
          <div className='text_over_image'>
            <h3 className='h3 photography_text'>Photography</h3>
            <p className='photography_text'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </section>
      <section className='testimonial_section'>
        <h3 className='h3 testimonial_header'>Client Testimonials</h3>
        <div className='testimonial_content'>
          <div className='testimonial_card'>
            <img src={emilyProfile} />
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <div>
              <h4 className='h4'>Emily R.</h4>
              <span>Marketing Director</span>
            </div>
          </div>
          <div className='testimonial_card'>
            <img src={thomasProfile} />
            <p>Sunnysides's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
            <div>
              <h4 className='h4'>Thomas S.</h4>
              <span>Chief Operating Officer</span>
            </div>
          </div>
          <div className='testimonial_card'>
            <img src={jennieProfile} />
            <p>Incrediable end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div>
              <h4>Jennie F.</h4>
              <span>Business Owner</span>
            </div>
          </div>
        </div>
      </section>
      <section className='four_grid_section'>
        <img src={milkBottlesImg} />
        <img src={orangeImg} />
        <img src={coneImg} />
        <img src={sugarCubImg} />
      </section>
      <footer>
        <h2 className='h2'>sunnyside</h2>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className='footer_social'>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </footer>
    </main>
  )
}

export default App
