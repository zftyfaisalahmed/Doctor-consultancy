import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import tick from '../images/tick.png'

const url = "http://localhost:5000"

const Message = () => {
    const params = useParams()
    const [userData, setUserData] = useState(null);

    const readFile = useCallback(() => {
        const readData = async () => {
          try {
            const response = await axios.get(`${url}/api/user/single/${params.id}`);
            setUserData(response.data);
            console.log(response.data);
          } catch (err) {
            toast.error(err.response.data.msg);
          }
        }
        readData()
    },[params.id])
  
    useEffect(() => {
      readFile()
    },[readFile])
  
  return (
    <div className='bg'>
      <div className='container'>
        <div className='img'>
          <div>
            {
              userData && (
                <div className='text-center div'>
                  <img src={tick} alt="" />
                  <h1>Appointment Booked <span className='text-danger'>{userData.data.name}</span></h1>
                  <h3>Created Time : {userData.data.createdAt}</h3>
                  <h3>Token gen: {userData.data._id}</h3>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message