
import './Home.css'

function Card(props) {

    const { item , filterHandler} = props;
  
    return (
        <li className="job-card new featured d-flex">
        <div className="job-card__info">
          <div className="d-md-flex align-items-center">
            <div className="img-c"><img className ="" alt='jobimage' src={item.Img}/></div>
            <div>
              <div className="d-flex align-items-center">
                <p>{item.company}</p>
               {item.post? <p className="tag-new">New!</p>:null}
               {item.featured? <p className="tag-featured">Featured</p>:null}
              </div>
                <h6>{item.jobtitle}</h6>
                <p style={{color:'#939c9b',fontSize:'12px',fontWeight:'normal'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem animi dicta cumque optio earum temporibus. Voluptate, nobis! Quas asperiores consectetur provident qui necessitatibus hic repellat nisi dignissimos dicta odit, ratione ullam expedita culpa quo vitae fugit cumque excepturi beatae?</p>

              <ul>
                <li>{item.time}</li>
                <li>{item.contract}</li>
                <li>{item.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="job-card__tags d-flex">

        {item.skill?.map((item,index)=>{
                return (
                    <li onClick={()=>filterHandler(item)}>{item}</li>
                );
            })}            
     
        </ul>
      </li>
    );
  }
  
  export default Card;