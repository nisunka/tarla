import { ReactComponent as Croissant } from '../../assets/img/works/croissant.svg';
import { ReactComponent as Bell } from '../../assets/img/works/bell.svg';
import { ReactComponent as Stove } from '../../assets/img/works/stove.svg';
import { ReactComponent as Friendship } from '../../assets/img/works/friendship.svg';
import style from './Works.module.css';

const list = [
  {
    titleTask: 'Choose your fave',
    descr: `This sounds easier than it's going to be. We've got all the classics on here, so now it's over to you.`,
    photo: <Croissant />,
  },
  {
    titleTask: `Ding
    dong`,
    descr: `Next you'll get a beautiful little package delivered to your door, on a day and time slot that you choose.`,
    photo: <Bell />,
  },
  {
    titleTask: `Get 
    baked`,
    descr: `Take your fresh pastry sheet and fillings, learn our pro techniques then never buy a stale pastry ever again.`,
    photo: <Stove />,
  },
  {
    titleTask: 'Take the credit',
    descr: `It was all you, nudge-nudge wink-wink. We're just happy to be your loyal side-kick.`,
    photo: <Friendship />,
  },
];

const Works = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>How it works</h2>
      <div className={style.worksList}>
        {list.map((item, index) => (
          <div className={style.item} key={index}>
            {item.photo}
            <span className={style.itemTitle}>{item.titleTask}</span>
            <span className={style.itemDescr}>{item.descr}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
