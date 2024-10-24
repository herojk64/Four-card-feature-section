import './App.scss'
import { Card } from './components/Card'
import CalculatorIcon from './assets/icon-calculator.svg'
import KarmaIcon from './assets/icon-karma.svg'
import SupervisorIcon from './assets/icon-supervisor.svg'
import TeamBulder from './assets/icon-team-builder.svg'

function App() {
  return (
    <div className='App'>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>

      <p className='main__slogan'>Our Artificial Intelligence powered tools use millions of project data<br /> points
        to ensure that your project is successful</p>

      <main className='flex flex-col lg:grid md:grid-cols-[1fr,auto,1fr] lg:grid-rows-2 gap-4'>
        <section className='md:row-span-2 lg:flex lg:items-center lg:ms-auto'>
          <Card icon={SupervisorIcon} >
          <div className='absolute top-0 left-0 h-1 w-full bg-primary-cyan'></div>
            <header>Supervisor</header>
            <p>Monitors activity to identify project roadblocks</p>
          </Card>
        </section>

        <section>
          <Card icon={TeamBulder}>
          <div className='absolute top-0 left-0 h-1 w-full bg-primary-red'></div>
            <header>Team Builder</header>
            <p>Scans our talent network to create the optimal team for your project</p>
          </Card>
        </section>
        
        <section>
          <Card icon={KarmaIcon}>
          <div className='absolute top-0 left-0 h-1 w-full bg-primary-orange'></div>
          <header>Karma</header>
            <p>Regularly evaluates our talent to ensure quality</p>
          </Card>
        </section>
        
        <section className=' lg:row-span-2 lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:flex lg:items-center lg:me-auto'>
          <Card icon={CalculatorIcon}>
          <div className='absolute top-0 left-0 h-1 w-full bg-primary-blue'></div>
          <header>Calculator</header>
            <p>Uses data from past projects to provide better delivery estimates</p>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
