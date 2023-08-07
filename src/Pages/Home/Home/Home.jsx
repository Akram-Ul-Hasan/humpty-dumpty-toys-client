
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Newsletter from "../Newsletter/Newsletter";
import Playtime from "../Playtime/Playtime";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => (
    <div>
        <Header></Header>
        <Gallery></Gallery>
        <Category></Category>
        <Playtime></Playtime>
        <Testimonial></Testimonial>
        <Newsletter></Newsletter>
    </div>
);

export default Home;