import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText); // makes these available globally in project

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
        </main>
    )
}
export default App
