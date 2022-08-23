import { React, useEffect } from 'react';
import ActivityDetails from '../../../components/activityDetails/ActivityDetails';
import AnimatedPage from '../../../components/AnimatedPage';
import { loadActivities } from "../../../app/slices/activities";
import { useSelector, useDispatch } from "react-redux";
import Slider from '../../../components/carousel/Slider';
import './ActivitiesPage.css'



export const sliderData = [
  {
    imageUrl: 4,
    title: "Programa de Voluntarios 2022"
  },
  {
    imageUrl: 5,
    title: "Talleres de Artes Plásticas"
  },
  {
    imageUrl: 7,
    title: "Clases de Apoyo para Primaria y Secundaria",
  },
  {
    imageUrl: 11,
    title: "El deporte como Salud Individual y Social",
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
        <div className='preview_container'>
            {activityList.map(item => {
                return (
                    <div key={item.id}>
                    <ActivityDetails id={item.id} name={item.name} content={item.content} image={item.image} url={`/activities/${item.id}`}/>
                    </div>
                )
            })}
            
        </div>
    </AnimatedPage>
    )
}

export default ActivitiesPage;