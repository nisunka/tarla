import { Link } from 'react-router-dom';
import AddInfoImg from '../../assets/img/addInfo.jpg';
import style from './AddInfo.module.css';

const AddInfo = () => {
  return (
    <div className={style.container}>
      <img src={AddInfoImg} alt="" className={style.img} />
      <div className={style.rightSide}>
        <p className={style.descr}>
          Freshly baked means fresh bakery smells filling your home, warm oozey pastries
          on&nbsp;your plates, and never needing to&nbsp;get out of&nbsp;your PJs.
        </p>
        <Link to="/shop" className="btnPrimary">
          Shop pastry kits
        </Link>
      </div>
    </div>
  );
};

export default AddInfo;
