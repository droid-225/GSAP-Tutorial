import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';

import Navbar from './components/Navbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText); // makes these available globally in project

const App = () => {
    return (
        <main>
            <Navbar/>
        </main>
    )
}
export default App
