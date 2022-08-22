import { Link } from 'react-router-dom';
import image1 from '../../assets/img/hero-slider/img-1.jpg';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <h1 className={style.title}>Fresh pastry&nbsp;kits</h1>
        <p className={style.description}>
          Bringing the smells and tastes of your favourite patisserie to your home. Our kits have
          everything you need to easily make killer pastries every time. We’ve done the tricky bits
          so all you need to do is roll, proof and bake!
        </p>
        <Link to="/shop" className={style.btn}>
          Shop pastry kits
        </Link>
      </div>
      <div className={style.rightSide}>
        {/* slider */}
        <img src={image1} alt="" className={style.img} />
      </div>
    </div>
  );
};

export default Hero;
