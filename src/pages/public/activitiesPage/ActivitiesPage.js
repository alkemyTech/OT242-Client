import { React, useEffect } from 'react';
import ActivityDetails from '../../../components/activityDetails/ActivityDetails';
import AnimatedPage from '../../../components/AnimatedPage';
import { loadActivities } from "../../../app/slices/activities";
import { useSelector, useDispatch } from "react-redux";
import Slider from '../../../components/carousel/Slider';



export const sliderData = [{
    imageUrl: 1,
    title: "Misión",
    description: "Trabajar articuladamente con los distintos aspectos de la vida de las familias."
  },
  {
    imageUrl: 3,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  },
  {
    imageUrl: 4,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  },
  {
    imageUrl: 5,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  },
  {
    imageUrl: 6,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  },
  {
    imageUrl: 7,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  },
  {
    imageUrl: 10,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  },
  {
    imageUrl: 11,
    title: "Nosotros",
    description: "Desde 1997 vecinos del barrio La Cava."
  }
];


const ActivitiesPage = (props) => {

    const dispatch = useDispatch();

      const { activityList } = useSelector(state => state.activity)

      useEffect(() => {
        dispatch(loadActivities());
        
      
      }, [dispatch]);

    return (
    <AnimatedPage>
        <div className='slider_container'>
       
            <Slider slidesData={sliderData}/>
           
        </div>
        <div>
            {activityList.map(item => {
                return (
                    <div key={item.id}>
                    <ActivityDetails id={item.id} name={item.name} content={item.content} image={"https://s3.sa-east-1.amazonaws.com/ot242-server/"+ item.image}/>
                    </div>
                )
            })}
            
        </div>
    </AnimatedPage>
    )
}

export default ActivitiesPage;