import "./Header.scss";
import { Modal } from 'antd';
import { useState } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { HeartOutlined} from "@ant-design/icons"

const Header = ({value, setValue, corzina, delCorzina, faivouriteMass, delFaivourite}) => {
  const [open, setOpen] = useState(false);
  const [openFaivourite, setOpenFaivourite] = useState(false);

  const onChangeInput = (e) => {
    setValue(e.target.value)
  } 
  let summ = 0;
  const summCoast = () => {
    corzina.map(item => summ = summ + item.coast)
  }
  summCoast();

  return (
    <header>
      <div className="header__wrapper">
        <input
          value={value}
          onChange={onChangeInput}
          placeholder="Введите название фильма"
        />
        <button onClick={() => setOpenFaivourite(true)}>
          <HeartOutlined />
        </button>
        <Modal
          title="Корзина"
          centered
          open={openFaivourite}
          onOk={() => setOpenFaivourite(false)}
          onCancel={() => setOpenFaivourite(false)}
          width={1000}
          okText='К фильмам'
          cancelText="Назад"
        >
         <p>Вы пока ещё не добавили фильмы в избранное</p>
         {faivouriteMass.map(item => {
          return (
          <div 
            className="corzina-card" 
            key={item.id}>
              <div className="corzina-card__info">
                <div className="corzina-card__image"> 
                  <img src={item.image} alt="img" />
                </div>
                  {item.title}
              </div>
              <p>{item.coast + ' ₽'}</p>   
             <button onClick={() => delFaivourite(item.id)}>
              <DeleteOutlined />
             </button>
          </div>
          )})}
        </Modal>
        <button onClick={() => setOpen(true)}>Корзина</button>
        <Modal
          title="Корзина"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          okText={summ ?'Оплатить ' + summ + ' ₽': 'К фильмам'}
          cancelText="Назад"
        >
         {!summ ?<p>В корзине пусто:(</p>:corzina.map(item => {
          return (
          <div 
            className="corzina-card" 
            key={item.id}>
              <div className="corzina-card__info">
                <div className="corzina-card__image"> 
                  <img src={item.image} alt="img" />
                </div>
                  {item.title}
              </div>
              <p>{item.coast + ' ₽'}</p>   
             <button onClick={() => delCorzina(item.id)}>
              <DeleteOutlined />
             </button>
          </div>
          )})}
        </Modal>
      </div>  
    </header>
  )
}
export { Header }