import Cards from '../components/Cards';
import cardData from '../data/HomeCard';

const Home = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {cardData.map((data, index) => (
                <Cards key={index}
                    image={data.image}
                    buttonText={data.buttonText}
                    buttonLink={data.buttonLink}
                />
            ))}
        </div>
    );
}

export default Home;
