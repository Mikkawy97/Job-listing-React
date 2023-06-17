
import './Home.css';
import Card from './Card';
import PhotoImg from './assets/photosnap.svg';
import ManageImg from './assets/manage.svg';
import AccountImg from './assets/account.svg';
import MyhomeImg from './assets/myhome.svg';
import LoopImg from './assets/loop-studios.svg';
import FaceImg from './assets/faceit.svg';
import ShortlyImg from './assets/shortly.svg';
import InsureImg from './assets/insure.svg';
import EyeImg from './assets/eyecam-co.svg';
import AirImg from './assets/the-air-filter-company.svg';
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";




function Home() {
    const [filters, setFilters] = useState([]);
    const jobs = [
        {
          id: 1,
          Img: PhotoImg,
          company: 'Photosnap',
          post: 'NEW!',
          featured: 'FEATURED',
          jobtitle: 'Senior Frontend Developer',
          time: '1d ago',
          contract: 'Full Time',
          location: 'USA only',
          skill: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
        },
        {
          id: 2,
          Img: ManageImg,
          company: 'Manage',
          post: 'NEW!',
          featured: 'FEATURED',
          jobtitle: 'Fullstack Developer',
          time: '1d ago',
          contract: 'Part Time',
          location: 'Remote',
          skill: ['Fullstack', 'Midweight', 'Python', 'React'],
        },
        {
          id: 3,
          Img: AccountImg,
          company: 'Account',
          post: 'NEW!',
          jobtitle: 'Junior Frontend Developer',
          time: '2d ago',
          contract: 'Part Time',
          location: 'USA only',
          skill: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
        },
        {
          id: 4,
          Img: MyhomeImg,
          company: 'MyHome',
          jobtitle: 'Junior Frontend Developer',
          time: '5d ago',
          contract: 'Contract',
          location: 'USA only',
          skill: ['Frontend', 'Junior', 'CSS', 'Javascript'],
        },
        {
          id: 5,
          Img: LoopImg,
          company: 'Loop Studios',
          jobtitle: 'Software Engineer',
          time: '1w ago',
          contract: 'Full Time',
          location: 'Worldwide',
          skill: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
        },
        {
          id: 6,
          Img: FaceImg,
          company: 'FaceIt',
          jobtitle: 'Junior Backend Developer',
          time: '2w ago',
          contract: 'Full Time',
          location: 'UK only',
          skill: ['Backend', 'Junior', 'Ruby', 'RoR'],
        },
        {
          id: 7,
          Img: ShortlyImg,
          company: 'Shortly',
          jobtitle: 'Junior Developer',
          time: '2w ago',
          contract: 'Full Time',
          location: 'Worldwide',
          skill: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
        },
        {
          id: 8,
          Img: InsureImg,
          company: 'Insure',
          jobtitle: 'Junior Frontend Developer',
          time: '2w ago',
          contract: 'Full Time',
          location: 'USA only',
          skill: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
        },
        {
          id: 9,
          Img: EyeImg,
          company: 'Eyecam Co.',
          jobtitle: 'Full Stack Engineer',
          time: '3w ago',
          contract: 'Full Time',
          location: 'Worldwide',
          skill: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
        },
        {
          id: 10,
          Img: AirImg,
          company: 'The Air Filter Company',
          jobtitle: 'Front-end Dev',
          time: '1mo ago',
          contract: 'Part Time',
          location: 'Worldwide',
          skill: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
        },
      ];

      function filterHandler (filter) {
            var temp=[...filters];
            if(!temp.includes(filter)){
                temp.push(filter);
            }
         
            setFilters(temp);
          
      };
      function removeFilter (filter){
       var temp=[...filters];
       temp.splice(temp.indexOf(filter), 1);
       setFilters(temp);
      }
      function removeAllFilters (filter){
        var temp=[...filters];
        temp=[];
        setFilters(temp);
       }

    return (
        <>
      <div className="row mt-5">
        <div className="col-12">
          {filters.length?   
          <div className="filter-tags-c">
            <ul id="filter-tags-list">
            {filters.map((item,index)=>{
                return (
                    <li className='tag-filter'><p>{item}</p><FaTimes onClick={()=>removeFilter(item)} color='black' /></li>
                );
            })}

            </ul>
            <p onClick={removeAllFilters} className="clear-tags" id="js-clear-tags"> Clear</p>
          </div>:null}
        </div>
      </div>
      <div class="row">
        <ul class="col-12" id="job-list">
            {jobs.filter(function(item){ 
                     if(filters.length!==0){
                            let matching=0;
                            for (let index = 0; index < filters.length; index++) {
                                
                                for (let i = 0; i< item.skill.length;i++) {
                                 
                                    if(filters[index]===item.skill[i]){
                                            matching++;
                                    }
                                }
                            }
                            if(matching===filters.length){
                                return true;
                            }
                            else{
                                matching=0;
                                return false;
                            }
                       
                    }
                    else{
                        return true;
                    }
          
        }).map((item,index)=>{
                return (
                    <Card filterHandler={filterHandler} item={item} />
                );
            })}
        

         </ul> 


        </div>
      </>
    );
  }
  
  export default Home;