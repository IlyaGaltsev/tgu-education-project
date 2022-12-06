import "./AppCard.scss";
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import { message } from "antd";
import {HeartFilled, HeartOutlined} from "@ant-design/icons"

const AppCard = ({id, title, description, faivourite, corzina, coast, image, addCorzina, onFavouriteFilm}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: `Фильм ${title} добавлен в козрину!`,
    });
  }
  const onHandleClickCorzina = () => {
    addCorzina(id);
    success();
  }
  return(
    
    <Card
      hoverable
      className="card__wrapper"
      cover={<img alt="example" src={image} />}>
      <div className="card__top">
        <Meta title={title} description={description} />
        {coast + ' ₽'}
      </div>
      <div className="card__tools">
        <button disabled={corzina} onClick={onHandleClickCorzina}>
          В корзину
        </button>
        <button onClick={() => onFavouriteFilm(id)}>
          {faivourite
            ?<HeartFilled />
            :<HeartOutlined />
          }
        </button> 
        {contextHolder}
      </div>
    </Card>
  )
}
export { AppCard };